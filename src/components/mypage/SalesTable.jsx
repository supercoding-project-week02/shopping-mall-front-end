import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteProduct, getSalesHistory } from '@/apis/index.js';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import { QUERY_KEYS } from '@/queries/queryKeys.js';
import { theme } from '@/styles/theme.js';
import * as S from './Mypage.styles.jsx';
import Button from '../common/Button/Button.jsx';

const SalesTable = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isError } = useQuery(['sales'], getSalesHistory);
  const { mutate: deleteProductMutate } = useMutation((productId) => deleteProduct(productId));

  if (!data) return null;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const handleEditButton = (id) => {
    navigate(`/write/${id}`);
  };

  const handleDeleteProduct = (event, productId) => {
    event.stopPropagation();
    alert(`삭제 product: ${productId}`);
    // GYU-TODO: 삭제 부분 잘 동작하지 않음, 싱크 맞출때 다시 작업하기
    // deleteProductMutate(productId, {
    //   onSuccess: async () => {
    //     await queryClient.invalidateQueries([QUERY_KEYS.profile]);
    //   },
    // });
  };

  const history = data.data?.map((product, index) => ({
    key: index,
    id: product.product.id,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.product.mainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.product.title}</div>
          <span>{product.soldPrice?.toLocaleString('ko-KR')}원</span>
        </div>
      </S.ProductInfoWrapper>
    ),

    판매수: (
      // <S.InputText //
      //   inputType="number"
      //   name="number"
      //   value={product.soldQuantity}
      //   editable
      //   onSubmit={() => {}}
      // />
      <span>{product.soldQuantity}</span>
    ),
    판매마감날짜: product.soldAt.split('T')[0],
    수정하기: (
      <Button
        bgColor={theme.color.black}
        fontColor="white"
        text="수정"
        borderRadius="10px"
        width="80%"
        height="25px"
        onClick={() => {
          handleEditButton(product.product.id);
        }}
      />
    ),
    삭제: (
      <Icon
        name="IconX"
        size={10}
        onClick={(event) => handleDeleteProduct(event, product.product.id)}
      />
    ),
  }));

  return (
    <S.Table //
      columns={salesColumns}
      dataSource={history}
      pagination={true}
      onRow={(record) => {
        return {
          onClick: () => navigate(`/product/${record.id}`),
        };
      }}
    />
  );
};

const salesColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '상품정보',
    dataIndex: '상품정보',
    key: '상품정보',
  },
  {
    title: '판매수',
    dataIndex: '판매수',
    key: '판매수',
  },
  {
    title: '판매 마감 날짜',
    dataIndex: '판매마감날짜',
    key: '판매마감날짜',
  },
  {
    title: '수정하기',
    dataIndex: '수정하기',
    key: '수정하기',
  },
  {
    title: '',
    dataIndex: '삭제',
    key: '삭제',
  },
];

export default SalesTable;

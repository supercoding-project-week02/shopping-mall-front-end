import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailHeaders from '@/components/detail/DetailHeader';
import DetailInfo from '@/components/detail/DetailInfo';

import { client } from '@/apis/index';

const Detail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    client.get(`/product/${params.productId}`).then((res) => {
      const data = res.data.data;
      setProduct(data);
      // console.log('Res', res.data.data);
    });
  }, []);

  if (!product) {
    // navigate('/')
    return <div>데이터가 없습니다!</div>;
  }

  return (
    <div>
      <DetailHeaders product={product} />
      <DetailInfo product={product} />
    </div>
  );
};

export default Detail;

import { EditImgItemContainer } from './EditImgItem.styles';
import { StyledImgBox } from '../PreviewImgItem/ImgInput.styles';

const EditImgItem = ({ value }) => {
  return (
    <EditImgItemContainer>
      <StyledImgBox>
        <img src={value} alt="" />
      </StyledImgBox>
    </EditImgItemContainer>
  );
};

export default EditImgItem;

import styled from '@emotion/styled';

export const PageTitle = styled.div`
    padding: 50px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;

export const WrapperDiv = styled.div`
    height: 1500px;
    background-color: #FFBFBF;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    box-sizing: border-box;
    gap: 20px;
`;

export const OrderInfoBox = styled.div`
    background-color: #FFE5E5;
    width: 600px;
    height: 18%;
`;

export const PersonInfoBox = styled.div`
    position: relative;
    background-color: #FFE5E5;
    width: 600px;
    height: 11%;
`;

export const ShipInfoBox = styled.div`
    position: relative;
    background-color: #FFE5E5;
    width: 600px;
    height: 22%;
`;

export const FixedDiv = styled.div`
    position: fixed;
    width: 400px;
    height: 120%;
    margin-left: 620px;
`;

export const OrderPriceBox = styled.div`
    background-color: #FFE5E5;
    height: 20%;
    margin-bottom: 20px;
`;

export const SuperPayBox = styled.div`
    background-color: #FFE5E5;
    height: 20%;
    margin-bottom: 20px;
`;

export const AgreeBox = styled.div`
    background-color: #FFE5E5;
    height: 10%;
    margin-bottom: 20px;
`;

export const OrderInfo = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 25px;
    padding: 25px 0;
`;

export const OrderDetailDiv = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    border: 1px solid gray;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
    padding: 15px;
`;

export const OrderTextDiv = styled.div`
    padding: 15px 10px;
`;


export const ProductNameDiv = styled.div`
    padding: 6px 0;
`;

export const ProductCountDiv = styled.div`
    padding: 6px 0;
    color: gray;
`;

export const ProductPriceDiv = styled.div`
    padding: 6px 0;
    font-weight: bold;
`;

export const ShipTextDiv = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid gray;
    border-top: none;
    padding: 12px;
    background-color: gray; /* #f8f8f8; */
`;

export const ShipSpan = styled.span`
    font-weight: bold;
`;

export const PersonInfo = styled.div`
    display: inline-block;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 25px;
    padding: 25px 0;
`;

export const MemberName = styled.div`
    margin: 0 25px;
    padding-bottom: 10px;
    color: gray; /* #c2bcbf; */
`;

export const PhoneNumber = styled.div`
    margin: 0 25px;
    padding-bottom: 10px;
    color: gray; /* #c2bcbf; */
`;

export const Email = styled.div`
    margin: 0 25px;
    color: gray; /* #c2bcbf; */
`;

export const PersonModifyA = styled.a`    
    text-align: center;
    position: absolute;
    right: 22px;
    top: 55px;
    width: 40px;
    height: 20px;
    padding: 13px 15px 8px 15px;
    border: 1px solid black;
    font-weight: bold;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
    &:hover {
       background-color: #ffb002;
       color: white;
       border: none;
    }
`;

export const ShipInfo = styled.div`
    display: inline-block;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 25px;
    padding: 25px 0;
`;

export const Address1 = styled.div`
    margin: 0 25px;
    padding-top: 5px;
    padding-bottom: 10px;
    color: black; /* #c2bcbf; */
`;

export const Address2 = styled.div`
    margin: 0 25px;
    padding-bottom: 10px;
    color: black; /* #c2bcbf; */
`;

export const ZipCode = styled.div`
    margin: 0 25px;
    padding-bottom: 10px;
    color: black; /* #c2bcbf; */
`;

export const OrderPrice = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 25px;
    padding: 25px 0;
`;

export const SuperPay = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin: 0 25px;
    padding: 25px 0;
`;

export const AddressModifyA = styled.a`    
    text-align: center;
    position: absolute;
    right: 22px;
    top: 60px;
    width: 40px;
    height: 20px;
    padding: 13px 15px 8px 15px;
    border: 1px solid black;
    font-weight: bold;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
    &:hover {
       background-color: #ffb002;
       color: white;
       border: none;
    }
`;

export const ShipMemo = styled.div`
    margin: 15px 25px 5px;
    color: gray;
`;

export const ShipMemoSelectBox = styled.select`
    width: 550px;
    height: 40px;
    margin: 10px 25px;
    padding: 10px;
    border: 1px solid gray;
    font-size: 15px;
`;
export const MemoOption = styled.option`
    font-size: 15px;
`;

export const OrderPriceContentDiv = styled.div`
    display: flex;
`;

export const OrderPriceTextDiv = styled.div`
    margin-left: 25px;
    margin-right: 65px;
    text-align: left;
`;

export const Text1 = styled.p`
    padding: 10px 0;
    color: gray;
    width: 100px;
`;

export const Text2 = styled.p`
    padding: 10px 0;
    color: gray;
`;

export const OrderPriceNumberDiv = styled.div`
    margin-right: 25px;
    text-align: right;
`;

export const OrderPrice1 = styled.p`
    padding: 10px 0;
    color: #252743;
    font-weight: bold;
`;

export const OrderPrice2 = styled.p`
    padding: 10px 0;
    color: #252743;
    font-weight: bold;
`;

export const OrderPriceHr = styled.hr`
    width: 250px;
    margin: 20px auto;
    color: gray;
`;

export const OrderPriceTotalDiv = styled.div`
    display: flex;
`;

export const OrderPriceTotalTextDiv = styled.div`
    margin-left: 25px;
    margin-right: 85px;
    text-align: left;
`;

export const Text3 = styled.p`
    padding: 10px 0;
    color: #252743;
    font-weight: bold;
`;

export const OrderPriceTotalSumDiv = styled.div`
    margin-right: 25px;
    text-align: right;
`;

export const Price3 = styled.p`
    padding: 10px 0;
    color: #ffb002;
    font-weight: bold;
`;

export const SuperPayTextDiv = styled.div`
    margin-left: 25px;
    margin-right: 50px;
    text-align: left;
`;

export const SuperPayNumberDiv = styled.div`
    margin-right: 25px;
    text-align: right;
`;

export const Price1 = styled.div`
    padding: 10px 0;
    color: #252743;
    font-weight: bold;
`;
export const Price2 = styled.div`
    padding: 10px 0;
    color: #252743;
    font-weight: bold;
`;

export const SuperPayTotalTextDiv = styled.div`
    margin-left: 25px;
    margin-right: 100px;
    text-align: left;
`;

export const AllAgree = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    text-align: center;
`;

export const AllAgreeInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin: 25px 5px 10px 20px;
`;

export const AllAgreeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
    height: 50px;
    font-size: 15px;
`;

export const SubAgree = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    text-align: center;
`;

export const SubIndicateDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
`;

export const BoxLineDiv = styled.div`
    margin: 10px 0px 0px 20px;
    width: 12px;
    height: 12px;
    border: 1px solid gray;
    border-top: none;
    border-right: none;
`;

export const SubAgreeInput = styled.input`
    width: 20px;
    height: 20px;
    margin: 25px 5px 10px 10px;
`;

export const SubAgreeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 5px;
    height: 50px;
    font-size: 15px;
    width: 240px;
    text-align: left;
`;

export const PaySubmitBox = styled.div`
    background-color: #FFE5E5;
    height: 10%;
`;

export const PaySubmitTextDiv = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 60px;
    background-color: black;
`;

export const PaySubmitA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
    padding: 20px 0;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
       background-color: #ffb002;
       color: white;
       border: none;
       height: 60px;
       margin: 0;
       padding: 0;
       color: black;
`;


// export const = styled.div``;
// export const = styled.div``;
import React, { useState } from "react";
import * as S from '@/pages/payment/Payment.Styles';

import PaymentShipChgClick from './PaymentShipChgClick';
import PaymentShipInfo from './PaymentShipInfo';

const PaymentShipMove = () => {

    const [viewShipInfo, setViewShipInfo] = useState(true);

    return (
        <div className="contentWrapper">
        <div className="contentTitle"></div>
        <div className="contentBody mainWrapper">
            <div className="mainButtonWrapper">
                <S.Button
                onClick={() => setViewShipInfo(false)}
                >타임</S.Button>
            </div>
            <div className="mainComponentWrapper">
                { viewShipInfo ? <PaymentShipInfo/> : <PaymentShipChgClick/> }
            </div>
        </div>
      </div>
    );
};

export default PaymentShipMove;
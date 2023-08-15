import React from 'react';
import styled from '@emotion/styled';
import CounterBox from './CounterBox';

export default function DHeaders() {
  return (
    <HeaderContainer>
      <Image></Image>
      <Content>
        <Title>
          <GameName></GameName>
          <CompanyWrapper>
            <Company>제조사</Company>
            <CompanyName></CompanyName>
          </CompanyWrapper>
        </Title>
        <SalePrice>
          <SalePriceTitle>판매가</SalePriceTitle>
          <SalePriceText></SalePriceText>
        </SalePrice>
        <Player>
          <PlayerTitle>게임 인원</PlayerTitle>
          <PlayerText></PlayerText>
        </Player>
        <Level>
          <LevelTitle>난이도</LevelTitle>
          <LevelText></LevelText>
        </Level>
        <Playtime>
          <PlaytimeTitle>게임 시간</PlaytimeTitle>
          <PlaytimeText></PlaytimeText>
        </Playtime>
        <StockCount>
          <StockCountTitle>재고 수량</StockCountTitle>
          <StockCountText></StockCountText>
        </StockCount>
        <CounterBox />
        <PlusCartButton>장바구니</PlusCartButton>
        <ClickHeartButton>
          <HeartButtonTitle>찜하기</HeartButtonTitle>
        </ClickHeartButton>
      </Content>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 1190px;
  height: 790px;
  display: flex;
`;

const Image = styled.div`
  width: 680px;
  height: 780px;
`;

const Content = styled.div`
  width: 476px;
`;
const Title = styled.div`
  width: 424px;
  height:;
`;

const GameName = styled.div``;

const CompanyWrapper = styled.div``;

const Company = styled.div``;

const CompanyName = styled.div``;

const SalePrice = styled.div`
  display: flex;
`;

const Player = styled.div`
  display: flex;
`;

const Level = styled.div`
  display: flex;
`;

const Playtime = styled.div`
  display: flex;
`;

const StockCount = styled.div`
  display: flex;
`;

const PlusCartButton = styled.div`
  width: 208px;
  height: 52px;
`;

const ClickHeartButton = styled.div`
  width: 208px;
  height: 52px;
`;

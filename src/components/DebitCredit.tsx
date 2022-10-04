import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {TransactionType} from "../App";

export const DebitCredit = () => {
    let transactions = useSelector<AppRootStateType, Array<TransactionType>>(state => state.transaction.transactions)
    const amounts = transactions.map(el=>el.amount)
    const expense =  amounts.filter(el=>el < 0)
        .reduce((acc, el)=> (acc = acc + el),0).toFixed(2)
    const income =  amounts.filter(el=>el > 0)
        .reduce((acc, el)=> (acc = acc + el),0).toFixed(2)
    const total = Number(income) - Number(-expense)

    return (

        <Container>
                <DivWrapper>
                    <IncomeWrapper>Inflow</IncomeWrapper>
                    <PlusWrapper>+{income}$</PlusWrapper>
                </DivWrapper>
                <DivWrapper>
                    <IncomeWrapper>Outflow</IncomeWrapper>
                    <MinusWrapper>-{expense}$</MinusWrapper>
                </DivWrapper>
                <DivWrapper>
                    <IncomeWrapper></IncomeWrapper>
                    <TotalWrapper>{total}$</TotalWrapper>
                </DivWrapper>
        </Container>

    );
};

const Container = styled.div`
  margin-bottom: 20px;
  padding: 8px 0;
  flex-direction: column;
  height: 100px;
  box-sizing: border-box;
  display: block;
  
`
const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  padding: 8px 16px;
  gap: 200px;
  position: relative;
  margin: 5px;
`
const IncomeWrapper = styled.div`
  justify-content: center;
  position: relative;

`
const PlusWrapper = styled.div`
  position: absolute;
  right: 16px;

  color: #039be5;
`
const MinusWrapper = styled.div`
  color: #e51c23;
  padding-bottom: 5px;
  border-bottom: 1px solid #767676;
`
const TotalWrapper=styled.div`
  color: #757575;
  position: absolute;
  right: 16px;
`

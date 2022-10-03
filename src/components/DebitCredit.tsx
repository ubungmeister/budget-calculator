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
        <>
            <div>Total: {total}</div>
        <Container>
                <DivWrapper>
                    <IncomeWrapper>Inflow</IncomeWrapper>
                    <PlusWrapper>+{income}$</PlusWrapper>
                </DivWrapper>
                <DivWrapper>
                    <IncomeWrapper>Outflow</IncomeWrapper>
                    <MinusWapper>{expense}$</MinusWapper>
                </DivWrapper>
        </Container>
        </>
    );
};

const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

`
const DivWrapper = styled.div`
  flex: 1;
  text-align: center;
  :first-of-type {border-right: 1px solid #dedede};
`
const IncomeWrapper = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
`
const PlusWrapper = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: #2ecc71;
`
const MinusWapper = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: #c0392b;
`


import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {TransactionType} from "../App";
import {deleteTransaction} from "../store/slice";
export interface ColorProps{
    amount:number
}
export const TransactionHistory = () => {
    let transactions = useSelector<AppRootStateType, Array<TransactionType>>(state => state.transaction.transactions)
    const dispatch=useDispatch()
    return (
        <div>
            <h3>History</h3>
            <UlWrapper id="list" className="list">
                {transactions.map((el) => {
                    return (
                        <LiWrapper key={el.id} amount={el.amount}>
                            <div>{el.text}</div>
                            <SpanWrapper>{el.amount}</SpanWrapper>
                            <ButtonWrapper
                                onClick={(e)=>
                                    dispatch(deleteTransaction(el.id))}>x</ButtonWrapper>
                        </LiWrapper>
                    )
                })}
            </UlWrapper>
        </div>
    );
};

const UlWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`
const LiWrapper = styled.li<ColorProps>`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  border-right: ${props=>props.amount > 0 ?"5px solid #2ecc71" : "5px solid #c0392b"};
`
const SpanWrapper = styled.span`
`
const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: rgba(255, 63, 101, 0.56);
  border: 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0.2;
`

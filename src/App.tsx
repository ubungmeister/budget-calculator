import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {DebitCredit} from "./components/DebitCredit";
import {TransactionHistory} from "./components/TransactionHistory";
import {AddTransactionForm} from "./components/AddTransactionForm";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {changePopUp} from "./store/slice";


export type TransactionType = {
    id: string
    text: string
    amount: number
    date: Date
}
export type BalanceType = {
    income: number
    expense: number
    total: number
}

function App() {
    let popUpForm = useSelector<AppRootStateType, boolean>(state => state.transaction.popUp)
    const dispatch = useDispatch()
    const [popUp, setPopUpForm]=useState(popUpForm)
    const onPopUpHandler =()=>{
        setPopUpForm(true)
        dispatch(changePopUp(popUp))
    }
    return (
        <div>
            <Container>
                <Filter>
                    <FilterItem>LAST MONTH</FilterItem>
                    <FilterItem>THIS MONTH</FilterItem>
                    <FilterItem>CUSTOM</FilterItem>
                </Filter>
                <DebitCredit/>
                <TransactionHistory/>
                {popUpForm ? <AddTransactionForm/> : ''}
                {/*<AddTransactionForm/>*/}
            </Container>
            <PopUpButon onClick={onPopUpHandler}>Add Transaction</PopUpButon>
        </div>
    );
}

export default App;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px 16px 0;
  align-items: center;
  width: 400px;
  //min-height: 75vh;
  background-color: #fafafa;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`

const Filter = styled.div`
  top: 25px;
  padding-top: 0;
  display: flex;
  flex: 1 0 auto;
  height: 45px;
  border-bottom: 1px solid #e8e7ee;

`
const FilterItem = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
  font-weight: 500;
  padding: 15px 15px;
  outline: none;
`
const PopUpButon = styled.div`
  justify-content: center;
  align-items: center;
  left: 530px;
  position: absolute;
  padding: 15px 10px;
  height: 50px;
  width: 130px;
  font-size: 15px;
  background: #61dafb;
  border-radius: 10px;
  cursor: pointer;
`
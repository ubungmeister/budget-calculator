import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {DebitCredit} from "./components/DebitCredit";
import {TransactionHistory} from "./components/TransactionHistory";
import {AddTransactionForm} from "./components/AddTransactionForm";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {changePopUp, changePopUpCalendar, DateType, filterDateTransaction, filterTransaction} from "./store/slice";
import DatePicker from "react-datepicker";
import {RangeCalendar} from "./components/RangeCalendar";


export type TransactionType = {
    id: string
    text: string
    amount: number
    date: Date
    category: string
}
export type BalanceType = {
    income: number
    expense: number
    total: number
}

function App() {
    const popUpForm = useSelector<AppRootStateType, boolean>(state => state.transaction.popUpForm)
    const popUpCalendar = useSelector<AppRootStateType, boolean>(state => state.transaction.popUpCalendar)
    const dateRange = useSelector<AppRootStateType, DateType>(state => state.transaction.dateRange)
    const dateFormat=()=>{
        return dateRange.end.getMonth() +'/'+ dateRange.end.getDate() +'/'+ dateRange.end.getFullYear()+'-'
        +dateRange.start.getMonth() +'/'+ dateRange.start.getDate() +'/'+ dateRange.start.getFullYear()
    }

    const dispatch = useDispatch()
    const onCurrentMonth = () => {
        dispatch(filterTransaction(new Date().getMonth()))
    }
    const onLastMonth = () => {
        dispatch(filterTransaction(new Date().getMonth() - 1))
    }

    return (
        <div>

            <Container>
                <Filter>
                    <FilterItem onClick={onLastMonth}>LAST MONTH</FilterItem>
                    <FilterItem onClick={onCurrentMonth}>THIS MONTH</FilterItem>
                    <Calendar onClick={()=>dispatch(changePopUpCalendar(true))}>
                        {dateFormat()}</Calendar>
                </Filter>
                {popUpCalendar ? <RangeCalendar/>:''}
                <DebitCredit/>
                <TransactionHistory/>
                {popUpForm ? <AddTransactionForm/> : ''}
            </Container>
            <PopUpButon onClick={()=>dispatch(changePopUp(true))}>Add Transaction</PopUpButon>
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
  width: 500px;
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
  padding: 15px 15px;
  outline: none;
  cursor: pointer;
`
const Calendar = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
  padding: 15px 15px;
  outline: none;
  cursor: pointer;
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
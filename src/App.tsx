import React from 'react';
import './App.css';
import styled from "styled-components";
import {DebitCredit} from "./components/DebitCredit";
import {TransactionHistory} from "./components/TransactionHistory";
import {AddTransactionForm} from "./components/AddTransactionForm";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {changePopUp, changePopUpCalendar, DateType, filterTransaction} from "./store/slice";
import {RangeCalendar} from "./components/RangeCalendar";
import pieChart from './components/images/pie-chart-683.png'
import chart from './components/images/bar-chart-675.png'
import plus from './components/images/pluss.png'


function App() {
    const popUpForm = useSelector<AppRootStateType, boolean>(state => state.transaction.popUpForm)
    const popUpCalendar = useSelector<AppRootStateType, boolean>(state => state.transaction.popUpCalendar)
    const dateRange = useSelector<AppRootStateType, DateType>(state => state.transaction.dateRange)
    const dispatch = useDispatch()
    //show date range in filter
    const dateFormat=()=>{
        return dateRange.end.getMonth() +'/'+ dateRange.end.getDate() +'/'+ dateRange.end.getFullYear()+'-'
            +dateRange.start.getMonth() +'/'+ dateRange.start.getDate() +'/'+ dateRange.start.getFullYear()
    }

    return (
        <div>

            <Container>
                <Filter>
                    <FilterItem onClick={()=>dispatch(filterTransaction(new Date().getMonth()-1))}>LAST MONTH</FilterItem>
                    <FilterItem onClick={()=>dispatch(filterTransaction(new Date().getMonth()))}>THIS MONTH</FilterItem>
                    {/* dispatch true if click on date filter */}
                    <Calendar onClick={()=>dispatch(changePopUpCalendar(true))}>{dateFormat()}</Calendar>
                </Filter>
                {popUpCalendar ? <RangeCalendar/>:''}
                <DebitCredit/>
                <TransactionHistory/>
                {popUpForm ? <AddTransactionForm/> : ''}
                <ButtonsPositionWrapper>
                       <ImgWrapper src={pieChart}/>
                        <ImgWrapper src={chart}/>
                     <ImgWrapper onClick={()=>dispatch(changePopUp(true))} src={plus}/>
                </ButtonsPositionWrapper>
            </Container>

        </div>
    );
}

export default App;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  background-color: #f4f4f4;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
`

const Filter = styled.div`
  background-color:white;
  width: 450px;
  justify-content: center;
  display: flex;

`
const FilterItem = styled.button`
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
  padding: 20px 15px;
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid #e8e7ee;
  &:focus {
    outline: none;
    border-bottom: 1px solid green;
    color: rgba(0, 128, 0, 0.9);
  }

`
const Calendar = styled.button`
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
  padding: 15px 15px;
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid #e8e7ee;
  &:focus {
    outline: none;
    border-bottom: 1px solid green;
    color: rgba(0, 128, 0, 0.9);
  }
`
const ButtonsWrapper = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, .54);
  outline: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border-top: 1px solid green;
    color: rgba(0, 128, 0, 0.9);
  }
`
const ButtonsPositionWrapper = styled.div`
  height: 70px;
  padding-left: 100px;
  background-color:white;
  width: 450px;
  display: flex;
  gap:30px;
 
`
const ImgWrapper = styled.img`;
    width: 65px;
    height: 65px;
    opacity: 0.5;

  &:hover {
    width: 70px;
    height: 70px;
    border-radius: 30px;
    color: white;
    opacity: 0.9;
    cursor: pointer;
  \`
    
`

const Button = styled.div`
  font-size: 15px;
  background: rgba(40, 44, 52, 0.04);
  cursor: pointer;
  border-radius: 20px;
  border: none;
  color: #039be5;
  padding: 10px 20px;

  &:hover {
    background-color: #039be5;
    color: white;
`
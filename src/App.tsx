import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {DebitCredit} from "./components/DebitCredit";
import {TransactionHistory} from "./components/TransactionHistory";
import {AddTransactionForm} from "./components/AddTransactionForm";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";



export type TransactionType ={
    id: string
    text: string
    amount:number
}
export type BalanceType ={
    income:number
    expense:number
    total:number
}

function App() {




  return (
    <div>

        <Container>
            <Header>Expense tracker</Header>
            <DebitCredit/>
            <TransactionHistory/>
            <AddTransactionForm/>
        </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin: 30px auto;
  width: 350px;
`
const Header = styled.div`
    padding-left: 70px;
    justify-content: center;
    font-size: 25px;
`
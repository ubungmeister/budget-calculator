import {BalanceType, TransactionType} from "../App";
import {v1} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type InitialState = {
    transactions: Array<TransactionType>
    income:number
    expense:number
    total:number
}
const initialState: InitialState = {
    transactions: [
        {id: v1(), text: 'Flower', amount: -20},
        {id: v1(), text: 'Salary', amount: 300},
        {id: v1(), text: 'Book', amount: -10},
        {id: v1(), text: 'Camera', amount: 150}
    ],
    income:0, expense:0, total:0
}
type PayloadType = {
    text:string,
    amount:number
}


const transactionsSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers:{
        addTransaction(state, action:PayloadAction<PayloadType>){
            state.transactions.push({
                id: v1(),
                text: action.payload.text,
                amount: action.payload.amount
            })
        },

        deleteTransaction(state, action:PayloadAction<string>){
           state.transactions = state.transactions.filter(el=>el.id !== action.payload)
        },
    }

})

export const {addTransaction, deleteTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer
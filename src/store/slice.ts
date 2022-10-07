import {BalanceType, TransactionType} from "../App";
import {v1} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type InitialState = {
    transactions: Array<TransactionType>
    copyOfTransactions: Array<TransactionType>
    income: number
    expense: number
    total: number
    popUpForm: boolean
    month: number
    popUpCalendar: boolean
    dateRange:DateType
}
const initialState: InitialState = {
    transactions: [],
    copyOfTransactions: [],
    income: 0,
    expense: 0,
    total: 0,
    popUpForm: false,
    month: new Date().getMonth(),
    popUpCalendar:false,
    dateRange:{start: new Date(),end:new Date()}
}
type PayloadType = {
    text: string,
    amount: number
    date: Date
    category: string
}
export type DateType = {
    start:Date
    end:Date
}


const transactionsSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction(state, action: PayloadAction<PayloadType>) {
            let text = action.payload.text
            let amount = action.payload.amount
            let date = action.payload.date
            let category = action.payload.category
            state.transactions = [
                {id: v1(), text, amount, date, category}, ...state.transactions]

            state.copyOfTransactions = state.transactions
        },

        deleteTransaction(state, action: PayloadAction<string>) {
            state.copyOfTransactions = state.transactions.filter(el => el.id !== action.payload)
        },
        changePopUp(state, action: PayloadAction<boolean>) {
            state.popUpForm = action.payload
        },
        changePopUpCalendar(state, action: PayloadAction<boolean>) {
            state.popUpCalendar = action.payload
        },
        filterTransaction(state, action: PayloadAction<number>) {
            console.log(action.payload)
            state.copyOfTransactions = state.transactions.filter(el => el.date.getMonth() === action.payload)
        },
        filterDateTransaction(state,action:PayloadAction<DateType>){
            state.dateRange = action.payload
            state.copyOfTransactions = state.transactions.filter
            (el=>el.date >= action.payload.start
                && el.date <= action.payload.end)
        }
    }

})

export const {addTransaction, deleteTransaction, changePopUp, changePopUpCalendar,filterTransaction,filterDateTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer
import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addTransaction} from "../store/slice";

export const AddTransactionForm = () => {
    const [text, setText] = useState('')
    const [amount,setAmount]=useState(0)
    const dispatch = useDispatch()

    const onClickHandler =()=>{

        if(amount !== 0 && text.trim().length> 0){
            dispatch(addTransaction({text,amount}))
        }
        setText('')
        setAmount(0)
    }

    return (
            <Container>
                <h3>Add new transaction</h3>
                <ControlWrapper>
                    <LabelWrapper htmlFor="text">Text</LabelWrapper>
                    <InputWrapper type='text' value={text}
                                  onChange={(e)=>setText(e.target.value)}
                                  placeholder="Enter text..."/>
                </ControlWrapper>
                <ControlWrapper>
                    <LabelWrapper htmlFor="amount">Amount <br/>
                        (negative - expense, positive - income)</LabelWrapper>
                    <InputWrapper type='number' value={amount}
                                  onChange={(e)=>setAmount(+e.target.value)}
                                  placeholder="Enter amount..."/>
                </ControlWrapper>
                <ButtonWrapper onClick={onClickHandler}>Add transaction</ButtonWrapper>
            </Container>
    );
};

const Container = styled.div`
  display: block;
`
const ControlWrapper = styled.div`
  display: block;
`
const LabelWrapper = styled.label`
  display: inline-block;
  margin: 10px 0;
`
const InputWrapper = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`
const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
`

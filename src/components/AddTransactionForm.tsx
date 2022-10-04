import React, {useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {useDispatch} from "react-redux";
import {addTransaction, changePopUp} from "../store/slice";
import DatePicker from "react-datepicker";
import {FaWindowClose} from "react-icons/fa";


export const AddTransactionForm = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setStartDate] = useState<Date>(new Date("2/01/22"));
    const [popUpForm, setPopUpForm]=useState(false)
    const dispatch = useDispatch()

    const onClickHandler = () => {

        if (amount !== 0 && text.trim().length > 0) {
            dispatch(addTransaction({text, amount, date}))
        }
        setText('')
        setAmount(0)
        setStartDate(new Date("2/01/22"))
        setPopUpForm(false)
        dispatch(changePopUp(popUpForm))
    }

    const onPopUpHandler =()=>{
        setPopUpForm(false)
        dispatch(changePopUp(popUpForm))
    }

    return (
        <Container>
            <Wrapper>
                <TitleWrapper>Add transaction</TitleWrapper>
                <ButtonWrapper>
                    <FaWindowClose onClick={onPopUpHandler}/>
                </ButtonWrapper>
                <InputWrapper>
                   <CategoryWrapper placeholder='Category'/>
                    <CategoryWrapper type='number' value={amount}
                                     onChange={(e)=>setAmount(+e.target.value)}
                                     placeholder='Amount'/>
                </InputWrapper>
                <InputWrapper>
                    <DateWrapper closeOnScroll={true}
                                selected={date}
                                onChange={(date:Date) => setStartDate(date)}/>
                    <CategoryWrapper onChange={(e)=>setText(e.target.value)}
                                     placeholder='Note'/>
                </InputWrapper>
                <AddButtonWrapper>
                    <Button onClick={onClickHandler}>Add</Button>
                    <Button onClick={onPopUpHandler}>Cancel</Button>
                </AddButtonWrapper>

                {/*<ControlWrapper>*/}
                {/*    <LabelWrapper htmlFor="text">Text</LabelWrapper>*/}
                {/*    <InputWrapper type='text' value={text}*/}
                {/*                  onChange={(e)=>setText(e.target.value)}*/}
                {/*                  placeholder="Enter text..."/>*/}
                {/*</ControlWrapper>*/}
                {/*<ControlWrapper>*/}
                {/*    <LabelWrapper htmlFor="amount">Amount <br/>*/}
                {/*        (negative - expense, positive - income)</LabelWrapper>*/}
                {/*    <InputWrapper type='number' value={amount}*/}
                {/*                  onChange={(e)=>setAmount(+e.target.value)}*/}
                {/*                  placeholder="Enter amount..."/>*/}

                {/*</ControlWrapper>*/}

                {/*<ButtonWrapper onClick={onClickHandler}>Add transaction</ButtonWrapper>*/}
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  background-color: #fafafa;
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 15px;
  border-radius: 8px;
  position: relative;
`
const TitleWrapper = styled.div`
  justify-content: left;
  border-bottom: 1px solid #767676;
  padding-bottom: 10px;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;

`
const CategoryWrapper = styled.input`
  height: 40px;
  width: 140px;
  padding-left: 30px;
  background-color:#fafafa ;
  border-radius: 7px;
  border: 1px solid #767676
`
const DateWrapper = styled(DatePicker)`
  height: 40px;
  padding-left: 10px;
  color:#767676 ;
  background-color:#fafafa ;
  border-radius: 7px;
  border: 1px solid #767676
`

const ButtonWrapper = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  transform: translateY(-100%);
  font-size: 1.2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #9b1237;
    color: white;
    
`
const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`
const Button = styled.div`
  font-size: 15px;
  background: rgba(40, 44, 52, 0.04);
  cursor: pointer;
  border-radius: 20px;
  border: none;
  color: green;
  padding: 10px 20px;

  &:hover {
    background-color: #039be5;
    color: white;
`

import React, {useState} from 'react';
import styled from "styled-components";
import Select from "react-select";
import coffee from './images/coffee.png'
import educations from './images/education.png'
import fun from './images/funspending.png'
import grocery from './images/groceries.png'
import healths from './images/health.png'
import others from './images/other.png'
import rental from './images/rental.png'
import transport from './images/transport.png'
import utilities from './images/utility.png'
import moneySend from './images/transfer.png'
import work from './images/work.png'
import business from './images/business.png'
import deposit from './images/deposit.png'



const IconWrapper=styled.div`
  display: flex;
  gap:  10px;
  justify-content: left;
  font-size: 17px;
`
const ImageWrapper = styled.img`
    height:30px ;
    width:30px;
    position: relative;
    
`
const SelectWrapper = styled(Select)`
  .Select__control {
    height: 40px;
    width: 180px;
    background-color:#fafafa ;
    border-radius: 7px;
    border: 1px solid #767676
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  //.Select__menu {
  //  color: #3c3d3e;
  //}
`

const options = [
    {
        value: 'rentals',
        label: <IconWrapper><ImageWrapper src={rental} height="30px" width="30px"/>Rentals</IconWrapper>
    },
    {
        value: 'transportation',
        label: <IconWrapper><ImageWrapper src={transport} height="30px" width="30px"/>Transportation</IconWrapper>
    },
    {
        value: 'utility',
        label: <IconWrapper><ImageWrapper src={utilities} height="30px" width="30px"/>Utility</IconWrapper>
    },
    {
        value: 'groceries',
        label: <IconWrapper><ImageWrapper src={grocery} height="30px" width="30px"/>Groceries</IconWrapper>
    },
    {
        value: 'education',
        label: <IconWrapper><ImageWrapper src={educations} height="30px" width="30px"/>Education</IconWrapper>
    },
    {
        value: 'health',
        label: <IconWrapper><ImageWrapper src={healths} height="30px" width="30px"/>Health</IconWrapper>
    },
    {
        value: 'coffee',
        label:  <IconWrapper><ImageWrapper src={coffee} height="30px" width="30px"/>Restaurants</IconWrapper>
    },
    {
        value: 'funMoney',
        label: <IconWrapper><ImageWrapper src={fun} height="30px" width="30px"/>Fun Money</IconWrapper>
    },
    {
        value: 'other',
        label: <IconWrapper><ImageWrapper src={others} height="30px" width="30px"/>Other</IconWrapper>
    },
]
const optionsIncome=[
    {
        value: 'salary',
        label: <IconWrapper><ImageWrapper src={work} height="30px" width="30px"/>Salary</IconWrapper>
    },
    {
        value: 'business',
        label: <IconWrapper><ImageWrapper src={business} height="30px" width="30px"/>Business</IconWrapper>
    },
    {
        value: 'transfer',
        label: <IconWrapper><ImageWrapper src={moneySend} height="30px" width="30px"/>Incoming transfer</IconWrapper>
    },
    {
        value: 'interest',
        label: <IconWrapper><ImageWrapper src={deposit} height="30px" width="30px"/>Collect Interest</IconWrapper>
    },
    {
        value: 'otherIncome',
        label: <IconWrapper><ImageWrapper src={others} height="30px" width="30px"/>Other</IconWrapper>
    },
]
export type PropsType ={
    category:(category:any)=>void
    isExpense:boolean
}

export const SelectForm = (props:PropsType) => {
    const [category, setCategory] =useState()
    const onChangeHandler =(e:any)=>{
        setCategory(e.value)
        props.category(e.value)
    }

    const getValue = () => {
        return category
            ? options.find(c => c.value === category)
            :optionsIncome.find(c => c.value === category)
    }


    return (
        <div>
            {props.isExpense
               ? <SelectWrapper placeholder='Category'
                                             classNamePrefix="Select"
                                             value={getValue()}
                                             isSearchable={false}
                                             onChange={onChangeHandler}
                                             options={options}/>
                :<SelectWrapper placeholder='Category'
                                classNamePrefix="Select"
                                value={getValue()}
                                isSearchable={false}
                                onChange={onChangeHandler}
                                options={optionsIncome}/>
            }

        </div>
    );
};


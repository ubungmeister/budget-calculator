import React, {useState} from 'react';
import ReactDatePicker from "react-datepicker";


export const Calendar = () => {

    const [startDate, setStartDate] = useState<Date|null>(new Date());

    return (
        <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );

};


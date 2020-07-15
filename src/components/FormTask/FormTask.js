import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';

import { changeData } from '../../app/actions';
import { Button, Input } from 'antd';

const FormTask = () => {

  const dispatch = useDispatch();
  const {data,todayData} = useSelector( state => state.appData);
  const [ value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const random =  Math.floor(Math.random() * 1000000);

    const date = moment().valueOf()
    const newData = {
      key: data.length + 1,
      id: random,
      checked: false,
      everyday: false,
      date: date,
      task: value
    }
    const newTodayData = {
      key: todayData.length + 1,
      id: random,
      checked: false,
      everyday: false,
      date: date,
      task: value
    }

    dispatch(changeData({data:[...data,newData],todayData: [...todayData,newTodayData]}))
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Basic usage" onChange={handleChange} value={value}/>
      <Button type="primary" htmlType="submit">Создать задачу</Button>
    </form>
  )
}

export default FormTask;
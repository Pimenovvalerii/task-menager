import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import arrayMove from 'array-move';
import PropTypes from 'prop-types';

import {Context } from '../../app/context';
import TableTaskList from './TableTaskList';
import { changeData } from '../../app/actions';

import './styles.scss';


const TableDragDrop = ({data,type}) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(data);
  const appData = useSelector( (store) => store.appData);

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems( arrayMove(items, oldIndex, newIndex) )

    if(type === 'data') {
      const newData = arrayMove(items, oldIndex, newIndex);
      newData.forEach( (el,id) => el.key = id + 1 )
      dispatch(changeData({ data: newData, todayData: appData.todayData }))
    }

    if(type === 'todayData') {
      const newTodayData = arrayMove(items, oldIndex, newIndex)
      newTodayData.forEach( (el,id) => el.key = id + 1 )
      dispatch(changeData({ data: appData.data, todayData: newTodayData }))
    }
  };

  const handleDelete = id => {

    let { data, todayData } = appData
    data = data.filter(item => item.id !== id ) 
    data.forEach( (el,id) => {
      el.key = id + 1
    })
    
    todayData = todayData.filter(item => item.id !== id ) 
    todayData.forEach( (el,id) => {
      el.key = id + 1
    })

    dispatch(changeData({ data,todayData }))
  };

  const handleChacked = (value) => {

    let { data, todayData } = appData

    data.forEach(element => {
      if(element.id === value.id){
        element.checked = !element.checked
      }
    });

    todayData.forEach(element => {
      if(element.id === value.id){
        element.checked = !element.checked
      }
    });
    
    dispatch(changeData({data,todayData}))
  }

  const handleEveryday = (value) => {
    let { data, todayData } = appData
    const newObj = {}

    data.forEach(element => {
      if(element.id === value){
        element.everyday = !element.everyday
      }
    });

    todayData.forEach(element => {
      if(element.id === value){
        element.everyday = !element.everyday
      }
    });

    const everydayTask = data.filter(el => el.id === value);

    for(let key in everydayTask[0]) {
      console.log(key, ' = ', everydayTask[0][key])
      newObj[key] = everydayTask[0][key]
    }

    const el = todayData.filter( el => el.id === newObj.id)


    if(el.length) {
      dispatch(changeData( {data,todayData}))
    } else {
      const newtodayData = [...todayData, newObj]
      newtodayData.forEach( (el,id) => el.key = id + 1 )
      
      dispatch(changeData( {data,todayData: [...newtodayData]}))
    }
  }

  useEffect( () => {
    setItems(data)
  },[data])
  
  const tableTaskControl = {
    handleDelete,
    handleChacked,
    handleEveryday
  }

  return (
    <Context.Provider value={{tableTaskControl}}>
      {type === 'data' && !data.length && <Redirect to='/' />}
      <TableTaskList items={items} onSortEnd={onSortEnd} type={type}/>
    </Context.Provider> 
  )
}

TableDragDrop.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, //isRequired - значит что пропс нужен для этого компонента а не просто пробросить
  type: PropTypes.number
}

export default TableDragDrop;
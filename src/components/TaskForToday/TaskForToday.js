import React from 'react';
import { useSelector } from 'react-redux';

import TableDragDrop from '../TableDragDrop';

import './styles.scss';

const TaskForToday = () => {
  
  const data = useSelector( (store) => store.appData.todayData);

  return <TableDragDrop data={data} type="todayData"/>
}

export default TaskForToday;

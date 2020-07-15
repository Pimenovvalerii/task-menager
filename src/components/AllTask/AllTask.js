import React from 'react';
import { useSelector } from 'react-redux';

import TableDragDrop from '../TableDragDrop';

// import './styles.scss';

const AllTask = () => {
  
  const data = useSelector( (store) => store.appData.data);

  return <TableDragDrop data={data} type="data"/>
}

export default AllTask;
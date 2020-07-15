import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import TableTask from './TableTask';

const TableTaskList = SortableContainer(({items,type}) => {

  return (
    <ul>
      {items.map((value, index) => (
        <TableTask key={value.key} index={index} value={value} type={type}/>
      ))}
    </ul>
  );
});

export default TableTaskList;
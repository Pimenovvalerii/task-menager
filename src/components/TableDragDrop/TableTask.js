import React, { useContext } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import moment from 'moment';

import { Context } from '../../app/context';
import ModalComponent from '../ModalComponent';
import { Button,Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined, CheckOutlined, FileSyncOutlined } from '@ant-design/icons';

const TableTask = SortableElement(({value,type}) => { 

  const style = value.checked && 'table-task--done';
  const {tableTaskControl} = useContext(Context);
  const context = useContext(Context);

  return (
    <li className={`table-task ${style}`}>
      <div className="table-task__date">
        {moment(value.data).format('DD MMMM YYYY')}
      </div>
      <div className="table-task__key">
        {value.key}
      </div>
      <div className="table-task__text">
        {value.task}
      </div>
      <div className="control-panel">
        <div className="control-panel__elem">
          <ModalComponent value={value}/>
          <Tooltip title="Выполнено" placement="bottomLeft">
            <Button 
              shape="circle" 
              icon={<CheckOutlined twoToneColor="#52c41a"/>} 
              onClick={ () => tableTaskControl.handleChacked(value) }
            />
          </Tooltip>
        </div>
        <div className="control-panel__elem">
          <Popconfirm title="Sure to delete?" onConfirm={() => tableTaskControl.handleDelete(value.id)}>
            <Button 
              shape="circle" 
              icon={<DeleteOutlined twoToneColor="#52c41a"/>} 
            />
          </Popconfirm>
          {
            type === 'data' || value.everyday ? (
              <Tooltip title="Каждый день" placement="bottomLeft">
                <Button 
                  shape="circle" 
                  icon={<FileSyncOutlined twoToneColor="#eb2f96"/>} 
                  onClick={ () => tableTaskControl.handleEveryday(value.id)}
                />
              </Tooltip>
            ) : null 
          }
        </div>
      </div>
    </li>
  )
});

export default TableTask;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeData } from '../../app/actions';
import { Modal, Button,Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const ModalComponent = ({ value }) => {

  const dispatch = useDispatch();
  const {data, todayData} = useSelector( store => store.appData);
  const [visible, setVisible] = useState(false)
  const [valueTextarea, setValueTextarea ] = useState('')

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    setVisible(false)

    data.forEach(element => {
      
      if(element.id === value.id){
        element.task = valueTextarea
      }
    });

    todayData.forEach(element => {
      
      if(element.id === value.id){
        element.task = valueTextarea
      }
    });
    
    dispatch(changeData({data,todayData}))
  };

  const handleCancel = e => {
    setValueTextarea(value.task)
    setVisible(false)
  };

  const handleTextarea = (e) => {
    setValueTextarea(e.target.value)
  }

  useEffect( () => {
    setValueTextarea(value.task)
  },[value.task])
  
  return (
    <div>
      <Tooltip title="Изменить" placement="topRight">
        <Button 
          shape="circle" 
          icon={<EditOutlined/>} 
          onClick={showModal}
        />
      </Tooltip>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <textarea 
          name="story"
          rows="5" 
          cols="33" 
          value={valueTextarea}
          onChange={handleTextarea}
        />
      </Modal>
    </div>
  );
}

export default ModalComponent;
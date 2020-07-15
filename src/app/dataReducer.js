import { SET_DATA } from './types';

const initState = {
  data: [
    // {
    //   key: '1',
    //   id: String(Math.floor(Math.random() * 1000000)),
    //   checked: false,
    //   date: moment().format('DD MMMM YYYY'),
    //   task: 'New York No. 1',
    // },
    // {
    //   key: '2',
    //   id: String(Math.floor(Math.random() * 1000000)),
    //   checked: false,
    //   date: moment().format('DD MMMM YYYY'),
    //   task: 'London No. 2',
    // },
    // {
    //   key: '3',
    //   id: String(Math.floor(Math.random() * 1000000)),
    //   checked: false,
    //   date: moment().format('DD MMMM YYYY'),
    //   task: 'Sidney No. 3 ',
    // },
  ],
  todayData: [
    // {
    //   key: '1',
    //   id: String(Math.floor(Math.random() * 1000000)),
    //   checked: false,
    //   date: moment().format('DD MMMM YYYY'),
    //   task: 'New York No. 1',
    // },
    // {
    //   key: '2',
    //   id: String(Math.floor(Math.random() * 1000000)),
    //   checked: false,
    //   date: moment().format('DD MMMM YYYY'),
    //   task: 'London No. 2',
    // },
  ]
}

export const dataReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_DATA:
      return {...state,...action.payload};
    ///////////////
    // case CHANGE_TASK_DnD_DATA:
    //   return {...state, data: [...action.payload] };

    // case CHANGE_TASK_DnD_TODAYDATA:
    //   return {...state, todayData: [...action.payload] };
    // case INIT_DATA:
    //   return {...state,...action.payload};

    // case ADD_TASK:
    //   return {...state, 
    //     data: [...state.data,action.payload.data], 
    //     todayData: [...state.todayData,action.payload.todayData] 
    //   };
    //   return { ...state, ...action.payload};
    // case CHANGE_TASK:
    //   return {...state, 
    //     data: [...action.payload.data],
    //     todayData: [...action.payload.todayData] 
    //   };
    // case DELETE_TASK:
    //   return {...state, 
    //     data: [...action.payload.data],
    //     todayData: [...action.payload.todayData]
    //   };
    // case 'FETCH_DATA':
    //   return { ...state, data: [...state.data,action.payload] }; 
    default : 
      return state;    
  }
}
import { CHANG_DATA, SET_DATA, INIT_DATA } from './types';

export const changeData = (data) => {
    return {
        type: CHANG_DATA,
        payload: data
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data
    }
}

export const initData = () => {
    return {
        type: INIT_DATA
    }
}

// export const fetchDataUnmaunt = () => {
//     return {
//         type: FETCH_DATA_UNMAUNT
//     }
// }

// export const addTaskSaga = (task) => {
//     return {
//         type: ADD_TASK_SAGA,
//         payload: task
//     }
// }

// export const initData = (data) => {
//     return {
//         type: INIT_DATA,
//         payload: data
//     }
// }

// export const getData = () => {
//     return {
//         type: FETCH_DATA,
//     }
// }
// export const changeTask = (task) => {
//     return {
//         type: CHANGE_TASK,
//         payload: task
//     }
// }
// export const changeTaskDndData = (task) => {
//     return {
//         type: CHANGE_TASK_DnD_DATA,
//         payload: task
//     }
// }
// export const changeTaskDndTodayData = (task) => {
//     return {
//         type: CHANGE_TASK_DnD_TODAYDATA,
//         payload: task
//     }
// }

// export const deleteTask = (task) => {
//     return {
//         type: DELETE_TASK,
//         payload: task
//     }
// }

// export const deleteTaskSaga = (task) => {
//     return {
//         type: DELETE_TASK_SAGA,
//         payload: task
//     }
// }

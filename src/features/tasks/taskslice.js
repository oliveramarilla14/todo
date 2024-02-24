import { createSlice } from '@reduxjs/toolkit'

const storageTasks = window.localStorage.getItem('tasks')
const initialState = storageTasks ? JSON.parse(storageTasks) : []

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      return state.filter(task => action.payload !== task.id)
    },
    editTask: (state, action) => {
      const { title, id, description } = action.payload
      const task = state.find(task => task.id === id)
      if (task) {
        task.title = title
        task.description = description
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload)
      task.completed = !task.completed
    }
  }
})

export const taskReducer = taskSlice.reducer
export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions

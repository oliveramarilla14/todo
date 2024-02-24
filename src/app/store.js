import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from '../features/tasks/taskslice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

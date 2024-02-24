import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <div className='bg-zinc-900 min-h-screen text-white '>
      <div className='flex items-center justify-center min-h-screen container m-auto'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  )
}

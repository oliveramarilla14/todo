import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

/* eslint-disable react/jsx-closing-tag-location */
function TaskListHeader () {
  const tasks = useSelector(state => state.tasks)
  return (
    <>
      {tasks.length > 0
        ? (<header className='flex justify-between py-4 items-center'>
          <h2>Tasks: {tasks.length}</h2>
          <Link className='bg-indigo-600 px-2 py-1 rounded-sm text-sm' to='/create-task'>Create task</Link>
        </header>)
        : <header className='flex flex-col gap-4 py-4 items-center'>
          <h2 className='text-4xl'>No tasks</h2>
          <Link className='bg-indigo-600 px-2 py-1 rounded-sm text-lg font' to='/create-task'>Create task</Link>
        </header>}
    </>
  )
}

export default TaskListHeader

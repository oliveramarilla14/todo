import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTask, deleteTask } from '../features/tasks/taskslice'
import CheckSvg from '../assets/check.jsx'
import Xmark from '../assets/xmark.jsx'

function TaskItem ({ task }) {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  const handleComplete = (id) => {
    dispatch(toggleTask(id))
  }
  return (
    <div className={`${task.completed ? 'bg-neutral-600' : 'bg-neutral-800'} p-4 rounded-md gap-2 `}>
      <header className='flex justify-between flex-col md:flex-row gap-1 mb-2'>
        <div className='flex gap-2'>
          <button className='bg-slate-200 rounded-full p-1 self-center' onClick={() => handleComplete(task.id)}>
            {task.completed ? <Xmark color='red' /> : <CheckSvg color='green' />}
          </button>
          <h3 className={` font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        </div>
        <div className='flex gap-x-2'>
          {task.completed ? null : <Link className='bg-zinc-600 px-2 py-1 text-xs rounded-md self-center' to={`/edit-task/${task.id}`}>Edit</Link>}
          <button className='bg-red-500 px-2 py-1 text-xs rounded-md self-center' onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      </header>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskItem

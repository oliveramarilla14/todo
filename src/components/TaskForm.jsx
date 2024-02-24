import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskslice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

export default function TaskForm () {
  const params = useParams()
  const [error, setError] = useState(!params.id)
  const [small, setSmall] = useState(false)
  const navigate = useNavigate()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const handleChange = (e) => {
    if (e.target.name === 'title' && e.target.value === '') {
      setError(true)
    } else {
      setError(false)
      setSmall(false)
      document.querySelector('#title').classList.remove('border-2', 'border-rose-500')
    }
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      if (params.id) {
        dispatch(editTask(task))
      } else {
        dispatch(addTask({ ...task, id: uuid(), completed: false }))
      }
      navigate('/')
    } else {
      document.querySelector('#title').classList.add('border-2', 'border-rose-500')
      setSmall(true)
    }
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
      <label htmlFor='title' className='block text-sm font-bold mb-2'>Task:</label>
      <input
        type='text' placeholder='title' name='title' onChange={handleChange} value={task.title}
        className='w-full p-2 rounded-md bg-zinc-600' id='title'
      />
      {small ? <small className='text-rose-500'> Necesary </small> : null}
      <label htmlFor='description' className='block text-sm font-bold my-2'>Description:</label>
      <textarea
        name='description' placeholder='description (optional)' onChange={handleChange} value={task.description}
        className='w-full p-2 rounded-md bg-zinc-600 mb-2 resize-none' id='description'
      />
      <button type='submit' className='bg-indigo-600 px-2 py-1'>Save</button>
    </form>
  )
}

// w-full p-2 rounded-md bg-zinc-600 mb-2

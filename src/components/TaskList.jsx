import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import TaskItem from './TaskItem'
import TaskListHeader from './TaskListHeader'

function TaskList () {
  const tasks = useSelector(state => state.tasks)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='w-4/6 '>
      <TaskListHeader />
      {tasks.length > 0 &&
        <main>

          <h3 className='mb-5 text-xl font-bold'>Pending</h3>
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3'>
            {tasks.filter(task => !task.completed).map(task => <TaskItem task={task} key={task.id} />)}
          </section>
          <h3 className='my-5 text-xl font-bold'>Completed</h3>
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3'>
            {tasks.filter(task => task.completed).map(task => <TaskItem task={task} key={task.id} />)}
          </section>

        </main>}

    </div>
  )
}

export default TaskList

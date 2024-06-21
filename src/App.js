import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { api } from './api/resource';
import uuid from 'react-uuid';

function App() {

  const [ tasks , setTasks ] = useState([])

  const fetchData = async () => {
    const res = await api.get('/todoList')
    setTasks(res.data)
  }

  const submitBtn = async(userTasks) => {
    const data = {
      id : uuid,
      task: userTasks,
      status : false
    }
    await api.post('/todoList', data)
  }

   const deleteBtn = async(id) => {
     await api.delete(`/todoList/${id}`)
   }
  
   const updateTask = async(id,status) => {
     await api.patch(`/todoList/${id}`,{status})
  }

  useEffect(() => { 
    fetchData();
  }, [tasks]);

  return (
    <div className="App">
      <div className='col-6 offset-3 pt-5'>
        <Form submitBtn={submitBtn}/>
        <List tasks={tasks} deleteBtn={deleteBtn} updateTask={ updateTask} />
      </div>
    </div>
  );
}

export default App;

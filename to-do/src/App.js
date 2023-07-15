import React, {useState,useRef} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'

function App1() {
  const [toDo, setToDo] = useState([
]);
   
    const [newTask, setNewTask] = useState();//temparary state
    const [updateData,setUpdateData]=useState('');//to store updated todolist data
    
    //adding new tasks to todo array
 const addTask = () => {
      if(newTask) {
        let newEntry = [...toDo,{id: toDo.length+1, title: newTask, status: false}]//array destructioring
        setToDo(newEntry);
        setNewTask('');
      }
    }
    //to mark the todoitem
    function mark(ele)
    {
      let newTasks=toDo.map(task=>{
        if(task.id==ele)
        {
          return ({...task,status:!task.status})
        }
        return task;
      })
      console.log('newTasks',newTasks);

      setToDo(newTasks)//doubt
      
    }

    //to delete the todo list
    function dele(id)
    {
     
      let newTasks=toDo.filter((task) =>
      {
               return task.id !== id;
      })
      setToDo(newTasks);


    }

    //to update todo list
    function update()
    {
      let newt=toDo.filter((task)=>{
        return task.id !== updateData.id
      })
      setToDo([...newt,updateData])//need to destructure when you are adding with combination of another
      setUpdateData('')
     /* let  filterre=[...toDo].filter(task=> task.id !== updateData.id);
      let updateObject=[...filterre,updateData]
      setToDo(updateObject);
      setUpdateData('')*/


    }
    
    function cancelUpdate()
    {
      setUpdateData('');
    }
    function change(e)
    {
      let newEntry={
        id:updateData.id,
        title:e.target.value,//because of these you are able to givr input in the update field
        status:updateData.status?true:false
      }
      setUpdateData(newEntry);
    }
    return(
    

    <div className="todo">
      <div className="ele">
      <div className="flex">
      <h1 className="a" >ToDo List</h1>
      </div>
     
      {
        updateData?(
        
          <div className="flex">
          <div className="a">
            <input type="text" className="text width"  value={updateData.title} 
             onChange={(e)=>{  change(e)
             }}/>
           
            <button onClick={update} className='button' style={{margin:"0rem 1rem"}}>UPDATE</button>
            <button onClick={cancelUpdate} className='button'>CANCEL</button>
          </div>
          </div>):
       
          (
            <div className="flex">
        <div className="a">
               <input type="text" value={newTask} className="width text" /*ref={re}*/ onChange={(e)=>{setNewTask(e.target.value);
               }}/> 
                <button onClick={addTask} className="width button" >Add</button>
               
         </div>
         </div>
        
          ) 
        
           }
            
              {
                toDo.length==0?<h1 style={{fontSize:"20px",margin:"1rem 8rem"}}>...no tasks....</h1>:(
                <div className='todo-body'>
               
          {
            
        toDo.map( (task, index) => {
        return(
          <div key={index} style={{margin:"1rem"}}>
          <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className='todo-item'>
             <div className={task.status ?'done' :'group1'}>
                <span className="taskNumber">{index + 1}</span> 
                <span className="tasktitle">{task.title}</span>
               
              </div>
              <div className="symbols">
                <span><button onClick={(e)=>{mark(task.id)}}><FontAwesomeIcon icon={faCircleCheck} /></button></span>
                
                {task.status?null:
                <span><button onClick={()=>setUpdateData({
                  id:task.id,
                  title:task.title,
                  status:task.status ?true :false

                })}><FontAwesomeIcon icon={faPen} /></button></span>
                }
                <span><button onClick={()=>{dele(task.id)}}><FontAwesomeIcon icon={faTrashCan} /></button></span>
                
                </div>
            </div>
            </div>
        )})
      }
         
        </div>
    )
    }
    </div>
    </div>
    )
  }
   export default App1;
        
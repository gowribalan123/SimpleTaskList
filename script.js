

const taskForm = document.getElementById('taskform');



const arr=[];
// Create a new list item when clicking on the "Add" button

function addTask()
 {
   
    const taskInput = document.getElementById('taskinput').value;
    const t =   document.createTextNode(taskInput);
   
    
 
    if (taskInput=='') {
        alert('Please enter a task.');
    }
    else{
        arr.push(taskInput);
        console.log(arr);
      //  li.appendChild(t);

      //  taskList.appendChild(li);
      updateTaskList();
    }
   
    
    document.getElementById('taskinput').value="";
}
 
function removeLastTask()
{ 
     
if(arr<=0)
{
    alert("No more tasks to remove");
}
else
{
 arr.pop();
 console.log(arr);
 updateTaskList();
 //taskList.innerHTML=arr.map(i=>`<li>${i}</li>`).join('');
 

 
}
}


  
function updateTaskList()
{
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML='';

    arr.forEach((task,index)=>{
        const li = document.createElement("li");
      li.textContent=`${index+1}.${task}`;
    
      taskList.appendChild(li);
    })

}

 

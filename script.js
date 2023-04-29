const button =  document.querySelector('.b-task')
const input =   document.querySelector('.inp-task')     
const fullList = document.querySelector('.ul-task')

let myItemList = []

addTaskList = () => {
    myItemList.push({
     task: input.value,
     finish: false
    })
    
    input.value = ''

    showTask()
}

showTask = () =>{

    let newList = ''

    myItemList.forEach((item, i) =>{
        newList = newList + `
        
          <li class="li-task ${item.finish && "done"}">
                <img src="img/checked.png" alt="check" onclick="finishTask(${i})">
                <p>${item.task}</p>
                <img src="img/trash.png" alt="trash" onclick="delItem(${i})">
         </li>
        
        `
    })
    fullList.innerHTML = newList

    localStorage.setItem('list', JSON.stringify(myItemList))
    
}
finishTask = (i) => {
    myItemList[i].finish = !myItemList[i].finish
    showTask()
}

delItem = (i) => {
    myItemList.splice(i, 1)
    showTask()
}
reloadTasks = () => {
    const taskLocalStorage = localStorage.getItem('list')
    if(taskLocalStorage){
        myItemList = JSON.parse(taskLocalStorage)
    }

    console.log(taskLocalStorage)

    showTask()
}
reloadTasks()
button.addEventListener('click', addTaskList)
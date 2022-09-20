var close = document.querySelector('.fa-times')
var open = document.querySelector('.add-todo-trigger-button')
var brack = document.querySelector('.bracket')

open.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display = 'grid'
})

close.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display = 'none'
})


brack.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display = 'none'
})

const allTask = JSON.parse(window.localStorage.getItem("tasks"))

const getTaskByCatg = (catg) => {
  var tasks = allTask.filter(task => {
    return task.category === catg
  })
  var activities = ``;

  tasks.forEach((task, index) => {
    activities +=
      `<div class="activity">
  <div>
    <div class="fa fa-circle"></div>
    <div>
      <div class="">${task.task}</div>
      <div class="date">From ${task.from} | To ${task.to}</div>
    </div>
  </div>

  <div>
    <input type="checkbox" name="done" id="task_${index + 1}">
  </div>
</div>`
  });

  const recentActivitiesCont = document.querySelector('.recent-activities-cont')
  if (activities) {
    recentActivitiesCont.innerHTML = activities
  }
  // return tasks
}

getTaskByCatg("study")

const addModal = document.querySelector('.add-task-modal')

addModal.addEventListener("submit", (e) => {
  e.preventDefault();
  
  var tasks = []
  
  const allTask = JSON.parse(window.localStorage.getItem("tasks"))
  
  if (allTask) {
    allTask.forEach(task => {
      tasks.push(task)
    })
  }
  
  const formData = new FormData(addModal);
  const task = formData.get('task')
  const category = formData.get('category')
  const from = formData.get('from')
  const to = formData.get('to')

  const newTask = {
    task: task, 
    category: category, 
    from: from, 
    to: to
  }
  
  tasks.push(newTask)

  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  window.location.reload()
})


const catgs = document.querySelectorAll('.catg')

catgs.forEach(catg => {
  catg.addEventListener('click', (e)=>{
    const catgName = (e.target.textContent).toLowerCase()
    // console.log(catgName)
    getTaskByCatg(catgName)
  })
})

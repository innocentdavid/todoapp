var close = document.querySelector('.fa-times')
var open = document.querySelector('.add-todo-trigger-button')
var brack = document.querySelector('.bracket')

open.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display='grid'
})

close.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display='none'
})


brack.addEventListener('click', () => {
  document.querySelector('.add-task-modal').style.display='none'
})


var persons = ["Dara", "Ahmed", "AZ", "Cent", "BJ"]
var d = ["Cent"]
var obj = {}

var studyTasks = [
  {name: "Learn Html", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn Html", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn Css", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn Css", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn Css", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn Sass", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn JavaScript", catg: 'study', from: '12/09', to: '16/09'},
  {name: "Learn PHP", catg: 'study', from: '12/09', to: '16/09'},
]
var activities = ``;

studyTasks.forEach(task => {
  activities += `
  <div class="activity">
  <div>
    <div class="fa fa-circle"></div>
    <div>
      <div class="">${task.name}</div>
      <div class="date">From ${task.from} | To ${task.to}</div>
    </div>
  </div>

  <div>
    <input type="checkbox" name="done" id="">
  </div>
</div>
  `
});
  
document.querySelector('.recent-activities-cont').innerHTML=activities
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    updateToDoItem(e.target.description.value)

    form.reset()
  })
});
function updateToDoItem(item) {
  let listItem = document.createElement('li');
  let deletebtn = document.createElement('button')
  deletebtn.addEventListener('click', deleteToDo)

  deletebtn.textContent = "x"
  listItem.textContent = `${item} `
  listItem.appendChild(deletebtn)
  document.getElementById("tasks").append(listItem)
}

function deleteToDo(e) {
  e.target.parentNode.remove()
}
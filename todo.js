const todolist = [];

toupdate();

function toupdate() {
  let todolistHtml = '';

  for (let i = 0; i < todolist.length; i++) {
    const { name, date } = todolist[i];

    todolistHtml += `
     <div>${name}</div>
     <div>${date}</div>
     <button onclick="
          todolist.splice(${i}, 1);          
          toupdate();"
          class="delete_button">DELETE</button>
        `;
  }

  document.querySelector('.listshown').innerHTML = todolistHtml;
}

function addtodo() {
  const nameInput = document.querySelector('.js-name-input');
  const dateInput = document.querySelector('.js-date-input');

  const name = nameInput.value;
  const date = dateInput.value;
  todolist.push({ name, date });

  nameInput.value = '';
  dateInput.value = '';
  toupdate();
}

function navin(event) {
  if (event.key === "Enter") {
    addtodo();
  }
}


function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = taskText;
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
}

document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

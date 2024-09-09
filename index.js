const todolist = ['Watch Televisoin' , 'Client Meeting'];


renderTodoList();

function renderTodoList(){
let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++){
        const todo = todolist[i];
        const html = `<p>${todo}</p>`
        todolistHTML += html;
    }
    console.log(todolistHTML);
    document.querySelector('.result').innerHTML = todolistHTML;
};


function button(){
    const input = document.querySelector('.inputField');
    const name = input.value;
    
    todolist.push(name);
    console.log(todolist);

    input.value = '';

    renderTodoList();
}

//Todolist project Done
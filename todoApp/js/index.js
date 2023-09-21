const taskInput = document.querySelector('.task-input input');
const filters = document.querySelectorAll('.filters span');
const clearAll = document.querySelector('.clear-btn');
const taskBox = document.querySelector('.task-box');

let editId = false;
let isEditTask = false;
// 로컬스토리지 내부 json data를 파싱해서 객체화
let todos = JSON.parse(localStorage.getItem('todo-list'));

filters.forEach((btn)=> {
    btn.addEventListener('click', () => {
        // 필터버튼에서 클릭이 발생하면 span태그들 중 'span active' 라는 클래스명이 있다면 제거하도록 만듦
        document.querySelector('span.actvie').classList.remove('active');
        btn.classList.add('active');
        // id는 all || pending || completed
        showTodo(btn.id)
    });
});

const showTodo = (filterBtnId) => {
    let liTag = '';
    // 로컬 스토리지에 투두리스트 데이터가 존재하면
    if(todos) {
        // todo data , idx
        todos.forEach((todo, id) => {
            // todo의 status가 "completed"라면 "checked" / 아니라면 빈 문자열
            let completed = todo.status == "completed" ? "checked" : '';
            // 버튼 id값이 all이거나 staus를 나타내는 경우
            if(filterBtnId == todo.status || filterBtnId == 'all') {
                liTag += 
                `
                    <li class="task">
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                            <p class="${completed}">${todo.name}</p>
                        </label>
                        <div class="settings">
                            <i onclick="showMenu(this)" class="fa-light fa-ellipsis"></i>
                            <ul class="task-menu">
                                <li onclick="editTask(${id}, '${todo.name}')"><i class="fa-solid fa-pen"></i>Edit</li>
                                <li onclick="deleteTask(${id}, '${filterBtnId}')"><i class="fa-solid fa-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>
                `
            }
            // li tag가 존재하면 liTag를 넣거나 없으면 뒷 문장을 innerHtml로 추가
            taskBox.innerHTML = liTag || `<span>Yon don' have any task here</span>`
            // 만약 liTag들이 생성되었다면, task li 태그을 조작
            let checkTask = taskBox.querySelectorAll('.task');
            // 업무가 하나 이상 리스트에 존재한다면 클리어버튼을 활성화
            checkTask.length ? clearAll.classList.add('active') : clearAll.classList.remove('active');
        })
    }   
}   

showTodo('all');

const showMenu = (selectedTask) => {
    // 
    let taskMenuDiv = selectedTask.parentElement.lastElementchild;
    taskMenuDiv.classList.add('show');
    document.addEventListener('click', (e) => {
        // 현재 클릭된 요소의 태그 이름이 i가 아니거나 현재 선택된 업무가 아니면
        if(e.target.tagName != "I" || e.target != selectedTask) {
            taskMenuDiv.classList.remove('show');
        }
    })
}

const updateStatus = (selectedTask) => {
    let taskName = selectedTask.parentElement.lastElementchild;
    // selectedTask의 클래스 목록에 checked가 존재하면
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        // status를 "완료"로
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove('checked');
        // status를 "대기"로
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

const editTask = (taskId, textName) => {
    // just for utilizing id value
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add('active');    
}

const deleteTask = (deleteId, filterBtnId) => {
    isEditTask = false,
    // 요소 하나만 잘라내기
    todos.splice(deleteId, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    // 지워진 updated todos로 다시 show
    showTodo(filterBtnId);
}


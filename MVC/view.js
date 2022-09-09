export const View = (() => {
    const domstr = {
        todocontainer: '#todolist_container', 
        inputbox: '.todolist__input',
        todocontainer2: '#todolist_container2',
    };
    
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = '';
        arr.forEach((todo) => {
            tmp += `
        <li>
            <span> ${todo.id}:${todo.title}</span>
            <button class="editbtn" id="${todo.id}">Edit</button>
            <button class="deletebtn" id="${todo.id}">X</button>
            <button class="switchRight" id="${todo.id}">-></button>
        </li>
        `;
        });
        return tmp;
    };
    return {
        render, 
        createTmp,
        domstr,
    };
})();
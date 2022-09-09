
export const Api = (() => {
    const baseUrl = 'http://localhost:3000';

    const todoPath = 'todos';

    const getTodos = () => 
        fetch([baseUrl, todoPath].join('/'))
        .then((res) => res.json());
    
    const addTodo = (todo) => 
        fetch([baseUrl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json());
    
    const deleteTodo = (id) => {
        fetch([baseUrl, todoPath, id].join('/'), {
            method: "Delete",
        });
    }

    const editTodo = (todo, id) => {
        fetch([baseUrl, todoPath, id].join('/'), {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())
    }

    const updateStatus = (todo, id) => {
        fetch([baseUrl, todoPath, id].join('/'), {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())
    }
       
    return {
        getTodos,
        addTodo,
        deleteTodo,
        editTodo,
        updateStatus,
    };
})();
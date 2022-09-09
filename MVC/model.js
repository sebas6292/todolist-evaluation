export const Model = ((api, view) => {
    const { getTodos, addTodo, deleteTodo, editTodo, updateStatus } = api;

    class Todo { 
        constructor(title){
            this.userId = 1; 
            this.completed = false;
            this.title = title; 
        }
    }

    class State { 
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newtodolist) {
            this.#todolist = newtodolist;

            const todocontainer = document.querySelector(view.domstr.todocontainer);
            const tmp = view.createTmp(this.#todolist);

            view.render(todocontainer, tmp);
        }
    }
    return {
        getTodos,
        State,
        Todo,
        addTodo,
        deleteTodo,
        editTodo,
        updateStatus,
    };
})(Api, View);
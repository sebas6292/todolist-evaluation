import { Api } from "./MVC/api.js";

import { View } from "./MVC/view.js";

const Model = ((api, view) => {
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

const Controller = ((model, view) => {
    const state = new model.State();

    const addTodo = () => {
        const inputbox = document.querySelector(view.domstr.inputbox);
        inputbox.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value.trim() !== '') {
                const todo = new model.Todo(event.target.value);
                model.addTodo(todo).then((todofromBE) => {
                    console.log(todofromBE);
                    state.todolist = [todofromBE, ...state.todolist];
                });
                event.target.value = '';
            }
        });
    };

    const deleteTodo = () => {
        const todocontainer = document.querySelector(view.domstr.todocontainer);
        todocontainer.addEventListener('click', (event) => {
            if (event.target.className === 'deletebtn') {
                state.todolist = state.todolist.filter(
                    (todo) => +todo.id !== +event.target.id);
                    model.deleteTodo(event.target.id);
            }
        });
    };

    const editTodo = () => {
        const todocontainer = document.querySelector(view.domstr.todocontainer);
        todocontainer.addEventListener('click', (event) => {
            if (event.target.className === 'editbtn') {

                // const todo = new model.Todo(event.target.value);
                // model.addTodo(todo).then((todofromBE) => {
                //     console.log(todofromBE);
                //     state.todolist = [todofromBE, ...state.todolist];
                // });
                // event.target.value = '';
                // state.todolist = state.todolist.map(
                //     (todo) => +todo.id === +event.target.id);
                //     model.editTodo(event.target.id);
            }
        })
    }

    const updateStatus = () => {
        const todocontainer = document.querySelector(view.domstr.todocontainer); 
        todocontainer.addEventListener('click', (event) => {
            if (event.target.className === 'switchRight') {
                //running out of time... 
            }
        })
    }

    const init = () => {
        model.getTodos().then((todos) => {
          state.todolist = todos;
        });
      };
    
      const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
        editTodo();
        updateStatus();
      };
    
      return { bootstrap };
      

})(Model, View);


Controller.bootstrap();
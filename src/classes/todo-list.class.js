import { Todo } from "./todo.class";

export class TodoList {

    //esto crea el array vacio donde iran todas las tareas
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    // esto inserta la tarea nueva en  el array
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    // esto elimina la tarea marcada del array
    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id)
            //esta condicion maraca que voy a examinara y luego regresar un 
            //nuevo arreglo excluyendo lo que coincida con ese id
        this.guardarLocalStorage();
    }

    //esto va a servir para marcarlo como completado   
    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocalStorage();
    }

    // no voy a necesitar recibir nada porque tendre un arreglo donde tengo todos los completados
    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }



    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    // hacemos un if con un operador ternario para optimizar codigo /  () ? :  ;/
    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        //convertir un arreglo de objetos devuletos asi nomas  auna instancia de "todos" nuevamente                
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}
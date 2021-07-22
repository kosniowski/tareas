
import React, { Fragment, useState, useRef, useEffect } from 'react';
// componente lista de todos
import { Todolist } from './components/Todolist';
// importamos id aletorios
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';



// constante de almacenamiento local

const KEY ='todoApp.todos'

export function App(){

    const [todos, setTodos] = useState([
        // pasamos un array  con datos usando el hook de estado
        { id: 1, task: 'Tarea 1', completed: false },
    ]);

    // hook de referencia

    const todoTaskRef = useRef();

    // hook de ciclo de vida 1 estado inicial
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);


    // hook de ciclo de vida 2 mantnimiento de informacion 

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
     }, [todos]);

    // funcion de completadas

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    // funcion de agregar

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;
    

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task, completed: false }]
        });
        // reset  el valor de tareas
        todoTaskRef.current.value = null;
    };
    
    /// eliminar tareas completadas

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        // utilizamos fragment para evitar errores en el estilado
        <Fragment >
            
            <Paper style={{ padding: '20px', width: 'auto', display: 'float', margin: 'auto', maxWidth: '200em', background: '#ECE9D5' }} elevation={6} >

              <Paper style={{ padding: '20px', width: 'auto', display:'float', margin: 'auto', background:'#2ECDBF', maxWidth:'19em'}} elevation={6} >   
                    <h1 style={{ padding: '10px', width: 'auto', display: 'float', margin: 'auto', textAlign: 'center', fontFamily: 'monospace' }}>LISTA DE TAREAS</h1>
                    </Paper>

            <div style={{ display:'white', height: '10px'}}></div>
            
            <Paper style={{ padding: '20px', width: 'auto', display:'float', margin: 'auto', background: '#33333D',maxWidth:'16em'}} elevation={6} >
                <h2 style={{textAlign:'center', fontFamily: 'monospace', color:'white'}}>ESCRIBE UNA NUEVA TAREA</h2>

               <div style={{paddingLeft:'3em'}}>  <input style={{fontFamily: 'monospace'}} ref={todoTaskRef} type='text' placeholder="Nueva Tarea" /><a>{' '}</a>
                     </div>
                <div style={{ display: 'white', height: '10px' }}></div>
                
               <div style={{marginLeft: '6em'}}> <Button variant="contained" color="primary" onClick={handleTodoAdd} >➕</Button>
                <a>{' '}</a>
              </div>
             </Paper>

                
            <div style={{ display:'white', height: '10px'}}></div>
            
             <Paper style={{ padding: '20px', width: 'auto', display:'float', margin: 'auto', background:'#2ECDBF', maxWidth:'16em'}} elevation={6} >
               
                  <h2 style={{textAlign:'center', fontFamily: 'monospace'}}>TAREAS PENDIENTES</h2>
                <Todolist todos={todos} toggleTodo={toggleTodo} />
                 <a>{' '}</a>
                   
               <div style={{marginLeft: '6em'}}>   <Button variant="contained" color="secondary" onClick={handleClearAll} >🗑️</Button> </div>  
                    <p style={{textAlign:'center', fontFamily: 'monospace'}}>Selecciona y elimina las tareas terminadas</p>
            </Paper>

             
            <div style={{ display:'white', height: '10px'}}></div>
            
            <Paper style={{ padding: '20px', width: 'auto', display: 'float', margin: 'auto', background: '#33333D',maxWidth:'19em', color:'white'}} elevation={6} >
                 
                <h2 style={{ fontFamily: 'monospace',textAlign: 'center'}}>Te quedan {todos.filter((todo) => !todo.completed).length} Tareas por terminar !!!</h2>
                </Paper>
                </Paper>
       
     </Fragment>           
    );
}

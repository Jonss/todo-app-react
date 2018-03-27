import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
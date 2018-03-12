import React, {Component} from 'react'
import IconButton from '../template/iconButton'

export default class TodoList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton style="danger" icon="trash-o" onClick={() => this.props.handleRemove(todo)}/>
                    </td>
                </tr>
            ))
        
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }

                </tbody>
            </table>
        )
    }
}
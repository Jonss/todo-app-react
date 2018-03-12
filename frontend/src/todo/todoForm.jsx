import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TodoForm extends Component {
    render() {
        return(

            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input  id="description" placeholder="Adicione uma tarefa"
                        onChange={this.props.handleChange}
                     value={this.props.description} className="form-control"></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                </Grid>
            </div>
        )
    }
}
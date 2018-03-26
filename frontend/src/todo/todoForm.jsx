import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        console.log("Props" , props)
        this.keyHandler = this.keyHandler.bind(this)

    }

    keyHandler(e) {
        if (e.key == 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key == 'Escape') {
             this.props.handleClear() 
        }
    }

    render() {
        return(

            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input  id="description" 
                        placeholder="Adicione uma tarefa"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.handleChange}
                        value={this.props.description}
                         className="form-control"></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description})

export default connect(mapStateToProps)(TodoForm)
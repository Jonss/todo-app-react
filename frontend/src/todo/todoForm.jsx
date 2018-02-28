import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return(
            <div role="form" className="todoForm">
                <div className="col-xs-12  col-sm-9 col-md-9">
                    <input  id="description" placeholder="Adicione uma tarefa" className="form-control"></input>
                </div>
                <div className="col-xs-12  col-sm-3 col-md-2">
                    <button className="btn btn-primary">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}
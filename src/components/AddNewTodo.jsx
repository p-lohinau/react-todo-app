import React, { Component, Fragment } from 'react'

export default class AddNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: 0
        }
    }

    handleChange = ({ target }) => {
        this.setState({ name: target.value });
    }

    handleClick = () => {
        const newTodo = this.state;
        this.setState({ id: 0, name: '' });
        this.props.addTodo(newTodo);
    }

    render() {
        const { placeHolder, buttonName } = this.props;
        return (
            <Fragment>
                <input placeholder={placeHolder} onChange={this.handleChange} value={this.state.name}></input>
                <button className={'waves-effect waves-light btn-large width'} onClick={this.handleClick}>{buttonName}</button>
            </Fragment>
        )
    }
}
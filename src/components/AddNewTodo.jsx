import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class AddNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: 0
        }
    }

    static defaultProps = {
        buttonName: '',
        placeHolder: '',
        addTodo: null
    }

    static propTypes = {
        buttonName: PropTypes.string,
        placeHolder: PropTypes.string,
        addTodo: PropTypes.func
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
                <input placeholder={placeHolder} onChange={this.handleChange} value={this.state.name} maxLength={25}></input>
                <button className={'waves-effect waves-light btn-large width'} onClick={this.handleClick}>{buttonName}</button>
            </Fragment>
        )
    }
}
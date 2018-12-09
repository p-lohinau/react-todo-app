import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class AddNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: undefined,
            id: undefined,
            title: undefined
        }
    }

    static defaultProps = {
        addTodo: null,
        buttonName: undefined,
        placeholder: undefined
    }

    static propTypes = {
        addTodo: PropTypes.func,
        buttonName: PropTypes.string,
        placeholder: PropTypes.string,
    }

    handleChange = (event) => {
        if (event.key === "Enter") {
            this.handleClick();
        } else {
            this.setState({
                title: event.target.value
            });
        }
    }

    handleClick = () => {
        const newTodo = this.state;
        this.setState({
            id: 0,
            title: '',
            completed: false
        });
        this.props.addTodo(newTodo);
    }

    render() {
        const { buttonName, placeholder } = this.props;
        return (
            <Fragment>
                <input
                    maxLength={25}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                    placeholder={placeholder}
                    value={this.state.title} />
                <div className="center">
                <button
                    className={'waves-effect waves-light btn-large'}
                    onClick={this.handleClick}>
                    {buttonName}
                    </button>
                </div>
            </Fragment>
        )
    }
}
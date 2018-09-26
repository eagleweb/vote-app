import React, { Component} from 'react'

export default class InfoComponent extends Component {
    constructor(props) {
        super(props)
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick(event) {
        return this.props.changeNumFunction(+event.target.textContent)
    }

    render() {
        const { count } = this.props;
        return (
            <div>
                <h2>Welcome to Info page</h2>
                <div>
                    <p>{count}</p>
                    <button onClick={this.onBtnClick} className="btn-success">1</button>
                    <button onClick={this.onBtnClick} className="btn-danger">5</button>
                </div>
            </div>
        );
    }
}
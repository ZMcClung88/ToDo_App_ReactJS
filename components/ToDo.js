import React from 'react';
import styles from '../public/style.css';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: '',
      list: ['one', 'two', 'three']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    // console.log(event.target.value);
    this.setState(function() {
      return {
        listItem: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.listItem);
    var newArray = this.state.list.slice();
    newArray.push(this.state.listItem);
    this.setState({
      listItem: '',
      list: newArray
    });
  }

  render() {
    var list = this.state.list;
    return (
      <div className="container">
        <h1>
          To-Do ({list.length})
        </h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            id="todo-item"
            // placeholder="github username"
            type="text"
            value={this.state.listItem}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </form>
        <ul>
          {list.map(item =>
            <li className="list-item" key={item}>
              {item}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ToDo;

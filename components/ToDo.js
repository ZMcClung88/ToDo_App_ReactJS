import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: '',
      list: []
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
  }

  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="todo-item"
            // placeholder="github username"
            type="text"
            value={this.state.listItem}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </form>
        <ul />
      </div>
    );
  }
}

export default ToDo;

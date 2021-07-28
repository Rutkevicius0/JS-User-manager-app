import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    newUserData: {
      username: '',
      age: '',
      email: '',
      password: '',
    },
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      entryData: {
        ...this.state.entryData,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    const { username, age, email, password } = this.state.newUserData;
    return (
      <div className="form-container">
        <h2>Create New User</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={this.handleChange}
              value={username}
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              class="form-control"
              id="age"
              onChange={this.handleChange}
              value={age}
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;

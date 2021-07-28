import React, { Component } from 'react';

class SingleUserEdit extends Component {
  state = {
    userDataEdit: {
      username: this.props.singleUserData.username,
      age: this.props.singleUserData.age,
      email: this.props.singleUserData.email,
      password: this.props.singleUserData.password,
    },
  };

  handleChange = (event) => {
    this.setState({
      userDataEdit: {
        ...this.state.userDataEdit,
        [event.target.id]: event.target.value,
      },
    });
  };
  render() {
    const { username, age, email, password } = this.state.userDataEdit;
    return (
      <div>
        <div>
          <div className="form-group">
            <label htmlFor="usernameEdit">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={this.handleChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ageEdit">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              onChange={this.handleChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailEdit">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordEdit">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <button
            onClick={() =>
              this.props.onEdit(
                this.props.singleUserData._id,
                this.state.userDataEdit,
              )
            }
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default SingleUserEdit;

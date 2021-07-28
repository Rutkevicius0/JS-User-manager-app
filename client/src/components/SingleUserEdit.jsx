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
      <div className="single-user-edit">
        <div className="form-group">
          <label htmlFor="usernameEdit">Vartotojo vardas</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={this.handleChange}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ageEdit">Amžius</label>
          <input
            type="number"
            className="form-control"
            id="age"
            onChange={this.handleChange}
            value={age}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailEdit">El. pašto adresas</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={this.handleChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordEdit">Slaptažodis</label>
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
          className="btn btn-success"
        >
          Išsaugoti
        </button>
      </div>
    );
  }
}

export default SingleUserEdit;

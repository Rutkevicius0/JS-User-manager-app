import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    newUserData: {
      username: '',
      age: '',
      email: '',
      password: '',
      isEditOn: false,
    },
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      newUserData: {
        ...this.state.newUserData,
        [event.target.id]: event.target.value,
      },
    });
  };
  handleClearForm() {
    const newUserData = {
      username: '',
      age: '',
      email: '',
      password: '',
    };
    this.setState({ newUserData });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.onAddNewUser(this.state.newUserData);
    this.handleClearForm();
    this.props.onToGetAllUsers();
  };
  render() {
    const { username, age, email, password } = this.state.newUserData;
    return (
      <div className="form-container">
        <h2 className="form-title">Sukurti naują vartotoją</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Vartotojo vardas</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={this.handleChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Amžius</label>
            <input
              type="number"
              className="form-control"
              id="age"
              onChange={this.handleChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">El. pašto adresas</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Siųsti
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;

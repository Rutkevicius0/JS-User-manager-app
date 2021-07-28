import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import { getAllUsers, addNewUser, deleteUser } from './utilities/requests';

class App extends Component {
  state = {
    allUsers: [],
  };
  componentDidMount() {
    this.toGetAllUsers();
    console.log(this.state.allUsers);
  }
  toGetAllUsers = async () => {
    this.setState({ allUsers: await getAllUsers() });
  };
  handleDelete = async (id) => {
    await deleteUser(id);
    this.toGetAllUsers();
  };

  render() {
    return (
      <div className="app-container">
        <h1>Vartotojų tvarkyklė</h1>
        <UserForm
          onAddNewUser={addNewUser}
          onToGetAllUsers={this.toGetAllUsers}
        />
        <UsersList
          allUsers={this.state.allUsers}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;

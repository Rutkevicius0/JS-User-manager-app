import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import {
  getAllUsers,
  addNewUser,
  deleteUser,
  editUser,
} from './utilities/requests';

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
  handleEdit = async (userId, updatedUserData) => {
    const found = this.state.allUsers.find((user) => user._id === userId);
    let updated = {};
    if (found.isEditOn === false) {
      updated = { ...found, isEditOn: true };
      await editUser(userId, updated);
    }
    if (found.isEditOn === true) {
      updated = { ...updatedUserData, isEditOn: false };
      await editUser(userId, updated);
    }
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
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;

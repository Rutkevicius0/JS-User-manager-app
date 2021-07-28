import React, { Component } from 'react';
import SingleUser from './SingleUser';
import SingleUserEdit from './SingleUserEdit';

class UsersList extends Component {
  state = {};
  render() {
    return (
      <div className="card-group">
        {this.props.allUsers.map((u) => {
          return u.isEditOn === false ? (
            <SingleUser
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              singleUserData={u}
              key={u._id}
            />
          ) : (
            <SingleUserEdit
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              singleUserData={u}
              key={u._id}
            />
          );
        })}
      </div>
    );
  }
}

export default UsersList;

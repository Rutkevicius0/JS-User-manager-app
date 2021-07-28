import React, { Component } from 'react';
import SingleUser from './SingleUser';

class UsersList extends Component {
  state = {};
  render() {
    return (
      <div className="card-group">
        {this.props.allUsers.map((u) => {
          return (
            <SingleUser
              onDelete={this.props.onDelete}
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

import React, { Component } from 'react';

class SingleUser extends Component {
  state = {};
  render() {
    const { _id, username, age, email, password } = this.props.singleUserData;
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body bg-light">
          <h5 className="card-title">{username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
          <p>{email}</p>
          <p>{password}</p>
          <div>
            <button>Edit</button>
            <button onClick={() => this.props.onDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUser;

import React, { Component } from 'react';

class SingleUser extends Component {
  state = {};
  render() {
    const { _id, username, age, email, password } = this.props.singleUserData;
    return (
      <div div className="card" style={{ width: '18rem' }}>
        <div className="card-body bg-light">
          <h5 className="card-title">{username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
          <p>{email}</p>
          <p>{password}</p>
          <div>
            <button
              className="btn btn-primary mr-1"
              onClick={() => {
                this.props.onEdit(_id);
              }}
            >
              Redaguoti
            </button>
            <button
              className=" btn btn-danger"
              onClick={() => this.props.onDelete(_id)}
            >
              Trinti
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUser;

import React, { Component } from 'react';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      isError: false,
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?page=1&results=50&seed=FD2020')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ users: res.results });
      });
  }

  render() {
    const { users, isFetching, isError } = this.state;

    return (
      <ul>
        {users.map((user) => {
          return <li key={user.login.uuid}>{JSON.stringify(user)}</li>;
        })}
      </ul>
    );
  }
}

export default UserLoader;

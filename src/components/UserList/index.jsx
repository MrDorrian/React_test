import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('/users.json')
      .then((res) => res.json())
      .then((users) => this.setState({ users, isFetching: false }))
      .catch((e) => this.setState({ error: e, isFetching: false }));
  }

  render() {
    const { users, isFetching, error } = this.state;
    if (isFetching) {
      return <div>Fetching</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <ol>
        {users.map((u) => (
          <li key={u.id}>
            {' '}
            {u.firstName} {u.lastName}
          </li>
        ))}
      </ol>
    );
  }
}

export default UserList;

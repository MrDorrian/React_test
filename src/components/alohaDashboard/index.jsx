import { Component } from 'react';
import Aloha from '../greeting';

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapAloha = (user) => (
    <li key={user.id}>
      <Aloha name={`${user.name} ${user.lastName}`}></Aloha>
    </li>
  );

  render() {
    const { users } = this.props;
    return <ul>{users.map(this.mapAloha)}</ul>;
  }
}

export default AlohaDashboard;

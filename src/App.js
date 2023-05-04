import './App.css';
import { Component } from 'react';
import { Header } from './components/TestTaskPage/Header';
import { SideBarUser } from './components/TestTaskPage/SidebarUser';
import { UserContext } from './context/UserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'Max',
        lastName: 'Takanyan',
        url: 'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000',
      },
    };
  }

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        <div>
          <Header />
          <SideBarUser />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

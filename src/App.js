import './App.css';
import {Component} from "react";
import {UserList} from "./components/userList";
import {SelectedUserList} from "./components/SelectedUserList";

const userDB = [
    {id: 1, name: 'James', lastName: 'Edisson'},
    {id: 2, name: 'Jonas', lastName: 'Jonason'},
    {id: 3, name: 'Makil', lastName: 'Ratnik'},
    {id: 4, name: 'Tron', lastName: 'Copit'},
    {id: 5, name: 'Robert', lastName: 'Leonsorn'},
    {id: 6, name: 'Endy', lastName: 'Frankovsky'}];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userDB.map((user) => ({...user, isSelected: false})),
        }
    }

    setUsers = (newUsers) => this.setState({users: [...newUsers]});

    render() {
        const {users} = this.state;
        return (
            <>
                <header>
                    <SelectedUserList users={[...users]}/>
                </header>
                <main>
                    <UserList users={users} setUsers={this.setUsers}/>
                </main>
            </>)
    }
}

export default App;

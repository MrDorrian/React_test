import {Component} from "react";
import {UserCard} from "./UserCard";


export class UserList extends Component {

    userSelector = (id) => {
        const {users, setUsers} = this.props;
        const newUsers = [...users];
        const mapNewUsers = (user) => ({...user, isSelected: id === user.id ? !user.isSelected : user.isSelected});
        setUsers(newUsers.map(mapNewUsers))
    }

    mapUsers = (user) => <UserCard key={user.id} user={user} userSelector={this.userSelector}></UserCard>;

    render() {
        const {users} = this.props
        return <section>
            <h1>User List From DB</h1>
            {users.map(this.mapUsers)}
        </section>
    }
}

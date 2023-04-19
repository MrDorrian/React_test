export const SelectedUserList = (props) => {
    const {users = []} = props;
    const filteredUsers = users.filter((user) => (user.isSelected));
    return <div>
        {filteredUsers.map((user) => (
            <span>{user.name}{user.lastName}</span>
        ))}
    </div>
}

export function UserCard(props) {
    const {user: {id, name, lastName, isSelected}, userSelector} = props;
    const styles = {
        border: isSelected ? '2px solid blue' : undefined,
    }
    const btnHandler = () => userSelector(id);
    return (
        <article style={styles}>
            <h1>Full name: {name} {lastName}</h1>
            <p>ID: {id}</p>
            <button onClick={btnHandler}>Select user</button>
        </article>
    )
}

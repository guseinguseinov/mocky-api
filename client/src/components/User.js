import PropTypes from 'prop-types';

function User(props) {
    console.log(props);
    return (
        <>
            <h1>{props.isLoggedIn ? `Hello from ${props.name}` : "Gir da gij"}</h1>
            {
                props.friends.map(friend => <div key={friend.id}>{friend.id}:{friend.name}</div>)
            }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string,
}

export default User;
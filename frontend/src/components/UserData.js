

const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;
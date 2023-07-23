const CenterData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, location } = curUser;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
          </tr>
        );
      })}
    </>
  );
};
export default CenterData;

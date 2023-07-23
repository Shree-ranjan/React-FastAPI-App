const VaccineData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, manufacturer } = curUser;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{manufacturer}</td>
          </tr>
        );
      })}
    </>
  );
};
export default VaccineData;

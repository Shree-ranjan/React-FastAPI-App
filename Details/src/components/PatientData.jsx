const PatientData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, age, gender } = curUser;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
          </tr>
        );
      })}
    </>
  );
};
export default PatientData;

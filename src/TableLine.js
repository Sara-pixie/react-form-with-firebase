export default function TableLine(props) {
  return (
      <tr className="TableLine" key={props.index}>
          <td>{props.user.name}</td>
          <td>{props.user.surname}</td>
          <td>{props.user.email}</td>
      </tr>
  );
}
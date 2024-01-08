import React from "react";

type Props = { citizenId: number; date: string; misdemeanour: string };

const Incident: React.FC<Props> = ({ citizenId, date, misdemeanour }) => {
  return (
    <tr key={citizenId}>
      <td>{citizenId}</td>
      <td>{date}</td>
      <td>{misdemeanour}</td>
    </tr>
  );
};

export default Incident;

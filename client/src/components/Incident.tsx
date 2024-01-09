import React from "react";
import Punishment from "./Punishment";

type Props = {
  citizenId: number;
  date: string;
  misdemeanour: string;
};

const Incident: React.FC<Props> = ({ citizenId, date, misdemeanour }) => {
  return (
    <tr>
      <td>{citizenId}</td>
      <td>{date}</td>
      <td>{misdemeanour}</td>
      <td>
        <Punishment width={100} height={100} />
      </td>
    </tr>
  );
};

export default Incident;

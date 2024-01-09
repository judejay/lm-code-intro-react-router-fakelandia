import React from "react";

type Props = {
  citizenId: number;
  date: string;
  misdemeanour: string;
  url: string;
};

const Incident: React.FC<Props> = ({ citizenId, date, misdemeanour, url }) => {
  return (
    <tr>
      <td>{citizenId}</td>
      <td>{date}</td>
      <td>{misdemeanour}</td>
      <td>{<img src={url} />}</td>
    </tr>
  );
};

export default Incident;

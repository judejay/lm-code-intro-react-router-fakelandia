import React from "react";

type Props = { citizenId: number; date: string; misdemeanour: string };

const Incident: React.FC<Props> = ({ citizenId, date, misdemeanour }) => {
  return (
    <>
      <p>{citizenId}</p>
      <p>{date}</p>
      <p>{misdemeanour}</p>
    </>
  );
};

export default Incident;

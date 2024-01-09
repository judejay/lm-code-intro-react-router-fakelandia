import { Misdemeanour } from "../types/misdemeanor.types";
import { useMyContext } from "../hooks/useContext";
import { useEffect, useState } from "react";
import Incident from "./Incident";

export interface ResponseData {
  misdemeanours: Misdemeanour[];
}
//const url = "https://picsum.photos/100/100";

const Misdemeanor: React.FC = () => {
  const [data, setData] = useState<Misdemeanour[]>([]);
  const { fetchData } = useMyContext();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData();

        setData(data.misdemeanours);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, [fetchData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((incident) => (
          <Incident
            key={incident.citizenId}
            citizenId={incident.citizenId}
            date={incident.date}
            misdemeanour={incident.misdemeanour}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Misdemeanor;

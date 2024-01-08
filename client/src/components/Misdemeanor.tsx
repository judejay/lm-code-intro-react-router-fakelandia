import { Misdemeanour } from "../types/misdemeanor.types";
import { useMyContext } from "../hooks/useContext";
import { useEffect, useState } from "react";
import Incident from "./Incident";

export interface ResponseData {
  misdemeanours: Misdemeanour[];
}

const Misdemeanor: React.FC = () => {
  // if (isFetching) return <p>Fetching</p>;
  // if (errorMessage) return <p>{errorMessage}</p>;
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
        <th>Citizen ID</th>
        <th>Date</th>
        <th>Misdemeanour</th>
      </thead>
      <tbody>
        {data.map((incident) => (
          <Incident
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

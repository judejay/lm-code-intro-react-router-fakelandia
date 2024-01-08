import { Misdemeanour } from "../types/misdemeanor.types";
import { useMyContext } from "../hooks/useContext";
import { useEffect, useState } from "react";

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

  return data.map((incident, index) => (
    <div key={index}>
      <p>{incident.citizenId}</p>
      <p>{incident.date}</p>
      <p>{incident.misdemeanour}</p>
    </div>
  ));
};
export default Misdemeanor;

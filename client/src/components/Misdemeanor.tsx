import useFetch from "../hooks/useFetch";
import { Misdemeanour } from "../types/misdemeanor.types";

interface ResponseDate {
  misdemeanours: Misdemeanour[];
}

const Misdemeanor: React.FC = () => {
  const serverUrl = "http://localhost:8080/api/misdemeanours/1";

  const { isFetching, data, errorMessage } = useFetch<ResponseDate>(serverUrl);
  if (isFetching) return <p>Fetching</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  if (data)
    return data.misdemeanours.map((incident, index) => (
      <div key={index}>
        <p>{incident.citizenId}</p>
        <p>{incident.date}</p>
        <p>{incident.misdemeanour}</p>
      </div>
    ));
};
export default Misdemeanor;

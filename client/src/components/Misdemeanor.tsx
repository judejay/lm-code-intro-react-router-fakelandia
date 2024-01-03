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
  if (data) return <p>{data.misdemeanours.map((I) => I.citizenId)}</p>;
};
export default Misdemeanor;

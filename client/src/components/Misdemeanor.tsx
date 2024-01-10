import { Misdemeanour } from "../types/misdemeanor.types";
import { useMyContext } from "../hooks/useContext";
import { useState } from "react";
import Incident from "./Incident";
import "./Misdemeanor.css";
export interface ResponseData {
  misdemeanours: Misdemeanour[];
}

const Misdemeanor: React.FC = () => {
  //const [data, setData] = useState<Misdemeanour[]>([]);
  const { data } = useMyContext();
  const [selectedMisdemeanor, setSelectedMisdemeanor] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMisdemeanor(event.target.value);
  };

  const filteredData = selectedMisdemeanor
    ? data.filter(incident => incident.misdemeanour === selectedMisdemeanor)
    : data;



  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>{<select value={selectedMisdemeanor} onChange={handleSelectChange}>
              <option value="">All Misdemeanour</option>
              <option value="lift">Lift</option>
              <option value="vegetables">Vegetables</option>
              <option value="rudeness">Rudeness</option>
              <option value="united">United</option>
            </select>}</th>
            <th>Punishment</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((incident) => (
            <Incident
              key={incident.citizenId}
              citizenId={incident.citizenId}
              date={incident.date}
              misdemeanour={incident.misdemeanour}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Misdemeanor;

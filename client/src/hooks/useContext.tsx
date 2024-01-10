import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ResponseData } from "../components/Misdemeanor";
import { Misdemeanour } from "../types/misdemeanor.types";

interface Props {
  children?: React.ReactNode;
}
interface ContextProps {
  fetchData: () => Promise<ResponseData>;
  data: Misdemeanour[];
  setData: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}
export const MisdemeanorContext = createContext<ContextProps | undefined>(
  undefined
);

const serverUrl = "http://localhost:8080/api/misdemeanours/5";

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = (): ContextProps => {
  const context = useContext(MisdemeanorContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const MyContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Misdemeanour[]>([]);

  const fetchData = useCallback(async (): Promise<ResponseData> => {
    const response = await fetch(serverUrl);
    const data = await response.json();
    return data;
  }, []);

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
  }, [fetchData, setData]);

  const contextValue: ContextProps = {
    fetchData,
    data,
    setData,
  };

  return (
    <MisdemeanorContext.Provider value={contextValue}>
      {children}
    </MisdemeanorContext.Provider>
  );
};

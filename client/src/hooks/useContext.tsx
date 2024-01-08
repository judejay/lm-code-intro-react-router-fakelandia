import { createContext, useContext } from "react";
import { ResponseData } from "../components/Misdemeanor";

interface Props {
  children?: React.ReactNode;
}
interface ContextProps {
  fetchData: () => Promise<ResponseData>;
}
export const MisdemeanorContext = createContext<ContextProps | undefined>(
  undefined
);

const serverUrl = "http://localhost:8080/api/misdemeanours/1";

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = (): ContextProps => {
  const context = useContext(MisdemeanorContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const MyContextProvider: React.FC<Props> = ({ children }) => {
  const fetchData = async (): Promise<ResponseData> => {
    const response = await fetch(serverUrl);
    const data = await response.json();
    return data;
  };

  const contextValue: ContextProps = {
    fetchData,
  };

  return (
    <MisdemeanorContext.Provider value={contextValue}>
      {children}
    </MisdemeanorContext.Provider>
  );
};

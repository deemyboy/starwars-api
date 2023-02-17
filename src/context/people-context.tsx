import { createContext, useContext } from "react";
import { IPerson } from "../types/iperson";

const PeopleContext = createContext<Array<IPerson>>([]);
export const usePeople = () => {
    return useContext(PeopleContext);
};

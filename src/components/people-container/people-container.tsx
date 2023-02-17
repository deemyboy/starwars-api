import React from "react";
import { IPerson } from "../../types/iperson";
import { Person } from "../person/person";
interface IPeopleContainerProps {
    people: Array<IPerson>;
}

export const PeopleContainer: React.FC<IPeopleContainerProps> = ({
    people,
}) => {
    return (
        <>
            {people.map((person, i) => {
                return <Person key={i} name={person.name} url={person.url} />;
            })}
        </>
    );
};

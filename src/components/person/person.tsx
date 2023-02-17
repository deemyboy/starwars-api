import React from "react";
import { IPerson } from "../../types/iperson";

export const Person: React.FC<IPerson> = ({ name, url }) => {
    return (
        <>
            <p>name = {name}</p>
            <p> url = {url}</p>
        </>
    );
};

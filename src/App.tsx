import React, { useEffect, useState } from "react";
import "./App.css";
import { IPerson } from "./types/iperson";
import { PeopleContainer } from "./components/people-container/people-container";

function App() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [people, setPeople] = useState<Array<IPerson>>([]);
    useEffect(() => {
        // getPeople(currentPage);
        getPerson(currentPage);
    }, [currentPage]);

    const nextPage = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };
    const prevPage = () => {
        const prevPage = currentPage > 1 ? currentPage - 1 : 1;
        setCurrentPage(prevPage);
    };

    const getPeople = async (pageNumber: number) => {
        const apiResponse = await fetch(
            `https://swapi.dev/api/people/?page=${pageNumber}`
        );
        const apiResponseJson = (await apiResponse.json()) as {
            results: IPerson[];
        };
        setPeople(apiResponseJson.results);
    };
    const getPerson = async (id: number) => {
        const personArray: IPerson[] = [];
        const apiResponse = await fetch(`https://swapi.dev/api/people/${id}`);
        const apiResponseJson = await apiResponse.json();
        personArray.push(apiResponseJson);
        setPeople(personArray);
    };
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={nextPage} value="next page">
                    next page
                </button>
                <button onClick={prevPage} value="prev page">
                    prev page
                </button>

                <h1>This is Star Wars</h1>
            </header>
            <div>
                people go here
                <PeopleContainer people={people} />
            </div>
        </div>
    );
}

export default App;

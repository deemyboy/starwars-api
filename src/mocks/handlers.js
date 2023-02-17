import { rest } from "msw";

export const handlers = [
    rest.post("/login", (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem("is-authenticated", "true");

        return res(
            // Respond with a 200 status code
            ctx.status(200)
        );
    }),

    rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                name: "Luke Skywalker",
                height: "172",
                mass: "77",
                hair_color: "blond",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "19BBY",
                gender: "male",
                homeworld: "https://swapi.dev/api/planets/1/",
                films: [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/",
                ],
                species: [],
                vehicles: [
                    "https://swapi.dev/api/vehicles/14/",
                    "https://swapi.dev/api/vehicles/30/",
                ],
                starships: [
                    "https://swapi.dev/api/starships/12/",
                    "https://swapi.dev/api/starships/22/",
                ],
                created: "2014-12-09T13:50:51.644000Z",
                edited: "2014-12-20T21:17:56.891000Z",
                url: "https://swapi.dev/api/people/1/",
            })
        );
    }),
];

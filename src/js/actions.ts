// this are action constants the actions that are dispatched.
// dispatch when a request is made
const LOADING:string = 'LOADING';
// dispatch when a request is done
const NOT_LOADING:string = 'NOT_LOADING';
// dispatch when a film object is available fro api
const FILM_ACTION:string = 'FILM_ACTION';
// dispatch when a vehicle object is available fro api
const VEHICLE_ACTION:string = 'VEHICLE_ACTION';
// dispatch when a species object is available fro api
const SPECIES_ACTION:string = 'SPECIES_ACTION';
// dispatch when a planet object is available fro api
const PLANETS_ACTION:string = 'PLANETS_ACTION';
// dispatch when a starship object is available fro api
const STARSHIPS_ACTION:string = 'STARSHIPS_ACTION';
// dispatch when a people object is available fro api
const PEOPLE_ACTION:string = 'PEOPLE_ACTION';

// default people state.
let people = {
    name: "",
    birth_year: "",
    eye_color: "",
    gender: "",
    hair_color: "",
    height: "",
    mass: "",
    skin_color: "",
    homeworld: "",
    films: [],
    species: [],
    starships: [],
    vehicles: [],
    url: "",
    created: "",
    edited: ""
};

// default starships state.
let starships = {
    name: "",
    model: "",
    starship_class: "",
    manufacturer: "",
    cost_in_credits: "",
    length: "",
    crew: "",
    passengers: "",
    max_atmosphering_speed: "",
    hyperdrive_rating: "",
    MGLT: "",
    cargo_capacity: "",
    consumables: "",
    films: [],
    pilots: [],
    url: "",
    created: "",
    edited: "",
};

// default vehicles state.
let vehicles = {
    name: "",
    model: "",
    vehicle_class: "",
    manufacturer: "",
    length: "",
    cost_in_credits: "",
    crew: "",
    passengers: "",
    max_atmosphering_speed: "",
    cargo_capacity: "",
    consumables: "",
    films: [],
    pilots: [],
    url: "",
    created: "",
    edited: "",
};

// default planets state.
let planets = {
    name: "",
    diameter: "",
    rotation_period: "",
    orbital_period: "",
    gravity: "",
    population: "",
    climate: "",
    terrain: "",
    surface_water: "",
    residents: [],
    films: [],
    url: "",
    created: "",
    edited: "",
};

// default species state.
let species = {
    name: "",
    classification: "",
    designation: "",
    average_height: "",
    average_lifespan: "",
    eye_colors: "",
    hair_colors: "",
    skin_colors: "",
    language: "",
    homeworld: "",
    people: [],
    films: [],
    url: "",
    created: "",
    edited: "",

};

// exporting default actions and sub state objects
export {LOADING, NOT_LOADING, FILM_ACTION, VEHICLE_ACTION, 
        SPECIES_ACTION, PLANETS_ACTION, STARSHIPS_ACTION,
        PEOPLE_ACTION, people, starships, vehicles, planets, species};

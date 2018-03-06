// an array interface
interface array {
    [index:number]: string   
}

// the film interface
interface filmInterface {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    species: array,
    starships: array,
    vehicles: array,
    characters: array,
    planets: array,
    url: string,
    created: string,
    edited: string
}

// the people interface
interface peopleInterface {
    name: string,
    birth_year: string,
    eye_color: string,
    gender: string
    hair_color: string,
    height: string,
    mass: string
    skin_color: string,
    homeworld: string,
    films: array,
    species: array,
    starships: array,
    vehicles: array,
    url: string,
    created: string,
    edited: string
}

// the film interface
interface starshipInterface {
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    films: array
    pilots: array
    url: string
    created: string
    edited: string
}

// the vehicles interface
interface vehiclesInterface {
    name: string
    model: string
    vehicle_class: string
    manufacturer: string
    length: string
    cost_in_credits: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    cargo_capacity: string
    consumables: string
    films: array
    pilots: array
    url: string
    created: string
    edited: string
}

// the planets interface
interface planetsInterface {
    name: string
    diameter: string
    rotation_period: string
    orbital_period: string
    gravity: string
    population: string
    climate: string
    terrain: string
    surface_water: string
    residents: array
    films: array
    url: string
    created: string
    edited: string
}

// the species interface
interface speciesInterface {
    name: string
    classification: string
    designation: string
    average_height: string
    average_lifespan: string
    eye_colors: string
    hair_colors: string
    skin_colors: string
    language: string
    homeworld: string
    people: array
    films: array
    url: string
    created: string
    edited: string

}

// this is the interface of the actions to tbe dispatched.
interface LoadAction {
    type: string
}

interface Action {
    type: string,
    _id?: number,
    data: object
}

/**
 * this defines interfaces for all the various reducers
 * */
interface filmReducer {
    (state: filmInterface[], action: Action): object
}

interface peopleReducer {
    (state: peopleInterface, action: Action): object
}

interface planetsReducer {
    (state: planetsInterface, action: Action): object
}

interface starshipsReducer {
    (state: starshipInterface, action: Action): object
}

interface vehiclesReducer {
    (state: vehiclesInterface, action: Action): object
}

interface speciesReducer {
    (state: speciesInterface, action: Action): object
}

interface loadReducer {
    (state: string, action: LoadAction): string
}

// this ht e interface for the store
interface Store {
    readonly loadState: string,
    readonly films: filmInterface[],
    readonly people: peopleInterface,
    readonly planets: planetsInterface,
    readonly starships: starshipInterface,
    readonly vehicles: vehiclesInterface,
    readonly species: speciesInterface
}


// export objects to type-check functions, arrays and methods.
export {LoadAction, loadReducer, Store, filmReducer,
        vehiclesReducer, peopleReducer, starshipsReducer,
        speciesReducer, planetsReducer};



export interface Name{
    title: string;
    first: string;
    last: string;
}

export interface Street{
    number: number;
    name: string;
}
export interface Location{
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Coordinates{
    latitude: string;
    longitude: string;
}

export interface Timezone{
    offset: string;
    description: string;
}

export interface Login{
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha265: string;
}

export interface DateAge{
    date: string;
    age: number;
}
export interface Id{
    name: string;
    value: string;
}

export interface Picture{
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Info{
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface Person{
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateAge;
    registered: DateAge;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string; 
    wage: number;
}

export interface PeopleData{
    results: Person[];
    info: Info;
}

export interface PersonData{
    person: Person;
    id: Number;
}
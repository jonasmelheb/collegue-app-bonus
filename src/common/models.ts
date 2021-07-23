export interface Collegue {
    id: string;
    nom: string;
    prenom: string;
    societe: string;
    email: string;
    dateNaissance: string;
    sexe: string;
    adresse: string;
    password: string;
    photo: string;
    departement: string;
}

export interface CreateCollegue {
    nom: string;
    prenom: string;
}

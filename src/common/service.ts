import fetch from 'node-fetch';
import {Collegue, CreateCollegue} from "./models";
import {config} from "./config";

/**
 * Composant de communication avec la Web API /collegues.
 */
export class Service {

    /**
     * @return la liste (tableau) des collègues.
     */
    async list(): Promise<Collegue[]> {
        const response = await fetch(config.baseUrlApi);
        const allCols: Collegue[] =  await response.json();
        return allCols.filter(col => col.nom);
    }

    /**
     * @return le collègue créé avec le nom et le prénom.
     */
    async create(collegue: CreateCollegue): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi, {
            method: 'post',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return response.json();
    }

    /**
     * recherche de collegue par id.
     */
    async getById(id: string): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi + id);
        return response.json();
    }

    /**
     * Mise à jour d'un collègue.
     * @param collegue informations du collègue
     * @param id identifiant du collègue
     */
    async update(collegue: Partial<Collegue>, id: string): Promise<Collegue> {
        const response = await fetch(config.baseUrlApi + id, {
            method: 'patch',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return await response.json();
    }
}

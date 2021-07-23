import {Service} from "../common/service";

export class Presentation {
    constructor(
        private service: Service
    ) {
    }

    demarrer() {

        let element = <HTMLInputElement>document.querySelector("#app");

        this.service.list().then(collegues => {
            collegues.forEach(col => {
                const div = <HTMLInputElement>document.createElement('div')
                div.textContent = `ID : ${col.id} Nom : ${col.nom} Prenom : ${col.prenom}`;
                element.appendChild(div)
            })
        })

    }
}
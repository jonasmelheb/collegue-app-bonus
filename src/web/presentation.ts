import {Service} from "../common/service";

export class Presentation {
    constructor(
        private service: Service
    ) {
    }

    list() {
        let element = <HTMLInputElement>document.querySelector("#app");

        this.service.list().then(collegues => {
            collegues.forEach(col => {
                const div = <HTMLInputElement>document.createElement('div')
                div.textContent = `ID : ${col.id} Nom : ${col.nom} Prenom : ${col.prenom}`;
                element.appendChild(div)
            })
        })
    }

    create() {
        const nom = <HTMLInputElement>document.querySelector("#nom");
        const prenom = <HTMLInputElement>document.querySelector("#prenom");
        const button = <HTMLInputElement>document.querySelector("#button")
        button.addEventListener("click", () => {
            this.service.create({nom: nom.value, prenom: prenom.value})
                .then(colCree => document.location.reload())
        })


    }
}
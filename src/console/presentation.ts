import {Service} from "../common/service"
import {Collegue, CreateCollegue} from "../common/models";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Presentation {

    constructor(
        private service: Service
    ) {
    }

    demarrer() {

        const menu = `
1. Lister les collegues
2. Créer un collègue
3. Modifier la photo d'un collègue
99. Sortir

Votre choix svp: `


        rl.question(menu, (answer: string) => {

            switch (answer) {
                case "1":
                    console.log(">> Liste des clients")
                    this.service.list().then(collegues => {
                        // for (const c of collegues) {
                        //     console.log(`${c.id} ${c.nom} ${c.prenom}`);
                        // }
                        const result = collegues
                            .map(c => `${c.id} ${c.nom} ${c.prenom}`)
                            .join('\n');

                        console.log(result);
                    }).catch(err => console.log(err))
                        // .finally(this.demarrer.bind(this));
                        .finally(() => this.demarrer());
                    break;
                case "2":
                    rl.question('Enter votre nom : ', (nom: string) => {
                        rl.question('Enter votre prénom : ', (prenom: string) => {
                            this.service.create({nom, prenom})
                                .then(colCree => console.log("Un nouveau collegue creer avec succes, id=", colCree))
                                .finally(() => this.demarrer());

                        });
                    });

                    break;
                case "3":
                    rl.question("Enter l'id de votre collegue  : ", (idTer: string) => {
                        rl.question('Enter la nouvelle image : ', async (photo: string) => {
                            const collegue = await this.service.getById(idTer);
                            if (collegue) {
                                await this.service.update({photo}, idTer);
                                console.log("La nouvelle image est update")
                                this.demarrer();
                            } else {
                                console.log('collègue non trouvé');
                            }

                        });
                    });
                    break;
                case "99":
                    console.log("Au revoir !")
                    rl.close();
                    break;
                default:
                    console.log("Il faut renter un nombre valide ")
                    this.demarrer();
                    break;
            }
        });
    }
}

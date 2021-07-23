import {Presentation} from "./presentation";
import {Service} from "../common/service"

const service = new Service();
const presentation = new Presentation(service);

presentation.demarrer();

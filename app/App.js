import { ValuesController } from "./Controllers/ValuesController.js";
import {}

class App {
  valuesController = new ValuesController();
}

window["player-app"] = new App();

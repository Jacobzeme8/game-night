// import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayerController } from "./Controllers/PlayerController.js";
// import { appState } from "./AppState.js";

class App {
  // valuesController = new ValuesController();
  playerController = new PlayerController();
}

window["app"] = new App();

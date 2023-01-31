import { appState } from "../AppState.js";
// import { Players } from "../Models/Player-Model.js";

export class PlayerService {

  addPoints(){
    console.log("button pressed")
  }

  removePoints(name){
    let player = appState.players.find(p => p.name == name)
    player.score--
  }

}


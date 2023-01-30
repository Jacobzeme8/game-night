import { appState } from "../AppState";
import { Players } from "../Models/Player-Model";

export class PlayerService {

  addPoints(name){
    let player = appState.players.find(p => p.name == name)
    player.score++
  }

  removePoints(name){
    let player = appState.players.find(p => p.name == name)
    player.score--
  }

}


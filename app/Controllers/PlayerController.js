import { appState } from "../AppState";
import { PlayerService } from "../Services/PlayerService";
import { Players } from "../Models/Player-Model";


export class PlayerController{
  drawPlayers(){
    let players = appState.players
    let playersTemplate = ``
    players.forEach(p => playersTemplate += p.HTMLTemplate )
    document.getElementById("player-app").innerHTML = playersTemplate
  }
}
import { appState } from "../AppState.js";
// import { PlayerService } from "../Services/PlayerService";
import { Players } from "../Models/Player-Model.js";


function drawPlayers(){
  let players = appState.players
  console.log(players)
  let playersTemplate = ``
  players.forEach(p => playersTemplate += p.HTMLTemplate )
  document.getElementById("player-app").innerHTML = playersTemplate
}
export class PlayerController{
  constructor(){
    drawPlayers()
  }
  }

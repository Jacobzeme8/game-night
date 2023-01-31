// import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
// import { loadState } from "./Utils/Store.js"
import { Players } from "./Models/Player-Model.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  players = [
    new Players("Jim", "https://via.placeholder.com/100", 0 ),
    new Players("Tim", "https://via.placeholder.com/100", 5)
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})



export class Players {

  name 
  picture 
  score

  constructor(name, picture, score){
    this.name = name;
    this.picture = picture
    this.score = score
  }

get HTMLTemplate(){
  return `<div class="col-4">
  <div class="card bg-dark text-light text-center">
    <img class="img-fluid" src="${this.picture}" alt="">
    <h2>${this.name}</h2>
    <h3>Score: ${this.score}</h3>
    <button class = "btn btn-success">+</button>
    <button class = "btn btn-danger">-</button>
  </div>
</div>`
}

}
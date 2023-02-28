const upcomingE = document.getElementById("upcomingE");

//fecha a ser comparada con los demas
const DateBase = new Date(data.currentDate); 
//se crea un objeto que ingrese un nuevo dato que en este caso es la fecha principal para guiar si un evento es pasado o futuro.

let tarjetasCargadas = crearTarjetas(data.events); //se busca un objeto que vea la fecha en los eventos

function crearTarjetas(lista) {
  let tarjeta = "";

  for (let eventos of lista) {
    if (new Date(eventos.date) >= DateBase) {
      tarjeta += `
  <div class="card event__card p-2 m-5 rounded ">
  <div class="row no-gutters">
    <div class="col-sm-5">
      <img class="card-img shadow-sm p-3 mb-5 bg-white rounded" src=" ${eventos.image} "alt=""/>
    </div>
    <div class="col-sm-7">
      <div class="card-body">
        <h5 class="card-title">${eventos.name} </h5>
        <p class="card-text">${eventos.description} </p>
      </div>
    </div>
  </div>
</div> `
    }
  }
  return tarjeta;
}

//le asignamos el valor a template(html)

upcomingE.innerHTML = tarjetasCargadas;
/*const tarjetasHome = document.getElementById("cards")

let tarjetasCargadas = crearTarjetas(data.events);

function crearTarjetas(lista){
    let tarjetas = "";

    for (let eventos of lista){
        tarjetas +=`
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
    return tarjetas;
}

tarjetasHome.innerHTML = tarjetasCargadas;
*/


const tarjetasHome = document.getElementById("cards")

let tarjetasCargadas = crearTarjetas(data.events);

crearTarjetas.forEach((evento) => {
  
  let tarjetas = "";
{
      tarjetas +=`
      <div class="card event__card p-2 m-5 rounded ">
      <div class="row no-gutters">
        <div class="col-sm-5">
          <img class="card-img shadow-sm p-3 mb-5 bg-white rounded" src=" ${evento.image} "alt=""/>
        </div>
        <div class="col-sm-7">
          <div class="card-body">
            <h5 class="card-title">${evento.name} </h5>
            <p class="card-text">${evento.description} </p>
          </div>
        </div>
      </div>
    </div> `
  }
  tarjetas.push(lista);
}
);

tarjetasHome.innerHTML = tarjetasCargadas;
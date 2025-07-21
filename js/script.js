//mi recupero l'elemento del dom nella quale andrò a stampare le images
const imagesList = document.getElementById('images-list');

let objList = `https://lanciweb.github.io/demo/api/pictures/`;

//effettuo la chiamata ajax
axios.get(objList).then((resp) => {
  //creo un ciclo di 6 iterazioni per generare le cards
  for (let i = 0; i < resp.data.length; i++) {
    //inserisco nell'html per ogni iterazione una card
    imagesList.innerHTML += `<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img src="${resp.data[i].url}" class="card-img-top p-3" alt="...">
          <img src="./img/pin.svg" alt="" class="pin">
          <div class="card-body">
            <h3>${resp.data[i].title}</h3>
            <p class="card-text">${resp.data[i].date}</p>
          </div>
        </div>
      </div>`;

  }
})
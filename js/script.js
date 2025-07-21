//mi recupero l'elemento del dom nella quale andrò a stampare le images
const imagesList = document.getElementById('images-list');

let cards = [];
//creo un ciclo di 6 iterazioni per generare le cards
for (let i = 0; i < 6; i++) {

  //effettuo la chiamata ajax
  axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((resp) => {

    cards.push(resp.data[i]);


    //inserisco nell'html per ogni iterazione una card
    imagesList.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem;">
          <img src="${cards[i].url}" class="card-img-top p-3" alt="...">
          <img src="./img/pin.svg" alt="" class="pin">
          <div class="card-body">
            <h3>${cards[i].title}</h3>
            <p class="card-text">${cards[i].date}</p>
          </div>
        </div>
      </div>`;

  })
}
const cats = [
  {
    id: 1,
    cat: "mel",
    age: "11 anos",
    image: "assets/mel.jpg",
  },
  {
    id: 2,
    cat: "momo",
    age: "4 anos",
    image: "assets/momo.jpg",
  },
  {
    id: 3,
    cat: "mia",
    age: "1 ano",
    image: "assets/mia.jpg",
  },
];

const elements = {
    cat: document.querySelector('.nameCat'),
    age: document.querySelector('.age'),
    image: document.querySelector('.image')
};

const buttons = {
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    randomBtn: document.querySelector('.random')
};

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showCat(currentItem); //chama a função para exibir o gato inicial
});

function showCat(id) {
    const currentCat = cats[id]; //acessa o gato pelo id
    elements.cat.textContent = currentCat.cat;
    elements.age.textContent = currentCat.age;
    elements.image.src = currentCat.image;
};

buttons.nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > cats.length - 1) {
        currentItem = 0; //se currentItem for um valor que não tem no cats.length - 1, ele volta para o 0
    }
    showCat(currentItem); //atualiza o gato exibido
});

buttons.prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0 ) {
        currentItem = cats.length - 1; //se currentItem for menor que 0, ele volta pro último número do array
    }
    showCat(currentItem); //atualiza o gato exibido
});
const items = [
    { name: "bee", image: "images/bee.png" },
    { name: "crocodile", image: "images/crocodile.png" },
    { name: "macaw", image: "images/macaw.png" },
    { name: "gorilla", image: "images/gorilla.png" },
    { name: "tiger", image: "images/tiger.png" },
    { name: "monkey", image: "images/monkey.png" },
    { name: "chameleon", image: "images/chameleon.png" },
    { name: "piranha", image: "images/piranha.png" },
    { name: "anaconda", image: "images/anaconda.png" },
    { name: "sloth", image: "images/sloth.png" },
    { name: "cockatoo", image: "images/cockatoo.png" },
    { name: "toucan", image: "images/toucan.png" },
];

const generateRandom = () => {
    let tempArray = [...items];
    let cards = [];

    for (let i = 0; i < 8; i++) {
        const random = Math.floor(Math.random() * tempArray.length);

        cards.push(tempArray[random]);
        tempArray.splice(random, 1);
    }

    return cards;
}

const generateMatrix = (cards) => {
    const game = document.querySelector(".game");

    cards = [...cards,...cards];
    cards.sort(() => Math.random() - 0.5);

    for(let i = 0; i < cards.length; i++) {
        game.innerHTML += `
        <div class="card-container" data-card-value="${cards[i].name}">
            <div class="card-before">?</div>
            <div class="card-after">
            <img src="${cards[i].image}" class="image"/></div>
        </div>
        `;
    }
}

generateMatrix(generateRandom());


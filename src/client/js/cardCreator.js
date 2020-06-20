import ia from '../media/favorite-2_th.jpg';

const createCard = (dist, date, image) => {
    //create a virtual dom
    const virtualDOM = document.createDocumentFragment();
    //create a card div
    const carddiv = document.createElement('div');
    carddiv.classList = 'card';
    //create an img
    const img = document.createElement('img');
    img.src = ia;
    //create card text.
    const textdiv = document.createElement('div');
    textdiv.classList = 'card-body';
    //create a p element
    const cardp = document.createElement('p');
    cardp.innerHTML = "text";
    textdiv.appendChild(cardp);

    carddiv.appendChild(img);
    carddiv.appendChild(textdiv);
    //add those to virtual dom.
    virtualDOM.appendChild(carddiv);
    //append to to maindom*/
    const maincards = document.getElementsByClassName('plan-cards');
    maincards[0].appendChild(virtualDOM);

}

export { createCard }
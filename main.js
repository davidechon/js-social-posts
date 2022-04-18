// esercizio di oggi:  Social Posts
// nome repo:  js-social-posts
// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// ****BONUS**
// >
// > 1. Formattare le date in formato italiano (gg/mm/aaaa)
// > 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// > 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like

////////////////////////////////////////////////////////
// Milestone 1
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// console.log(posts);

// Milestone 2
let litTemplate = "";
posts.forEach((element)=>{
  litTemplate =`
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        
        `;
      container.innerHTML += litTemplate;
      console.log(litTemplate);
});

// > 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like

////////////////////////////////////////////////////////
// Cosa devo fare:
// [_] 1. Richiamare gli elementi della collection
// [_] 2. Convertire la collection in un array
// [_] 3. Richiamare gli elementi interessati al "Mi Piace"
// [_] 4. Creare evento al click
// [_] 5. Aggiungere 1 unità al contatore
// [_] 6. Creare un array che contenga gli id dei posts dove ho aggiunto il "Mi Piace"
// [_] 7. Bonus 1 - Formattare le date in formato italiano (gg/mm/aaaa)
// [_] 8. Bonus 2 - Gestire l'immagine profilo mancante con le iniziali dell'utente
// [_] 9. Bonus 3 - Creare un evento contrario al "Mi Piace", togliendo il colore e togliendo 1 unità
////////////////////////////////////////////////////////

// Converto la collection in un array
const itemsCollection = document.querySelectorAll('a.like-button.js-like-button');
console.log("stampa collection",itemsCollection)

let arguments = [...itemsCollection]
function collectionToArray() {
    arguments = [].slice.call(itemsCollection);
    console.log("stampa il nuovo  array ",arguments);
    console.log("stampa elemento 0 dell'array per controllo ",arguments[0]);
}   
collectionToArray(itemsCollection);

console.log("stampa contenuto di arguments ", arguments.length)
console.log("stampa contenuto di arguments ", arguments)

// Genero l'evento al click
arguments.addEventListener('click', addLike());
function addLike(){
    const aggiungiA = document.getElementsByClassName("a").classList.add('.like-button--liked')
}




// let isLike = 
// isLike.push("like-button--liked")
// collectionToArray.className("like-button").addEventListener('click', addLike());

// let  checkItems = []
// console.log("controllo che sia un array 01 ",checkItems)

// checkItems = document.querySelectorAll('a.like-button.js-like-button')
// console.log("controllo la lunghezza dell'array 02 ",checkItems)
// console.log("controllo la lunghezza dell'array 03 ",checkItems.length)

// let cerca = checkItems.includes('a.like-button.js-like-button')
// console.log("controllo che l'array contenga la classe 04 ",cerca)
// console.log("controllo che l'array contenga la classe 05 ",cerca.length)
// Richiamo gli elementi della Collection
// const itemsCollection = document.querySelectorAll('a.like-button.js-like-button');
// console.log("stampa collection 00",itemsCollection)
// console.log("querySelectorAll itemsCollection 01-A",itemsCollection[0])
// console.log("querySelectorAll itemsCollection 01-A",itemsCollection[1])
// console.log("querySelectorAll itemsCollection 01-A",itemsCollection[2])
// console.log("querySelectorAll itemsCollection 01-A",itemsCollection[3])
// console.log("querySelectorAll itemsCollection 01-A",itemsCollection[4])


// const collectionToArray = Array.prototype.slice.call( itemsCollection );
// console.log("collection to array 01 ",collectionToArray);

// collectionToArray = document.querySelectorAll('a.like-button.js-like-button');
// console.log("collection to array 02 ",collectionToArray);
// console.log("collection to array 01 ",collectionToArray[1]);

// collectionToArray.addEventListener('click', addLike());

const addId = [];

function addLike(){
    // alert('questo funziona')
    // collectionToArray.classList.add("like-button--liked");
    // collectionToArray.setAttribute('class', 'like-button--liked');
    // collectionToArray.innerHTML = `
    // <a class="like-button like-button--liked js-like-button" href="#" data-postid="${element.id}">
    //                         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    //                         <span class="like-button__label">Mi Piace</span>
    //                     </a>
    // `
    // console.log("stampa addLike 04", collectionToArray)
    // addId = posts.likes++;
}




// const nuArray=[];
// for(let i = 0; i < collectionToArray.length; i++){
//     i.push = nuArray;
//     console.log(nuArray)
// }
// array.forEach(function(currentValue, index, arr), thisValue)



// for(let i = 0; i < collectionToArray.length; i++){
//     collectionToArray[i].classList.add('like-button--liked');
//     console.log("questa è la collection 02 ",collectionToArray[i])
// }
// console.log("questo è fuori dal for 03 ", collectionToArray)

// function addLike(){
//     itemsCollection.forEach((item)=>{
//         item.addEventListener('click', function(){
//             item.classList.add("like-button--liked");
//         })
//     })
// };
//  addLike();



// Counter ++
// document.addEventListener('click');
// Creare un array che contenga gli id dei likes aggiunti


/* <div class="likes__counter">
    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
</div> */

// let addPlus = posts[likes] 
// addPlus++
// console.log(addPlus)
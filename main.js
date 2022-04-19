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

// Milestone 2 + Bonus 1
// Creo la griglia
function drawGrid(){
    const container = document.getElementById('container');
    let htmlGenerato = '';
    posts.forEach((post)=>{
        const card = gridItem(post);
        htmlGenerato += card;

    })
    container.innerHTML = htmlGenerato;
}
// Creo il template 
function gridItem(post){
    const template = `
        <div class="post">
             <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    ${post.author.image ? `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">` : `<div class="profile-pic-default"><span>${getInitials(post.author.name)}</span></div>`}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${new Date(post.created).toLocaleDateString()}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="Immagine Post di ${post.author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>             
        </div>
    `
    return template;
}

//Bonus 2
// Questo gestice il placeholder dello user img mancante
const userLikes = [];
function getInitials(name){
    const nameParts = name.split(' ');
    // console.log(nameParts)
    const initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
    return initials.toUpperCase();
}
// Milestone 3 + Bonus 3
// Aggiunge o toglie la classe MiPiace e 1 unità al contatore
function setLike(check, postid){
    const counter = document.getElementById(`like-counter-${postid}`);
    let likeValue = parseInt(counter.innerText);
    if(check){
        userLikes.push(postid) // questo aggiunge l'id ad ogni click
        counter.innerText = likeValue + 1;
    } else {
        const index = userLikes.indexOf(postid);
        if(index !== -1) userLikes.splice(index, 1) // se index diverso da -1 allora togli 1 da postid
        counter.innerText = likeValue - 1;
    }
    // console.log("stampa counter: ", counter)
}
// Aggiunge evento al click e colora il MiPiace
function attachEvent(){
    const likeButtons = document.querySelectorAll('[data-postid]');
    // console.log(likeButtons);
    likeButtons.forEach((button)=>{
        button.addEventListener('click', function(evento){
            evento.preventDefault(); // questo impedisce il refresh ad ogni click
            this.classList.toggle('like-button--liked'); // questo mette/toglie la classe al like
            const check = this.classList.contains('like-button--liked');
            setLike(check, this.dataset.postid);
        })
    })
}

drawGrid()
attachEvent()
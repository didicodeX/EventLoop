// console.log('Debut');

// setTimeout(() => console.log('timeout 2000'), 2000);

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('promesse 4000'), 4000);
// });

// promesse.then((res) => {
//   console.log(res);
// });

// Promise.resolve().then(() => console.log('promesse 0'));

// setTimeout(() => console.log('Tiemout 0'), 0);

// console.log('Fin');

// /**
//  * Les Web APIs
//  Les Web APIs asynchrones utilisent des fils d'exécution (thread) distinctes du thread principal du moteur JavaScript qui exécute la pile d'exécution (la stack)
//  Les Web APIs peuvent être les timers (setTimeout()), des requêtes HTTP (fetch ou XMLHttpRequest que nous allons étudier), des événements du DOM (addEventListener()), et plein d'autres choses qui peuvent être asynchrones.

//  * La file des taches (FIFO)
//  contient toute les fonctions passe comme gestionnaire a une API asynchrone et qui a termine son traitement
//  sont des fonctions(Habituellemenrt des callbacks functions) qui s'execute lorsque la pile d'execution est vide.
//  Lorsque la pile est vide, le moteur V8 vas execute la premier tache de la file et recommencer le circle.

//  * La file des micro-taches
//  Les promesse utilise une file differente qui est aussi FIFO.
//  cette file contient les promesse aquitee.
//  lorsqu'on then(), cette methode est ajoute lorsque la promesse est aquitee

//  * Les priorite
//  pile d'execution > file des micro-taches > file des rendu > file des taches
//  lorsque la pile est vide le moteur vas regarder la file des micro tache et tout execute ensuite regarder la file des tache et execute une seule ensuite recommencer. la file des rendue se fait environ 60 fois par seconde.

//  */

// /**
//  * code synchrone
//  * promesse 1
//  * promesse 2
//  * l'animation
//  * timeout
//  */

// import './style.css';

// function afficherLeResultat(message) {
//   const div = document.createElement('div');
//   div.innerText = `${message} a été exécuté(e).`;
//   div.classList.add('succes');
//   document.querySelector('#app').append(div);
// }

// setTimeout(() => afficherLeResultat('Le timeout'), 0); // timeout
// Promise.resolve().then(() => afficherLeResultat('La promesse 1')); // micro-tâhce
// requestAnimationFrame(() => afficherLeResultat("L'animation")); // rendu
// Promise.resolve().then(() => afficherLeResultat('La promesse 2')); // micro-tâhce
// afficherLeResultat('Le code synchrone'); // synchrone

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   Promise.resolve().then(() => afficherLeResultat('La promesse 1'));
//   afficherLeResultat('Le clic 1');
// });
// button.addEventListener('click', () => {
//   Promise.resolve().then(() => afficherLeResultat('La promesse 2'));
//   afficherLeResultat('Le clic 2');
// });

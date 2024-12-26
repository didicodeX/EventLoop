import './eventLoop';
import './fetch';
// const promesse = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promesse OK !")
//     reject('Promesse KO !');
//   }, 3000);
// });

// promesse
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // promesse.catch(err => {
// //   console.log(err)
// // })
// // console.log(promesse)

// console.log('yo');

// new Promise((resolve) => {
//   setTimeout(() => resolve(22), 500);
// })
//   .then((res) => {
//     nimp();
//     return 22;
//   })
//   .then((res) => console.log('Je suis affiché'))
//   .catch((err) => console.error(err.message));

// function createCancellableTimer(duration) {
//   // Créer une promesse avec resolve et reject grâce à Promise.withResolvers
//   const { promise, resolve, reject } = Promise.withResolvers();

//   // Démarrer un timer
//   const timeoutId = setTimeout(() => {
//     resolve(`Terminé après ${duration}ms`);
//   }, duration);

//   // Retourner la promesse et une fonction pour annuler le timer
//   return {
//     promise,
//     cancel() {
//       clearTimeout(timeoutId);
//       reject(new Error('Timer annulé'));
//     },
//   };
// }

// // Utilisation du timer avec annulation possible
// const timer = createCancellableTimer(5000); // Timer de 5 secondes

// timer.promise
//   .then((message) => console.log(message)) // S'exécute si le timer atteint 5 secondes
//   .catch((error) => console.error(error.message)); // S'exécute si le timer est annulé

// // Après 2 secondes, on annule le timer
// setTimeout(() => {
//   timer.cancel();
// }, 5000);

// async function func(){
//   return 1;
// }

// console.log(func().then(res => console.log(res)))

// // console.log(
// //   fetch('https://jsonplaceholder.typicode.com/comments').then((res) =>
// //     console.log(res)
// //   )
// // );
// const promesse = fetch('https://jsonplaceholder.typicode.com/users');

// promesse.then(async (res) => {
//   console.log(res);

//   try{
//     const users = await res.json();
//     console.log(users)
//   }
//   catch(e){
//     console.log(e)
//   }

//   // const promesseUsers = res.json();
//   // promesseUsers.then((users) => {
//   //   console.log(users);
//   // });

// });

// const promesse = fetch('https://jsonplaceholder.typicode.com/users');
// setTimeout(() => {
//   promesse.then((res) => {
//     try {
//       const users = res.json();
//       console.log(users);
//     } catch (e) {
//       console.log(e);
//     }
//   });
// }, 2000);

// const promesse = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(promesse);
// promesse.then((res) => {
//   try {
//     const usersList = res.json();
//     console.log(usersList);
//     console.log(
//       usersList.then((u) => {
//         const users = u;
//         console.log(users[0]);
//       })
//     );
//   } catch (e) {
//     console.log(e);
//   }
// });

/*
  Les codes commençant par 2 signifie que la requête a fonctionné.

  Les codes commençant par 3 sont utilisés pour les redirections.

  Les codes commençant par 4 sont utilisés pour les erreurs côté client.

  Les codes commençant par 5 sont utilisés pour les erreurs côté serveur.
*/

const user = {
  name: 'didi',
  email: 'didi@gmail.com',
};

const promesse = fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
  },
});

promesse.then(async (res) => {
  try {
    console.log(res);
    const body = await res.json();
    console.log(body);
  } catch (e) {
    console.error(e);
  }
});

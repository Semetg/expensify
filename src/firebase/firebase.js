import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });

//   console.log(expenses);
// });

// const expenses = [
//   {
//     description: 'expense1',
//     note: '',
//     amount: 12700,
//     createdAt: 123
//   },
//   {
//     description: 'expense2',
//     note: '',
//     amount: 30,
//     createdAt: 8888
//   },
//   {
//     description: 'expense3',
//     note: '',
//     amount: 9900,
//     createdAt: -1
//   }
// ];

// for (let i = 0; i < 3; ++i)
//   database.ref('expenses').push(expenses[i]);

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Nilai La Dansu'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();

//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database.ref().set({
//   name: 'Geroge',
//   age: 26,
//   stressLevel: 6 ,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   }, 
//   location: {
//     city: 'Bodesti',
//     country: 'TGAAAANI'
//   }
// }).then(() => {
//   console.log('Saved!');
// }).catch((e) => {
//   console.log('Failed!', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('It Worked!');
//   })
//   .catch((e) => {
//     console.log('Sth went wrong', e);
//   });
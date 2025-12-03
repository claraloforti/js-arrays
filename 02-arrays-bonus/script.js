const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE


// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers);

/* Potrei anche fare così, usando toReversed per invertire l'ordine degli insegnanti senza mutare l'array originale

const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers);

*/


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
/* Così rimuovo Ed dall'array però muto l'array originale e nell'esercizio 5 non mi apparirà Ed

const edIndex = teachers.indexOf('Ed');
if (edIndex !== -1) { // Tolgo Ed solo se è presente, quindi prima verifico se è presente nell'array (se è diverso da -1 significa che è presente)
teachers.splice(edIndex, 1);
}
console.log(teachers);

*/

// Così invece non modifico direttamente teachers ma creo una nuova variabile così che Ed potrà apparire nell'esercizio 5
// Perchè gli sto dicendo: se l'i dentro teachers è diverso da Ed scrivilo, così me li scriverà tutti tranne Ed, senza bisogno di escluderlo con splice
const teachersWithoutEd = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] !== 'Ed') {
    teachersWithoutEd.push(teachers[i]);
  }
}
console.log(teachersWithoutEd);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

/* Potrei fare così, verificando se Fabio è presente e se è presente lo stampo

const isFabioPresent = teachers.indexOf('Fabio') !== -1;
console.log(isFabioPresent);

*/

// Oppure posso scorrere tutti gli elementi dell'array e se uno di questi è uguale a Fabio lo aggiungo alla mia variabile e lo stampo
const isFabioPresent = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent.push(teachers[i]); // Oppure .push(true);
  }
}
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(',');
console.log(teachersString);
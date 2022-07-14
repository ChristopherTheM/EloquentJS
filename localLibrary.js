//This is the local library project from Thinkful.
import books from "./books";
import authors from "./authors";
import accounts from "./accounts";
//Find Account by ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

console.log(findAccountById(accounts, "5f446f2eae901a82e0259947"));

//Sort accounts by last name

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    let lastNameA = accountA.name.last.toLowerCase();
    let lastNameB = accountB.name.last.toLowerCase();
    return lastNameA > lastNameB ? 1 : -1;
  });
  return [];
}

console.log(sortAccountsByLastName(accounts));

//Get total number of borrows of a book

//Get books possessed by account

module.exports = { findAccountById, sortAccountsByLastName };

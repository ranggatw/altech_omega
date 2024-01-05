// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

const palindrome = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result === str) {
    return true;
  } else {
    return false;
  }
};

console.log("Result palindrome: ", palindrome("katak"));
// expected output: true

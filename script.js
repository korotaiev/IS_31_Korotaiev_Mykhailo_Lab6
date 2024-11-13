//TASK 1
console.log("*****************TASK1*****************");
function createProduct(obj, callback) {
  const product = { ...obj, id: Date.now() };
  callback(product);
}
function logProduct(product) {
  console.log("Product:", product);
}
function logTotalPrice(product) {
  const totalPrice = product.price * product.quantity;
  console.log("Total price", totalPrice);
}
const newProduct = { name: "Laptop", price: 1200, quantity: 3 };
createProduct(newProduct, logProduct);
createProduct(newProduct, logTotalPrice);

//TASK 3
console.log("*****************TASK3*****************");
const medicines = {
  Агалгін: new Date("2022-05-01"),
  Ношпа: new Date("2025-07-02"),
  Альфахолін: new Date("2024-12-21"),
  Аспірин: new Date("2022-08-15"),
  Аспаркам: new Date("2024-04-18"),
};

const currentDate = new Date();

const validMedicines = Object.entries(medicines)
  .filter(([name, expiryDate]) => expiryDate > currentDate)
  .sort(([, dateA], [, dateB]) => dateA - dateB)
  .map(([name]) => name);

console.log(validMedicines);

//TASK 5
console.log("*****************TASK5*****************");
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function newFruits(items) {
  return items.map(function (item, index) {
    return {
      ...item,
      price: item.price * 0.8,
      id: index + 1,
    };
  });
}

const discountedFruits = newFruits(fruits);
console.log(discountedFruits);

//TASK 7
console.log("*****************TASK7*****************");
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("user123", "user@example.com");

console.log(client.login);
console.log(client.email);

client.login = "newUser456";
client.email = "newuser@example.com";

console.log(client.login);
console.log(client.email);

//TASK 9
console.log("*****************TASK9*****************");
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCount = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

console.log(tagCount);

//TASK 10
console.log("*****************TASK10***************");
function checkBrackets(str) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets("function someFn() { return [1, 2, 3]; }"));
console.log(checkBrackets("function someFn() { return [1, 2, 3; }"));
console.log(checkBrackets("if (a > b) { arr.push([1, 2, 3]) }"));
console.log(checkBrackets("if (a > b { arr.push([1, 2, 3]) }"));

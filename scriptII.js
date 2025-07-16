const database = [
  {
    username: "Karl",
    password: "secret",
    newsFeed: "Secondly, let’s look at the very basic way this can operate.",
  },
];

let usernamePrompt = prompt("Enter your username: ");
let passwordPrompt = prompt("Enter your password: ");

function signIn(username, passsword) {
  const username = database[0].username;
  const password = database[0].password;
  const newsFeed = database[0].newsFeed;
  //   console.log(database[0].username);
  if (usernamePrompt === username && passwordPrompt === password) {
    return newsFeed;
  }
}
console.log(signIn(username, passsword));

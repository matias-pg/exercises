const fs = require("fs/promises");
const path = require("path");

async function main() {
  const users = await getUsers();
  const validUsers = filterValidUsers(users);

  console.log("Total valid users", validUsers.length);
  console.log("Last valid user", validUsers.at(-1));
}

async function getUsers() {
  const filePath = path.join(__dirname, "users.txt");
  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  // I know this isn't the most efficient as it creates a new array
  // after each operation, but I think it's more readable this way
  return (
    data
      // Each user is separated by an empty line
      .split("\n\n")
      // Get all properties of each user
      .map((user) => user.split(/\s/).filter(Boolean))
      // Parse the properties into key-value pairs
      .map((user) => user.map((prop) => prop.split(":")))
      // Create an object containing all key-value pairs
      .map(Object.fromEntries)
  );
}

/** @param {Record<string, string>[]} users */
function filterValidUsers(users) {
  return users.filter(hasFields("usr", "eme", "psw", "age", "loc", "fll"));
}

/** @param {string[]} fields */
function hasFields(...fields) {
  return (obj) => fields.every((field) => obj.hasOwnProperty(field));
}

main();

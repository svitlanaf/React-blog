export const users = [
  {
    id: "1",
    name: "Jane Doe"
  },
  {
    id: "2",
    name: "Christian Bale"
  },
  {
    id: "3",
    name: "Tom Hiddleston"
  },
  {
    id: "4",
    name: "Michael Fassbender"
  },
  {
    id: "5",
    name: "John Smith"
  },
  {
    id: "6",
    name: "Mary Green"
  },
  {
    id: "7",
    name: "Dwayne Johnson"
  },
  {
    id: "8",
    name: "Chris Hemsworth"
  },
  {
    id: "9",
    name: "Chris Evans"
  },
  {
    id: "10",
    name: "Hugh Jackman"
  }
];

export function getUsers() {
  return users;
}

export function getUser(userId) {
  return users.find(u => u.id === userId);
}

export function saveUser(user) {
  let userInDb = users.find(u => u.id === user.id) || {};
  userInDb.name = user.name;

  if (!userInDb.id) {
    userInDb.id = Date.now().toString();
    users.push(userInDb);
  }

  return userInDb;
}

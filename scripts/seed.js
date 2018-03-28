const { db, Food } = require("../server/db/models");

const foods = [
  {
    name: "Waffles"
  },
  {
    name: "Eggs Benedict",
    photo: "https://i.imgur.com/kI1980g.jpg"
  },
  {
    name: "Eggs and Bacon",
    photo: "https://i.imgur.com/aXblpRf.jpg"
  },
  {
    name: "Oatmeal",
    photo: "https://i.imgur.com/KajQ7Vt.jpg"
  },
  {
    name: "Pancakes",
    photo: "https://i.imgur.com/j95bIAN.jpg"
  }
];

const seed = () => Promise.all(foods.map(food => Food.create(food)));

const main = () => {
  console.log("syncing db");
  db
    .sync({ force: true })
    .then(() => {
      console.log("seeding");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      console.log("SEEDING SUCCESS");
      db.close();
      return null;
    });
};

main();

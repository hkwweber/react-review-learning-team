const { db, Food } = require("../server/db/models");

const foods = [
  {
    name: "Waffles",
    photo: 'https://i.imgur.com/JncGdNF.jpg',
    price: 9,
    description: 'waffle tiiiiiiiiiiiiiime'
  },
  {
    name: "Eggs Benedict",
    photo: "https://i.imgur.com/kI1980g.jpg",
    price: 15,
    description: 'fancy or gross?'
  },
  {
    name: "Eggs and Bacon",
    photo: "https://i.imgur.com/aXblpRf.jpg",
    price: 7,
    description: "sry if you're veg"
  },
  {
    name: "Oatmeal",
    photo: "https://i.imgur.com/gzO1MNT.jpg",
    price: 8,
    description: "healthy"
  },
  {
    name: "Pancakes",
    photo: "https://i.imgur.com/j95bIAN.jpg",
    price: 13,
    description: "yeah pancakes"

  },
  {
    name: "Bagel and Lox",
    photo: "https://i.imgur.com/2wyxmRe.jpg",
    price: 12,
    description: "best option on this list easily"
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

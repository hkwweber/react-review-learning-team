'use strict';

const {db} = require('./server/db/models')
const app = require('./server')
const PORT = 3000;

db.sync({})
.then(() => {
  console.log('db synced great job')
  app.listen(PORT, () => console.log(`listening to you on ${PORT}`))
});

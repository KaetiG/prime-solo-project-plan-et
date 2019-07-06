const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const sun = req.body.sun;
  const moon = req.body.moon;
  const ascendent = req.body.ascendent;
  const mercury = req.body.mercury;
  const venus = req.body.venus;
  const mars = req.body.mars;
  const jupiter = req.body.jupiter;
  const saturn = req.body.saturn;
  const neptune = req.body.neptune;
  const uranus = req.body.uranus;
  const pluto = req.body.pluto;

  const queryText = `INSERT INTO "user" ("username", "password", "sun", "moon", "ascendent", "mercury", "venus", "mars", "jupiter", "saturn", "neptune", "uranus", "pluto") 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
  RETURNING id`;
  pool.query(queryText, [username, password, sun, moon, ascendent, mercury, venus, mars, jupiter, saturn, neptune, uranus, pluto])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.post('/posts', (req, res) => {
const id = req.body.id
const entry = req.body.entry

const queryText = `INSERT INTO "posts" ("user_id", "entry")
VALUES ($1, $2)`;
pool.query(queryText, [id, entry])
.then(() => res.sendStatus(201))
.catch(() => res.sendStatus(500));
});

router.get('/natalchart', (req, res) => {
  const poolQuery = `SELECT "sun"."description_sun", 
  "moon"."description_moon", 
  "ascendent"."description_asc", 
  "mercury"."description_mercury", 
  "venus"."description_venus", 
  "mars"."description_mars", 
  "jupiter"."description_jupiter", 
  "saturn"."description_saturn", 
  "neptune"."description_neptune", 
  "uranus"."description_uranus", 
  "pluto"."description_pluto" FROM "profile"
  JOIN "user" ON "user"."id"="profile"."user_id"
  JOIN "sun" ON "sun"."id"="profile"."sun_id"
  JOIN "moon" ON "moon"."id"="profile"."moon_id"
  JOIN "ascendent" ON "ascendent"."id"="profile"."ascendent_id"
  JOIN "mercury" ON "mercury"."id"="profile"."mercury_id"
  JOIN "venus" ON "venus"."id"="profile"."venus_id"
  JOIN "mars" ON "mars"."id"="profile"."mars_id"
  JOIN "jupiter" ON "jupiter"."id"="profile"."jupiter_id"
  JOIN "saturn" ON "saturn"."id"="profile"."saturn_id"
  JOIN "neptune" ON "neptune"."id"="profile"."neptune_id"
  JOIN "uranus" ON "uranus"."id"="profile"."uranus_id"
  JOIN "pluto" ON "pluto"."id"="profile"."pluto_id"
  WHERE "user"."id" = 1`;

  pool.query(poolQuery)
  .then((result) => { res.send(result.rows); })
  .catch((err) => {
    console.log('Error completing SELECT query', err);
    res.sendStatus(500);
  });
})


module.exports = router;

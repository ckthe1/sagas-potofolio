const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
// const myPortfolio = [];
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT portfolio query', err);
            res.sendStatus(500);
        });
    // res.send(myPortfolio);
});

// router.post('/', (req, res) => {
//     const newPortfolio = req.body;
//     const queryText = `INSERT INTO portfolio ("name", "description", "thumbnail", "website", "github", "date_completed")
//                     VALUES ($1, $2, $3, $4, $5, $6)`;
//     const queryValues = [
//         newPortfolio.name,
//         newPortfolio.description,
//         newPortfolio.thumbnail,
//         newPortfolio.website,
//         newPortfolio.github,
//         newPortfolio.date_completed,
       
//     ];
//     pool.query(queryText, queryValues)
//         .then(() => { res.sendStatus(201); })
//         .catch((err) => {
//             console.log('Error completing SELECT portfolio query', err);
//             res.sendStatus(500);
//         });
// });

module.exports = router;
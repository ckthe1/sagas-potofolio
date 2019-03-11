const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT portfolio query', err);
            res.sendStatus(500);
        }); 
});

router.post('/', (req, res) => {
    const newPortfolio = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newPortfolio.name,
        newPortfolio.description,
        newPortfolio.thumbnail,
        newPortfolio.website,
        newPortfolio.github,
        newPortfolio.date_completed,
        newPortfolio.tag,
       
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT portfolio query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "projects" WHERE "id"=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { 
            res.sendStatus(200); 
        }).catch((err) => {
            console.log('Error completing delete projects query', err);
            res.sendStatus(500);
        });
});

module.exports = router;
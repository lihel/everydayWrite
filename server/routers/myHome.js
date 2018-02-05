/**
 * Created by lmy on 18-2-5.
 */
const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');


router.get('/myHome', (req, res) => {
    const id = req.session.signInInfo.userId;
    db.query(editSQL.getMyAllTitle,id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});
module.exports = router;
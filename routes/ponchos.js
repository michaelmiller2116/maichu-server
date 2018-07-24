const express = require('express');
const router = express.Router();

const queries = require('../queries/ponchos');

router.get("/ponchos", (request, response, next) => {
    queries.list().then(ponchos => {
        response.json({ponchos});
    }).catch(next);
});

router.get("/ponchos/:id", (request, response, next) => {
    queries.read(request.params.id).then(poncho => {
        poncho
            ? response.json({poncho})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/ponchos", (request, response, next) => {
    queries.create(request.body).then(poncho => {
        response.status(201).json({poncho: poncho});
    }).catch(next);
});

router.delete("/ponchos/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/ponchos/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(poncho => {
        response.json({poncho: poncho[0]});
    }).catch(next);
});

module.exports = router;

const express = require('express');

let envelopes = [];
let id = 0;

envelopesRouter = express.Router();

//middleware to check if envelopeId already exists
/*envelopesRouter.param('envelopeId', (req, res, next, id) => {
    if (isNaN(id)) {
        res.status(400).send('Please provide a whole number for the envelope ID.');
        next();
    }
    const envelopeId = id;
    const envelopeIndex = envelopes.findIndex(envelope => envelope.id === envelopeId);
    if(envelopeIndex === -1) {
        res.status(404).send('Envelope not found.');
    }
    else {
        req.envelopeIndex = envelopeIndex;
        next();
    }
});

envelopesRouter.param('subtractAmount', (req, res, next) => {
    if (isNaN(id)) {
        res.status(400).send('Please provide a whole number');
    }
    else {
        req.subtractAmount = Number(id);
    }
    next();
});

//GET all envelopes
envelopesRouter.get('/', (req, res, next) => {
    res.status(200).send(envelopes);
});

//POST new budget envelope to the envelopes array
envelopesRouter.post('/', (req, res, next) => {
    id++;
    req.body.id = id;
    const newEnvelope = req.body;
    envelopes.push(newEnvelope);
    res.status(201).send(envelopes);
});

//GET an envelope by ID and display information
envelopesRouter.get('/:envelopeId', (req, res, next) => {
    res.status(200).send(envelopes[envelopeIndex]);
});

//PUT new inputs into variables
envelopesRouter.put('/', (req, res, next) => {
    const newBudget = req.params.budget;
    if (newBudget > 0) {
    envelopes[envelopeIndex].budget = newBudget;
    res.status(200).send(envelopes[req.envelopeIndex]);
    }
    else {
        res.status(400).send('Please enter an amount of money that is larger than $0')
    }
});

envelopesRouter.delete('/:envelopeId', (req, res, next) => {
    const deleted = envelopes.splice(req.envelopeIndex, 1);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
  });

envelopesRouter.post('/transfer/:envelopeId/:toEnvelopeId/:subtractAmount', (req, res, next) => {
    const subtractingBudgetValue = envelopes[req.envelopeIndex].budget - req.subtractAmount;
    const addingBudgetValue = envelopes[req.toEnvelopeIndex].budget + req.subtractAmount;
    if (subtractingBudgetValue < 0) {
        res.status(400).send('Not enough money in the budget transfer');
    }
    else {
        envelopes[req.envelopeIndex].budget = subtractingBudgetValue;
        envelopes[req.toEnvelopeIndex].budget = addingBudgetValue;
        res.status(201).send('Transfer completed');
    }
});*/

module.exports = envelopesRouter;
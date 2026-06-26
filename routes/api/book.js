const express = require('express');
const router = express.router();

const Book = require('../../models/Book');

router.get('/test', (req,res) => res.send('Book route testing'));

router.get('/', (req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobookfound: 'No book found' }));
});

router.get('/:id', (req,res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No book found'}));
});

router.post('/', (req,res) => {
    Book.create(req.body)
        .then(book => res.json({msg:"Book added succesfully"}))
        .catch(err => res.status(400).json({error:"unable to add this book"}));
});

router.put('/:id', (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg:"Updated Succesfully"}))
        .catch(err => 
            res.status(400).json({error:"Unable to update database"})
        );
});

router.delete('/:id', (req,res)=>{
    Book.findIdAndDelete(req.params.delete)
        .then(book => res.json({msg:"Book deleted succesfully"}))
        .catch(err =>
            res.status(404).json({err:"No such Book"})
        );
});

module.exports = router;
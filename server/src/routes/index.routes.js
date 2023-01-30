// import the package json file
const pkg = require('../../package.json');
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({message: 'Welcome to my API'});
    // print the package json file
    console.log(pkg);
    //res.send('Hello World asdasdsa');
});

module.exports = router;
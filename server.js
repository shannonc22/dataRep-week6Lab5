// contants
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// listening for get method request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//takes in name in URL and displays it after Hello
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

// listens for URL /whatever and displays 'cool'
app.get('/whatever', (req, res) => {
    res.send('cool')
})

// displays movie array at /api/movies URL
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    // response with status code
    res.status(200).json({
        mymovies: movies,
        message: 'Data Sent'
    })
   
})

//gets first and last name from html form using GET request
app.get('/name', (req, res) => {
    res.send('Hello '+ req.query.firstname + ' ' + req.query.lastname);
})

//gets first and last name from html form using POST request
app.post('/name', (req, res) => {
    res.send('Goodbye '+ req.body.firstname + ' ' + req.body.lastname);
})

// displays index.html at /test URL
app.get('/test', (req, res) => {
    res.sendFile(__dirname +'/index.html');
})

// port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
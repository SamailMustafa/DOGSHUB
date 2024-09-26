const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(express.static(__dirname + ''));
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message: err.message,
    });
})


app.get('/', (req, res) => {
    res.send('welcome an api')
})

const PORT =9000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

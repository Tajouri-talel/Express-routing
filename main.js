const express = require('express')
const timer = require('./middleware/timer')

const app = express();
app.use(timer);
app.use(express.static('index'))


/*pp.get("/", (req, res) => {
    res.send(`
    <h6> Welcome to our HomePage. Greetings from Tajouri </h6>
    `);
})*/

app.get("/services", (req, res) => {
    res.send(`
    <h2> Hello again. here you should find our servises </h2>
    `);
})

app.get("/contactus", (req, res) => {
    res.send(`
    
    <h2>Again! wanna conctact us ?</h2>`);
})
app.listen(5000, (err) => {
    err ? console.log(err) :
        console.log("server is running!");
})
const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const data = require('./data/data.json');
const recipes = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res)=>{
    res.send(data)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const selected = recipes.find(d=>d.id === id);
    res.send(selected)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


const users = [
    {id: 0, name: "Shabana", email: "shabana@gmail.com", phone: 01336657},
    {id: 1, name: "Sharabanti", email: "sharabanti@gmail.com", phone: 01336657},
    {id: 2, name: "Shabnoor", email: "shabnur@gmail.com", phone: 01336657},
    {id: 3, name: "Shoniya", email: "shoniya@gmail.com", phone: 01336657},
    {id: 4, name: "Susmita", email: "susmita@gmail.com", phone: 01336657},
    {id: 5, name: "Srilekha", email: "srilekha@gmail.com", phone: 01336657}
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port, () => {
    console.log("listening to port", port);
})
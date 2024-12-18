const express = require('express');
const app = express();
app.use(express.json());
let tasks = [];

app.get('/', (req, res) => {
    res.send({tasks});
});

app.delete('/', (req, res) => {
    const idToDelete = req.body.id;
})

app.post('/add-task', (req, res) => {
    const newTask = req.body.task;
    console.log(newTask);
    if(newTask)
    {
        tasks.push(newTask);
        return res.send({tasks});
    }

});

const port = 3000;
app.listen(port, () => {
    console.log(`Server lancé`);
});

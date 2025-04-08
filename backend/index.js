import express from 'express'
const app = express()
const port = 5000

app.use(express.json());

app.get('/api/', (req, res) => {
    res.json('Olá Mundo!')
})

app.get('/api/:id', async (req, res) => {
    let id = req.params.id
    console.log(id)

    let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    let dados = await result.json();
    res.json(dados);
})

app.post('/api/', (req, res) => {
    let nome = req.body.nome;
    res.json("Ola" + nome)
})


app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})
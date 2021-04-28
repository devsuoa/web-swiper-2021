import { createServer } from 'http'
import socket from 'socket.io'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001
const server = createServer(app)
const io = socket(server, {
    cors: { origin: '*' },
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const randomCode = () => {
    return Math.random().toString(36).substring(7)
}

const lobbies = {}

app.post('/create', (req, res) => {
    const { question, options } = req.body
    const code = randomCode()

    lobbies[code] = {
        question,
        options,
        results: options.map((item) => {
            return {
                name: item,
                votes: 0,
            }
        }),
    }
    
    res.send(code)
})

app.get('/:code', (req, res) => {
    const { code } = req.params

    if (lobbies[code] === undefined) {
        res.sendStatus(404)
        return
    }

    res.send(lobbies[code])
})

app.post('/:code', (req, res) => {
    const { code } = req.params
    const { option } = req.body

    if (lobbies[code] === undefined) {
        res.sendStatus(404)
        return
    }

    lobbies[code].results.map((item) => {
        if (item.name === option) {
            item.votes++
        }
    })
    io.to(code).emit('data', lobbies[code])
})

io.on('connection', (socket) => {
    const { code } = socket.handshake.query
    socket.join(code)
})

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

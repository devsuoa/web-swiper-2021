import socket from "socket.io";
import http from "http";
import express from "express";

const app = express();
const port = 3000;

const server = http.createServer(app);
const io = socket(server);

const rooms = {};

app.get('/:id', function (req, res) {
  const {id} = req.params
  res.send(rooms[id])
})

app.post('/:id', function (req, res) {
  const {id} = req.params
  res.send(rooms[id])
})

const createLobby = ({ id, question, options }) => {
  rooms[id] = { question, options };
};

const handleResponse = ({ id, username, option }) => {
  rooms[id].answers = [...rooms[id].answers, { username, option }];
};

io.on("connection", (socket) => {
  socket.on("username", ({ username }) => {});

  socket.on("joinRoom", async ({ code }) => {
    io.to(socket.id).emit("error", "room already started");
  });
});

server.listen(port, () => {
  console.log(`Quinzical app listening at http://localhost:${port}`);
});

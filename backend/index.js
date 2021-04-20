import socket from "socket.io";
import http from "http";

const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
  socket.on("username", ({ username }) => {});

  socket.on("joinRoom", async ({ code }) => {
    io.to(socket.id).emit("error", "room already started");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

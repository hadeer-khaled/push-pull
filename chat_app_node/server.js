const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.set('views','./Views');
app.use(express.static('Views'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.on("chat message", (data) => {
        io.sockets.emit("chat message", data);
    });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});

# Voting system

- A host can write down a question (what food do u want to eat) and array of options)
- Host is redirected to stats page. myurl.nz/stats/:roomID
- [Socket.io](http://socket.io) returns a roomID: myurl.nz/:roomID, windows.location.search() and useEffect to connect to roomID. - react-router (switch)
- Anonymous? Type in name when joining room. when joining a room gets question and array of answers.
- Send answer when swiping.
- User finish answering redirect to myurl.nz/stats/:roomID
- People Vote
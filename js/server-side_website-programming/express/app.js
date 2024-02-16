// route for adding a new user
app.post('/user', (req, res) => {
  const newUser = req.body;
  fs.readFile(usersFilePath, (err, data) => {
    if(err) {
      return res.status(500).json({ error: "Internal Server Error"});
    }
    const users = JSON.parse(data);
    users.push(newUser);
    fs.writeFile(usersFilePath, JSON.stringify(users), err=> {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error"});
      }
      res.json(newUser);
    });
  });
});

// Start the server
app.listen(port, () => {
  port

// Try the following on the terminal using curl

// curl -X POST -H "Content-Type: application/json" -d '{"username": "johh_doe", "email": "john@example.com"}' http://localhost:3000/users

// Output {"username":"John_doe","email":"john@example.com"}

// curl http://localhost:3000/users

// curl -X POST -H "Content-Type: text/plain" -d "Hello" http://localhost:3000/users
// returns an empty json since it doesn't recognize content type as a json string/file.

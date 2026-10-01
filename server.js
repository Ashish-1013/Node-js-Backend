import express from "express"
import 'dotenv/config'

const app = express();

app.use(express.static('dist'))   //this line for frontend and backend in one place 

app.get('/', (req, res) =>{
    res.send('Server is redy')
})

app.get("/api/jokes", (req, res) =>{
    const jokes = [
    {
      "id": 1,
      "title": "The Programmer",
      "content": "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
      "id": 2,
      "title": "The Computer",
      "content": "Why did the computer go to the doctor? Because it had a virus."
    },
    {
      "id": 3,
      "title": "The Developer",
      "content": "A developer walks into a bar. He orders 1 beer, 0 beers, -1 beers, 999999999 beers, and a lizard."
    },
    {
      "id": 4,
      "title": "The Keyboard",
      "content": "Why did the keyboard break up with the mouse? It felt like they weren't on the same page."
    },
    {
      "id": 5,
      "title": "The Bug",
      "content": "I told my code there was a bug. It said, 'That's not a bug, it's a feature.'"
    }
  ]

  res.send(jokes)
})


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Serve at ${port}`)
})
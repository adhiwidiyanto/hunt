const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

app.get('/', (req, res) => res.send('hello'))

// Use Route
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))
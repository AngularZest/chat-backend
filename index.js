
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const USER = require('./models/user')
app.use(express.json())

const { MONGO_URI } = require('./config');
const PostRoutes = require('./routes/api/posts_controller')

app.use(express.json())
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.use('/api/post', PostRoutes)
app.use('/api/get', PostRoutes)
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

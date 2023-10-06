const exppress = require('express')
const app = exppress()

app.get('/', (req, res) => {
   res.send('Hello World');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
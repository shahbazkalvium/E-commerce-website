const express = require('express');
const app = express();
const userRouter = require('./src/Controller/user');

app.use('/api/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const PORT = process.env.port || 5000;
const url = process.env.db_url;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/auth', userRouter);
app.listen(PORT, async () => {
    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.log(err);
  }
});
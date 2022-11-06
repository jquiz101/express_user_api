const express = require('express');  // lives in the node modules directory; was installed
const app = express();  // app is the big ol’ express application
const port = 2727;  // process.env.port

// this allows express to receive json data
app.use(express.json());

const userRoutes = require('./routes/user.routes');  // we wrote this thing that we're requiring

app.use('/api/users', userRoutes);


app.listen(port, function() {
	console.log('app is listening on port 2727');
});


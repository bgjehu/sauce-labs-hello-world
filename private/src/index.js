const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
app.get('/api/message', function (req, res) {
    res.send({message: 'Hello World!'});
});

app.listen(port, function () {
   console.log(`Dev Server Running On ${port}`);
});
var express = require('express');
var app = express();
var port = 3000;

app.get('/', async function(req: any, res: any) {
  res.status(404).send('No data');
});

app.listen(port, function() {
  console.log('App listening on port ' + port);
});

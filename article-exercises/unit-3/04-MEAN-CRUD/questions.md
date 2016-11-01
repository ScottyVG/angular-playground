# Answer the following questions:

### What is express.static?
- Tells the node server where to find the static files to serve.
```
app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')
```


### What does bodyParser.json() enable us to do?
- The body-parser parses the JSON when making POST requests that send JSON to our server.


### Why do we use a catch all route at the end of our app.js?
- This allows the angular router to take over and catch all the routes that so they can send the index.html file using res.sendFile


### What does the path module let us do?
- Allows us to route the paths to the static files to be served up

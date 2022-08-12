// add this below app.use("/", routes) to make index.html a static file
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

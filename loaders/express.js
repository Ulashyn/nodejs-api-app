const expressLoader = async({app}) => {
  // set main route
  app.get('/', (req, res, next) => {
    return res.send('Hayoken!');
  });
  return app;
}

module.exports = expressLoader;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Add delay middleware
server.use((req, res, next) => {
    setTimeout(() => next(), 2000); // 3-second delay
});

server.use(middlewares);
server.use(router);

server.listen(2000, () => {
    console.log('JSON Server is running');
});

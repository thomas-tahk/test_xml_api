const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', createProxyMiddleware({
    target: 'https://boardgamegeek.com/xmlapi/boardgame/35424',
    changeOrigin: true,
}));

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
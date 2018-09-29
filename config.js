module.exports = {
    'port': process.env.PORT || 8081,
    'database': 'mongodb://eagleweb:751803os@ds155529.mlab.com:55529/db-spa',
    'corsOptions': {
        origin: 'http://localhost:8081',
        preflightContinue: true,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
};
module.exports = {
    'port': process.env.PORT || 8081,
    'database': 'mongodb://eagleweb:751803qwerty@ds115543.mlab.com:15543/db-vote-app',
    'corsOptions': {
        origin: 'http://localhost:8081',
        preflightContinue: true,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
};
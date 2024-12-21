const Keyv = require('keyv');
const db = new Keyv('sqlite://lightpanel.db');

module.exports = { db }

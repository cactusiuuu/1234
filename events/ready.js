const { log } = require('../utils/logger');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        log(`Logged in as ${client.user.tag}`, '+', 'green');
    }
};

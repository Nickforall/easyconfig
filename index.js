const fs = require('fs');
const path = require('path');

/**
 * Creates a config file if none exist
 * @param  {object} object The default configuration
 * @return {object}        As expected by CommonJS
 */
module.exports = (object, location) => {
    const configPath = path.join(location, 'config.json');

    // Don't do anything if it's already generated
    if (fs.existsSync(configPath)) return {};

    // Write the default file if we passed above's condition
    fs.writeFileSync(configPath, JSON.stringify(object, true, 4));

    return {};
}

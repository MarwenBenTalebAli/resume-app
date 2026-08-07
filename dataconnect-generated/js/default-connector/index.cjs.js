const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'resume-app18',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;


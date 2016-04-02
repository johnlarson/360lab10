var cluster = require('cluster');

if(cluster.isMaster) {
	var numCPUs = 4;
	for(var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	require('./bin/www');
}

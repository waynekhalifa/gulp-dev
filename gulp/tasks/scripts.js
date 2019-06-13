var webpack = require('webpack'),
    webpackConfig = require('../../webpack.config');

function scripts( callback ) {
    webpack( webpackConfig, function(err, stats) {
        if ( err ) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
}

module.exports = scripts;
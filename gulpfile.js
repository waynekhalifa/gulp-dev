// Import tasks from gulp tasks
var styles = require('./gulp/tasks/styles'),
    scripts = require('./gulp/tasks/scripts');
    watch = require('./gulp/tasks/watch');

// Common Js tasks export
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = watch;
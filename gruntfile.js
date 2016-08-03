/* eslint-env node */

'use strict';

module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig({ fasttime_lint: { default: ['*.js', 'tasks/**/*.js'] } });
        
        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('..');
        
        // Default task.
        grunt.registerTask('default', 'fasttime_lint');
    };

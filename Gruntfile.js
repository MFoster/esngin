module.exports = function(grunt) {

    grunt.initConfig({
        browserify : {
            build: {
                options: {
                    transform: [
                        ['babelify', {'presets': ['env', 'react'], 'sourceMap': true}]
                    ]
                },
                files: {
                    'output/esngin.app.js' : ['input/**/*.js']
                }
            }
        },
        watch: {
            files: ['input/**/*.js'],
            tasks: ['browserify']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify']);
}
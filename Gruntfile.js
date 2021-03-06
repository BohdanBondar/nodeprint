module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            dist: {
                files: {
                    'css/style.min.css': ['css/reset.css', 'css/style.css']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/source/style.scss'
                }
            }
        },
        watch: {
            files: 'css/source/*.scss',
            tasks: ['default']
        },
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // default task
    grunt.registerTask('default', ['sass:dist', 'cssmin:dist']);
}
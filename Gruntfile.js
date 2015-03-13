module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            jade: {
                files: ['src/jade/*.jade', 'src/jade/includes/*.jade', 'src/jade/pages/*.jade'],
                tasks: ['jade']                
            },

            stylus: {
                files: ['src/stylus/*.styl', 'src/stylus/imports/*.styl'],
                tasks: ['stylus']
            },

            uglify: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            }
        },

        jade: {
            compile: {
                files: {
                    // layouts
                    '_layouts/default.html': 'src/jade/default.jade',
                    '_layouts/page.html': 'src/jade/page.jade',
                    '_layouts/post.html': 'src/jade/post.jade',
                    
                    // pages
                    'index.html': 'src/jade/pages/index.jade'
                }
            }
        },

        stylus: {
            compile: {
                files: {
                    'assets/css/main.min.css': 'src/stylus/main.styl',
                    'assets/css/page.min.css': 'src/stylus/page.styl',
                    'assets/css/post.min.css': 'src/stylus/post.styl'
                }
            }
        },

        uglify: {
            compile: {
                files: {
                    'assets/js/main.min.js': 'src/js/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jade', 'stylus', 'uglify', 'watch']);
};
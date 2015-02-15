module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			jade: {
				files: 'src/jade/*.jade',
				tasks: ['jade']
			},

			stylus: {
				files: 'src/stylus/*.styl',
				tasks: ['stylus']
			},

			uglify: {
				files: 'src/js/*.js',
				tasks: ['uglify']
			}
		},

		jade: {
			compile: {
				files: {
					'_layouts/default.html': 'src/jade/layout.jade'
				}
			}
		},

		stylus: {
			compile: {
				files: {
					'css/main.css': 'src/stylus/main.styl'
				}
			}
		},

		// uglify: {
		// 	compile: {
		// 		files: {
		// 		}
		// 	}
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch', 'jade', 'stylus', 'uglify']);	
};
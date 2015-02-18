module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			jade: {
				files: ['src/jade/*.jade', 'src/jade/pages/*.jade'],
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
					// layouts
					'_layouts/default.html': 'src/jade/layout.jade',
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
					'css/main.css': 'src/stylus/main.styl',
					'css/page.css': 'src/stylus/page.styl',
					'css/post.css': 'src/stylus/page.styl'
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
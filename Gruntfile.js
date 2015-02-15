module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			jade: {
				files: 'src/jade/*.jade',
				task: ['jade']
			},

			stylus: {
				files: 'src/stylus/*.styl',
				task: ['stylus']
			},

			uglify: {
				files: 'src/stylus/*.js'
				task: ['uglify']
			}
		}

		// jade: {
		// 	compile: {
		// 		files: {
		// 		}
		// 	}
		// },

		// stylus: {
		// 	compile: {
		// 		files: {
		// 		}
		// 	}
		// },

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
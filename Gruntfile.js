module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'src/*.js'
			]
		},

		uglify: {
			options: {
				mangle: false,
				banner: '/*! object-fit-polyfill - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			js: {
				files: {
					'dist/object-fit-polyfill.js': 'src/object-fit-polyfill.js'
				}
			}
		},

		watch: {
			js: {
				files: [
					'Gruntfile.js',
					'src/*.js',
					'examples/*.*'
				],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task
	grunt.registerTask('default', ['jshint', 'uglify']);

};

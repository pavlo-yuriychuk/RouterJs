module.exports = function(grunt) {
	'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['Router.js']
        }
      }
    },
    jshint: {
      files: ['Router.js', 'test/**/*.js', 'Gruntfile.js'],
      options: {
		    'nonew': true,
		    'funcscope': true,
		    'latedef': true,
		    'unused': true,
		    'noarg': true,
		    'indent': 2,
		    'forin': true,
		    'noempty': true,
		    'quotmark': 'single',
		    'smarttabs': true,
		    'node': true,
		    'asi': true,
		    'supernew': true,
		    'strict': true,
		    'undef': true,
		    'sub': true,
		    'laxcomma': true,
		    'bitwise': true,
		    'onevar': true,
		    'boss': true,
		    'maxlen': 120,
		    'multistr': true,
		    'browser': true,
		    'devel': true,
		    'newcap': false,
		    'globals': {
		      'require': true,
		      'define': true
		    }
			}
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'test']
    },
    'mocha_phantomjs': {
			options: {
				'reporter': 'tap',
				'output': 'report/mocha.tap',
				urls: [
					'http://localhost:8888/tests/index.html',
				],
				timeout: 10000
			}
		},
    connect: {
      options: {
      	hostname: '*'
      },
      tests: {
      	port: 8888,
	    	keepalive: true,
      	base: '.'
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['connect', 'mocha_phantomjs']);

  grunt.registerTask('default', ['jshint', 'test', 'uglify']);

};

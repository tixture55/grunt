module.exports = function(grunt){
	
	
	//require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});

	//config
	grunt.initConfig({
		
		
		pkg: grunt.file.readJSON('package.json'),
		/*
		task: {
			options: {
				compress: true
			}
			target1: {
				src:
				target:	
			}
		}	
		*/
		
		
		qunit: {
			all: ['src/*.less']
		},

		less:{
			options: {
				compress: true
			},

			build1: {
				files: {
					'build/styles.css': ['src/style1.less','src/style2.less']
					
				}
			},

		},
		csslint: {
			check: {
				src: 'build/styles.css'
				//src: '<%= less.build.dest %>'
			}	
		},
		
		jshint: {
			files: {
				src: 'build/json_under.js'
			}
		},
		
		cssmin: {
			minimize: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'build/styles.min.css': 'build/styles.css'	
				}
			}
		},
		watch: {
			files: 'src/*.less',
			tasks: ['less','csslint','cssmin']
		},
		connect: {
			server: {
				options: {
					port: 8765,
					hostname: 'localhost'
				}
			}
		},
		browser_sync:{
			files: {
				src: 
					'index.html'
					//'src/*.less'
				
			},
			options: { 
				server: {
					index: 'index.html'
				},
				ghostMode: {
					scroll: true,
					links: true,
					forms: true
				}
			}
		}
	});
	
	//require('load-grunt-tasks')(grunt);
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	//require('load-grunt-tasks')(grunt);
	//plugin
	
	/*grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-browser-sync');
	*/
	
	
	[
  		'grunt-contrib-less',
  		'grunt-contrib-csslint',
  		'grunt-contrib-cssmin',
  		'grunt-contrib-jshint',
		'grunt-contrib-watch',
		'grunt-contrib-connect',
		'grant-contrib-qunit'
	].forEach(grunt.loadNpmTasks);
	

	//tasks
	//grunt.registerTask('default', []);
	
	//grunt.registerTask('default', ['less','csslint','cssmin','connect','browser_sync','watch']);
	//grunt.registerTask('default', ['less','csslint','cssmin','connect','qunit','watch']);
	grunt.registerTask('default', ['less','csslint','cssmin','jshint','connect','watch']);
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
	
}	

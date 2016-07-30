module.exports = function(grunt){
	
	

	grunt.initConfig({
		
		
		pkg: grunt.file.readJSON('package.json'),
		
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
	
	
	
	[
  		'grunt-contrib-less',
  		'grunt-contrib-csslint',
  		'grunt-contrib-cssmin',
  		'grunt-contrib-jshint',
		'grunt-contrib-watch',
		'grunt-contrib-connect',
		'grant-contrib-qunit'
	].forEach(grunt.loadNpmTasks);
	

	grunt.registerTask('default', ['less','csslint','cssmin','jshint','connect','watch']);
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
	
}	

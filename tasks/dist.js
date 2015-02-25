module.exports= function(grunt, constants){
	grunt.registerTask('dist',
			['clean:dist','copy:dist','wiredep:dist','app_bower:dist',
			'useminPrepare',
			'concat:generated',
			'cssmin:generated',
			'uglify:generated',
			'usemin']);

}
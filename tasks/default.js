module.exports= function(grunt, constants){
	grunt.registerTask('serve',
			['clean:dev','copy:dev','wiredep:dev','app_bower','connect:livereload','watch']);

	grunt.registerTask('app_bower','',function(){
		require('wiredep')({
			src: constants.tmp_folder+ "/**/*.html",
			bowerJson: require('../'+constants.app_bower_file),
			includeSelf: true,
			fileTypes: {
				html: {
			      block: /(([ \t]*)<!--\s*app_bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
			    },
			}
		});
	});
}
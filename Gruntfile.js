'use strict';

var fs= require('fs');
var constants= require('./constants.js');

module.exports= function(grunt){

	var configs = require('load-grunt-configs')(grunt, constants);
	grunt.initConfig(configs);

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('serve',
			['clean:dev','copy:dev','wiredep:dev','app_bower','connect:livereload','watch']);

	grunt.registerTask('app_bower','',function(){
		require('wiredep')({
			src: constants.tmp_folder+ "/**/*.html",
			bowerJson: require('./app_bower.json'),
			includeSelf: true,
			fileTypes: {
				html: {
			      block: /(([ \t]*)<!--\s*app_bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
			    },
			}
		});
	});

}
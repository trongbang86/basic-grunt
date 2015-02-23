module.exports= function(grunt,constants){
	return {
		livereload: {
			options:{
				port: 9000,
				hostname: 'localhost',
				open: true,
				livereload:9999,
				middleware: function(connect){
					return [
					        connect.static('.'),
					        connect.static(constants.tmp_folder),
			        ];
				}
			}
	    },
	}
}

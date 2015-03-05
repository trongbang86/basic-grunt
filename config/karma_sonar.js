module.exports= function(grunt, constants){
	return {
		options: {
	      instance: {
	        hostUrl : 'http://localhost:9000/sonar',
	        jdbcUrl : 'jdbc:mysql://localhost:3306/sonar',
	        jdbcUsername: 'sonar',
	        jdbcPassword: 'sonar',
	        language: 'js'
	      }
	    },
	    dist: {
	      project: {
	        key: 'myapp',
	        name: 'myapp',
	        version: '1.0.0'
	      },
	      sources: ['app']
	    }
	}
}
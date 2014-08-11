module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    config: {
      src: 'src',
      dist: 'dist'
    },

    clean: [
      '<%= config.dist %>/hoodie.css',
      '<%= config.dist %>/hoodie.css.map',
    ],

    sass: { // task
      dev: { // target
        files: [{ // dictionary of files
          dest: '<%= config.dist %>/hoodie-dev.css',
          src: '<%= config.src %>/hoodie.scss'
        }]
      },
      dist: { // another target
        options: { // dictionary of render options
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: [{
          dest: '<%= config.dist %>/hoodie.css',
          src: '<%= config.src %>/hoodie.scss'
        }]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['dev']);

  grunt.registerTask('dev', [
    'clean',
    'sass:dev'
  ]);

  grunt.registerTask('dist', [
    'clean',
    'sass:dist'
  ]);
};

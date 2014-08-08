module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //pkg: grunt.file.readJSON('package.json'),
    clean: [
      'hoodie.css',
      'hoodie.scss',
      'hoodie-dev.css',
      'hoodie-dev.scss',
      'bower_components/hoodie-base-css'
    ],

    replace: {
      all: {
        src: ['src/*.scss'], // source files array (supports minimatch)
        dest: 'bower_components/hoodie-base-css/', // destination directory or file
        replacements: [{
          from: '$BOWER-COMPONENT-PATH', // string replacement
          to: '..'
        }]
      }
    },

    sass: { // task
      dev: { // target
        files: [{ // dictionary of files
          dest: 'hoodie-dev.css',
          src: 'bower_components/hoodie-base-css/hoodie.scss'
        }]
      },
      dist: { // another target
        options: { // dictionary of render options
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: [{
          dest: 'bower_components/hoodie-base-css/hoodie.css',
          src:  'bower_components/hoodie-base-css/hoodie.scss'
        }]
      }
    },

    copy: {
      dev: {
        files: [{
          src: 'bower_components/hoodie-base-css/hoodie.scss',
          dest: 'hoodie-dev.scss'
        }, {
          src: 'bower_components/hoodie-base-css/hoodie-dev.css',
          dest: 'hoodie-dev.css'
        }]
      },
      dist: {
        files: [{
          src: 'bower_components/hoodie-base-css/hoodie.scss',
          dest: 'hoodie.scss'
        }, {
          src: 'bower_components/hoodie-base-css/hoodie.css',
          dest: 'hoodie.css'
        }, {
          src: 'bower_components/hoodie-base-css/hoodie.css.map',
          dest: 'hoodie.css.map'
        }]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['dev']);

  grunt.registerTask('dev', [
    'clean',
    'replace',
    'sass:dev',
    'copy:dev'
  ]);

  grunt.registerTask('dist', [
    'clean',
    'replace',
    'sass:dist',
    'copy:dist'
  ]);
};

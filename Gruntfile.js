module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      local: {
        expand: true,
        cwd: 'src',
        src: ['**'],
        dest: 'build/',
      },
      dist: {
        expand: true,
        cwd: 'src',
        src: ['**'],
        dest: 'build/',
      },
      dist2: {
        src: 'build/debug-empty.js',
        dest: 'build/debug.js',
      },
    },
    clean: {
      all: {
        src: ['build'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['copy:local']);
  grunt.registerTask('dist', ['copy:dist', 'copy:dist2']);

};

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
    watch: {
      all: {
        files: ['src/**'],
        tasks: ['build'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['copy:local']);
  grunt.registerTask('dist', ['copy:dist', 'copy:dist2']);

};

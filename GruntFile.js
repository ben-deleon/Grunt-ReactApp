module.exports = function (grunt) {
    grunt.initConfig({

        parallel: {
            assets: {
                options: {
                    grunt: true
                },
                tasks: ['exec', 'watch']
            }
        },
        replace: {
            devBuild: {
                src: ['rest/templates/index.html'],
                overwrite: true,
                replacements: [{
                    from: 'build/biotest.js',
                    to: 'scripts/config.js'
                },
                    {
                        from:'build/user_style.min.css',
                        to:'styles/user_style.css'

                    }]
            },
            prodBuild:{
                src: ['rest/templates/index.html'],
                overwrite: true,
                replacements: [{
                    from: 'scripts/config.js',
                    to: 'build/biotest.js'
                },
                    {
                        from:'styles/user_style.css',
                        to:'build/user_style.min.css'

                    }]
            }
        }
        //
        //watch: {
        //    scripts: {
        //        files: ['rest/static/styles/user_style.scss'],
        //        tasks: ['sass'],
        //        options: {
        //            spawn: false
        //        }
        //    }
        //}
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('run-dev', ['replace:devBuild','parallel']);
    grunt.registerTask('build-prod', [ 'replace:prodBuild']);
};
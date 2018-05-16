/**
 * generator-
 */

var path = require('path'),
    chalk = require('chalk'),
    Generator = require('yeoman-generator'),
    // yosay = require('yosay'),
    fs = require('fs'),
    path = require('path'),
    { exec } = require('child_process');
    templatesPath = path.join(__dirname, 'templates');

module.exports = class extends Generator {
    info() {
        this.log(chalk.green(
            'Generating generator now: '
        ));
    }

    generateBasic() {
        let to = path.resolve('./');
        this.fs.copy(templatesPath, to);
    }

    generateClient() {
        this.sourceRoot(templatesPath);
        this.destinationPath('./');
    }

    install() {
        var self = this;
                
        this.log(chalk.green(
            '\nBegin installing dependencies'
        ));
        this.installDependencies({
            npm: false,
            bower: false,
            yarn: true,
            skipMessage: true,
            callback: function () {
                self.log(chalk.green(
                    'Finish installing dependencies!'
                ));

                self.end();
            }
        });
    }

    end() {
        exec('echo "node_modules" > .gitignore');
        
        this.log(chalk.yellow(
            '\nYour generator has been created successfully!\n'
        ));
    }
};

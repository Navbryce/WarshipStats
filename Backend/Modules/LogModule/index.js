var fs = require('fs');
var util = require('util');

function LogWriter (pathInsideLogFolder, logName) { // Assumes the SHIP_APP path has been set.pathInsideLogFolder should include a back slash / at the end
  this.log = (string) => {
    string = util.format(string) + '\n';
    writeStream.write(string);
  };
  this.deleteLog = () => {
    writeStream.close();
    fs.unlink(this.logPath, (error) => {
      console.log('A file could not be found on the path: ' + this.logPath);
      console.error(error);
    });
  };

  // Constructor
  const appPath = process.env.SHIP_APP; // Path points to parent directory of ship app. Ship scraper should be set under the SHIP_APP environment variable
  this.logPath = appPath + '/Logs/' + pathInsideLogFolder + logName + '.log';

  var existingLogContents = null;
  if (fs.existsSync(this.logPath)) { // Because createWriteStream will delete the existing file. If it already exists, PULL out the existing data from the file
    existingLogContents = fs.readFileSync(this.logPath).toString();
  }

  var writeStream = fs.createWriteStream(this.logPath, {flags: 'w'});

  if (existingLogContents != null) {
    this.log(existingLogContents + '\n');
    this.log('ALL DATA BEFORE THIS POINT WAS FROM A PRE-EXISTING LOG FILE');
  }
}

module.exports = {
  LogWriter: LogWriter
};

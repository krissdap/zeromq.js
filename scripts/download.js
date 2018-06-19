var request = require("request");
var fs = require("fs");

function writeToFile(filename, response, callback) {
  response.pipe(fs.createWriteStream(filename));
  response.on("end", callback);
}

function download(fileUrl, filename, callback) {
  request
    .get(fileUrl)
    .on('response', function(response) {
      writeToFile(filename, response, callback);
    })
    .on("error", callback);
}

module.exports = {
  download: download
};

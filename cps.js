var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });

    fs.readFile('./file.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            console.log('current json is ' + data)
            var jsonFile = JSON.parse(data);
            jsonFile['name'] = "Aqueel"
            fs.writeFile('./file.json', JSON.stringify(jsonFile), 'utf8', function (err) {
                if(err) {
                    return console.log(err);
                } else {
                    console.log('JSON is written back')
                    fs.readFile('./file.json', 'utf8', function(err, data) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log('updated data is '+ data)
                    })
                }
            });
        }

    })

});

server.listen(3000);
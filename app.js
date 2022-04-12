const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf8');
const style_css = fs.readFileSync('./style.css', 'utf8');

const getFromClient = (request, response) => {
    var url_parts = url.parse(request.url);
    var content = ejs.render(index_page, {
        title: 'Indexページ',
        content: 'これはテンプレートエンジンを使ったサンプルページです',
    });
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(content);
    response.end();
}

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start!');
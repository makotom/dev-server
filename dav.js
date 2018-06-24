const WebDAV = require('webdav-server').v2;

const server = new WebDAV.WebDAVServer({ port: 38080 });
server.setFileSystem('/', new WebDAV.PhysicalFileSystem('../'), (success) => {
    server.start(() => console.log('READY'));
});

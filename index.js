{
    const rootDir = process.env.HOME;

    {
        const webdav = require('webdav-server').v2;
        const server = new webdav.WebDAVServer({ port: 38080 });

        server.setFileSystem('/', new webdav.PhysicalFileSystem(rootDir));

        server.start();
    }

    {
        const express = require('express');
        const serveIndex = require('serve-index');

        const app = express();

        app.use(
            express.static(rootDir),
            serveIndex(rootDir, {
                icons: true
            })
        );

        app.listen(48080);
    }
}

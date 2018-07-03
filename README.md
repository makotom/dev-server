# Quick start
1. npm i
2. npm run start
3. start \\\\localhost@38080\DavWWWRoot
4. start iexplore.exe http://localhost:48080/

# How come this STUPID thing makes sense?
* You want to use Git on WSL for some good reason.
* You also want to use VS Code.
* But you don't want to break everything on WSL by accessing to WSL rootfs directly.
* You neither want to leave a Samba server open to tons of malicious attempts over the Internet.
* You don't want to mess up WSL by installing gigantic Apache or nginx, too.
* However, you need to run tests against files on the Git repositories using IE and Edge.

This is how you should find it a neat idea.

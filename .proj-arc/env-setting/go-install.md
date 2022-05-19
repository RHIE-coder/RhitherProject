# 🔒 Install Golang

https://go.dev/dl/

## 🔑 Go version 1.18.x 
```sh
wget https://golang.org/dl/go1.18.2.linux-amd64.tar.gz
```
checksum e54bec97a1a5d230fc2f9ad0880fcbabb5888f30ed9666eca4a91c5a32e86cbc
```sh
sha256sum go1.18.2.linux-amd64.tar.gz
```
unzip the `tar.gz` file
```sh
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz
vi ~/.bashrc
--------
GOPATH=/usr/local/go
PATH=$PATH:$GOPATH/bin
--------
. ~/.bashrc
```
verify
```sh
go version
```
# ํ๊ฒฝ์ํ

## ๐Ubuntu 18.4 LTS

[Download Ubuntu 18.4](https://releases.ubuntu.com/bionic)

## ๐VirtualBox

[Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)

## ๐Visual Studio Code

[Download VSCode](https://code.visualstudio.com)

## ๐Putty (Optional)

[Download Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

## ๐Start Setting

### ๐์๊ฒฉ ํ๊ฒฝ
#### 1. VirtualBox์ Ubuntu์ค์นํ๊ธฐ
#### 2. VirtualBox ๊ฒ์คํธ ํ์ฅ๊ณผ ํ๊ธ ์๋ ฅ ์ํํด๋ณด๊ธฐ[Shift+Space]
#### 3. ๊ฒ์คํธ(๋ฆฌ๋์ค)์ SSH ์ํ
 - ๋ฆฌ๋์ค์ `openssh-server` ์ค์น
```shell
sudo apt-get install openssh-server
sudo service sshd start
```
 
 - active(running) ์ํ์ธ์ง ํ์ธํ๊ธฐ
```shell
sudo service sshd status
```

 - VirtualBox์ ํฌํธํฌ์๋ฉํ๊ธฐ`(์ค์)`

#### ๊ฒ์คํธOS IPํ์ธ
```shell
sudo apt install net-tools
```
```shell
ifconfig
```
#### ํธ์คํธOS IPํ์ธ
window cmd
```cmd
ipconfig
```

#### 4. VSCode๋ก ๋ฆฌ๋์ค ์ ์

 - ํ์ฅ ํ๋ก๊ทธ๋จ ์ค์น
    - Remote - SSH

 - `F1`๋๋ฅด๊ณ  `Remote-SSH:Connect to Host..` ํ๊ธฐ
```
>remotessh
```
 - ์ ์ ํ๊ธฐ `[userid]@[ipaddress]`

*example*

```
rhie@192.168.56.1
```
#### ์๋ฌ๋ฐ์์ ์๋ ํด๋ ํ์ธ
```
C:\Users\[์ฌ์ฉ์ ์ด๋ฆ]\.ssh
```
 - ์ฌ์ค์  ์ ๋ฆฌ๋์ค์ vscode remoteSSH ๊ด๋ จ ๋ฐ์ดํฐ ์ง์์ผ ํจ

### ๐Utils
#### jq
```
sudo apt install jq
```

#### git
```
sudo apt install git
```
#### curl
```
sudo apt install curl
```

#### wget
```
wget --version
```

#### wget
```
sudo apt install vim
```

#### tree
```
sudo apt-get install tree
```

# 환경셋팅

## 🌈Ubuntu 18.4 LTS

[Download Ubuntu 18.4](https://releases.ubuntu.com/bionic)

## 🌈VirtualBox

[Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)

## 🌈Visual Studio Code

[Download VSCode](https://code.visualstudio.com)

## 🌈Putty (Optional)

[Download Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

## 🌈Start Setting

### 🍀원격 환경
#### 1. VirtualBox에 Ubuntu설치하기
#### 2. VirtualBox 게스트 확장과 한글 입력 셋팅해보기[Shift+Space]
#### 3. 게스트(리눅스)에 SSH 셋팅
 - 리눅스에 `openssh-server` 설치
```shell
sudo apt-get install openssh-server
sudo service sshd start
```
 
 - active(running) 상태인지 확인하기
```shell
sudo service sshd status
```

 - VirtualBox에 포트포워딩하기`(중요)`

#### 게스트OS IP확인
```shell
sudo apt install net-tools
```
```shell
ifconfig
```
#### 호스트OS IP확인
window cmd
```cmd
ipconfig
```

#### 4. VSCode로 리눅스 접속

 - 확장 프로그램 설치
    - Remote - SSH

 - `F1`누르고 `Remote-SSH:Connect to Host..` 하기
```
>remotessh
```
 - 접속 하기 `[userid]@[ipaddress]`

*example*

```
rhie@192.168.56.1
```
#### 에러발생시 아래 폴더 확인
```
C:\Users\[사용자 이름]\.ssh
```
 - 재설정 시 리눅스에 vscode remoteSSH 관련 데이터 지워야 함

### 🍀Utils
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

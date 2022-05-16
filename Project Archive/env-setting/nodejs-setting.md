### [node.js SDK] Python 2.7버전 있는지 확인
```
python --version
```
리눅스 Ubuntu 18.04는 기본적으로 깔려 있을 있을 것

### [node.js SDK] Node.js 설치
PPA를 통해 최신버전 가져오기(12버전)
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```
설치
```
sudo apt-get install -y nodejs
```
확인
```
node -v
npm -v
```
NPM의 제 기능을 위해 부가설치(npm install 에러 방지)
```
sudo apt-get install build-essential
```
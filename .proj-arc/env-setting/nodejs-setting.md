### Node.js 설치

PPA를 통해 최신버전 가져오기(12버전)
```
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
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
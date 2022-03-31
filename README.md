# Novel App

리액트와 Node.js로 만든 웹 소설 플랫폼 웹입니다. 소설의 생성, 삭제 등 CRUD 시스템을 제작했습니다.

## 프로젝트 소개

프론트 엔드라는 직업을 처음 알게 된 계기는 웹 소설 플랫폼을 이용하면서였습니다.
언젠가 나도 플랫폼을 만들어보고자 하는 마음가짐으로 개발자 공부에 뛰어들었고 작게나마 이 프로젝트를 시작했습니다.

## 사용기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### 개발환경 설치

```
Client
 npm install @ckeditor/ckeditor5-react @fortawesome/fontawesome-free @fortawesome/fontawesome-svg-core" 등등
 npm i axios bootstrap firebase html-react-parser react-router-dom

Server
 npm install body-parser cors express dotenv mysql nodemon
  
```

### 기능

로그인

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/89452058/160941074-a5683e43-4238-404b-b945-9f97c6ae7912.gif)


홈 화면

![novel1](https://user-images.githubusercontent.com/89452058/160937009-1f00bee6-4566-4d8d-9b7c-bf1b7dcf88f5.png)


소설 등록

![ezgif com-gif-maker](https://user-images.githubusercontent.com/89452058/160939652-c796013a-0634-4ea7-86ed-edd4fa9d4215.gif)

소설 상세

![novel2](https://user-images.githubusercontent.com/89452058/160941243-baea58e8-03d5-43d8-9328-e86a69b2d9c1.png)



### 파일
fBase.js
> 파이어베이스의 서비스를 가져오기 위한 파일. 프로젝트에서는 로그인 기능만 사용했습니다.

routes/Auth.js
> 파이어베이스의 인증을 요청/허용하기 위한 파일입니다.

routes/Home.js
> 로그인 성공 시, 사용자에게 보여줄 화면. 소설 등록 파일인 conponents/createnovel/Createnovel.js와 conponents/Navigation/Navigation.js파일 등을 담고있습니다.

components/Novelabout/Novelabout.js
> 소설의 이미지, 플롯, 작가명, 회차 등을 보여주는 파일입니다.

components/Novelabout/OwnNovelAdd/NovelAdd.js
> 소설의 작가가 본인일 시, 회차를 추가하는 기능을 수행하는 파일입니다.

components/Novelabout/NovelEdit/UpdateSub/UpdateSub.js
> 소설의 작가가 본인일 시, 해당 회차를 수정하는 기능을 수행합니다.

components/EditUserInfo/EditProfile.js
> 유저의 프로필과 별칭을 업데이트 할 수 있는 페이지다. firebase를 통한 로그아웃 기능은 components/Navigation/Profile.js에 넣어두었다.


### 배운 점/ 아쉬운 점

원래 계획은 Heroku 또는 AWS에 배포까지 실행할 계획이었다.
하지만 Heroku에 배포 시, Server 폴더에서 문제가 발생하였고 배포는 성공하지 못했습니다.
또한 상태관리/Props drilling을 최소화하기 위해 redux가 아닌 ContextAPI를 선택했습니다.
때문에 타입스크립트를 사용하지 않아 state의 관리가 까다로웠다.
다만, Heroku 배포 시 오류를 찾아나가며 Hroku 이용법을 습득한 점과 Context API를 사용한 것은 앞으로 꾸준히 가져가야 할 이점으로 생각합니다

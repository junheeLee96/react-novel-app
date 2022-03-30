# Novel App

리액트와 Node.js로 만든 웹 소설 플랫폼 웹입니다. 소설의 생성, 삭제 등 CRUD 시스템을 제작했습니다.

### 개발환경 설치

```
> >Client
> > > npm install @ckeditor/ckeditor5-react @fortawesome/fontawesome-free @fortawesome/fontawesome-svg-core" 등등
> > > npm i axios bootstrap firebase html-react-parser react-router-dom

> >Server
> > > npm install body-parser cors express dotenv mysql nodemon
  
```

### 사용예제

홈 화면

![novel1](https://user-images.githubusercontent.com/89452058/160937009-1f00bee6-4566-4d8d-9b7c-bf1b7dcf88f5.png)


소설 등록

![ezgif com-gif-maker](https://user-images.githubusercontent.com/89452058/160939652-c796013a-0634-4ea7-86ed-edd4fa9d4215.gif)

### 파일
fBase.js
> 파이어베이스의 서비스를 가져오기 위한 파일. 프로젝트에서는 로그인 기능만 사용했다.

routes/Auth.js
> 파이어베이스의 인증을 요청/허용하기 위한 파일.

routes/Home.js
> 로그인 성공 시, 사용자에게 보여줄 화면. 소설 등록 파일인 conponents/createnovel/Createnovel.js와 conponents/Navigation/Navigation.js파일 등을 담고있다.

components/Novelabout/Novelabout.js
> 소설의 이미지, 플롯, 작가명, 회차 등을 보여주는 파일이다.

components/Novelabout/OwnNovelAdd/NovelAdd.js
> 소설의 작가가 본인일 시, 회차를 추가하는 기능을 수행하는 파일이다.

components/Novelabout/NovelEdit/UpdateSub/UpdateSub.js
> 소설의 작가가 본인일 시, 해당 회차를 수정하는 기능을 수행한다.


### Heroku 배포 시 오류

Application error
> 

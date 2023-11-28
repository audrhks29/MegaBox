# [React] 20230622 메가박스 메인
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">

### v1.2.0
   1. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 라이브러리 사용
   2. styled component reset style적용
### v1.1.0
   1. <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> await axios.get 사용하여 책 데이터 불러오기
1. <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 사용
### v1.0.0
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white">

## 2. Version Update
### v1.2.2
   1. 최초 로딩시간 개선
      1. 이미지 리사이징 및 압축을 통한 개선
      2. 결과
         1. 개선전
         ![개선전](https://github.com/audrhks29/MegaBox/assets/130128690/52c9ad6b-274d-4a6c-8b77-be4197c943de)
         
         2. 개선후
         ![개선후](https://github.com/audrhks29/MegaBox/assets/130128690/ace698b1-22fc-4119-b2b9-31377eb0439a)

         3. 요약
            |        | 네트워크 전송 | 리소스 |  완료  |  로드  |
            | :----: | :-----------: | :----: | :----: | :----: |
            | 개선전 |     20MB      | 20.1MB | 6.47초 | 6.08초 |
            | 개선후 |     1.8MB     | 1.9MB  | 1.02초 | 1.09초 |
### v1.2.1
   1. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 일부 수정
      ```js
      const [scrollHeight, setScrollHeight] = useState(window.innerHeight);

      useLayoutEffect(() => {
         setScrollHeight(document.documentElement.scrollHeight);
      }, [movieData, pagingData, loading]);

      return (
         <>
               <BgImageContainer scrollHeight={scrollHeight}></BgImageContainer>
      ```
      > useState를 사용 후 styledComponent에 props를 넘김

      ```js
         export const BgImageContainer = styled.div`
         <!-- 생략 -->
         height: ${(props) => props.scrollHeight}px;
         `
      ```
      > 받아온 props.scrollHeight 적용
   2. 데이터 수정 및 이미지 public폴더에 저장 [v1.2.1 영화 데이터 주소](https://gist.githubusercontent.com/audrhks29/4d151f01eb80528030a419ef7db92693/raw/31e775a6bef97529c63277c5a452dca4574aeeb7/movie.json)
### v1.2.0
   1. <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> 삭제
   2. <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> 추가
### v1.1.0
   1. <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> 사용
[v1.1.0 영화 데이터 주소](https://gist.githubusercontent.com/audrhks29/4d151f01eb80528030a419ef7db92693/raw/55bdbba28bc05ff0feed602a00d458865542d892/movie.json)
   1. <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 사용
   2. 데이터 수정
   3. component 간소화
### v1.0.4
 1. 페이징 기능 추가
 2. 데이터 추가 및 수정
### v1.0.3
   1. components 작성
### v1.0.2
   1. like 버튼 기능 수정
   2. 배경화면 랜더링 수정
   3. 팝업 기능 추가
### v1.0.1
   1. 검색기능 수정
   2. like 버튼 기능 추가
   3. 검색창 밑, 상영중 영화 filter 기능 추가
   4. 배경화면 삽입
### v1.0.0
   1. 메가박스 박스오피스

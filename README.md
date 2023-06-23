# MegaBox
## 코드수정
### onChange함수
1. 수정 전
```js
const onChange = (e) => {
    setSearch(e.target.value)
    setFilteredMovieData(movieData.filter(item => item.movieNm.includes(search)))
}
// 중략
<input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
```
<pre>문제 : 검색어 입력시 제대로 인식 불가능.</pre>    

<pre>예 : '범죄도시' 영화 검색   
  
'범죄' 검색 → 결과없음
'범죄ㄷ' 검색 → '범죄도시3' 해당 값 출력</pre> 

2. 원인
<pre>1. search 상태가 업데이트되기 전에 filterMovieData를 설정하고 있기 때문에 정확한 필터링이 이루어지지 않음.</pre>

3. 해결방안
<pre>1. setSearch를 먼저 호출하고, 그 다음에 setFilteredMovieData를 호출
2. setFilteredMovieData에 대한 호출 시에는 search 대신 현재 입력된 값(inputValue)을 사용</pre>

4. 수정 후
```js
const onChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setFilteredMovieData(movieData.filter(item => item.movieNm.includes(inputValue)));
};
// 중략
<input type="text" value={search} onChange={onChange} placeholder='검색어를 입력하세요' />
```






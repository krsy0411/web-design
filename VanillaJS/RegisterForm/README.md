# 회원가입 ui
* 클래스 기반 제작
* typescript, handlebarsJS
* bundler - parcelJS

# 템플릿 생성에 handlebars.js를 이용

### 기본구조
> 템플릿 -> 컴파일(템플릿) -> 컴파일된 템플릿에 데이터 입히기 -> 문자열로 반환 

### 사용되는 데이터 종류
* Props
    * id
    * label
    * type
    * require
    * placeholder?
    * text?
    * **비밀번호**
        * strong : 얼마나 복잡한 패스워드를 적었는지에 대한 데이터
* 클래스에서 추가로 처리되는 데이터
    * updated
    * valid
    * validateMessage
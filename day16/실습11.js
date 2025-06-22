// [ 실습11 ]

// 함수란? 미리 정의한 코드를 재사용 함으로써 효율적으로 로직 가능
/* 
        x = 3, y = 2 <--------- 함수 매개변수 (여러개가능)
        ---  ----------
        |             |
        |     X+Y     | <---------- 함수 로직/실행부 { }
        |             |
        ---------  ----
                return  <-------- 함수 종료되면서 반환되는 값 ( 한개 )
*/


// 실습 1: 성인 인증 함수
// 나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요.
// isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.

// 1. 매개변수  : age
// 2. 반환값    :  true / false
// 3. 로직      : age가 20세 이상이면 true , 미만이면 false    


// function isAdult (age){ // 함수선언
//     if(age>=20){return true;}
//     else{return false;}
  
// }
// let result = isAdult(25); // 함수 호출1
// console.log( result );
// // 함수 호출2
// console.log( isAdult(17));



// function isAdult(age){
//         if(age>=20){return true;}
//         else{return false;}
// }
// console.log(isAdult(25)) 
// console.log(isAdult(17)) 




// 실습 2: 배열의 총합 구하기
// 숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 
// 아래 numbers 배열로 테스트해 보세요.
// const numbers = [10, 20, 30, 40, 50];


// const numbers = [10, 20, 30, 40, 50];

// function sumArray(array){
//         let sum = 0;
//         for(let i=0; i<=array.length-1;i++){
//                 sum+=array[i]
//         }
//         return sum ;
// }
// sumArray(numbers);
// let sum = sumArray(numbers);



// const numbers = [10, 20, 30, 40, 50];
// // 매개변수 : array
// // 반환값 : 배열의 총합계
// // 로직 : for 이용한배열의총합계구하기
// function sumArray( array ){
//     let sum = 0; // 누적합계 변수
//     for(i=0;i<=array.length-1;i++){
//         sum += array[i];
//     }
//     return sum; // 누적합계를 반환한다. --> sumArray() 호출된곳으로 반환
// }
// sumArray( numbers );             // 함수 호출하고 반환값을 변수에 저장하지 않았다.
// let sum = sumArray(numbers);    // 함수 호출하고 반환값을 변수에 저장했다.


// const numbers = [10, 20, 30, 40, 50];

// function sumArray(array){
//     let sum= 0; 
//     for(i=0;i<=array.length-1;i++){
//        sum+= array[i]
       
//     }
//     return sum;
// }
// sumArray(numbers);






// 실습 3: 가장 긴 단어 찾기
// 문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 
// 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.
// const words = ['apple', 'banana', 'kiwi', 'strawberry'];

// 1. 매개변수 : array *매개변수명은 아무거나.
// 2. 반환값 : 배열내가장긴단어
// 3. 로직 : 매개변수배열내 가장 긴 단어 찾기 <for>


// const words = ['apple', 'banana', 'kiwi', 'strawberry'];

// function findLongestWord(array){
//         let findout=[];
//         for(let i=0; i<=array.length-1; i++){
//                 let long=array[i];
//                 if(long.length>findout.length){findout=long}
//         }return findout;
// }
// let result=findLongestWord(words)
// console.log(result)






// const words = ['apple', 'banana', 'kiwi', 'strawberry'];
// function findLongestWord(array){
//     let findout = ""; // 가장 긴 단어를 저장하는 변수
//     for(let i=0;i<=array.length-1;i++){
//         let word = array[i];
//         // 만약에 i번째 단어가 가장긴단어보다 길면 가장긴단어에 i번째 단어 대입한다.
//         if ( word.length>findout.length){findout=word;}
//     }   // for end
//     return findout; //함수가 종료되면서 함수를 호출했던곳으로 반환하는 값
// }   // func end
// let result = findLongestWord(words); //배열(객체) 은 객체이다.
// console.log( result ) ;

// const words = ['apple', 'banana', 'kiwi', 'strawberry'];
// function findLongestWord(array){
//     let findout = ""; 
//     for(let i = 0 ; i <= array.length-1 ; i++){
//         let word = array[i];
//         if( word.length>findout.length){findout=word;}
    
//     }return findout;
// }
// let result = findLongestWord(words);
// console.log( result);

// 실습 4: 게임 점수 관리하기
// let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
// gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.

// let userScore = 0;
// function gainScore(){return userScore+=10;} 
// function loseScore(){return userScore-=5;} 

// gainScore()
// gainScore()
// gainScore()
// loseScore()
// console.log(userScore)







// // 1. (gainScore) 매개변수 : x
// // 2. (gainScore) 리턴값 : x
// // 3. (gainScore) 로직 : 전역변수(userScore)를 1증가..
// let userScore = 0;
// function gainScore(){
//     userScore+=10; // 10증가.
// }
// // 1. (loseScore) 매개변수 : x
// // 2. (loseScore) 리턴값 : x
// // 3. (loseScore) 로직 : 전역변수(userScore)를 5감소.
// function loseScore(){
//     userScore-=5; // 5감소.
// }
// gainScore();
// gainScore();
// gainScore();
// loseScore();
// console.log(userScore);


// 실습 5: 최고 점수 학생 찾기
// 전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
// const students = [
//   { name: '김철수', score: 85 },
//   { name: '이영희', score: 92 },
//   { name: '박민준', score: 78 }
// ];

// const students = [
//   { name: '김철수', score: 85 },
//   { name: '이영희', score: 92 },
//   { name: '박민준', score: 78 }
// ];
// function findTopStudent(){
//         let output={ name :'',score:0}
//         for(let i=0; i<=students.length-1;i++)
//                 {let student=students[i];
//                 if(student.score>output.score){output=student}
//         }
//         return output.name
                
// }let result= findTopStudent()
// console.log(result)


// [ findTopStudent ] 최고 점수 학생 찾기 함수
// 1. 매개변수 : x
// 2. 리턴값 : 가장높은점수 의 이름
// 3. 로직(명령코드들) : students 배열내 가장 높은 점수(score)를 가진 학생의 이름을 찾는 행동/로직/코드
// * 전역변수

// const students = [
//   { name: '김철수', score: 85 },
//   { name: '이영희', score: 92 },
//   { name: '박민준', score: 78 }
// ];

// function findTopStudent (){
//         let maxObj = { name : '' , score : 0}
//         for( let index=0; index<=students.length-1; index++){
//                 const student=students[index]; //const let 상관없음
//                 if( student.score > maxObj.score){
//                         maxObj = student;
//                 }
//         } // for end
//         return maxObj.name; // 가장높은점수의이름
// } // f end
// // 확인차
// let result = findTopStudent();
// console.log( result );





// 실습 6: 상품 목록 페이지 만들기 (참고: 예제 6, 7, 8, 12)
// 전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 
// 표시하는 renderProducts 함수를 만드세요.
// 각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
// const products = [
//   { name: '노트북', price: 1200000, stock: 5 },
//   { name: '모니터', price: 350000, stock: 12 },
//   { name: '키보드', price: 80000, stock: 25 }
// ];

// const products = [
//   { name: '노트북', price: 1200000, stock: 5 },
//   { name: '모니터', price: 350000, stock: 12 },
//   { name: '키보드', price: 80000, stock: 25 }
// ];
// function renderProducts(){
//         let html="";
//         for(let i=0; i<=products.length-1;i++){
//                 let product=products[i];
//                 html+=`<div><h4>이름:${product.name}</h4><p>가격:${product.price}</p><p>재고:${product.stock}</p></div>`
//         }return html
// }
// document.write(renderProducts())


// 실습 7: 간단한 계산기
// num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
// operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)
ddd

// 실습 8: HTML 리스트(ul, li) 동적 생성
// todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
// renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
// 최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
// let todoList = ['장보기', '운동하기']

// 실습 9: 입장료 계산 함수
// 임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
// 8세 미만: "무료"
// 8세 이상 19세 이하: "5,000원"
// 20세 이상: "10,000원"
// 계산된 가격 문자열을 반환(return)하시오.

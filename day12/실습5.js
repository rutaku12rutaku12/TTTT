// [ 실습5 ]

// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = [ '사과', '바나나' ];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요.
// 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.

// let fruitList = [ '사과', '바나나' ];
// let fruit = prompt("새로운 과일: ")
// if( fruitList.indexOf(fruit) == -1 ){fruitList.push(fruit); console.log(fruitList)}
//     else{console.log('이미 존재하는 과일입니다.')}


//조건 : 배열찾기함수( .indexOf() ) , furitList.indexOf( 새로운과일명 ) == -1
// let fruitList = [ '사과', '바나나' ];
// let fruitName = prompt( '새로운 과일명 : ');
// if( fruitList.indexOf( fruitName) == -1 ){// 존재하지 않는다.
//     fruitList.push( fruitName); //  입력받은 값을 배열에 추가한다. push()
//     console.log( fruitList);
// }else{console.log('이미 존재하는 과일입니다.');} // (그외) 존재한다.



// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를,
// '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.

// let num = prompt("주민등록번호 13자리를 입력하세요.: ")
// if(num[6] == 1 || num[6] == 3 ){console.log('blue');
// }    else{console.log('red');
// }

// 조건 : 주민등록번호[6] == '1' || , 주민등록번호[6] == '3' ,
//  (1) 문자열도 배열자료 기반 이므로 인덱스가 존재한다.
//  (2) 위치는 1 부터 , 인덱스는 0부터 , 7번째 숫자 --> 6번 인덱스 뜻
// let ssn = prompt('주민등록 번호 : ')
// if( ssn[6] =='1' || ssn[6] == '3'){ console.log('blue');}
// else{ console.log('red');}



// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10% 할인
// 30,000원 이상 50,000원 미만: 5% 할인
// 10,000원 이상 30,000원 미만: 1% 할인
// 10,000원 미만: 할인 없음



// let count = prompt("구매한 금액 : ");
// if(count >=50000){console.log(`${count*0.9}원입니다.`)}
// else if ( count >=30000){console.log(`${count*0.95}원입니다.`)}
// else if ( count >=10000){console.log(`${count*0.99}원입니다.`)}
// else {console.log(`${count}원입니다.`)}

// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
// let season = ['1','2','3','4','5','6','7','8','9','10','11','12'];
// let def = prompt("(1~12)월 숫자를 입력해주세요. : ")
// if (def <= 0 || def >=13){console.log("잘못된 월입니다.");}
// else if(def <= 2 || def >= 12){console.log("겨울");}
// else if(def >= 3 && def <= 5){console.log("봄");}
// else if(def >= 6 && def <= 8){console.log("여름");}
// else if(def >= 9 && def <= 11){console.log("가을");}
// else {console.log("잘못된 월입니다.");}


// 문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.

// let num1 = Number(prompt(" 1번째 숫자를 입력하세요.: "))
// let num2 = Number(prompt(" 2번째 숫자를 입력하세요.: "))
// let num3 = Number(prompt(" 3번째 숫자를 입력하세요.: "))
// if( num1 > num2 && num1 > num3&& num1 != num2 && num1 != num3 && num2 != num3 ){console.log(`${num1}`)}
// else if( num2 > num1 && num2 > num3 && num1 != num2 && num1 != num3&& num2 != num3 ){console.log(`${num2}`)}
// else if( num3 > num1 && num3 > num2 && num1 != num2 && num1 != num3&& num2 != num3 ){console.log(`${num3}`)}
// else {console.log("서로 다른 숫자를 입력해주세요.")}


// -------------------------------------------------------------------------------------------------

// 문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'

// let year = prompt("연도를 입력하세요.: ")
// if((( year % 4 == 0 )&&( year % 100 != 0))||(year % 400 == 0)){
//     console.log(`${year}년은 윤년입니다.`);
// }else{console.log(`${year}년은 평년입니다.`);}
                                                                                                 

// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력


let num1 = prompt("정수1: ")
let num2 = prompt("정수2: ")
let num3 = prompt("정수3: ")
let numList = [num1,num2,num3]
if( num1>num2 && num2>num3 && num1>num3)




// // (1) 3개의 정수를 입력받는다.
// let num1 = Number( prompt("정수1 : "))
// let num2 = Number( prompt("정수2 : "))
// let num3 = Number( prompt("정수3 : "))
// // (2) 3개의 하나의 배열 자료로 표현하여 변수에 저장
// let numList = [ num1 , num2 , num3 ]
// // (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법, 한 위치에 하나만 저장이 가능하다.
// /* 
//     A = 10; B = 20;             두 변수간의 자료를 교체하시오.
//     A = B ;         B의 자료를 A에 대입 * A의 기존 자료는 사라진다. (변수는 하나의 자료만 저장한다.)
//     A = 20 ; B = 20;    문제 발생 !!!
//     해결방안 : 임시변수 만들어서 임시 보관

//     A = 10; B = 20; TEMP;
//         TEMP = A;       TEMP = 10 , A = 10 , B = 20
//         A = B ;         TEMP = 10 , A = 20 , B = 20
//         B = TEMP;       TEMP = 10 , A = 20 , B = 10
//  */
// // (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기.
// // A > B 비교하여 A가 더크면 A와 B의 위치를변경/스왑
// // (5) 조건 : num > num2 , num1 > num3 , num2 > num3
// let temp;
// if( numList[0] > numList[1]){ // 첫번째 값이 두번째 값보다 크면 ( 스왑/교체 ) , 내림차순은 > 부호만 <로
//     temp = numList[0];          // 임시변수에 첫번째 값을 넣고
//     numList[0] = numList[1];    // 첫번째 위치에 두번째 값을 넣고
//     numList[1] = temp;          // 두번째 위치에 임시변수(첫번째값) 값을 넣고
// }// else if [x] : 다수 조건에 따른 다수처리(스왑)
// if( numList[0] > numList[2]){ // 첫번째 값이 세번째 값보다 크면 (스왑/교체)
//     temp = numList[0];  numList[0] = numList[2];    numList[2] = temp;
// }
// if( numList[1] > numList[2]){ // 두번째 값이 세번째 값보다 크면 (스왑/교체)
//     temp = numList[1];  numList[1] = numList[2];    numList[2] = temp;
// }
// console.log(numList); // 정령결과


// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.
// 출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
// 조건 : 플레이어가 이기는 경우의수(3) 지는수(3) , 비기는수(3) => 경우의수 9개

/*  (방법1: 모든 경우의수 판단 ) 
    이기는수 : 가위 = 보 , 바위 = 가위 , 보 = 바위  / 0 = 2 , 1 = 0 , 2 = 1
    비기는수 : 가위 = 가위 , 바위 = 바위 , 보 = 보  / 0 = 0 , 1 = 1 , 2 = 2 , 두 값이 같다.
    지는수 : 가위 = 바위 , 바위 = 보 , 보 = 가위    / 0 = 1 , 1 = 2 , 2 = 0
*/
// let player1 = Number( prompt(' 0(가위) 1(바위) 2(보) 입력:'));
// let player2 = Number( prompt(' 0(가위) 1(바위) 2(보) 입력:'));
// // (방법1)
// if( player1 == player2){console.log('무승부');}
// else if( (player1 == 0 && player2 == 2) || 
//          (player1 == 1 && player2 == 0) || 
//          (player1 == 2 && player2 == 1) ){
//     console.log("플레이어 1 승리"); // 플레이어1 이기는수
// }else{ console.log("플레이어2 승리");}   //그외
 
// // (방법2: 모든 경우의수 에서 패턴 찾기)
//    1. 두수가 같으면 무승부이다.
//          0 == (2+1)%3 , 1 == (0+1)%3 , 2 == (1+1)%3
//    2. 플레이어2 값의 + 1 하고 나누기 3 했을때 나머지가 플레이어1과 같으면 플레이어1 승리

// if( player1 == player2){console.log('무승부');}
// else if( plyaer1 == (player2 + 1)%3 ){
//     console.log("플레이어 1 승리"); // 플레이어1 이기는수
// }else{ console.log("블레이어2 승리");}   //그외


// 문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
// 주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.

// let carArray = [ '250어7142', '142가7415', '888호8888' ];
// let locationArray = [ 'A1', 'B3', 'C2' ];
// let findout = prompt("차량 번호: ")
// let index=carArray.indexOf(findout)

// if( index !== -1 ){console.log(`${locationArray[index]}`);}
// else{console.log("차량이 존재하지 않습니다.");}

// 문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.

// let courseList = ['수학', '영어', '과학', '국어'];
// let 과목 = prompt(' 제외할 과목: ')
// let index = courseList.indexOf(과목)
// let 제거 = courseList.splice(index,1)
// if( index !== -1){제거;console.log(courseList);}
// else {console.log('해당 과목은 신청 목록에 없습니다.')}
/*
[ 실습17 ] 식당 대기표 페이지 * 제출용( CSS 선택,생략가능 )
1. 목표
    -식당 직원이 대기 손님의 정보를 등록하고, 손님은 자신의 전화번호로 대기 상태를 직접 확인할 수 있는 간단한 대기 관리 페이지를 제작합니다.
    -모든 대기 정보는 브라우저의 localStorage 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'대기 등록 영역'**과 **'대기 확인 영역'**으로 명확히 구분되어야 합니다.
    -대기 등록 영역:
        --대기자 이름 입력: 대기하는 손님의 이름을 입력받는 <input> 필드가 있어야 합니다.
        --전화번호 입력: 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --인원 수 입력: 함께 온 인원 수를 숫자로 입력받는 <input> 필드가 있어야 합니다.
        --대기 등록 버튼: 클릭 시 addWaiting() 함수를 호출하는 "대기 등록" 버튼이 있어야 합니다.
    -대기 확인 영역:
        --전화번호 입력: 대기 상태를 확인할 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --대기 확인 버튼: 클릭 시 checkStatus() 함수를 호출하는 "대기 확인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 대기 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다.
    -데이터 구조: 대기 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 대기 팀 객체는 { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 } 형태를 가집니다.
    -대기번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage 'waitingList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
    addWaiting() 구현 (대기 등록):
        -입력된 이름, 전화번호, 인원 수를 받아 새로운 대기 객체를 생성하고, waitingList 배열에 추가합니다.
        -대기번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
    checkStatus() 구현 (대기 확인):
        -"대기 확인" 버튼 클릭 시 실행됩니다.
        -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
        -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 O번 입니다.")
        -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.
*/

//========== 대기등록 함수
function addWaiting(){ console.log('--> addWaiting exe');
    // 1. 입력마크업 객체 가져오기
    const watingName=document.querySelector('.watingName'); console.log(watingName);
    const watingPhone=document.querySelector('.watingPhone'); console.log(watingPhone);
    const watingCount=document.querySelector('.watingCount'); console.log(watingCount);
    // 2. 입력마크업 객체내 입력값 가져오기
    const name = watingName.value;                  console.log(name);
    const phone = watingPhone.value;                  console.log(phone);
    const count = watingCount.value;                  console.log(count);
    // 3. 객체화
    let no = 1; // 대기번호 초기값
        // ====== localStorage 에서 waitingList 가져오기
        // (1) localStorage 에서 waitingList 가져오기
        let watingList = localStorage.getItem('watingList'); 
        // (2) 존재하지 않으면 새로 생성, 존재하면 타입변환
        if( watingList == null){
            watingList = [];
        }else{
            watingList = JSON.parse( watingList);
            no = watingList[ watingList.length-1].no +1;
        }
    const obj = { no: no, name: name , phone: phone, count: count }; console.log(obj)

    // 4. 배열 저장
    watingList.push( obj );         console.log(watingList);
    alert('대기 등록 완료') // 알림 
    // ====== localStorage 에서 waitingList 가져오기
    // (1) 배열타입을 JSON문자열 타입으로 변환
    let jsonData = JSON.stringify(watingList);
    // (2) localStorage 에 watingList 속성명으로 배열저장하기.
    localStorage.setItem( 'watingList' , jsonData); // 'watingList'라는 이름으로 jsonData변수값 저장
}// func end

//========== 대기확인 함수

function checkStatus(){console.log('-->checkStatus exe');
    // 1. 입력마크업 객체 가져오기
    const checkPhone = document.querySelector('.checkPhone');  console.log(checkPhone);
    // 2. 입력마크업 객체내 입력값 가져오기
    const phone = checkPhone.value;                            console.log(phone);
    // 3. 기존배열(대기목록)내 입력받은 값과 일치한 정보 찾기(비교), <for>
    // ====================== localStorage 에서 watingList 가져오기 =========== //
    let watingList = localStorage.getItem('watingList'); // 'watingList' 이름의 속성값 가져오기
    if( watingList == null){ // 만약에 'watingList' 이름의 속성이 존재하지 않으면
        watingList = []; // 새로운 배열 생성
    }else{
        watingList = JSON.parse( watingList);
    }
    for(let i=0; i<=watingList.length-1; i++){
        const wating = watingList[i]
        if(wating.phone == phone){
            alert(`고객님의 대기번호는 ${wating.no-1}번 입니다.`);
            return; // 강제 함수(반복문)종료

        }
    }//for end
    // 4. 못찾았다.
    {alert("대기 정보가 없습니다.")}
}//func end
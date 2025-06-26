/* [ 실습15 - 인사 관리 대시보드 ] * 제출

1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다. */


// 데이터 모델링 (부서 관리)
const departmentList= [ {dno : 1 , dname : '개발팀'} , { dno : 2 , dname : '디자인팀'} , { dno : 3 , dname : '기획팀'} 
];

let currentDno=departmentList[departmentList.length-1].dno;
// 기능(함수단위) 구현

let cureentdno= 3;
// 1.부서 추가함수 정의 , 실행 : 추가버튼 onclick 했을때,
function departmentAdd(){console.log( 'departmentAdd() exe');
    // (1). 입력 마크업객체 가져오기
    const dnameInput = document.querySelector('#dnameInput'); console.log(dnameInput);
    // (2). 입력 마크업객체 에서 입력값 가져오기
    const dname = dnameInput.value;                     console.log(dname);

    // (3). 원하는 속성구성으로 객체만들기 
        currentDno++;
 
    const obj = { dno : currentDno , dname : dname };          console.log(obj);
    // (4). 구성한 객체를 변수에 저장
    departmentList.push(obj); console.log(departmentList);

    // (5). 출력함수 호출 
    departmentPrint()
}// func end  

// 2. 부서 출력함수 호출 : 페이지가 열리거나 추가/수정/삭제 했을때
departmentPrint()
function departmentPrint(){console.log('departmentPrint() exe')
    //(1)어디에
        const tbody = document.querySelector('#departmentOutput > table > tbody ');
    //(2)무엇을
        let html='';
        for (let i=0; i<= departmentList.length-1; i++){
            const department = departmentList[i];
            html += `<tr>
                        <td> ${department.dname} </td>
                        <td> <button onclick="departmentEdit(${department.dno})" class="btnEdit"> 수정 </button> 
                        <button onclick="departmentDelete(${department.dno})" class="btnDelete"> 삭제 </button> </td>
                    </tr>` // 백틱
        }// for end
    //(3)출력
        tbody.innerHTML = html;
}// func end // 출력함수 끝

// 3. 부서 수정함수 : 새로운 정보를 받아 배열내 수정할 객체를 찾아서 대입한다.  < 매개변수 : 부서이름코드 > 
// 실행조건 : [수정버튼] onclick 했을때
function departmentEdit(dno){console.log( 'departmentEdit() exe '); console.log( dno );
    for( let i=0; i<= departmentList.length-1; i++){// (1) 수정할 번호의 객체를 찾는다 for
        if(departmentList[i].dno==dno){
            const dname = prompt('수정할 부서명: ');
            departmentList[i].dname = dname;
            alert('[성공] 부서명 수정')
            departmentPrint();
            return;
        } // if end
    } // for end
}   // func end


// 4. 부사 삭제함수 : 배열내 삭제할 객체를 찾아서 .splice   < 매개변수 : 부서이름코드 >
// 실행조건 : [삭제버튼] onclick 했을때
function departmentDelete(dno){console.log( 'departmentDelete() exe '); console.log( dno );
    for( let i=0; i<= departmentList.length-1; i++){// (1) 삭제할 번호의 객체를 찾는다 for
        if(departmentList[i].dno==dno){
            departmentList.splice(i , 1)
            alert('[성공] 부서명 삭제')
            departmentPrint();
            return;
        } // if end
    } // for end
}   // func end


// === [1] 데이터 모델링 샘플
// 1. 사원 목록
const staffList = [ {sno : 1 , dno: 1 , simg: 'https://placehold.co/100x100' , sname : '김민준' ,  srank : '선임 개발자' },
                    {sno : 2 , dno: 2 , simg: 'https://placehold.co/100x100' , sname : '이서연' ,  srank : '수석 디자이너' },
                    {sno : 3 , dno: 3 , simg: 'https://placehold.co/100x100' , sname : '박도윤' ,  srank : '팀장' },
                    {sno : 4 , dno: 4 , simg: 'https://placehold.co/100x100' , sname : '유재석' ,  srank : '대리' }
];
console.log(staffList);
let currentSno = 4;
let dno = staffList.length == 0 ? 1 : staffList[staffList.length-1].dno+1
// 1. 사원 등록함수 : 실행조건 : <등록버튼> onclick 클릭했을때
function staffAdd(){
    //(1) 입력 마크업객체 가져오기
    const snameInput = document.querySelector('#snameInput'); console.log(snameInput);  
    const srankInput = document.querySelector('#srankInput'); console.log(srankInput);  
    const sdnameInput = document.querySelector('#sdnameInput'); console.log(sdnameInput);  
    const simgInput = document.querySelector('#simgInput'); console.log(simgInput);     
    //(2) 입력 마크업객체에서 입력값 가져오기
    const sname = snameInput.value;     console.log(sname);
    const srank = srankInput.value;     console.log(srank);
    const sdname = sdnameInput.value;     console.log(sdname);
    // 첨부파일은 vlaue 대신에 files[0] : 선택된 첨부파일의 첫번째 파일객체 가져오기
    const simg = simgInput.files[0];    console.log(simg);    
    // *유효성 검사
        // * 입력한 값이 없으면 등록 실패
        if( sname =='' || srank== ''|| sdname ==''){
            alert('비어있는 항목이 있습니다. [실패]');
            return; // 반환값 없는 함수 종료
        }// if end
// (3) 여러 데이터 객체로 구성하기.
    const obj = {
        sno : ++currentSno, // 사원코드는 1증가 후 구성
        dno : Number( dno ),
        simg : simg ? URL.createObjectURL( simg ): 'https://placehold.co/100x100' ,
        sname : sname ,
        sdname : sdname ,
        srank : srank 
    };                      console.log(obj);
    // (4) 구성한 객체를 배열에 저장
    staffList.push( obj );      console.log(staffList);
    // (*) 기타 등등
    snameInput.value='';
    srankInput.value='';
    sdnameInput.value='';
    alert('사원 등록 성공');

    staffPrint() // 다시 사원출력 새로고침, 렌더링

}// func end

// 2. 사원 출력함수

staffPrint()
function staffPrint(){ console.log('>>staffPrint() exe')
    //(1) 어디에 , <tbody>
    const tbody = document.querySelector('#main > #staffOutput > table > tbody ');
    //(2) 무엇을 
    let html ='';
        for( let i=0; i<=staffList.length-1; i++){
            const staff=staffList[i];
            // 현재 사원에 저장된 부서 코드 번호로 부서 객체 구하기
            const department = getDepartment(staff.dno);
            html +=`<tr>
                        <td> <img src="${staff.simg}" /> </td> 
                        <td> ${staff.sname} </td>
                        <td> ${getDepartment(staff.dno).dname} </td>
                        <td> ${staff.srank} </td>
                        <td> 
                            <button onclick="staffEdit( ${staff.sno})" class="btnEdit"> 수정 </button> 
                            <button onclick="staffDelete( ${staff.sno})" class="btnDelete"> 삭제 </button> 
                        </td>
                    </tr>`
        } // for end
        // (3) 출력
        tbody.innerHTML = html;
} // func end 

function getDepartment(dno){ // 
    console.log('>> getDepartment exe '); console.log(dno)
    // 1. 매개변수 (dno) 와 동일한 부서번호객체 찾기
    for( let i=0; i<=departmentList.length-1; i++){
        if(  departmentList[i].dno == dno){
             return departmentList[i];
        } // if end
    } // for end
    return null
} // func end
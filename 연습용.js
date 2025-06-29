/* 데이터 모델링
함수설계
구현/로직
테스트  
*/



// 데이터모델링

const categoryList = [ {cno : 1 , cnmae : '음료류'} , {cno:2, cname :'과자류'}];
let currentCno = 2;

const productList =[
    {pno:1,cno:1,pname:'코카콜라',pprice:1000,pimg : 'https://placehold.co/100x100' , pdate : '2025-06-18'},
    {pno:2,cno:2,pname:'새우깡',pprice:1200,pimg : 'https://placehold.co/100x100' , pdate : '2025-06-21'},
    {pno:3,cno:1,pname:'사이다',pprice:900,pimg : 'https://placehold.co/100x100' , pdate : '2025-06-22'}
];

let currentPno = 3;

console.log(categoryList)
console.log(productList)

// 카테고리출력함수
categoryPint();
function categoryPint(){ console.log(' >> categoryPint exe');
    
    const categoryInput= document.querySelector('#categoryInput');
    
    let html = '<option value="" disabled selected > 카테고리 선택하세요. </option>';

    for(let i=0;i<=categoryList.length-1;i++){
        const category = categoryList[i];
        html+=`<option value="${category.cno}"> ${category.cname}</option>`
    }

    categoryInput.innerHTML=html;
}

// 제품 등록함수

function productAdd(){console.log('>> productAdd exe');
    const categoryInput=document.querySelector('#categoryInput'); console.log(categoryInput);
    const pnameInput=document.querySelector('#pnameInput'); console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput'); console.log(ppriceInput);
    const pimgInput = document.querySelector('#imgInput');  console.log(pimgInput);

    const cno = categoryInput.value;    console.log(cno);
    const pname = pnameInput.value;     console.log(pname);
    const pprice= ppriceInput.value;    console.log(pprice);
    const pimg= pimgInput.files[0];     console.log(pimg);

    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
        month = month <9 ? `0${month}` : month;
    let day = new Date().getDate();
        day = day <9 ? `0${day}` : day;
    let pdate = `${year}-${month}-${day}`;  console.log(pdate);

        if( cno == ''|| pname==''|| pprice==''){
            alert('빈 항목이 있음. 실패');
            return;
        }
    const obj = {
        pno : ++currentPno,
        con : Number(cno),
        pname : pname,
        pprice:Number(pprice),
        pimg:pimg?URL.createObjectURL(pimg):'https://placehold.co/100x100',
        pdate:pdate
    };
    productList.push(obj);
    
    categoryList.value='';
    pnameInput.value='';
    ppriceInput.value='';
    alert('성공');

    productPrint()

}

// 제품목록 출력함수
productPrint()
function productPrint(){console.log('>>productPrint()exe')
    const tbody=document.querySelector('#main>table>tbody');

    let html= '';
        for(let i =0; i<=productList.length-1;i++){
            const product = productList[i];
            const category = getCategory(product.con);
            html += `<tr>
                        <td><img src="${product.pimg}" /></td>
                        <th>${getCategroy(product.cno).cname}</th>
                        <td>${product.pname}</td>
                        <td>${product.pprice.toLocaleString()}</td>
                        <td>${product.pdate}</td>
                        <td>
                            <button onclick="productDelete(${product.pno})" class="btnDelete">삭제</button>
                            <button onclcik="productEdit(${product.pno}" class="btnEdit">수정</button></td>
                    </tr>`
                }
    tbody.innerHTML=html;
}

// 삭제함수
function productDelete(pno){console.log('>>productDelete exe'); console.log(pno);
    for (let i=0; i<=productList.length-1;i++){
        if(productList[i].pno==pno){
            productList.splice(i,1)
            alert('삭제완료');
            productPrint();
            return;
        }
    }
    alert('제품번호 불일치')
}

// 수정함수

function productEdit(pno){console.log('>>productEdit exe'); console.log(pno);
    for(let i=0; i<=productList.length-1;i++){
        if(productList[i].pno==pno){
            const pname= prompt('수정할 제품명');
            const pprice=promt('수정할 제품가격');
            productList[i].pname=pname;
            productList[i].pprice=Number(pprice);
            alert('수정완료');
            productPrint();
            return;
        }
    }
}

// 카테고리번호 반환함수
function getCategory(cno){
    console.log('>>getCatgeory exe'); console.log(cno);
    for(let i=0; i<=categoryList.length-1; i++){
        if (categoryList[i].cno==cno){
            return categoryList[i];
        }
    }
    return null;
}
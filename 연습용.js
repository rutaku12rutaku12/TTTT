function getProducts(){
    let products = localStorage.getItem('products')
    if( products == null){
        products = [];
    }else{
        products = JSON.parse(products)
    }
    return products;
}

function setProducts(producsts){
    localStorage.setItem('products', JSON.stringify(products));
}

function productAdd(){
    
    const pnameInput = document.querySelector('#pnameInput')
    const pimgInput = document.querySelector('#pimgInput')

    const pname = pnameInput.value;
    const pimg = pimgInput.file[0];

    const products=getProducts();

    let pcode = products.length == 0 ? 1 products[products.lengh-1].pcode+1;

    const obj = {
        pcode:pcode,
        pname:pname,
        pprice:Number(pprice),
        pcontent:pcontent,
        pimg:pimg ? URL.createObjectURL(pimg) : ''

    };
    products.push(obj)

    pnameInput.value='';
    ppriceInput.value='';
    pcontentInput.value='';
    
    alert('제품등록성공')
    setProducts(products);
    productsPrint();
}

function getProducts(){
    let products=localStorage.getItem('products')
    if(producsts==null){
        products=[]
    }else{
        products=JSON.parse(products)
    }
}

function setProducts(){
    localStorage.setItem('products' ,JSON.stringify(products))
}

function productAdd(){
    const pnameInput = document.querySelector('#pnameInput')
    const pimgInput = document.querySelector('#pimgInput')

    const pname = pnameInput.value;
    const pimg = pimgInput.file[0]

    const products=getProducts()
    let pcode= products.length== 0 ? 1 : products[products.length-1].pcode+1
    const obj ={
        pcode: pcode,
        pnmae: pname,
        pprice : pprice,
        pimg : pimg ? URL.createObjectURL(pimg) : ''
        }
    products.push(obj)   

    pnameInput='';
    pcontentInput='';
    ppriceInput = '';

  

    alert('성공')
    
    setProducts(producsts)
    productPrint()
    
    }
}


productPrint()
function productPrint(){
    const productBody = document.querySelector('productBody')
    
    let producsts = getProducts()
    html='';
    for(let i=0; i<products.lengh; i++){
        html+=  `<tr>
                    <td><img src="${products.pimg}" /></td>
                    <td>${product.pname}</td>
                    <td>${product.pprice.tolocaleStirng()}</td>
                    <td>제로콜라</td>
                    <td><button class="btnDelete" onclick="product(${product.pcode})">삭제</button></td>
                 </tr>`
      }  
      productBody.innerHTML= html;
}

function productDelete(pcode){
    let products = getProducts()
    for(let i=0; i<products.lengh; i++){
        if(products[i].pcode == pcode){
            products.splice(i,1);
            alert('삭제')
            setProducts(products);
            producstPrint()
            return
        }
    }
    alert(오류)
}
function getProducts(){
    let products = localStorage.getItem('products');
    if(products == null){
        products =[];
    }else{
        prodcuts =JSON.parse(products);
    }
    return products;
}

function setProducts(prodcuts){
    localStorage.setItem('prodcuts', JSON.stringify(products));
}

function productAdd(){
    const pnameInput = document.querySelector('#pnameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const pimgInput = document.querySelector('#pimgInput');
    const pcontentInput = document.querySelector('#pcontentInput');

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value;
    const pimg = pimgInput.file[0];

    const products = getProducts();

    let pcode= products.length == 0 ? 1 : products[produdcts.length-1].pcode+1;

    const obj={
        pcode:pcode,
        pname:pname,
        pprice:Number(pprice),
        pcontent:pcontent,
        pimg:pimg ? URL.createObjectURL(pimg) : ''
    }

    products.push(obj);
    
}
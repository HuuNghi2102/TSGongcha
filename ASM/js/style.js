


const getAPIProduct = async () =>{
    const API_Products = "http://localhost:3000/products";
    try{
        const response = await fetch(API_Products);
        
        if(!response.ok){
            throw new Errow("Lỗi");
        }else{
            const data = await response.json();
            return data;
        }
    }
    catch(error){
        console.log(error);
        
    }
}

let allProduct = async () =>{
    await getAPIProduct();
    await renderProduct();
    await renderProductdetails();
    await addtoCart();
    await showCart();
}

let startAll = async () =>{
    await allProduct();

}
    startAll();

let renderProduct = async () =>{
    try{
        let dataProduct = await getAPIProduct();
        let getProduct = dataProduct.map((item) =>{
            if(item.category === 1 ){
                return ` <div class="drinks">
                <a href="sanpham.html?id=${item.id}"><img src="img/${item.img}" alt=""></a>
                <p>
                    ${item.name}
                </p>
                <p>
                    ${item.price}
                </p>
            </div>`;
            }
        })
        let getProduct2 = dataProduct.map((item) =>{
            if(item.category === 2 ){
                return ` <div class="drinks">
                <a href="sanpham.html?id=${item.id}"><img src="img/${item.img}" alt=""></a>
                <p>
                    ${item.name}
                </p>
                <p>
                    ${item.price}
                </p>
            </div>`;
            }
        })
        let getProduct3 = dataProduct.map((item) =>{
            if(item.category === 3 ){
                return ` <div class="drinks">
                <a href="sanpham.html?id=${item.id}"><img src="img/${item.img}" alt=""></a>
                <p>
                    ${item.name}
                </p>
                <p>
                    ${item.price}
                </p>
            </div>`;
            }
        })
        let getProduct4 = dataProduct.map((item) =>{
            if(item.category === 4 ){
                return ` <div class="drinks">
                <a href="sanpham.html?id=${item.id}"><img src="img/${item.img}" alt=""></a>
                <p>
                    ${item.name}
                </p>
                <p>
                    ${item.price}
                </p>
            </div>`;
            }
        })
        let getProducts = getProduct.join('');
        let getProducts2 = getProduct2.join('');
        let getProducts3 = getProduct3.join('');
        let getProducts4 = getProduct4.join('');
        document.querySelector('.img-beverage').innerHTML = getProducts;
        document.querySelector('.img-beverage1').innerHTML = getProducts2;
        document.querySelector('.img-beverage2').innerHTML = getProducts3;
        document.querySelector('.img-beverage3').innerHTML = getProducts4;
    }catch(error){
        console.log(error);
        
    }
}
let renderProductdetails = async () => {
    const API_Products = await getAPIProduct();
    let getUrl = Number(new URLSearchParams(window.location.search).get('id'));
    // console.log(typeof getUrl);
    // console.log(API_Products);
    let compare = API_Products.find((get)=>{
        return Number(get.id) === getUrl;
    })
    
    let showdetails = `
                <div class="wrap-left">
                    <div class="img">
                        <img src="img/${compare.img}" alt="">
                    </div>
                    <div class="nghieng">
                        <em>
                            * Hình ảnh chỉ mang tính chất minh hoạ
                        </em>
                    </div>
                </div>
                <div class="wrap-right">
                    <div class="title">
                        <h3>
                            ${compare.name}
                        </h3>
                    </div>
                    <div class="img-small">
                        <img src="https://gongcha.com.vn/wp-content/themes/theme/images/ico-cold.png" alt="">
                    </div>
                    <div class="title1">
                        <h3>
                            Thông Tin
                        </h3>
                    </div>
                    <div class="table">
                        <table border="1">
                            <tr>
                                <th>Tên Món</th>
                                <th>Giá Tiền(VND)</th>
                            </tr>
                            <tr>
                                <td>${compare.name}</td>
                                <td>${compare.price}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="button">
                        <button id="addCart">Thêm vào giỏ hàng</button>
                        <button><a href="index.html">Đặt Hàng</a></button>
                    </div>
                </div>  
                <div class="X">
                    <span> <a href="thucdon.html">X</a></span>
                </div>`;
                document.querySelector('.wrap').innerHTML = showdetails;
                let btnAddCart =document.querySelector('#addCart');

                btnAddCart.onclick = async()=>{
                    addtoCart(compare)
                    
                }

}
let addtoCart = async (products) =>{
    let SaveLocalStorage = JSON.parse(localStorage.getItem('cart'))|| [];
    let checkCart=SaveLocalStorage.find((cartID)=>{
        return cartID.id == products.id;
        
    })
    if(checkCart){
        checkCart.count++;
        checkCart.total = checkCart.count * checkCart.price;
    }else{
        SaveLocalStorage.push({
            id: products.id,
            img: products.img,
            name:products.name,
            price: products.price,
            total: products.price,
            count : 1
        });
    }
    localStorage.setItem('cart',JSON.stringify(SaveLocalStorage));
    alert('Đã thêm sản phẩm thành công')
}

function showCartProduct() {
        let showCart = JSON.parse(localStorage.getItem('cart'));
        let rendershowCart = showCart.map((item)=>{
            return `
                            <tr>
                                <td><img src="img/${item.img}" alt="" style="width: 100%;"></td>
                                <td>${item.name}</td>
                                <td> 
                                    <span>-</span>
                                    <input type="text" id="quantity" value="${item.count}" min="1">
                                    <span>+</span>
                                </td>
                                <td style="color: red;">${item.price}</td>
                                <td style="color: red;">${item.total}</td>
                                <td><button id="deleteProduct" onclick="detelee(${item.id})">Xóa</button></td>
                            </tr>
            `;

        }).join(' ');
        document.getElementById('showCartt').innerHTML = rendershowCart;
}
showCartProduct();

let detelee = async (is) =>{

    let localStoragee = JSON.parse(localStorage.getItem('cart'));
    let compareProduct =localStoragee.filter((idProducts)=>{
        return Number(idProducts.id) != is;
        
        
    })
    console.log(compareProduct);
    
    localStorage.setItem('cart',JSON.stringify(compareProduct));
    showCartProduct();
}

const getAPIUser = async () =>{
    const API_User = "http://localhost:3000/users";
    try{
        const response = await fetch(API_User);
        
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


document.getElementById('loginButton').addEventListener('click', async()=>{
    try{
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let getIn4User = await getAPIUser();
        
        getIn4User.map((item)=>{
            if(item.email == email && item.password == password){
                alert('Đăng nhập thành công');
                window.location.href = "index.html";
            }else if(item.email !== email && item.password !== password){
                document.getElementById("wrong").innerHTML = "Tài khoản hoặc mật khẩu không đúng";
            }
        }) 
    }catch(error){
        console.log(error);
        
    }
});
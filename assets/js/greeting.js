try{
    var sakura = new Sakura('body');
}catch(e){
   console.log("link unload error")
};

const href =document.location.href;
const url =new URL(href);
const userName=url.searchParams.get('name');

const nameSpanEl =document.querySelector('#setName');

if(userName){
    nameSpanEl.textContent = `-${userName.toUpperCase()}-`;
}else{
    document.location.href ='./travel-greeting-app/index.html'
}
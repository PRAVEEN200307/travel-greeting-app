var sakura = new Sakura('body');

const href =document.location.href;
const url =new URL(href);
const userName=url.searchParams.get('name');

const nameSpanEl =document.querySelector('#setName');

if(userName){
    nameSpanEl.textContent = userName.toUpperCase();
}else{
    document.location.href ='./travel-greeting-app/index.html'
}
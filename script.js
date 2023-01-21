const iphoneBtn = document.getElementById("iphone").addEventListener("click",function(){
    const productPage = document.getElementById("product-page").style.display="none";
    const iphonePage = document.getElementById("iphone-page").style.display="block";
})
const macbookBtn =document.getElementById("macbook").addEventListener("click",function(){
    const productPage = document.getElementById("product-page").style.display="none";
    const macbookPage = document.getElementById("macbook-page").style.display="block";
})
const watchBtn =document.getElementById("watch").addEventListener("click",function(){
    const productPage = document.getElementById("product-page").style.display="none";
    const watchPage = document.getElementById("watch-page").style.display="block";
})
const returnBtn1 = document.getElementById("ip-return-p").addEventListener("click",function(){
    const iphonePage = document.getElementById("iphone-page").style.display="none";
    const productPage = document.getElementById("product-page").style.display="block";
})
const returnBtn2 = document.getElementById("m-return-p").addEventListener("click",function(){
    const macbookPage = document.getElementById("macbook-page").style.display="none";
    const productPage = document.getElementById("product-page").style.display="block";
})
const returnBtn3 = document.getElementById("w-return-p").addEventListener("click",function(){
    const watchPage = document.getElementById("watch-page").style.display="none";
    const productPage = document.getElementById("product-page").style.display="block";
})
const buyIphone = document.getElementById("buy-iphone").addEventListener("click",function(){
    const iphonePrice = document.getElementById("iphone-price").innerText;
    const IphonePrice = parseFloat(iphonePrice);
    document.getElementById("iphone-price").innerText=IphonePrice + 900;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 900;
    const number = document.getElementById("iphone-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("iphone-number").innerText= Number+1;
    const iphoneAddShow= document.getElementById("iphone-add-show").style.display="block";
})
const buyMacbook = document.getElementById("buy-macbook").addEventListener("click",function(){
    const macbookPrice = document.getElementById("macbook-price").innerText;
    const MacbookPrice = parseFloat(macbookPrice);
    document.getElementById("macbook-price").innerText=MacbookPrice + 1000;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 1000;
    const number = document.getElementById("macbook-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("macbook-number").innerText= Number+1;
    const macbookAddShow= document.getElementById("macbook-add-show").style.display="block";
})
const buyWatch = document.getElementById("buy-watch").addEventListener("click",function(){
    const watchPrice = document.getElementById("watch-price").innerText;
    const WatchPrice = parseFloat(watchPrice);
    document.getElementById("watch-price").innerText=WatchPrice + 450;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 450;
    const number = document.getElementById("watch-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("watch-number").innerText= Number+1;
    const watchAddShow= document.getElementById("watch-add-show").style.display="block";
})
const iphoneMinusBtn = document.getElementById("iphone-minus").addEventListener("click",function(){
    const iphonePrice = document.getElementById("iphone-price").innerText;
    const IphonePrice = parseFloat(iphonePrice);
    document.getElementById("iphone-price").innerText=IphonePrice - 900;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total - 900;
    const number = document.getElementById("iphone-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("iphone-number").innerText= Number-1;
})
const macbookMinusBtn = document.getElementById("macbook-minus").addEventListener("click",function(){
    const macbookPrice = document.getElementById("macbook-price").innerText;
    const MacbookPrice = parseFloat(macbookPrice);
    document.getElementById("macbook-price").innerText=MacbookPrice - 1000;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total - 1000;
    const number = document.getElementById("macbook-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("macbook-number").innerText= Number-1;
})
const watchMinusBtn = document.getElementById("watch-minus").addEventListener("click",function(){
    const watchPrice = document.getElementById("watch-price").innerText;
    const WatchPrice = parseFloat(watchPrice);
    document.getElementById("watch-price").innerText=WatchPrice - 450;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total - 450;
    const number = document.getElementById("watch-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("watch-number").innerText= Number-1;
})
const iphonePlusBtn = document.getElementById("iphone-plus").addEventListener("click",function(){
    const iphonePrice = document.getElementById("iphone-price").innerText;
    const IphonePrice = parseFloat(iphonePrice);
    document.getElementById("iphone-price").innerText=IphonePrice + 900;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 900;
    const number = document.getElementById("iphone-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("iphone-number").innerText= Number+1;
    const iphoneAddShow= document.getElementById("iphone-add-show").style.display="block";
})
const macbookPlusBtn = document.getElementById("macbook-plus").addEventListener("click",function(){
    const macbookPrice = document.getElementById("macbook-price").innerText;
    const MacbookPrice = parseFloat(macbookPrice);
    document.getElementById("macbook-price").innerText=MacbookPrice + 1000;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 1000;
    const number = document.getElementById("macbook-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("macbook-number").innerText= Number+1;
    const macbookAddShow= document.getElementById("macbook-add-show").style.display="block";
})
const watchPlusBtn = document.getElementById("watch-plus").addEventListener("click",function(){
    const watchPrice = document.getElementById("watch-price").innerText;
    const WatchPrice = parseFloat(watchPrice);
    document.getElementById("watch-price").innerText=WatchPrice + 450;
    const total = document.getElementById("totat-amount").innerText;
    const Total = parseFloat(total);
    document.getElementById("totat-amount").innerText=Total + 450;
    const number = document.getElementById("watch-number").innerText;
    const Number = parseFloat(number);
    document.getElementById("watch-number").innerText= Number+1;
    const watchAddShow= document.getElementById("watch-add-show").style.display="block";
})

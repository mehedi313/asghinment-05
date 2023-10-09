function cardclick1(){
    const card1namevalue = getnumbervalue('card1name');
    setsellitem(card1namevalue);
    
    const card1pricevalue = getstringvalue('card1price');
    const totalpricevalue1 = getstringvalue('total-price');
    const new1totalprice = card1pricevalue + totalpricevalue1;
    setinnertext('total-price', new1totalprice);

    enablebtn1('make-btn', new1totalprice);
    enablebtn2('discount-btn', new1totalprice);
   
}

function cardclick2(){
    const card2namevalue = getnumbervalue('card2name');
    setsellitem(card2namevalue);
    const card2pricevalue = getstringvalue('card2price');
    const totalpricevalue2 = getstringvalue('total-price');
    const new2totalprice = card2pricevalue + totalpricevalue2;
    setinnertext('total-price', new2totalprice);   
    
    enablebtn1('make-btn', new2totalprice);
    enablebtn2('discount-btn', new2totalprice)
}

function cardclick3(){
    const card3namevalue = getnumbervalue('card3name');
    setsellitem(card3namevalue);

    const card3pricevalue = getstringvalue('card3price'); 
    const totalpricevalue3 = getstringvalue('total-price');
    const new3totalprice = card3pricevalue + totalpricevalue3;
    setinnertext('total-price', new3totalprice); 
    
    enablebtn1('make-btn', new3totalprice);
    enablebtn2('discount-btn', new3totalprice)
}
function cardclick4(){
    const card4namevalue = getnumbervalue('card4name');
    setsellitem(card4namevalue);

    const card4pricevalue = getstringvalue('card4price'); 
    const totalpricevalue4 = getstringvalue('total-price');
    const new4totalprice = card4pricevalue + totalpricevalue4;
    setinnertext('total-price', new4totalprice);  
    
    enablebtn1('make-btn', new4totalprice);
    enablebtn2('discount-btn', new4totalprice)
}
function cardclick5(){
    const card5namevalue = getnumbervalue('card5name');
    setsellitem(card5namevalue);

    const card5pricevalue = getstringvalue('card5price'); 
    const totalpricevalue5 = getstringvalue('total-price');
    const new5totalprice = card5pricevalue + totalpricevalue5;
    setinnertext('total-price', new5totalprice); 
    
    enablebtn1('make-btn', new5totalprice);
    enablebtn2('discount-btn', new5totalprice)
}
function cardclick6(){
    const card6namevalue = getnumbervalue('card6name');
    setsellitem(card6namevalue);

    const card6pricevalue = getstringvalue('card6price'); 
    const totalpricevalue6 = getstringvalue('total-price');
    const new6totalprice = card6pricevalue + totalpricevalue6;
    setinnertext('total-price', new6totalprice);   

    enablebtn1('make-btn', new6totalprice);
    enablebtn2('discount-btn', new6totalprice)
}

function discountclick(){
    const selcodefield = document.getElementById('sellcode');
    const sellcodevalue = selcodefield.value;
    if(sellcodevalue === "SELL200"){
        const totalprice =  getstringvalue('total-price');
        const discount = 0.2 * totalprice ;
        const tofixd = discount.toFixed(2); 
        const newtotal = totalprice - tofixd;
        setinnertext('discointid', tofixd);
        setinnertext('totalid', newtotal);
    }
    else{
        alert('invaild cupon');
    }
    selcodefield.value = "";    
}

document.getElementById('gohome').addEventListener('click', function(){
    const pricetotal = document.getElementById('total-price');
    const discount = document.getElementById('discointid');
    const total =  document.getElementById('totalid');
    const remove = removeChild('append-li', " ");
    pricetotal.innerText= "0.00";
    discount.innerText = "0.00";
    total.innerText = "0.00";
    enablebtn1('make-btn', pricetotal);
    enablebtn2('discount-btn', pricetotal);
});


function enablebtn1(btn1, total1){
    const btnid1 = document.getElementById(btn1);
    if(total1 > 0){
        btnid1.disabled = false;
    }
    else{
        btnid1.disabled = true;
    }
}
function enablebtn2(btn2, total2){
    const btnid2 = document.getElementById(btn2);
    if(total2 >= 200){
        btnid2.disabled = false;
    }
    else{
        btnid2.disabled = true;
    }
}

function getstringvalue(stringid){
    const cardstringvalue = document.getElementById(stringid).innerText;
    const stringvalue = parseFloat(cardstringvalue);
    return stringvalue;
}
function getnumbervalue(nameid){
    const cardnamevalue = document.getElementById(nameid).innerText;
    return cardnamevalue;
}
function setsellitem(nameid){
    const newElement = document.getElementById('append-li')
    const count = newElement.childElementCount;
    const p = document.createElement('p');
    p.innerText = count+1 + ". " + nameid;
    newElement.appendChild(p);
    
}
function setinnertext(parentid, text){
    const parent = document.getElementById(parentid);
    parent.innerText = text;
}
function removeChild(fatherid, child){
    const removechildnode = document.getElementById(fatherid);
    removechildnode.innerText = child;
}
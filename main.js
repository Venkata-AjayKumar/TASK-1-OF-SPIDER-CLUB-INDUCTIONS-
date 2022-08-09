
function getrandomnum(){
    return math.float(Math.random()*5+1);
}
const image=[];
image[1]='image1.png';
image[2]='image2.png';
image[3]='image3.png';
image[4]='image4.png';

const box=[];
box[00]=document.getElementById('box11');
box[01]=document.getElementById('box12');
box[02]=document.getElementById('box21');
box[03]=document.getElementById('box22');
box[04]=document.getElementById('box31');
box[05]=document.getElementById('box32');
box[06]=document.getElementById('box41');
box[07]=document.getElementById('box42');
box[08]=document.getElementById('box51');
box[09]=document.getElementById('box52');
function reset(){
    box[00].src='';
    box[01].src='';box[002].src='';
    box[03].src='';
    box[04].src='';
    box[05].src='';
    box[06].src='';
    box[07].src='';box[08].src='';box[09].src='';
    
}
box[0].src=image[2];
function win(){
var     i0=document.getElementById('i0').src;
    var i1=document.getElementById('i1').src;
    var i2=document.getElementById('i2').src;
    var i3=document.getElementById('i3').src;
    var i4=document.getElementById('i4').src;
    
if(  
 i4==document.getElementById('box11').src&&
 i4==document.getElementById('box21').src&&
 i4==document.getElementById('box31').src&&
i4==document.getElementById('box41').src

){
    alert('PLAYER1 WINS');
}
elseif( 
    i4==document.getElementById('box12').src&&
    i4==document.getElementById('box22').src&&
    i4==document.getElementById('box32').src&&
   i4==document.getElementById('box42').src
    )
    {
        alert('PLAYER2 WINS');
    }
}
reset();
var tur=1;
   function F(){


var r=Math.floor(Math.random()*5+1);
var num=document.getElementById('numgenerated') ;
num.innerHTML=r;
change(r,tur);
tur++;
win();
}
function turn(tur){
    var player=document.getElementById('player').textContent;
 if(player=='PLAYER1'){
 var player=document.getElementById('player').textContent="PLAYER2";
 
 }
 else{
    var player=document.getElementById('player').textContent="PLAYER1";
    
 }
}
function change(r,tur){
    var i0=document.getElementById('i0').src;
    var i1=document.getElementById('i1').src;
    var i2=document.getElementById('i2').src;
    var i3=document.getElementById('i3').src;
    var i4=document.getElementById('i3').src;
    
    if(tur%2==1){
     var b= document.getElementById('box'+r+'1');
    document.getElementById('player').textContent='PLAYER2';
     switch(b.src)
     {  case i0:document.getElementById('box'+r+'1').src='image1.png';break;
        case i1:document.getElementById('box'+r+'1').src='image2.png';break;
        case i2:document.getElementById('box'+r+'1').src='image3.png';break;
        case i3:document.getElementById('box'+r+'1').src='image4.png';break;
        
     }
     
    }
    else{
        var b= document.getElementById('box'+r+'2');
        document.getElementById('player').textContent='PLAYER1';
       
        switch(b.src)
        {  case i0:document.getElementById('box'+r+'2').src='image1.png';break;
           case i1:document.getElementById('box'+r+'2').src='image2.png';break;
           case i2:document.getElementById('box'+r+'2').src='image3.png';break;
           case i3:document.getElementById('box'+r+'2').src='image4.png';break;
           
        }
       }
}
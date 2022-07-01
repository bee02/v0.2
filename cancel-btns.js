//Cancel submition
function cancelSub(){
//for IF
let a = 200;//ok
let b = 300;//bad
let c = 400;//deleded
let d = 500;//available

//for ELSE
let aa = 240;//ok
let bb = 340;//bad
let cc = 440;//deleded
let dd = 540;//available
let ask = confirm('Do you want to cancel the Submition?');

//CONDITIONS
if(ask==true){
 alert('Okey, Refresh the page to bring back submition?');
 console.log(a);//SYS==OK
 console.error(c);//SYS==DELEDED
 document.getElementById('music-input').style.display = "none";
}else if(ask==false){
 alert('[✓]Okey, good choice my guy');
 console.log(aa);//SYS==OK
 console.log(dd);//SYS==AVAILABLE
 document.getElementById('music-input').style.display = "defult";
 }
}

//LINK SUBMITION
function link_submition(){
//VARIABLES
let a = 200;//ok
let b = 300;//bad
let c = 400;//deleded
let d = 500;//available

//EXECUTE
alert('Okey, go to top and Refresh the page');
console.log(a);//SYS==OK
}
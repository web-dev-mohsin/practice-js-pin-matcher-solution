 
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length ===4){
        return pin;
    }else{
        return getPin(); 
    }
}

function generatePin(){
    let rendomIdGenerate = Math.round(Math.random()*10000);
        
    return rendomIdGenerate;
}
 //rendome pin generate
 document.getElementById('generate-pin').addEventListener('click', () =>{
       const pinGenerate =  getPin();
       const displayPinElement = document.getElementById('display-pin');
       displayPinElement.value = pinGenerate;


       
     //cleare display message
     const failurMess = document.getElementById('pin-failure');
     failurMess.style.display = 'none';

        const SucessMess = document.getElementById('pin-success');
        SucessMess.style.display = 'none';

 })

 document.getElementById('calculator').addEventListener('click', (even) =>{
    //get clicked element
    const numberString = even.target.innerText;

    // get display number input field
    const previousNumber = document.getElementById('typed-numbers'); 
    const previousString = previousNumber.value;

    //check number or string    
     if(isNaN(numberString)){
        if(numberString === 'C'){
        
            previousNumber.value = '';
         }
         if(numberString === "<"){ 
            const convertArry = previousString.split("");
            convertArry.pop();
            const remainingDigits = convertArry.join(""); 
            previousNumber.value = remainingDigits;

         }
     }else{ 
        const finalNumber = previousString + numberString
        previousNumber.value = finalNumber;
     }


    
 })

 document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typePin = document.getElementById('typed-numbers');
    const currentPinType = typePin.value;

    if(currentPin === currentPinType){
        const SucessMess = document.getElementById('pin-success');
        SucessMess.style.display = 'block';

        const failurMess = document.getElementById('pin-failure');
        failurMess.style.display = 'none';
    }else{ 
        const failurMess = document.getElementById('pin-failure');
        failurMess.style.display = 'block';

        const SucessMess = document.getElementById('pin-success');
        SucessMess.style.display = 'none';
    }


 })
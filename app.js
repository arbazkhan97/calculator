
function appendToResult(value){
    document.querySelector("input").value+=value;

};

function calculate(){
  let result=  document.querySelector("input").value;
  try{
    document.querySelector("input").value=eval(result);
  }
  catch(error){
    document.querySelector("input").value='error';
  }

    
};

function clearResult(){

    document.querySelector("input").value=" ";
};
let counterElement = document.getElementById("counterValue")
function onIncreament(){
          let previousCounter = counterElement.textContent
          let updateCounter = parseInt(previousCounter)+1
        if (updateCounter>0)
            counterElement.style.color="green"
        else if(updateCounter<0)
            counterElement.style.color ="red"
        else
        counterElement.style.color ="pink"
        counterElement.textContent = updateCounter
         
        
          
}
function onDecrement(){
          let previousCounter = counterElement.textContent
          let updateCounter = parseInt(previousCounter)-1
          counterElement.textContent = updateCounter-1
        if (updateCounter>0)
            counterElement.style.color="green"
        else if(updateCounter<0)
            counterElement.style.color ="red"
        else
        counterElement.style.color ="pink"
        counterElement.textContent = updateCounter
}
function onReset(){
    
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
    
}
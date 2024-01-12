

function printNumbersSetInterval(from, to, interval){

    const intervalId = setInterval(()=>{
        console.log(from);
        if(from === to)
            clearInterval(intervalId);
        from++;

    }, interval);
    
    
}
//printNumbersSetInterval(1,10,1000);


function printNumbersSetTimeout(from,to,interval){
    
    console.log(from++);

    if(from > to)
        return 0;
    
    return setTimeout(printNumbersSetTimeout,interval,from,to,interval);
}

//printNumbersSetTimeout(1,10,1000);


let time = new Date(0);

time.setSeconds(100);






function updateTime(){

    function addLink(){
        const link = document.createElement('a');
        link.innerHTML = 'google';
        link.href = 'https://www.google.com';
        document.body.append(link);
    }
    time.setSeconds(time.getSeconds() - 1); 
    text.textContent = `${time.getMinutes()}:${time.getSeconds()}`;
       
    
    if(time.getSeconds() === 0 && time.getMinutes() === 0)
    {
        addLink();    
        text.remove();
        clearInterval(intervalId);
    }
    
}

const text = document.createElement('p');

text.textContent = `${time.getMinutes()}:${time.getSeconds()}`;
document.body.append(text);
const intervalId = setInterval(updateTime, 1000);







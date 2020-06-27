import NumberTimer from "../util/number"
import appendNumber from "./appendNumber"
let isStart = false
var n = new NumberTimer()
n.handle = function(n,isPrime){
    appendNumber(n,isPrime)
}
n.start()
window.onclick =function(){
    if(isStart){
        n.start()
        isStart = false
    }else{
        n.stop()
        isStart = true
    }
}


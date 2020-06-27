import isPrime from "./isPrime"
export default class NumberTimer{
    constructor(duration = 500){
        this.duration = duration
        this.timer =null
        this.handle = null
        this.number = 1
    }
    start(){
        if(this.timer){
            clearInterval (this.timer)
        }
        this.timer = setInterval(()=>{
            this.handle && this.handle(this.number,isPrime(this.number))
            this.number ++
        },this.duration)
    }
    stop(){
        clearInterval(this.timer)
        this.timer = null
    }
}
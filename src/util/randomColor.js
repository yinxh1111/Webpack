function randomNum(){
    return (Math.floor(Math.random()*255)).toString(16)
}
export default function (){
     return "#" + randomNum() + randomNum() +randomNum()
}
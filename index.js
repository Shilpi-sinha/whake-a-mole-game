function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("mole").style.visibility = "hidden";
    document.getElementById("mud").style.visibility = "hidden";

    var allmuds = document.querySelectorAll(".dirt")
    for (let i = 0; i < allmuds.length; i++)
        allmuds[i].style.visibility = "visible";

    var allmoles = document.querySelectorAll(".mole")
    for (let i = 0; i < allmoles.length; i++)
        allmoles[i].style.visibility = "visible";

    setInterval(() => {
        let ran = Math.floor(Math.random() * 6)
        console.log(ran);
        allmoles[ran].style.visibility = "visible";
        setTimeout(() => {
            for (let i = 0; i < allmoles.length; i++) {
                allmoles[i].style.visibility = "hidden";
            }
        }, 1000)
    }, 1500)
    var score = 0;
    // const clickfunction = () => {
    //     console.log("hit")
    //     score += 1;
    //     document.getElementById("currentPoint").innerHTML = score;
    //     console.log(score);
    // }
    //   const throttlefunction =(fun,delay)=>{
    //     let prev=0;
    //     return(...arg)=>{
    //         let now =new Date().getTime();
    //         if((now-prev) > delay){
    //             prev=now;
    //             return function(...arg)
    //         }
    //     }
    //   }
    // var img = document.getElementById("mole1")
    // var width = img.clientWidth;
    // var height = img.clientHeight;
    // console.log(width, height);
  
    for (let i = 0; i < allmoles.length; i++) {
        
        allmoles[i].addEventListener('click', (e) => {
            // setTimeout(() => {
            //     console.log(e.target.id)
            //    width= document.getElementById(e.target.id)
            //     height =document.getElementById(e.target.id)
            //     width.style.width='90px'
            //     height.style.height='100px'
            // }, 500)
            // width.style.width='70px'
            //     height.style.height='80px'
            console.log("hit")
            score += 1;
            document.getElementById("currentPoint").innerHTML = score;
            console.log(score);
        })
        
    }
    // for(let i=0;i<allmoles.length;i++){
    //     allmoles[i].addEventListener('click', throttlefunction(clickfunction,1000))
    // }

    var points = document.querySelectorAll(".points")
    for (let i = 0; i < points.length; i++)
        points[i].style.visibility = "visible";


}

let timer=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.textAlign = "center";
      
        time.style.maxWidth ="200px"
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge rounded-pill text-bg-success";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "badge rounded-pill bg-danger";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge rounded-pill bg-light text-dark";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge rounded-pill bg-danger";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge rounded-pill bg-light text-dark";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge rounded-pill bg-danger";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge rounded-pill bg-light text-dark";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "badge rounded-pill bg-danger";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.className = "badge rounded-pill bg-light text-dark";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "36px";
                                                    time.style.maxWidth = "490px";
                                                    time.className = "badge rounded-pill bg-danger";
                                                    time.innerHTML = "Happy Independence Day!"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 
    
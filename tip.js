if(bdy.querySelector("[data-tooltip]")) {
            let tt = bdy.querySelectorAll("[data-tooltip]");            
            for(let i=0; i<tt.length;i++) {
                tt[i].onmouseover = () => {
                    let t = tt[i].getAttribute('data-tooltip');
                    tt[i].classList.add('rtooltip');                    
                }
                tt[i].onmouseout = () => {
                    let t = tt[i].getAttribute('data-tooltip');
                    tt[i].classList.remove('rtooltip');                    
                }
            }
        }

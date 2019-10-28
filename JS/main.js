{
    function writeCode(codeTxt,timeInterval,callBack){
        let codeBoard=document.querySelector('#codeBoard');
        let realBoard=document.querySelector('#CSSCode');
        let codeContainer=document.querySelector('.code.Display');
        let n=0;
        let clockStatus=false;//no existed clock here
        let clock=setTimeout(function runCode(){
            n+=1;
            codeBoard.innerHTML=Prism.highlight(codeTxt.substring(0, n), Prism.languages.css, 'css');
            realBoard.innerHTML=codeTxt.substring(0,n);
            codeContainer.scrollTop=codeContainer.scrollHeight;
            clock=setTimeout(runCode,timeInterval);
            clockStatus=true;
        },timeInterval);
        let buttons=Array.from(document.querySelectorAll('.action>button'));
        for (let speedButton of buttons){
            speedButton.addEventListener('click',(event)=>{
                let speed=event.target.getAttribute('data-speed');
                if(speed==='slow'){
                    timeInterval=60;
                    changeButtonActive(speedButton);
                }
                if(speed==='normal'){
                    timeInterval=20;
                    changeButtonActive(speedButton);
                }
                if(speed==='fast'){
                    timeInterval=0;
                    changeButtonActive(speedButton);
                }
                if(speed==='pause'){
                    setNewClock();
                    if(speedButton.classList.contains('active')){
                        speedButton.classList.remove('active');
                    }else{
                        speedButton.classList.add('active');
                    }
                }
            })
        }
        function setNewClock(){
            if(clockStatus){
                window.clearTimeout(clock);
                clockStatus=false;
            }else{
                clockStatus=true;
                clock=setTimeout(function runCode(){
                    n+=1;
                    codeBoard.innerHTML=Prism.highlight(codeTxt.substring(0, n), Prism.languages.css, 'css');
                    realBoard.innerHTML=codeTxt.substring(0,n);
                    codeContainer.scrollTop=codeContainer.scrollHeight;
                    clock=setTimeout(runCode,timeInterval);
                },timeInterval);
            }
        }
        function changeButtonActive(speedButton){
            for(let speedButton2 of buttons) {
                speedButton2.classList.remove('active');
            }
            speedButton.classList.add('active');
        }
    }
    let code=`
 /* 用CSS 画个马里奥送给你*/
 /* 准备一张画布*/
.wrapper-mario{
    background-color:#FBE8E4;
    height:100%;
    width:100%;
    position: relative;
}
.mario{
    position:absolute;
    left:50%;
    transform:translate(-6.125em,2em);
}
/* 马里奥的头*/
.mario .head{
    height:12.25em;
    width:12.25em;
    background-color:#EBB29B;
    border-radius:50%;
    position:relative;
    top: 5.3125em;
}
/* 马里奥的鼻子*/
.mario .nose{
    height:4em;
    width:4.75em;
    background-color:#E46061;
    border-radius:50%;
    position:absolute;
    top:5.3em;
    left:50%;
    transform:translateX(-2.375em);
    overflow:hidden;
    z-index:2;
}
/* 马里奥的鼻头*/
.mario .nose::before{
    content: '';
    position: absolute;
    height: 2.5em;
    width: 4.5em;
    background: #FA5B59;
    top: -0.5em;
    left: 50%;
    margin-left: -2.25em;
    border-radius: 40%;
}
/* 马里奥的眼睛*/
.mario .eye{
    position: absolute;
    height: 4em;
    width: 2.5em;
    background: linear-gradient(#E6D9D6 50%, #F9ECE8 50%);
    border-radius: 50%;
    top: 2.375em;
    overflow: hidden;
    z-index:2;
}
/* 马里奥的眼珠*/
.mario .eye:before {
    content: '';
    height: 2.125em;
    width: 1.31em;
    background: #062226;
    position: absolute;
    top: 1.31em;
    border-radius: 50%;
    z-index:2;
}
/* 左眼在左边 （难道在右边？）*/
.mario .eye.left {
    left: 2.75em;
}
/* 右眼在右边 （难道在中间？）*/
.mario .eye.right {
    right: 2.75em;
}

/*眼珠对好位置*/
.mario .eye.left:before {
    right: -0.2em;
    transform: rotate(5deg);
}
.mario .eye.right:before {
    left: -0.2em;
    transform: rotate(-5deg);
}
/*马里奥的眉毛*/
.mario .eyebrow {
    height: 5em;
    width: 3.375em;
     background: #343235;
    position: absolute;
    top: 0.5em;
    border-radius: 50%;
}
.mario .eyebrow:before {
    content: '';
    height: 100%;
    width: 120%;
    background: #F5B097;
    position: absolute;
    top: 1em;
    border-radius: 50%;
}
/* 调整左右眉毛*/
.mario .eyebrow.left {
    left: 2em;
    transform: rotate(-10deg);
}
.mario .eyebrow.right {
    right: 2em;
    transform: rotate(10deg);
}
.mario .eyebrow.left:before {
    left: -20%;
}
.mario .eyebrow.right:before {
    right: -20%;
}
/*马里奥的大胡子*/
.moustache{position: absolute;
    height: 2.5em;
    width: 2.5em;
    background: #343235;
    top: 6.5em;
    left: 50%;
    margin-left: -1.25em;
    border-radius: 50%;
    box-shadow: -3.75em -0.5em 0 #343235, -2.75em 0.75em 0 #343235, -1.2em 1.5em 0 #343235, 0 0.5em 0 #343235, 1.2em 1.5em 0 #343235, 2.75em 0.75em 0 #343235, 3.75em -0.5em 0 #343235;
}
.mario .moustache:after {
    height: 5em;
    width: 10em;
    background: #F5B097;
    content: '';
    position: absolute;
    top: -3.3em;
    left: 50%;
    margin-left: -5em;
    border-radius: 50%;
}
/* 马里奥的耳朵*/
.mario .ear {
    position: absolute;
    height: 4.25em;
    width: 4.25em;
    background: linear-gradient(#FFCBBD 30%, #EEA790 30%);
    border-radius: 50%;
    top: 10.5em;
}
.mario .ear.left {
    left: -1.25em;
}
.mario .ear.right {
    right: -1.25em;
}
/* 马里奥的灵魂-帽子*/
.mario .hat-head {
    position:absolute;
    height: 15em;
    width: 15em;
    background: #E83736;
    border-radius: 40%;
    left:-1.2em;
    transform: rotate(42.5deg) skew(0deg, 5deg) scale(0.95, 0.95);
}
/* A big logo*/
.mario .hat-logo {
    position: absolute;
    width: 3.75em;
    height: 3.75em;
    background: #FFF;
    top: 1em;
    left: 50%;
    margin-left: -1.875em;
    line-height: 3em;
    text-align: center;
    border-radius: 50%;
}
.mario .hat-logo:before {
    content: 'M';
    display: inline-block;
    font-size: 2em;
    font-weight: 700;
    color: #E83736;
}
/* 帽沿准备一下*/
.mario .hat-brim {
    position: absolute;
    height: 12em;
    width: 12em;
    background: #BD2B2D;
    top: 4.8125em;
    left: 50%;
    margin-left: -6em;
    border-radius: 50%;
    transform: scale(1, 1.1);
    box-shadow: 0 -1em 0 0 #FA5B59;
    /* Super Mario！*/
}
    `;
    let timeInterval=20;
    writeCode(code,timeInterval);
}
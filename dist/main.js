!function(t){var e={};function i(s){if(e[s])return e[s].exports;var h=e[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)i.d(s,h,function(e){return t[e]}.bind(null,h));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){t.exports=function(t){function e(e){(t=(0|e)%2147483647)<=0&&(t+=2147483646)}function i(){return t=48271*t%2147483647}return e(t),{seed:e,nextInt:i,nextFloat:function(){return(i()-1)/2147483646}}}},function(t,e,i){"use strict";i.r(e);const s=function(t,e,i,s,h,a,r){let n=a-h,l=2*Math.ceil(.5*(n/.1-1))+1,o=n/l;t.strokeStyle=r;for(let a=0;a<l;a++)t.beginPath(),a%2==0&&(t.arc(e,i,s,h+a*o,h+(a+1)*o),t.stroke())},h=function(t){const e=t[0],i=t[1];return 0==e?i>0?Math.PI/2:-Math.PI/2:e>0?Math.atan(i/e):Math.PI+Math.atan(i/e)},a=function(t){return Math.sqrt(t[0]**2+t[1]**2)},r=function(t,e){let[i,s]=t,[h,a]=e;return(a-i)*(h-i)<=0||(a-s)*(h-s)<=0||(s-h)*(i-h)<=0||(s-a)*(i-a)<=0},n=()=>{let t=document.getElementById("game-canvas").getBoundingClientRect();return{x:t.x,y:t.y}};var l=class{constructor(t,e=0,i=0,s=[0,1],a=100,r="white"){this.game=t,this.x=e,this.y=i,this.normal=s,this.radius=a,this.color=r,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.launch=this.launch.bind(this),this.arrowVector=this.arrowVector.bind(this),this.updatePolar=this.updatePolar.bind(this),this.updateArrowTip=this.updateArrowTip.bind(this),this.updateLaunchVelocity=this.updateLaunchVelocity.bind(this),this.launchVx=0,this.launchVy=0,this.normalAngle=h(s),this.setVelocity=this.setVelocity.bind(this),this.arrowTip={x:null,y:null},this.arrowAngle=this.normalAngle,this.arrowLength=60}move(){this.x+=this.vx,this.y+=this.vy}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}arrowVector(){const t=this.game.vp;return[this.arrowTip.x-this.x+t.x1,this.arrowTip.y-this.y+t.y1]}updatePolar(){this.arrowLength=a(this.arrowVector()),this.arrowAngle=h(this.arrowVector())}updateArrowTip(){let t=this.game.vp;this.arrowTip.x=this.x-t.x1+this.arrowLength*Math.cos(this.arrowAngle),this.arrowTip.y=this.y-t.y1+this.arrowLength*Math.sin(this.arrowAngle)}updateLaunchVelocity(){this.launchVx=this.arrowVector()[0]/4,this.launchVy=this.arrowVector()[1]/4}draw(t){let e=this.vpX(),i=this.vpY();s(t,e,i,this.radius,this.normalAngle-Math.PI/2,this.normalAngle+Math.PI/2,this.color);let h=this.game.currentPlanet;if(null===this.arrowTip.x&&(h.hideText=!1),null!==this.arrowTip.x){t.beginPath(),t.strokeStyle="white",t.setLineDash([5,5]),t.moveTo(e,i),t.lineTo(this.arrowTip.x,this.arrowTip.y),t.stroke(),this.drawArrowBits(t),t.beginPath();let s=.5*(e+this.arrowTip.x),a=.5*(i+this.arrowTip.y);t.fillStyle="purple",t.font="21px Arial",t.fillText(`Initial speed: ${(this.arrowLength/4).toFixed(2)}`,`${s}`,`${a}`),t.fill();let r=this.game.vp,n=this.game.ball;s>=h.textPos.x-r.x1-150&&a>=h.textPos.y-r.y1-28+n.radius&&a<=h.textPos.y-r.y1+8+n.radius?h.hideText=!0:h.hideText=!1}}drawArrowBits(t){let{x:e,y:i,arrowTip:s,game:a}=this;e-=a.vp.x1,i-=a.vp.y1;const r=h([s.x-e,s.y-i]);t.setLineDash([]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(s.x+12*Math.cos(r+3*Math.PI/4),s.y+12*Math.sin(r+3*Math.PI/4)),t.moveTo(s.x,s.y),t.lineTo(s.x+12*Math.cos(r-3*Math.PI/4),s.y+12*Math.sin(r-3*Math.PI/4)),t.stroke()}launch(){return null!==this.arrowTip.x&&(this.game.ball.stopped=!1,this.game.ball.vx=this.launchVx,this.game.ball.vy=this.launchVy,!0)}setVelocity(t){const e=this.game.vp,i={x:t.clientX-n().x,y:t.clientY-n().y},s=i.x-this.x+e.x1,h=i.y-this.y+e.y1;s**2+h**2<=this.radius**2&&s*this.normal[0]+h*this.normal[1]>=0?(this.arrowTip.x=i.x,this.arrowTip.y=i.y,this.updateLaunchVelocity(),this.updatePolar()):this.arrowTip.x=null}setVelocityByArrowKeys(t,e){Math.cos(this.arrowAngle),Math.sin(this.arrowAngle),40===t.keyCode&&(this.arrowLength-=.5),38===t.keyCode&&(this.arrowLength+=.5),37===t.keyCode&&(this.arrowAngle-=.02),39===t.keyCode&&(this.arrowAngle+=.02),[32,13].includes(t.keyCode)&&this.launch()&&e(),this.updateArrowTip(),this.updateLaunchVelocity()}};var o=class{constructor(t,e=0,i=0,s=5,h=1,a="white",r=0,n=0){this.game=t,this.x=e,this.y=i,this.radius=s,this.color=a,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.vx=r,this.vy=n,this.ax=0,this.ay=0,this.stopped=!0,this.prevx=e,this.prevy=i,this.drawX=e,this.drawY=i,this.interpolateX=e,this.interpolateY=i}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}setAuxPositions(){const t=this.game.playSpeed,e=this.game.vp;if(t.fractional&&t.num>1){const e=t.num,i=this.game.frameCount%e;this.interpolateX=i/e*this.x+(1-i/e)*this.prevx,this.interpolateY=i/e*this.y+(1-i/e)*this.prevy}else this.interpolateX=this.x,this.interpolateY=this.y;this.drawX=this.interpolateX-e.x1,this.drawY=this.interpolateY-e.y1}checkRectangle(t){const{x:e,y:i}=this;return e>t[0][0]&&e<t[1][0]&&i>t[0][1]&&i<t[1][1]}stop(){this.stopped=!0,this.vx=0,this.vy=0}move(){this.logging&&(console.log(`ballx is ${this.x}`),console.log(`bally is ${this.y}`)),this.prevx=this.x,this.prevy=this.y,this.stopped||(this.x+=this.vx,this.y+=this.vy,this.vx+=this.ax,this.vy+=this.ay,this.ax=0,this.ay=0,this.game.planets.forEach(t=>{const{dx:e,dy:i,dz2:s,dz:h,normal:a}=t.ballData();if(h<=this.radius+t.radius){let e=this.radius+t.radius-h;this.x+=e*a[0],this.y+=e*a[1],this.ax=0,this.ay=0,t.sticky||Math.abs(this.vx)+Math.abs(this.vy)<1?(this.stop(),this.game.currentPlanet=t,this.game.launchPad=new l(this.game,this.x,this.y,a),this.game.setupLaunchPad()):t.bounce(a)}else this.ax-=1/s*t.mass*e/h*.2,this.ay-=1/s*t.mass*i/h*.2}),this.game.obstacles.forEach(t=>{t.checkForBall()&&t.bounce()}))}draw(t,e=this.radius){this.setAuxPositions(),t.beginPath(),t.fillStyle=this.color,t.beginPath(),t.arc(this.drawX,this.drawY,e,0,2*Math.PI,!0),t.fill()}};var c=class{constructor(t,e=0,i=0,s=10,h="grey",a,r=0,n=0){this.game=t,this.x=e,this.y=i,this.radius=s,this.color=h,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.vx=r,this.vy=n,this.density=a||1,this.mass=this.density*this.radius**3,this.sticky=!0,this.hideText=!1,this.textPos={x:e+s+2,y:i+s+.5}}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}move(){this.x+=this.vx,this.y+=this.vy}ballData(){const t=this.game.ball,e=t.x-this.x,i=t.y-this.y,s=e**2+i**2,h=Math.sqrt(s);return{dx:e,dy:i,dz2:s,dz:h,normal:[e/h,i/h]}}draw(t,e=this.x,i=this.y,s=this.radius){t.fillStyle=this.color,t.beginPath(),t.arc(e,i,s,0,2*Math.PI,!0),t.font=`${Math.floor(.9*s)}px Arial`,t.fill(),this.hideText||(t.beginPath(),t.fillStyle="#3e78ad",t.font="14px Arial",t.fillText(`Escape vel. ${(this.radius*this.density**.45*.504).toFixed(2)}`,`${e+s+2}`,`${i+.5*s+this.game.ball.radius}`),t.fill())}};var d=class{constructor(t,e=0,i=0,s=100,h=100,a="orange"){this.game=t,this.x1=e,this.y1=i,this.x2=s,this.y2=h,this.color=a,this.draw=this.draw.bind(this),this.move=this.move.bind(this);let r=Math.sqrt((i-h)**2+(s-e)**2);this.normal=[(i-h)/r,(s-e)/r],this.bounce=this.bounce.bind(this),this.checkForBall=this.checkForBall.bind(this)}bounce(){let t=this.game.ball,e=this.normal,i=t.vx*e[0]+t.vy*e[1],s=t.vx-2*i*e[0],h=t.vy-2*i*e[1];t.vx=s,t.vy=h}checkForBall(){let t=this.game.ball;t.logging=!1;let{x1:e,x2:i,y1:s,y2:h}=this,a=[s-h,i-e],{x:n,y:l,radius:o,vx:c,vy:d}=t;return(a[0]*(n-e)+a[1]*(l-s))*(a[0]*(n+c-e)+a[1]*(l+d-s))<=0&&r([n,n+c],[e,i])&&r([l,l+d],[s,h])}move(){this.x+=this.vx,this.y+=this.vy}draw(t,e){let{x1:i,y1:s}=e;t.setLineDash([]),t.beginPath(),t.moveTo(this.x1-i,this.y1-s),t.lineTo(this.x2-i,this.y2-s),t.strokeStyle=this.color,t.stroke()}};var y=class{constructor(t,e,i,s=[0,-1],h=100){this.game=t,this.x=e,this.y=i,this.width=h,this.drawFlag=this.drawFlag.bind(this),this.drawHole=this.drawHole.bind(this),this.normal=s,this.drawFlag=this.drawFlag.bind(this),this.drawHole=this.drawHole.bind(this)}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}move(){this.x+=this.vx,this.y+=this.vy}drawFlag(t,e=this.x,i=this.y){let s=this.normal;t.setLineDash([]),t.beginPath(),t.strokeStyle="gold",t.moveTo(e,i),t.lineTo(e+50*s[0],i+50*s[1]),t.stroke(),t.fillStyle="red",t.moveTo(e+50*s[0],i+50*s[1]),t.lineTo(e+70*s[0],i+70*s[1]),t.lineTo(e+60*s[0]-20*s[1],i+60*s[1]+20*s[0]),t.lineTo(e+50*s[0],i+50*s[1]),t.fill()}drawHole(t,e=this.x,i=this.y){let{width:s,normal:h}=this;this.game.ball,t.beginPath(),t.strokeStyle="purple",t.moveTo(e-h[1]*s/2,i+h[0]*s/2),t.lineTo(e+h[1]*s/2,i-h[0]*s/2),t.stroke(),t.beginPath(),t.fillStyle="black",t.moveTo(e+h[1]*s/2,i-h[0]*s/2),t.lineTo(e+h[1]*s/2-30*h[0],i-h[0]*s/2-30*h[1]),t.lineTo(e-h[1]*s/2-30*h[0],i+h[0]*s/2-30*h[1]),t.lineTo(e-h[1]*s/2,i+h[0]*s/2),t.lineTo(e+h[1]*s/2,i-h[0]*s/2),t.fill()}checkForWin(){let{x:t,y:e,width:i,normal:s}=this,h=this.game.ball;return(s[0]*(h.prevx-t)+s[1]*(h.prevy-e))*(s[0]*(h.prevx+h.vx-t)+s[1]*(h.prevy+h.vy-e))<=0&&r([h.prevx,h.x],[t-.5*i*s[1],t+.5*i*s[1]])&&r([h.prevy,h.y],[e-.5*i*s[0],e+.5*i*s[0]])}};const u=()=>{let t=document.getElementById("game-canvas").getBoundingClientRect();return{x:t.x,y:t.y}};var p=class{constructor(t,e,i){this.game=t,this.clickHandler=this.clickHandler.bind(this),t.canvas.addEventListener("click",this.clickHandler),this.visible=!0,this.x=e,this.y=i}draw(t){this.visible&&(t.beginPath(),t.fillStyle="white",t.font="25px Arial",t.fillText("Start",this.x,this.y),t.fill(),t.beginPath(),t.strokeStyle="white",t.moveTo(this.x-20,this.y+10),t.lineTo(this.x-20,this.y-25),t.lineTo(this.x+75,this.y-25),t.lineTo(this.x+75,this.y+10),t.lineTo(this.x-20,this.y+10),t.stroke())}clickHandler(t){const e=t.clientX-u().x,i=t.clientY-u().y;e>=this.x-20&&e<=this.x+75&&i>=this.y-25&&i<=this.y+10&&(this.game.setupLaunchPad(),this.game.canvas.removeEventListener("click",this.clickHandler,!1),this.visible=!1)}};var v=class{constructor(t){this.ball=new o(t,330,240),this.corners=[[-200,-200],[1200,600]],this.currentPlanet=new c(t,300,240,25,"#27753a",1),this.startButton=new p(t,400,400),this.launchPad=new l(t,this.ball.x,this.ball.y,[1,0]),this.planets=[this.currentPlanet],this.hole=new y(t,680,435,[0,-1],100),this.obstacles=[new d(t,350,280,750,500),new d(t,750,150,750,500)],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var x=class{constructor(t){this.ball=new o(t,300,100),this.currentPlanet=new c(t,300,70,25,"#27753a",1),this.corners=[[-200,-200],[2400,1900]],this.launchPad=new l(t,300,100),this.planets=[this.currentPlanet,new c(t,300,400,35),new c(t,520,250,30,"orange"),new c(t,580,450,30,"orange")],this.hole=new y(t,700,500),this.obstacles=[],this.obstacles=[new d(t,90,0,90,900),new d(t,600,40,850,300)]}};var m=class{constructor(t){const e=1/Math.sqrt(2);this.ball=new o(t,100+30*e,40+30*e),this.corners=[[-200,-200],[3400,3100]],this.currentPlanet=new c(t,100,40,25,"#27753a",1),this.startButton=new p(t,400,400),this.launchPad=new l(t,this.ball.x,this.ball.y,[e,e]),this.planets=[this.currentPlanet,new c(t,640,490,22,"white",2)];let i=1/Math.sqrt(2);this.hole=new y(t,740,420,[i,-i],100),this.obstacles=[new d(t,100,180,640,300),new d(t,360,100,650,270)],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var w=class{constructor(t,e=300,i="30px Arial",s=400,h=300){this.text=t,this.duration=e,this.font=i,this.x=s,this.y=h}draw(t){t.beginPath(),t.fillStyle="#3e78ad",t.font=this.font,t.fillText(this.text,this.x,this.y),t.fill()}};var g=class{constructor(t=0,e=0,i=1200+t,s=600+e,h=100){this.x1=t,this.y1=e,this.x2=i,this.y2=s,this.zoom=h,this.setMovementStart=this.setMovementStart.bind(this),this.moveWithBall=this.moveWithBall.bind(this)}setMovementStart(t,e){this.movementStartX=t,this.movementStartY=e}moveWithBall(t,e,i){let{x1:s,x2:h,y1:a,y2:r}=this,n={x:t-.5*(s+h),y:e-.5*(a+r)};if(n.x>0&&t>this.movementStartX){const t=Math.min(n.x,1.4*i.vx);this.x1+=t,this.x2+=t}if(n.y>0&&e>this.movementStartY){const t=Math.min(n.y,1.4*i.vy);this.y1+=t,this.y2+=t}}displayPos(t){return{x:t.x-this.x1,y:t.y-this.y1}}},b=i(0),f=i.n(b);var P=class{constructor(t){this.topLeft={x:t.corners[0]-600,y:t.corners[0]-300},this.bottomRight={x:t.corners[1]+600,y:t.corners[1]+300},this.blocks={},this.starsPerBlock=100}generateBlock(t,e){let i=t,s=e;const h=1e3*i+s,a=f()(h),r=new Array(this.starsPerBlock);for(let t=0;t<r.length;t++)r[t]=[1e3*(i+a.nextFloat()),1e3*(s+a.nextFloat()),.3+.8*a.nextFloat()**9];this.blocks[`${i}, ${s}`]=r}drawBlock(t,e,i,s){let h=this.blocks[`${e}, ${i}`];t.fillStyle="white";for(let e=0;e<h.length;e++){let[i,a,r]=h[e];t.beginPath(),t.arc(i-s.x1,a-s.y1,r,0,2*Math.PI,!0),t.fill()}}getBlock(t,e){return this.blocks[`${t}, ${e}`]}};var S=class{constructor(){this.canvas=document.getElementById("game-canvas"),this.canvas.setAttribute("tabindex",0),this.ctx=this.canvas.getContext("2d"),this.levels=[null,v,x,m],this.currentLevelNumber=0,this.draw=this.draw.bind(this),this.initiateLevel=this.initiateLevel.bind(this),this.setupLaunchPad=this.setupLaunchPad.bind(this),this.playSpeed={num:1,fractional:!1},this.setPlaySpeed=this.setPlaySpeed.bind(this),this.frameCount=0,this.playSpeedMessage=null,this.vp=new g,this.restartLevel=this.restartLevel.bind(this),this.keyRestart=this.keyRestart.bind(this),this.canvas.addEventListener("keydown",this.keyRestart),window.printo=()=>{let t=this.ball;console.log(`ballx: ${t.x}, bpx: ${t.prevx}, playSpeed: ${JSON.stringify(this.playSpeed)}, fC: ${this.frameCount},\n            balldrawX: ${t.drawX}, ballInterX: ${t.interpolateX}\n            viewportx1: ${this.vp.x1}`)},requestAnimationFrame(this.animate.bind(this))}keyRestart(t){82===t.keyCode&&this.restartLevel()}initiateLevel(){this.currentLevelNumber+=1,this.vp=new g;const t=new this.levels[this.currentLevelNumber](this);this.ball=t.ball,this.currentPlanet=t.currentPlanet,this.launchPad=t.launchPad,this.planets=t.planets||[],this.hole=t.hole,this.obstacles=t.obstacles||[],this.corners=t.corners,this.startButton=t.startButton,this.playSpeed={num:1,fractional:!1},this.stars=new P(t),this.stars.generateBlock(0,0),this.vp.setMovementStart(t.viewportMovementStartX||0,t.viewportMovementStartY||0),this.canvas.addEventListener("keydown",this.setPlaySpeed,!1),this.startButton||this.setupLaunchPad()}restartLevel(){this.currentLevelNumber-=1,this.initiateLevel()}setPlaySpeed(t){[70,83].includes(t.keyCode)&&(70===t.keyCode&&(this.playSpeed.fractional?[2,3,4].includes(this.playSpeed.num)?this.playSpeed.num-=1:1===this.playSpeed.num&&(this.playSpeed.fractional=!1,this.playSpeed.num=2):[1,2,3].includes(this.playSpeed.num)&&(this.playSpeed.num+=1)),83===t.keyCode&&(this.playSpeed.fractional?[1,2,3].includes(this.playSpeed.num)&&(this.playSpeed.num+=1):[2,3,4].includes(this.playSpeed.num)?this.playSpeed.num-=1:1===this.playSpeed.num&&(this.playSpeed.fractional=!0,this.playSpeed.num=2)),this.playSpeedMessage=new w(`Playspeed: ${this.playSpeed.fractional?(1/this.playSpeed.num).toFixed(2):this.playSpeed.num}`))}victoryMessage(){const t=this.ctx;t.beginPath(),t.fillStyle="white",t.font="30px Arial",t.fillText("You win!",400,400),t.fill()}setupLaunchPad(){let t=this,e=t.canvas,i=t=>this.launchPad.setVelocity(t),s=t=>{this.launchPad.launch()&&(e.removeEventListener("mousemove",i,!1),e.removeEventListener("click",s,!1),e.removeEventListener("keydown",h,!1),this.launchPad=null)},h=a=>{e.removeEventListener("mousemove",i,!1),t.launchPad.setVelocityByArrowKeys(a,()=>{e.removeEventListener("keydown",h,!1),e.removeEventListener("click",s,!1),this.launchPad=null})};e.addEventListener("mousemove",i,!1),e.addEventListener("keydown",h,!1),e.addEventListener("click",s,!1)}step(t){this.moveObjects(t),this.vp.moveWithBall(this.ball.interpolateX,this.ball.interpolateY,this.ball)}moveObjects(){let{playSpeed:t}=this;if(t.fractional){if(this.frameCount%t.num==0&&(this.ball.move(),!this.ball.checkRectangle(this.corners)))return void this.restartLevel()}else for(let e=1;e<=t.num;e++)if(this.ball.move(),!this.ball.checkRectangle(this.corners))return void this.restartLevel()}animate(t){const e=t-this.lastTime;this.step(e),this.draw(),this.hole.checkForWin()&&(this.ball.stop(),this.currentLevelNumber>=this.levels.length-1?this.won=!0:this.initiateLevel()),this.lastTime=t,this.frameCount+=1,requestAnimationFrame(this.animate.bind(this))}draw(){let{ctx:t,ball:e,vp:i,launchPad:s,hole:h}=this;if(t.width=1200,t.height=600,t.fillStyle="black",t.fillRect(0,0,1200,600),this.stars)for(let e=Math.floor(i.x1/1e3);e<=Math.ceil(i.x2/1e3);e++)for(let s=Math.floor(i.y1/1e3);s<=Math.ceil(i.y2/1e3);s++)this.stars.getBlock(e,s)||this.stars.generateBlock(e,s),this.stars.drawBlock(t,e,s,i);h.drawFlag(t,h.x-i.x1,h.y-i.y1),e.draw(t),h.drawHole(t,h.x-i.x1,h.y-i.y1),this.obstacles.forEach(e=>e.draw(t,i)),this.planets.forEach(e=>e.draw(t,e.x-i.x1,e.y-i.y1)),this.startButton&&this.startButton.draw(t),this.playSpeedMessage&&this.playSpeedMessage.draw(t),s&&s.draw(t),this.won&&this.victoryMessage()}};document.addEventListener("DOMContentLoaded",t=>{(new S).initiateLevel()})}]);
//# sourceMappingURL=main.js.map
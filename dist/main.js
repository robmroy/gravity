!function(t){var e={};function s(i){if(e[i])return e[i].exports;var h=e[i]={i:i,l:!1,exports:{}};return t[i].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)s.d(i,h,function(e){return t[e]}.bind(null,h));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e){t.exports=function(t){function e(e){(t=(0|e)%2147483647)<=0&&(t+=2147483646)}function s(){return t=48271*t%2147483647}return e(t),{seed:e,nextInt:s,nextFloat:function(){return(s()-1)/2147483646}}}},function(t,e,s){"use strict";s.r(e);const i=function(t,e,s,i,h,a,n){let l=a-h,r=2*Math.ceil(.5*(l/.1-1))+1,o=l/r;t.strokeStyle=n;for(let a=0;a<r;a++)t.beginPath(),a%2==0&&(t.arc(e,s,i,h+a*o,h+(a+1)*o),t.stroke())},h=function(t){const e=t[0],s=t[1];return 0==e?s>0?Math.PI/2:-Math.PI/2:e>0?Math.atan(s/e):Math.PI+Math.atan(s/e)},a=function(t){return Math.sqrt(t[0]**2+t[1]**2)},n=function(t,e){let[s,i]=t,[h,a]=e;return(a-s)*(h-s)<=0||(a-i)*(h-i)<=0||(i-h)*(s-h)<=0||(i-a)*(s-a)<=0},l=()=>{let t=document.getElementById("game-canvas").getBoundingClientRect();return{x:t.x,y:t.y}};var r=class{constructor(t,e=0,s=0,i=[0,1],a=Math.PI/2,n=160,l="white"){this.game=t,this.x=e,this.y=s,this.normal=i,this.radius=n,this.color=l,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.launch=this.launch.bind(this),this.arrowVector=this.arrowVector.bind(this),this.updatePolar=this.updatePolar.bind(this),this.updateArrowTip=this.updateArrowTip.bind(this),this.updateLaunchVelocity=this.updateLaunchVelocity.bind(this),this.launchVx=0,this.launchVy=0,this.normalAngle=h(i),this.setVelocity=this.setVelocity.bind(this),this.arrowTip={x:null,y:null},this.arrowAngle=this.normalAngle,this.arrowLength=60,this.maxTheta=a,this.thetaRestrictionHelper=(1-Math.cos(a))**2+Math.sin(a)**2,this.setVelocityByArrowKeys=this.setVelocityByArrowKeys.bind(this)}move(){this.x+=this.vx,this.y+=this.vy}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}arrowVector(){const t=this.game.vp;return[this.arrowTip.x-this.x+t.x1,this.arrowTip.y-this.y+t.y1]}updatePolar(){this.arrowLength=a(this.arrowVector()),this.arrowAngle=h(this.arrowVector())}updateArrowTip(){let t=this.game.vp;this.arrowTip.x=this.x-t.x1+this.arrowLength*Math.cos(this.arrowAngle),this.arrowTip.y=this.y-t.y1+this.arrowLength*Math.sin(this.arrowAngle)}updateLaunchVelocity(){this.launchVx=this.arrowVector()[0]/8,this.launchVy=this.arrowVector()[1]/8}draw(t){let e=this.vpX(),s=this.vpY();i(t,e,s,this.radius,this.normalAngle-this.maxTheta,this.normalAngle+this.maxTheta,this.color);let h=this.game.currentPlanet;if(null===this.arrowTip.x&&(h.hideText=!1),null!==this.arrowTip.x){t.beginPath(),t.strokeStyle="white",t.setLineDash([5,5]),t.moveTo(e,s),t.lineTo(this.arrowTip.x,this.arrowTip.y),t.stroke(),this.drawArrowBits(t),t.beginPath();let i=.5*(e+this.arrowTip.x),a=.5*(s+this.arrowTip.y);t.fillStyle="purple",t.font="21px Arial",t.fillText(`Initial speed: ${(this.arrowLength/8).toFixed(2)}`,`${i}`,`${a}`),t.fill();let n=this.game.vp,l=this.game.ball;i>=h.textPos.x-n.x1-150&&a>=h.textPos.y-n.y1-28+l.radius&&a<=h.textPos.y-n.y1+8+l.radius?h.hideText=!0:h.hideText=!1}}drawArrowBits(t){let{x:e,y:s,arrowTip:i,game:a}=this;e-=a.vp.x1,s-=a.vp.y1;const n=h([i.x-e,i.y-s]);t.setLineDash([]),t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(i.x+12*Math.cos(n+3*Math.PI/4),i.y+12*Math.sin(n+3*Math.PI/4)),t.moveTo(i.x,i.y),t.lineTo(i.x+12*Math.cos(n-3*Math.PI/4),i.y+12*Math.sin(n-3*Math.PI/4)),t.stroke()}launch(){return null!==this.arrowTip.x&&(this.game.ball.stopped=!1,this.game.ball.vx=this.launchVx,this.game.ball.vy=this.launchVy,!0)}setVelocity(t){const e=this.game.vp,s={x:t.clientX-l().x,y:t.clientY-l().y},i=s.x-this.x+e.x1,h=s.y-this.y+e.y1,a=Math.sqrt(i**2+h**2);i**2+h**2<=this.radius**2&&(this.normal[0]-i/a)**2+(this.normal[1]-h/a)**2<=this.thetaRestrictionHelper?(this.arrowTip.x=s.x,this.arrowTip.y=s.y,this.updateLaunchVelocity(),this.updatePolar()):this.arrowTip.x=null}setVelocityByArrowKeys(t,e){const s=this.arrowLength;40===t.keyCode&&(this.arrowLength=Math.max(s-.4,0)),38===t.keyCode&&(this.arrowLength=Math.min(s+.4,this.radius)),37===t.keyCode&&(this.arrowAngle-=.004),39===t.keyCode&&(this.arrowAngle+=.004),[32,13].includes(t.keyCode)&&this.launch()&&e(),this.updateArrowTip(),this.updateLaunchVelocity()}};var o=class{constructor(t,e=0,s=0,i=5,h="white",a=0,n=0){this.game=t,this.x=e,this.y=s,this.radius=i,this.color=h,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.vx=a,this.vy=n,this.ax=0,this.ay=0,this.stopped=!0,this.prevx=e,this.prevy=s,this.drawX=e,this.drawY=s,this.interpolateX=e,this.interpolateY=s}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}setAuxPositions(){const t=this.game.playSpeed,e=this.game.vp;if(t.fractional&&t.num>1){const e=t.num,s=this.game.frameCount%e;this.interpolateX=s/e*this.x+(1-s/e)*this.prevx,this.interpolateY=s/e*this.y+(1-s/e)*this.prevy}else this.interpolateX=this.x,this.interpolateY=this.y;this.drawX=this.interpolateX-e.x1,this.drawY=this.interpolateY-e.y1}checkRectangle(t){const{x:e,y:s}=this;return e>t[0][0]&&e<t[1][0]&&s>t[0][1]&&s<t[1][1]}stop(){this.stopped=!0,this.vx=0,this.vy=0}move(){if(this.logging&&(console.log(`ballx is ${this.x}`),console.log(`bally is ${this.y}`)),this.prevx=this.x,this.prevy=this.y,this.stopped)return;this.x+=this.vx,this.y+=this.vy,this.vx+=this.ax,this.vy+=this.ay,this.ax=0,this.ay=0,this.game.planets.forEach(t=>{const{dx:e,dy:s,dz2:i,dz:h,normal:a}=t.ballData();if(h<=this.radius+t.radius){let e=this.radius+t.radius-h;this.x+=e*a[0],this.y+=e*a[1],this.ax=0,this.ay=0,t.sticky||Math.abs(this.vx)+Math.abs(this.vy)<1?(this.stop(),this.game.currentPlanet=t,this.game.launchPad=new r(this.game,this.x,this.y,a,t.maxTheta),this.game.setupLaunchPad()):t.bounce(a)}else this.ax-=1/i*t.mass*e/h*.2,this.ay-=1/i*t.mass*s/h*.2});const t=this.game;t.obstacles.forEach(t=>{t.checkForBall()&&t.bounce()}),t.hole.checkForWin()&&(this.stop(),t.currentLevelNumber>=t.levels.length-1?t.won=!0:(t.initiateLevel(),t.playSpeed={num:1,fractional:!1}))}draw(t,e,s,i=this.radius){void 0===e&&(this.setAuxPositions(),e=this.drawX,s=this.drawY),t.beginPath(),t.fillStyle=this.color,t.beginPath(),t.arc(e,s,i,0,2*Math.PI,!0),t.fill()}};var c=class{constructor(t,e=0,s=0,i=10,h="grey",a,n=Math.PI/2,l=0,r=0){this.game=t,this.x=e,this.y=s,this.radius=i,this.color=h,this.draw=this.draw.bind(this),this.move=this.move.bind(this),this.vx=l,this.vy=r,this.density=a||1,this.mass=this.density*this.radius**3,this.sticky=!0,this.hideText=!1,this.maxTheta=n,this.textPos={x:e+i+2,y:s+i+.5}}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}move(){this.x+=this.vx,this.y+=this.vy}ballData(){const t=this.game.ball,e=t.x-this.x,s=t.y-this.y,i=e**2+s**2,h=Math.sqrt(i);return{dx:e,dy:s,dz2:i,dz:h,normal:[e/h,s/h]}}draw(t,e=this.x,s=this.y,i=this.radius){t.fillStyle=this.color,t.beginPath(),t.arc(e,s,i,0,2*Math.PI,!0),t.font=`${Math.floor(.9*i)}px Arial`,t.fill(),this.hideText||(t.beginPath(),t.fillStyle="#3e78ad",t.font="14px Arial",t.fillText(`Escape vel. ${(this.radius*this.density**.45*.504).toFixed(2)}`,`${e+i+2}`,`${s+.5*i+this.game.ball.radius}`),t.fill())}};var d=class{constructor(t,e=0,s=0,i=100,h=100,a="orange"){this.game=t,this.x1=e,this.y1=s,this.x2=i,this.y2=h,this.color=a,this.draw=this.draw.bind(this),this.move=this.move.bind(this);let n=Math.sqrt((s-h)**2+(i-e)**2);this.normal=[(s-h)/n,(i-e)/n],this.bounce=this.bounce.bind(this),this.checkForBall=this.checkForBall.bind(this)}bounce(){let t=this.game.ball,e=this.normal,s=t.vx*e[0]+t.vy*e[1],i=t.vx-2*s*e[0],h=t.vy-2*s*e[1];t.vx=i,t.vy=h}checkForBall(){let t=this.game.ball;t.logging=!1;let{x1:e,x2:s,y1:i,y2:h}=this,a=[i-h,s-e],{x:l,y:r,radius:o,vx:c,vy:d}=t;return(a[0]*(l-e)+a[1]*(r-i))*(a[0]*(l+c-e)+a[1]*(r+d-i))<=0&&n([l,l+c],[e,s])&&n([r,r+d],[i,h])}move(){this.x+=this.vx,this.y+=this.vy}draw(t,e){let{x1:s,y1:i}=e;t.setLineDash([]),t.beginPath(),t.moveTo(this.x1-s,this.y1-i),t.lineTo(this.x2-s,this.y2-i),t.strokeStyle=this.color,t.stroke()}};var u=class{constructor(t,e=60,s,i="30px Arial",h=400,a=300){this.text=t,this.duration=e,this.font=i,this.x=h,this.y=a,this.color=s||"#3e78ad"}draw(t){t.beginPath(),t.fillStyle=this.color,t.font=this.font,t.fillText(this.text,this.x,this.y),t.fill()}};var y=class{constructor(t,e,s,i=[0,-1],h=100,a=1){this.game=t,this.x=e,this.y=s,this.width=h,this.drawFlag=this.drawFlag.bind(this),this.drawHole=this.drawHole.bind(this),this.normal=i,this.drawFlag=this.drawFlag.bind(this),this.drawHole=this.drawHole.bind(this)}vpX(){return this.game.vp.displayPos(this).x}vpY(){return this.game.vp.displayPos(this).y}move(){this.x+=this.vx,this.y+=this.vy}drawFlag(t,e=this.x,s=this.y,i=1){let h=this.normal,a=i;t.setLineDash([]),t.beginPath(),t.strokeStyle="gold",t.moveTo(e,s),t.lineTo(e+50*a*h[0],s+50*a*h[1]),t.stroke(),t.fillStyle="#db0711",t.moveTo(e+50*a*h[0],s+50*a*h[1]),t.lineTo(e+70*a*h[0],s+70*a*h[1]),t.lineTo(e+60*a*h[0]-30*a*h[1],s+60*a*h[1]+30*a*h[0]),t.lineTo(e+50*a*h[0],s+50*a*h[1]),t.fill()}drawHole(t,e=this.x,s=this.y,i=1){let{width:h,normal:a}=this,n=i;t.beginPath(),t.strokeStyle="purple",t.moveTo(e-n*a[1]*h/2,s+n*a[0]*h/2),t.lineTo(e+n*a[1]*h/2,s-n*a[0]*h/2),t.stroke(),t.beginPath()}checkForWin(){let{x:t,y:e,width:s,normal:i}=this,h=this.game.ball,a=i[0]*(h.prevx-t)+i[1]*(h.prevy-e),l=i[0]*(h.x-t)+i[1]*(h.y-e);if(n([h.prevx,h.x],[t-.5*s*i[1],t+.5*s*i[1]])&&n([h.prevy,h.y],[e-.5*s*i[0],e+.5*s*i[0]])){if(a>=0&&l<=0)return!0;a<0&&l>0&&this.game.timedMessages.push(new u("WRONG WAY",80,"#9c1c22","28px Trebuchet MS",this.x,this.y+70))}return!1}};const v=()=>{let t=document.getElementById("game-canvas").getBoundingClientRect();return{x:t.x,y:t.y}};var p=class{constructor(t,e,s,i="black"){this.game=t,this.clickHandler=this.clickHandler.bind(this),t.canvas.addEventListener("click",this.clickHandler),this.visible=!0,this.x=e,this.y=s,this.color=i}draw(t){this.visible&&(t.beginPath(),t.fillStyle=this.color,t.font="25px Arial",t.fillText("Start",this.x,this.y),t.fill(),t.beginPath(),t.strokeStyle=this.color,t.moveTo(this.x-20,this.y+10),t.lineTo(this.x-20,this.y-25),t.lineTo(this.x+75,this.y-25),t.lineTo(this.x+75,this.y+10),t.lineTo(this.x-20,this.y+10),t.stroke())}clickHandler(t){const e=t.clientX-v().x,s=t.clientY-v().y;e>=this.x-20&&e<=this.x+75&&s>=this.y-25&&s<=this.y+10&&(this.game.setupLaunchPad(),this.game.canvas.removeEventListener("click",this.clickHandler,!1),this.visible=!1,this.game.menu=null)}};var m=class{constructor(t){this.ball=new o(t,330,240),this.corners=[[-200,-200],[1200,600]],this.currentPlanet=new c(t,300,240,25,"#27753a",1),this.launchPad=new r(t,this.ball.x,this.ball.y,[1,0]),this.planets=[this.currentPlanet],this.hole=new y(t,680,435,[0,-1],100),this.obstacles=[new d(t,350,280,750,500),new d(t,750,150,750,500)],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var x=class{constructor(t){this.ball=new o(t,600,440),this.currentPlanet=new c(t,600,470,25,"#27753a",1),this.corners=[[-200,-800],[2400,1900]],this.launchPad=new r(t,600,440,[0,-1]),this.planets=[this.currentPlanet],this.hole=new y(t,640,320),this.obstacles=[]}};var w=class{constructor(t){const e=1/Math.sqrt(2);this.ball=new o(t,100+30*e,40+30*e),this.corners=[[-200,-200],[3400,3100]],this.currentPlanet=new c(t,100,40,25,"#27753a",1),this.launchPad=new r(t,this.ball.x,this.ball.y,[e,e]),this.planets=[this.currentPlanet,new c(t,640,490,22,"orange",2)];let s=1/Math.sqrt(2);this.hole=new y(t,720,420,[s,-s],100),this.obstacles=[new d(t,250,150,640,340)],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var b=class{constructor(t){const e=1/Math.sqrt(2);this.ball=new o(t,590,245),this.corners=[[-200,-200],[3400,3100]],this.currentPlanet=new c(t,560,245,25,"#27753a",1),this.launchPad=new r(t,this.ball.x,this.ball.y,[1,0]),this.planets=[this.currentPlanet,new c(t,640,280,20,"orange",1)],this.hole=new y(t,665,330,[e,-e],100),this.obstacles=[new d(t,250,280,640,280)],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var g=class{constructor(t){const e=1/Math.sqrt(2);this.ball=new o(t,200+40*e,380-40*e),this.corners=[[-500,-500],[3400,3100]],this.currentPlanet=new c(t,200,380,35,"#27753a",1,Math.PI/2),this.launchPad=new r(t,this.ball.x,this.ball.y,[e,-e],Math.PI/2),this.planets=[this.currentPlanet,new c(t,700,250,35,"orange",1.2),new c(t,440,200,30,"orange",1.2),new c(t,660,430,30,"orange",1.2)];let s=1/Math.sqrt(2);this.hole=new y(t,720,330,[s,-s],100),this.obstacles=[],this.viewportMovementStartX=700,this.viewportMovementStartY=500}};const f=function(t,e,s,i,h,a){let[n,l]=[i,i+a],r=[];for(;l<=h+.01;){const i=new d(t,e(n),s(n),e(l),s(l));n+=a,l+=a,r.push(i)}return r};var P=class{constructor(t){Math.sqrt(2),this.ball=new o(t,190,190),this.corners=[[-500,-500],[3400,3100]],this.currentPlanet=new c(t,150,190,35,"#27753a",1,Math.PI/2),this.launchPad=new r(t,this.ball.x,this.ball.y,[1,0],Math.PI/2),this.planets=[this.currentPlanet];let e=1/Math.sqrt(2);this.hole=new y(t,400,390,[e,-e],100);const s=f(t,t=>500+300*Math.sin(t),t=>290+120*Math.cos(t),-.78*Math.PI,-.4*Math.PI,Math.PI/100),i=f(t,t=>500+300*Math.sin(t),t=>290+120*Math.cos(t),-Math.PI/4+.5,Math.PI,Math.PI/100);this.obstacles=[].concat(s).concat(i),this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var M=class{constructor(t){Math.sqrt(2),this.ball=new o(t,185,243),this.corners=[[-500,-500],[3400,3100]],this.currentPlanet=new c(t,185,260,12,"#27753a",1,Math.PI/2),this.launchPad=new r(t,this.ball.x,this.ball.y,[0,-1],Math.PI/2),this.planets=[this.currentPlanet,new c(t,650,290,20,"orange",1.2),new c(t,500,340,35,"orange",1.2)],Math.sqrt(2),this.hole=new y(t,535,270,[-1,0],100);const e=f(t,t=>530+26*t*Math.sin(t),t=>330+27*t*Math.cos(t),3.5,17,Math.PI/100);this.obstacles=[],this.obstacles.push(...e),this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var k=class{constructor(t){const e=1/Math.sqrt(2);this.ball=new o(t,350+17*e,120+17*e),this.corners=[[-500,-500],[3400,3100]],this.currentPlanet=new c(t,350,120,12,"#27753a",1,Math.PI/2),this.launchPad=new r(t,this.ball.x,this.ball.y,[e,e],Math.PI/2),this.planets=[this.currentPlanet,new c(t,820,300,45,"orange",3),new c(t,500,230,50,"orange",.2),new c(t,500,310,15,"orange",10)];const s=f(t,t=>800+300*Math.sin(t),t=>300+120*Math.cos(t),-0,1.01*Math.PI,Math.PI/100);this.obstacles=[].concat(s),Math.sqrt(2),this.hole=new y(t,1050,300,[-1,0],100),this.viewportMovementStartX=700,this.viewportMovementStartY=500}};var L=class{constructor(t=0,e=0,s=1200+t,i=600+e,h=100){this.x1=t,this.y1=e,this.x2=s,this.y2=i,this.zoom=h,this.setMovementStart=this.setMovementStartPoints.bind(this),this.moveWithBall=this.moveWithBall.bind(this)}setMovementStartPoints(t,e,s,i){this.startUp=t||0,this.startRight=e||1100,this.startDown=s||530,this.startLeft=i||0}moveWithBall(t,e,s){let{x1:i,x2:h,y1:a,y2:n}=this,l={x:t-.5*(i+h),y:e-.5*(a+n)};if(t>this.startRight||t<this.startLeft){const t=Math.abs(l.x)<Math.abs(1.4*s.vx)?l.x:1.4*s.vx;this.x1+=t,this.x2+=t}if(e>this.startDown||e<this.startUp){const t=Math.abs(l.y)<Math.abs(1.4*s.vy)?l.y:1.4*s.vy;this.y1+=t,this.y2+=t}}displayPos(t){return{x:t.x-this.x1,y:t.y-this.y1}}},S=s(0),T=s.n(S);var E=class{constructor(t){this.topLeft={x:t.corners[0]-600,y:t.corners[0]-300},this.bottomRight={x:t.corners[1]+600,y:t.corners[1]+300},this.blocks={},this.starsPerBlock=100}generateBlock(t,e){let s=t,i=e;const h=1e3*s+i,a=T()(h),n=new Array(this.starsPerBlock);for(let t=0;t<n.length;t++)n[t]=[1e3*(s+a.nextFloat()),1e3*(i+a.nextFloat()),.3+.8*a.nextFloat()**9];this.blocks[`${s}, ${i}`]=n}drawBlock(t,e,s,i){let h=this.blocks[`${e}, ${s}`];t.fillStyle="white";for(let e=0;e<h.length;e++){let[s,a,n]=h[e];t.beginPath(),t.arc(s-i.x1,a-i.y1,n,0,2*Math.PI,!0),t.fill()}}getBlock(t,e){return this.blocks[`${t}, ${e}`]}};var A=class{constructor(t){this.color="#e8e4da",this.game=t,this.startButton=new p(t,500,350)}draw(t,e=400,s=100){t.fillStyle=this.color,t.beginPath(),t.rect(e,s,e+200,s+250),t.stroke(),t.fill(),t.beginPath(),t.fillStyle="black",t.font="18px Arial",t.fillText("Use mouse or arrow keys to select launch direction. Click to launch.",e+30,s+40),t.fillText("Use 's' or 'f' for slower or faster playspeed, and 'p' to pause.",e+30,s+80),t.fillText("Pressing 'r' restarts the current level.",e+30,s+120),t.fillText("Press 'm' to return to this menu.",e+30,s+160),t.fill(),this.startButton.draw(t)}};var I=class{constructor(t,e,s,i=.3){this.level=t,this.x=e,this.y=s,this.scale=i}draw(t){const{obstacles:e,ball:s,planets:i,hole:h}=this.level;[s].concat(i).forEach(e=>{t.beginPath(),t.fillStyle=e.color,t.beginPath(),t.arc(this.scale*e.x+this.x,this.scale*e.y+this.y,this.scale*e.radius,0,2*Math.PI,!0),t.fill()}),t.setLineDash([]),e.forEach(e=>{e.y1<0||e.y2<0||(t.beginPath(),t.moveTo(this.scale*e.x1+this.x,this.scale*e.y1+this.y),t.lineTo(this.scale*e.x2+this.x,this.scale*e.y2+this.y),t.strokeStyle=e.color,t.stroke())}),h.drawFlag(t,this.scale*h.x+this.x,this.scale*h.y+this.y,this.scale),h.drawHole(t,this.scale*h.x+this.x,this.scale*h.y+this.y,this.scale)}};const B=()=>{let t=document.getElementById("game-canvas").getBoundingClientRect();return{x:t.x,y:t.y}};var V=class{constructor(t){this.game=t;const e=t.levels.slice(1),s=Math.ceil(Math.sqrt(e.length));this.perSide=s,this.draw=this.draw.bind(this),this.installEventListener=this.installEventListener.bind(this),this.removeEventListener=this.removeEventListener.bind(this),this.clickHandler=this.clickHandler.bind(this);const i=1/s;this.levelDisplays=e.map((e,h)=>(console.log(200*Math.floor(h/s)),new I(new e(t),h%s*1200/s,600*i*Math.floor(h/s),i)))}installEventListener(){this.game.canvas.addEventListener("click",this.clickHandler)}clickHandler(t){const e=this.perSide,s=t.clientX-B().x,i=t.clientY-B().y,h=1+Math.floor(e*s/1200)+Math.floor(e*i/600)*e;this.game.currentLevelNumber=h-1,this.game.animating=!0,this.game.animate(),this.game.initiateLevel(),this.removeEventListener()}removeEventListener(){this.game.canvas.removeEventListener("click",this.clickHandler)}draw(t){t.strokeStyle="white";const e=this.perSide;for(let s=1;s<e;s++)t.beginPath(),t.moveTo(0,600*s/e),t.lineTo(1200,600*s/e),t.stroke(),t.beginPath(),t.moveTo(1200*s/e,0),t.lineTo(1200*s/e,600),t.stroke();this.levelDisplays.forEach(e=>e.draw(t))}};var C=class{constructor(){this.canvas=document.getElementById("game-canvas"),this.canvas.setAttribute("tabindex",0),this.ctx=this.canvas.getContext("2d"),this.animating=!0,this.levels=[null,m,x,w,b,g,P,M,k],this.menu=new A(this),this.currentLevelNumber=0,this.draw=this.draw.bind(this),this.initiateLevel=this.initiateLevel.bind(this),this.setupLaunchPad=this.setupLaunchPad.bind(this),this.playSpeed={num:1,fractional:!1},this.setPlaySpeed=this.setPlaySpeed.bind(this),this.frameCount=0,this.vp=new L,this.restartLevel=this.restartLevel.bind(this),this.levelControl=this.levelControl.bind(this),this.switchToLevelMenu=this.switchToLevelMenu.bind(this),this.timedMessages=[],this.canvas.addEventListener("keydown",this.levelControl),window.printo=()=>{let t=this.ball;console.log(`ballx: ${t.x}, bpx: ${t.prevx}, \n            balldrawX: ${t.drawX}, ballInterX: ${t.interpolateX}\n            viewportx1: ${this.vp.x1} viewporty1: ${this.vp.y1}`)},requestAnimationFrame(this.animate.bind(this)),this.menuReady()}levelControl(t){82===t.keyCode&&this.restartLevel(),76===t.keyCode&&this.switchToLevelMenu()}switchToLevelMenu(){const t=new V(this),{ctx:e,canvas:s}=this;e.strokeStyle="black",e.width=1200,e.height=600,e.fillStyle="black",e.clearRect(0,0,s.width,s.height),t.draw(this.ctx),t.installEventListener(),this.animating=!1}initiateLevel(){this.currentLevelNumber+=1,this.vp=new L;const t=new this.levels[this.currentLevelNumber](this);this.ball=t.ball,this.currentPlanet=t.currentPlanet,this.launchPad=t.launchPad,this.planets=t.planets||[],this.hole=t.hole,this.obstacles=t.obstacles||[],this.corners=t.corners,this.stars=new E(t),this.stars.generateBlock(0,0),this.vp.setMovementStartPoints(t.viewportMovementUp,t.viewportMovementRight,t.viewportMovementDown,t.viewportMovementLeft),this.canvas.addEventListener("keydown",this.setPlaySpeed,!1),this.menu||this.setupLaunchPad()}restartLevel(){this.currentLevelNumber-=1,this.initiateLevel()}setPlaySpeed(t){[70,83].includes(t.keyCode)&&(70===t.keyCode&&(this.playSpeed.fractional?[2,3,4].includes(this.playSpeed.num)?this.playSpeed.num-=1:1===this.playSpeed.num&&(this.playSpeed.fractional=!1,this.playSpeed.num=2):[1,2,3].includes(this.playSpeed.num)&&(this.playSpeed.num+=1)),83===t.keyCode&&(this.playSpeed.fractional?[1,2,3].includes(this.playSpeed.num)&&(this.playSpeed.num+=1):[2,3,4].includes(this.playSpeed.num)?this.playSpeed.num-=1:1===this.playSpeed.num&&(this.playSpeed.fractional=!0,this.playSpeed.num=2)),this.timedMessages=[new u(`Playspeed: ${this.playSpeed.fractional?(1/this.playSpeed.num).toFixed(2):this.playSpeed.num}`)])}victoryMessage(){const t=this.ctx;t.beginPath(),t.fillStyle="white",t.font="30px Arial",t.fillText("You win!",400,400),t.fill()}setupLaunchPad(){let t=this,e=t.canvas,s=t=>this.launchPad.setVelocity(t),i=t=>{this.launchPad.launch()&&(e.removeEventListener("mousemove",s,!1),e.removeEventListener("click",i,!1),e.removeEventListener("keydown",a,!1),this.launchPad=null)},h=[37,38,39,40],a=n=>{h.includes(n.keyCode)&&e.removeEventListener("mousemove",s,!1),t.launchPad.setVelocityByArrowKeys(n,()=>{e.removeEventListener("keydown",a,!1),e.removeEventListener("click",i,!1),this.launchPad=null})};this.setVelocityWithMouse=s,this.keyDownHandler=a,this.launchBallWithMouse=i,e.addEventListener("mousemove",this.setVelocityWithMouse,!1),e.addEventListener("keydown",this.keyDownHandler,!1),e.addEventListener("click",this.launchBallWithMouse,!1)}disableLaunchPad(){let t=this.canvas;t.removeEventListener("keydown",this.keyDownHandler,!1),t.removeEventListener("click",this.launchBallWithMouse,!1),t.removeEventListener("mousemove",this.setVelocityWithMouse,!1)}menuReady(){this.canvas.addEventListener("keydown",t=>{77===t.keyCode&&(this.disableLaunchPad(),this.menu=new A(this)),80===t.keyCode&&(this.animating?this.animating=!1:(this.animating=!0,requestAnimationFrame(this.animate.bind(this))))},!1)}step(t){this.moveObjects(t),this.vp.moveWithBall(this.ball.interpolateX,this.ball.interpolateY,this.ball),this.timedMessages.forEach(t=>{t.duration-=1}),this.timedMessages=this.timedMessages.filter(t=>t.duration>=0)}moveObjects(){let{playSpeed:t}=this;if(t.fractional){if(this.frameCount%t.num==0&&(this.ball.move(),!this.ball.checkRectangle(this.corners)))return void this.restartLevel()}else for(let e=1;e<=t.num;e++)if(this.ball.move(),!this.ball.checkRectangle(this.corners))return void this.restartLevel()}animate(t){const e=t-this.lastTime;this.step(e),this.draw(),this.lastTime=t,this.frameCount+=1,this.animating&&requestAnimationFrame(this.animate.bind(this))}draw(){let{ctx:t,ball:e,vp:s,launchPad:i,hole:h}=this;if(t.width=1200,t.height=600,t.fillStyle="black",t.strokeStyle="black",t.clearRect(0,0,1200,600),this.stars)for(let e=Math.floor(s.x1/1e3);e<=Math.ceil(s.x2/1e3);e++)for(let i=Math.floor(s.y1/1e3);i<=Math.ceil(s.y2/1e3);i++)this.stars.getBlock(e,i)||this.stars.generateBlock(e,i),this.stars.drawBlock(t,e,i,s);h.drawFlag(t,h.x-s.x1,h.y-s.y1),e.draw(t),h.drawHole(t,h.x-s.x1,h.y-s.y1),this.obstacles.forEach(e=>e.draw(t,s)),this.planets.forEach(e=>e.draw(t,e.x-s.x1,e.y-s.y1)),this.timedMessages.forEach(e=>{e.draw(t)}),i&&i.draw(t),this.won&&this.victoryMessage(),t.beginPath(),t.fillStyle="#3e78ad",t.font="14px Arial",t.fillText(`Velocity_x=${this.ball.vx.toFixed(0)}, Velocity_y=${this.ball.vy.toFixed(0)},\n        speed = ${Math.sqrt(this.ball.vx**2+this.ball.vy**2).toFixed(0)}`,20,550),t.fill(),t.font="16px Arial",t.fillStyle="white",t.fillText(`Level ${this.currentLevelNumber}`,20,580),this.menu&&this.menu.draw(t)}};document.addEventListener("DOMContentLoaded",t=>{(new C).initiateLevel()})}]);
//# sourceMappingURL=main.js.map
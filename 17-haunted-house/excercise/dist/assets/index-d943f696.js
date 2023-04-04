(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gr="148",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uo=0,Pr=1,Bo=2,eo=1,to=2,Mi=3,Sn=0,Dt=1,_r=2,Fi=3,sn=0,ei=1,Rr=2,Ir=3,Fr=4,ko=5,Kn=100,Go=101,Vo=102,Nr=103,zr=104,Ho=200,Wo=201,Xo=202,Yo=203,no=204,io=205,qo=206,$o=207,jo=208,Zo=209,Ko=210,Jo=0,Qo=1,el=2,or=3,tl=4,nl=5,il=6,sl=7,so=0,rl=1,al=2,Jt=0,ol=1,ll=2,cl=3,hl=4,ul=5,ro=300,ni=301,ii=302,lr=303,cr=304,ss=306,Ot=1e3,Ft=1001,hr=1002,dt=1003,Or=1004,ws=1005,Ct=1006,dl=1007,Si=1008,wn=1009,fl=1010,pl=1011,ao=1012,ml=1013,vn=1014,Mn=1015,wi=1016,gl=1017,_l=1018,ti=1020,xl=1021,vl=1022,Nt=1023,Ml=1024,bl=1025,bn=1026,si=1027,yl=1028,Sl=1029,wl=1030,El=1031,Al=1033,Es=33776,As=33777,Ts=33778,Cs=33779,Ur=35840,Br=35841,kr=35842,Gr=35843,Tl=36196,Vr=37492,Hr=37496,Wr=37808,Xr=37809,Yr=37810,qr=37811,$r=37812,jr=37813,Zr=37814,Kr=37815,Jr=37816,Qr=37817,ea=37818,ta=37819,na=37820,ia=37821,sa=36492,En=3e3,Ue=3001,Cl=3200,Ll=3201,oo=0,Dl=1,kt="srgb",Ei="srgb-linear",Ls=7680,Pl=519,ra=35044,aa="300 es",ur=1035;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,dr=180/Math.PI;function Di(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[a&255]+ot[a>>8&255]+ot[a>>16&255]+ot[a>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function mt(a,e,t){return Math.max(e,Math.min(t,a))}function Rl(a,e){return(a%e+e)%e}function Ps(a,e,t){return(1-t)*a+t*e}function oa(a){return(a&a-1)===0&&a!==0}function fr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function bt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],x=n[8],p=i[0],d=i[3],g=i[6],S=i[1],b=i[4],E=i[7],M=i[2],C=i[5],z=i[8];return s[0]=o*p+r*S+c*M,s[3]=o*d+r*b+c*C,s[6]=o*g+r*E+c*z,s[1]=l*p+h*S+u*M,s[4]=l*d+h*b+u*C,s[7]=l*g+h*E+u*z,s[2]=f*p+m*S+x*M,s[5]=f*d+m*b+x*C,s[8]=f*g+m*E+x*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*r*l-n*s*h+n*r*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],u=h*o-r*l,f=r*c-h*s,m=l*s-o*c,x=t*u+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=u*p,e[1]=(i*l-h*n)*p,e[2]=(r*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-r*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*r)+o+e,-i*l,i*c,-i*(-l*o+c*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new wt;function lo(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ai(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function yn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ns(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Is={[kt]:{[Ei]:yn},[Ei]:{[kt]:ns}},ht={legacyMode:!0,get workingColorSpace(){return Ei},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Is[e]&&Is[e][t]!==void 0){const n=Is[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Pt={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Fs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Oi(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Rl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fs(o,s,e+1/3),this.g=Fs(o,s,e),this.b=Fs(o,s,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ht.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ht.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kt){const n=co[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ht.fromWorkingColorSpace(Oi(this,Ke),e),mt(Ke.r*255,0,255)<<16^mt(Ke.g*255,0,255)<<8^mt(Ke.b*255,0,255)<<0}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Oi(this,Ke),t);const n=Ke.r,i=Ke.g,s=Ke.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const u=o-r;switch(l=h<=.5?u/(o+r):u/(2-o-r),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Oi(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=kt){return ht.fromWorkingColorSpace(Oi(this,Ke),e),e!==kt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(zi);const n=Ps(Pt.h,zi.h,t),i=Ps(Pt.s,zi.s,t),s=Ps(Pt.l,zi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=co;let On;class ho{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=Ai("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ai("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uo{constructor(e=null){this.isSource=!0,this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Ns(i[o].image)):s.push(Ns(i[o]))}else s=Ns(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ns(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ho.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Il=0;class _t extends Ln{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Ft,i=Ft,s=Ct,o=Si,r=Nt,c=wn,l=_t.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Di(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ot:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ot:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=ro;_t.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,t=0,n=0,i=1){ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],x=c[9],p=c[2],d=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(m+1)/2,M=(g+1)/2,C=(h+f)/4,z=(u+p)/4,_=(x+d)/4;return b>E&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=z/n):E>M?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=C/i,s=_/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=z/s,i=_/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-x)*(d-x)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(d-x)/S,this.y=(u-p)/S,this.z=(f-h)/S,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends Ln{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new _t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],x=s[o+2],p=s[o+3];if(r===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(u!==p||c!==f||l!==m||h!==x){let d=1-r;const g=c*f+l*m+h*x+u*p,S=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const M=Math.sqrt(b),C=Math.atan2(M,g*S);d=Math.sin(d*C)/M,r=Math.sin(r*C)/M}const E=r*S;if(c=c*d+f*E,l=l*d+m*E,h=h*d+x*E,u=u*d+p*E,d===1-r){const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=r*x+h*u+c*m-l*f,e[t+1]=c*x+h*f+l*u-r*m,e[t+2]=l*x+h*m+r*f-c*u,e[t+3]=h*x-r*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),u=r(s/2),f=c(n/2),m=c(i/2),x=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"YZX":this._x=f*h*u+l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u-f*m*x;break;case"XZY":this._x=f*h*u-l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+r+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*r+i*l-s*c,this._y=i*h+o*c+s*r-n*l,this._z=s*h+o*l+n*c-i*r,this._w=o*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(la.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(la.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,c=e.w,l=c*t+o*i-r*n,h=c*n+r*t-s*i,u=c*i+s*n-o*t,f=-s*t-o*n-r*i;return this.x=l*c+f*-s+h*-r-u*-o,this.y=h*c+f*-o+u*-s-l*-r,this.z=u*c+f*-r+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,c=t.z;return this.x=i*c-s*r,this.y=s*o-n*c,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new D,la=new Tn;class Pi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],f=e[c+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox),Os.applyMatrix4(e.matrixWorld),this.union(Os);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),Ui.subVectors(this.max,di),Un.subVectors(e.a,di),Bn.subVectors(e.b,di),kn.subVectors(e.c,di),Qt.subVectors(Bn,Un),en.subVectors(kn,Bn),pn.subVectors(Un,kn);let t=[0,-Qt.z,Qt.y,0,-en.z,en.y,0,-pn.z,pn.y,Qt.z,0,-Qt.x,en.z,0,-en.x,pn.z,0,-pn.x,-Qt.y,Qt.x,0,-en.y,en.x,0,-pn.y,pn.x,0];return!Us(t,Un,Bn,kn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,Un,Bn,kn,Ui))?!1:(Bi.crossVectors(Qt,en),t=[Bi.x,Bi.y,Bi.z],Us(t,Un,Bn,kn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,Os=new Pi,Un=new D,Bn=new D,kn=new D,Qt=new D,en=new D,pn=new D,di=new D,Ui=new D,Bi=new D,mn=new D;function Us(a,e,t,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){mn.fromArray(a,s);const r=i.x*Math.abs(mn.x)+i.y*Math.abs(mn.y)+i.z*Math.abs(mn.z),c=e.dot(mn),l=t.dot(mn),h=n.dot(mn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Nl=new Pi,fi=new D,Bs=new D;class rs{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(Bs)),this.expandByPoint(fi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new D,ks=new D,ki=new D,tn=new D,Gs=new D,Gi=new D,Vs=new D;class po{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ks.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ki),r=tn.dot(this.direction),c=-tn.dot(ki),l=tn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,x;if(h>0)if(u=o*c-r,f=o*r-c,x=s*h,u>=0)if(f>=-x)if(f<=x){const p=1/h;u*=p,f*=p,m=u*(u+o*f+2*r)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*s+r)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(o*s+r)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ki).multiplyScalar(f).add(ks),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,c=n+o;return r<0&&c<0?null:r<0?this.at(c,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(r=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,s){Gs.subVectors(t,e),Gi.subVectors(n,e),Vs.crossVectors(Gs,Gi);let o=this.direction.dot(Vs),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;tn.subVectors(this.origin,e);const c=r*this.direction.dot(Gi.crossVectors(tn,Gi));if(c<0)return null;const l=r*this.direction.dot(Gs.cross(tn));if(l<0||c+l>o)return null;const h=-r*tn.dot(Vs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,c,l,h,u,f,m,x,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=r,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=m,g[7]=x,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),o=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,x=r*h,p=r*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=f-p*l,t[9]=-r*c,t[2]=p-f*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*u,x=l*h,p=l*u;t[0]=f+p*r,t[4]=x*r-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-r,t[2]=m*r-x,t[6]=p+f*r,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*u,x=l*h,p=l*u;t[0]=f-p*r,t[4]=-o*u,t[8]=x+m*r,t[1]=m+x*r,t[5]=o*h,t[9]=p-f*r,t[2]=-o*l,t[6]=r,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*u,x=r*h,p=r*u;t[0]=c*h,t[4]=x*l-m,t[8]=f*l+p,t[1]=c*u,t[5]=p*l+f,t[9]=m*l-x,t[2]=-l,t[6]=r*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,x=r*c,p=r*l;t[0]=c*h,t[4]=p-f*u,t[8]=x*u+m,t[1]=u,t[5]=o*h,t[9]=-r*h,t[2]=-l*h,t[6]=m*u+x,t[10]=f-p*u}else if(e.order==="XZY"){const f=o*c,m=o*l,x=r*c,p=r*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+p,t[5]=o*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=r*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zl,e,Ol)}lookAt(e,t,n){const i=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),nn.crossVectors(n,yt),nn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),nn.crossVectors(n,yt)),nn.normalize(),Vi.crossVectors(yt,nn),i[0]=nn.x,i[4]=Vi.x,i[8]=yt.x,i[1]=nn.y,i[5]=Vi.y,i[9]=yt.y,i[2]=nn.z,i[6]=Vi.z,i[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],x=n[2],p=n[6],d=n[10],g=n[14],S=n[3],b=n[7],E=n[11],M=n[15],C=i[0],z=i[4],_=i[8],T=i[12],R=i[1],W=i[5],$=i[9],F=i[13],P=i[2],V=i[6],j=i[10],Z=i[14],q=i[3],ne=i[7],Q=i[11],U=i[15];return s[0]=o*C+r*R+c*P+l*q,s[4]=o*z+r*W+c*V+l*ne,s[8]=o*_+r*$+c*j+l*Q,s[12]=o*T+r*F+c*Z+l*U,s[1]=h*C+u*R+f*P+m*q,s[5]=h*z+u*W+f*V+m*ne,s[9]=h*_+u*$+f*j+m*Q,s[13]=h*T+u*F+f*Z+m*U,s[2]=x*C+p*R+d*P+g*q,s[6]=x*z+p*W+d*V+g*ne,s[10]=x*_+p*$+d*j+g*Q,s[14]=x*T+p*F+d*Z+g*U,s[3]=S*C+b*R+E*P+M*q,s[7]=S*z+b*W+E*V+M*ne,s[11]=S*_+b*$+E*j+M*Q,s[15]=S*T+b*F+E*Z+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],p=e[7],d=e[11],g=e[15];return x*(+s*c*u-i*l*u-s*r*f+n*l*f+i*r*m-n*c*m)+p*(+t*c*m-t*l*f+s*o*f-i*o*m+i*l*h-s*c*h)+d*(+t*l*u-t*r*m-s*o*u+n*o*m+s*r*h-n*l*h)+g*(-i*r*h-t*c*u+t*r*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],p=e[13],d=e[14],g=e[15],S=u*d*l-p*f*l+p*c*m-r*d*m-u*c*g+r*f*g,b=x*f*l-h*d*l-x*c*m+o*d*m+h*c*g-o*f*g,E=h*p*l-x*u*l+x*r*m-o*p*m-h*r*g+o*u*g,M=x*u*c-h*p*c-x*r*f+o*p*f+h*r*d-o*u*d,C=t*S+n*b+i*E+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/C;return e[0]=S*z,e[1]=(p*f*s-u*d*s-p*i*m+n*d*m+u*i*g-n*f*g)*z,e[2]=(r*d*s-p*c*s+p*i*l-n*d*l-r*i*g+n*c*g)*z,e[3]=(u*c*s-r*f*s-u*i*l+n*f*l+r*i*m-n*c*m)*z,e[4]=b*z,e[5]=(h*d*s-x*f*s+x*i*m-t*d*m-h*i*g+t*f*g)*z,e[6]=(x*c*s-o*d*s-x*i*l+t*d*l+o*i*g-t*c*g)*z,e[7]=(o*f*s-h*c*s+h*i*l-t*f*l-o*i*m+t*c*m)*z,e[8]=E*z,e[9]=(x*u*s-h*p*s-x*n*m+t*p*m+h*n*g-t*u*g)*z,e[10]=(o*p*s-x*r*s+x*n*l-t*p*l-o*n*g+t*r*g)*z,e[11]=(h*r*s-o*u*s-h*n*l+t*u*l+o*n*m-t*r*m)*z,e[12]=M*z,e[13]=(h*p*i-x*u*i+x*n*f-t*p*f-h*n*d+t*u*d)*z,e[14]=(x*r*i-o*p*i-x*n*c+t*p*c+o*n*d-t*r*d)*z,e[15]=(o*u*i-h*r*i+h*n*c-t*u*c-o*n*f+t*r*f)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,c=e.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*o,0,l*c-i*r,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,c=t._w,l=s+s,h=o+o,u=r+r,f=s*l,m=s*h,x=s*u,p=o*h,d=o*u,g=r*u,S=c*l,b=c*h,E=c*u,M=n.x,C=n.y,z=n.z;return i[0]=(1-(p+g))*M,i[1]=(m+E)*M,i[2]=(x-b)*M,i[3]=0,i[4]=(m-E)*C,i[5]=(1-(f+g))*C,i[6]=(d+S)*C,i[7]=0,i[8]=(x+b)*z,i[9]=(d-S)*z,i[10]=(1-(f+p))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gn.set(i[0],i[1],i[2]).length();const o=Gn.set(i[4],i[5],i[6]).length(),r=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rt.copy(this);const l=1/s,h=1/o,u=1/r;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=h,Rt.elements[5]*=h,Rt.elements[6]*=h,Rt.elements[8]*=u,Rt.elements[9]*=u,Rt.elements[10]*=u,t.setFromRotationMatrix(Rt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=c,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),u=(t+e)*c,f=(n+i)*l,m=(o+s)*h;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gn=new D,Rt=new We,zl=new D(0,0,0),Ol=new D(1,1,1),nn=new D,Vi=new D,yt=new D,ca=new We,ha=new Tn;class Ri{constructor(e=0,t=0,n=0,i=Ri.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ha.setFromEuler(this),this.setFromQuaternion(ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ri.DefaultOrder="XYZ";Ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ul=0;const ua=new D,Vn=new Tn,$t=new We,Hi=new D,pi=new D,Bl=new D,kl=new Tn,da=new D(1,0,0),fa=new D(0,1,0),pa=new D(0,0,1),Gl={type:"added"},ma={type:"removed"};class Je extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DefaultUp.clone();const e=new D,t=new Ri,n=new Tn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new wt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DefaultMatrixWorldAutoUpdate,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ua.copy(e).applyQuaternion(this.quaternion),this.position.add(ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(pi,Hi,this.up):$t.lookAt(Hi,pi,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix($t),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ma)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ma)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Bl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,kl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(e.materials,this.material[c]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(e.animations,c))}}if(t){const r=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DefaultUp=new D(0,1,0);Je.DefaultMatrixAutoUpdate=!0;Je.DefaultMatrixWorldAutoUpdate=!0;const It=new D,jt=new D,Hs=new D,Zt=new D,Hn=new D,Wn=new D,ga=new D,Ws=new D,Xs=new D,Ys=new D;class Kt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){It.subVectors(i,t),jt.subVectors(n,t),Hs.subVectors(e,t);const o=It.dot(It),r=It.dot(jt),c=It.dot(Hs),l=jt.dot(jt),h=jt.dot(Hs),u=o*l-r*r;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(l*c-r*h)*f,x=(o*h-r*c)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,i,s,o,r,c){return this.getBarycoord(e,t,n,i,Zt),c.set(0,0),c.addScaledVector(s,Zt.x),c.addScaledVector(o,Zt.y),c.addScaledVector(r,Zt.z),c}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),jt.subVectors(e,t),It.cross(jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),It.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Kt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;Hn.subVectors(i,n),Wn.subVectors(s,n),Ws.subVectors(e,n);const c=Hn.dot(Ws),l=Wn.dot(Ws);if(c<=0&&l<=0)return t.copy(n);Xs.subVectors(e,i);const h=Hn.dot(Xs),u=Wn.dot(Xs);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Hn,o);Ys.subVectors(e,s);const m=Hn.dot(Ys),x=Wn.dot(Ys);if(x>=0&&m<=x)return t.copy(s);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return r=l/(l-x),t.copy(n).addScaledVector(Wn,r);const d=h*x-m*u;if(d<=0&&u-h>=0&&m-x>=0)return ga.subVectors(s,i),r=(u-h)/(u-h+(m-x)),t.copy(i).addScaledVector(ga,r);const g=1/(d+p+f);return o=p*g,r=f*g,t.copy(n).addScaledVector(Hn,o).addScaledVector(Wn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vl=0;class oi extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ei,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const c=s[r];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class go extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new D,Wi=new be;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _o extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hl=0;const Tt=new We,qs=new Je,Xn=new D,St=new Pi,mi=new Pi,st=new D;class Ut extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lo(e)?xo:_o)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,n){return Tt.makeTranslation(e,t,n),this.applyMatrix4(Tt),this}scale(e,t,n){return Tt.makeScale(e,t,n),this.applyMatrix4(Tt),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(St.min,mi.min),St.expandByPoint(st),st.addVectors(St.max,mi.max),St.expandByPoint(st)):(St.expandByPoint(mi.min),St.expandByPoint(mi.max))}St.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)st.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(st));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)st.fromBufferAttribute(r,l),c&&(Xn.fromBufferAttribute(e,l),st.add(Xn)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new D,h[R]=new D;const u=new D,f=new D,m=new D,x=new be,p=new be,d=new be,g=new D,S=new D;function b(R,W,$){u.fromArray(i,R*3),f.fromArray(i,W*3),m.fromArray(i,$*3),x.fromArray(o,R*2),p.fromArray(o,W*2),d.fromArray(o,$*2),f.sub(u),m.sub(u),p.sub(x),d.sub(x);const F=1/(p.x*d.y-d.x*p.y);isFinite(F)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(F),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(F),l[R].add(g),l[W].add(g),l[$].add(g),h[R].add(S),h[W].add(S),h[$].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let R=0,W=E.length;R<W;++R){const $=E[R],F=$.start,P=$.count;for(let V=F,j=F+P;V<j;V+=3)b(n[V+0],n[V+1],n[V+2])}const M=new D,C=new D,z=new D,_=new D;function T(R){z.fromArray(s,R*3),_.copy(z);const W=l[R];M.copy(W),M.sub(z.multiplyScalar(z.dot(W))).normalize(),C.crossVectors(_,W);const F=C.dot(h[R])<0?-1:1;c[R*4]=M.x,c[R*4+1]=M.y,c[R*4+2]=M.z,c[R*4+3]=F}for(let R=0,W=E.length;R<W;++R){const $=E[R],F=$.start,P=$.count;for(let V=F,j=F+P;V<j;V+=3)T(n[V+0]),T(n[V+1]),T(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,o=new D,r=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),r.add(h),c.add(h),l.add(h),n.setXYZ(x,r.x,r.y,r.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(r,c){const l=r.array,h=r.itemSize,u=r.normalized,f=new l.constructor(c.length*h);let m=0,x=0;for(let p=0,d=c.length;p<d;p++){r.isInterleavedBufferAttribute?m=c[p]*r.data.stride+r.offset:m=c[p]*h;for(let g=0;g<h;g++)f[x++]=l[m++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=e(c,n);t.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[r]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new We,Yn=new po,$s=new rs,gi=new D,_i=new D,xi=new D,js=new D,Xi=new D,Yi=new be,qi=new be,$i=new be,Zs=new D,ji=new D;class rt extends Je{constructor(e=new Ut,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){Xi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=r[c],u=s[c];h!==0&&(js.fromBufferAttribute(u,e),o?Xi.addScaledVector(js,h):Xi.addScaledVector(js.sub(t),h))}t.add(Xi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),e.ray.intersectsSphere($s)===!1)||(_a.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(_a),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,x=u.length;m<x;m++){const p=u[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(r.count,Math.min(p.start+p.count,f.start+f.count));for(let b=g,E=S;b<E;b+=3){const M=r.getX(b),C=r.getX(b+1),z=r.getX(b+2);o=Zi(this,d,e,Yn,l,h,M,C,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(r.count,f.start+f.count);for(let p=m,d=x;p<d;p+=3){const g=r.getX(p),S=r.getX(p+1),b=r.getX(p+2);o=Zi(this,i,e,Yn,l,h,g,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,x=u.length;m<x;m++){const p=u[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=g,E=S;b<E;b+=3){const M=b,C=b+1,z=b+2;o=Zi(this,d,e,Yn,l,h,M,C,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,d=x;p<d;p+=3){const g=p,S=p+1,b=p+2;o=Zi(this,i,e,Yn,l,h,g,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Wl(a,e,t,n,i,s,o,r){let c;if(e.side===Dt?c=n.intersectTriangle(o,s,i,!0,r):c=n.intersectTriangle(i,s,o,e.side===Sn,r),c===null)return null;ji.copy(r),ji.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(ji);return l<t.near||l>t.far?null:{distance:l,point:ji.clone(),object:a}}function Zi(a,e,t,n,i,s,o,r,c){a.getVertexPosition(o,gi),a.getVertexPosition(r,_i),a.getVertexPosition(c,xi);const l=Wl(a,e,t,n,gi,_i,xi,Zs);if(l){i&&(Yi.fromBufferAttribute(i,o),qi.fromBufferAttribute(i,r),$i.fromBufferAttribute(i,c),l.uv=Kt.getUV(Zs,gi,_i,xi,Yi,qi,$i,new be)),s&&(Yi.fromBufferAttribute(s,o),qi.fromBufferAttribute(s,r),$i.fromBufferAttribute(s,c),l.uv2=Kt.getUV(Zs,gi,_i,xi,Yi,qi,$i,new be));const h={a:o,b:r,c,normal:new D,materialIndex:0};Kt.getNormal(gi,_i,xi,h.normal),l.face=h}return l}class Dn extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function x(p,d,g,S,b,E,M,C,z,_,T){const R=E/z,W=M/_,$=E/2,F=M/2,P=C/2,V=z+1,j=_+1;let Z=0,q=0;const ne=new D;for(let Q=0;Q<j;Q++){const U=Q*W-F;for(let H=0;H<V;H++){const J=H*R-$;ne[p]=J*S,ne[d]=U*b,ne[g]=P,l.push(ne.x,ne.y,ne.z),ne[p]=0,ne[d]=0,ne[g]=C>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(H/z),u.push(1-Q/_),Z+=1}}for(let Q=0;Q<_;Q++)for(let U=0;U<z;U++){const H=f+U+V*Q,J=f+U+V*(Q+1),te=f+(U+1)+V*(Q+1),re=f+(U+1)+V*Q;c.push(H,J,re),c.push(J,te,re),q+=6}r.addGroup(m,q,T),m+=q,f+=Z}}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ut(a){const e={};for(let t=0;t<a.length;t++){const n=ri(a[t]);for(const i in n)e[i]=n[i]}return e}function Xl(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function vo(a){return a.getRenderTarget()===null&&a.outputEncoding===Ue?kt:Ei}const Yl={clone:ri,merge:ut};var ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=Xl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xr extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gt extends xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,$n=1;class jl extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new gt(qn,$n,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new gt(qn,$n,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new gt(qn,$n,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new gt(qn,$n,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const c=new gt(qn,$n,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new gt(qn,$n,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Jt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mo extends _t{constructor(e,t,n,i,s,o,r,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ni,super(e,t,n,i,s,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zl extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dn(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:sn});s.uniforms.tEquirect.value=t;const o=new rt(i,s),r=t.minFilter;return t.minFilter===Si&&(t.minFilter=Ct),new jl(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ks=new D,Kl=new D,Jl=new wt;class gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ks.subVectors(n,t).cross(Kl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jl.getNormalMatrix(e),i=this.coplanarPoint(Ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new rs,Ki=new D;class vr{constructor(e=new gn,t=new gn,n=new gn,i=new gn,s=new gn,o=new gn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],m=n[9],x=n[10],p=n[11],d=n[12],g=n[13],S=n[14],b=n[15];return t[0].setComponents(r-i,u-c,p-f,b-d).normalize(),t[1].setComponents(r+i,u+c,p+f,b+d).normalize(),t[2].setComponents(r+s,u+l,p+m,b+g).normalize(),t[3].setComponents(r-s,u-l,p-m,b-g).normalize(),t[4].setComponents(r-o,u-h,p-x,b-S).normalize(),t[5].setComponents(r+o,u+h,p+x,b+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ki.x=i.normal.x>0?e.max.x:e.min.x,Ki.y=i.normal.y>0?e.max.y:e.min.y,Ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let a=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Ql(a,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(u instanceof Int16Array)x=5122;else if(u instanceof Uint32Array)x=5125;else if(u instanceof Int32Array)x=5124;else if(u instanceof Int8Array)x=5120;else if(u instanceof Uint8Array)x=5121;else if(u instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const f=h.array,m=h.updateRange;a.bindBuffer(u,l),m.count===-1?a.bufferSubData(u,0,f):(t?a.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:r,update:c}}class Ii extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,u=e/r,f=t/c,m=[],x=[],p=[],d=[];for(let g=0;g<h;g++){const S=g*f-o;for(let b=0;b<l;b++){const E=b*u-s;x.push(E,-S,0),p.push(0,0,1),d.push(b/r),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<r;S++){const b=S+l*g,E=S+l*(g+1),M=S+1+l*(g+1),C=S+1+l*g;m.push(b,E,C),m.push(E,M,C)}this.setIndex(m),this.setAttribute("position",new $e(x,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(d,2))}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var ec=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ic=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ac="vec3 transformed = vec3( position );",oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,cc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Mc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ac="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ic=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$c=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ch=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ph=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ih=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Fh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Oh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Wh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ru=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,au=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ou=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Su=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:ec,alphamap_pars_fragment:tc,alphatest_fragment:nc,alphatest_pars_fragment:ic,aomap_fragment:sc,aomap_pars_fragment:rc,begin_vertex:ac,beginnormal_vertex:oc,bsdfs:lc,iridescence_fragment:cc,bumpmap_pars_fragment:hc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:dc,clipping_planes_pars_vertex:fc,clipping_planes_vertex:pc,color_fragment:mc,color_pars_fragment:gc,color_pars_vertex:_c,color_vertex:xc,common:vc,cube_uv_reflection_fragment:Mc,defaultnormal_vertex:bc,displacementmap_pars_vertex:yc,displacementmap_vertex:Sc,emissivemap_fragment:wc,emissivemap_pars_fragment:Ec,encodings_fragment:Ac,encodings_pars_fragment:Tc,envmap_fragment:Cc,envmap_common_pars_fragment:Lc,envmap_pars_fragment:Dc,envmap_pars_vertex:Pc,envmap_physical_pars_fragment:Hc,envmap_vertex:Rc,fog_vertex:Ic,fog_pars_vertex:Fc,fog_fragment:Nc,fog_pars_fragment:zc,gradientmap_pars_fragment:Oc,lightmap_fragment:Uc,lightmap_pars_fragment:Bc,lights_lambert_fragment:kc,lights_lambert_pars_fragment:Gc,lights_pars_begin:Vc,lights_toon_fragment:Wc,lights_toon_pars_fragment:Xc,lights_phong_fragment:Yc,lights_phong_pars_fragment:qc,lights_physical_fragment:$c,lights_physical_pars_fragment:jc,lights_fragment_begin:Zc,lights_fragment_maps:Kc,lights_fragment_end:Jc,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:eh,logdepthbuf_pars_vertex:th,logdepthbuf_vertex:nh,map_fragment:ih,map_pars_fragment:sh,map_particle_fragment:rh,map_particle_pars_fragment:ah,metalnessmap_fragment:oh,metalnessmap_pars_fragment:lh,morphcolor_vertex:ch,morphnormal_vertex:hh,morphtarget_pars_vertex:uh,morphtarget_vertex:dh,normal_fragment_begin:fh,normal_fragment_maps:ph,normal_pars_fragment:mh,normal_pars_vertex:gh,normal_vertex:_h,normalmap_pars_fragment:xh,clearcoat_normal_fragment_begin:vh,clearcoat_normal_fragment_maps:Mh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:yh,output_fragment:Sh,packing:wh,premultiplied_alpha_fragment:Eh,project_vertex:Ah,dithering_fragment:Th,dithering_pars_fragment:Ch,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:Rh,shadowmap_vertex:Ih,shadowmask_pars_fragment:Fh,skinbase_vertex:Nh,skinning_pars_vertex:zh,skinning_vertex:Oh,skinnormal_vertex:Uh,specularmap_fragment:Bh,specularmap_pars_fragment:kh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Vh,transmission_fragment:Hh,transmission_pars_fragment:Wh,uv_pars_fragment:Xh,uv_pars_vertex:Yh,uv_vertex:qh,uv2_pars_fragment:$h,uv2_pars_vertex:jh,uv2_vertex:Zh,worldpos_vertex:Kh,background_vert:Jh,background_frag:Qh,backgroundCube_vert:eu,backgroundCube_frag:tu,cube_vert:nu,cube_frag:iu,depth_vert:su,depth_frag:ru,distanceRGBA_vert:au,distanceRGBA_frag:ou,equirect_vert:lu,equirect_frag:cu,linedashed_vert:hu,linedashed_frag:uu,meshbasic_vert:du,meshbasic_frag:fu,meshlambert_vert:pu,meshlambert_frag:mu,meshmatcap_vert:gu,meshmatcap_frag:_u,meshnormal_vert:xu,meshnormal_frag:vu,meshphong_vert:Mu,meshphong_frag:bu,meshphysical_vert:yu,meshphysical_frag:Su,meshtoon_vert:wu,meshtoon_frag:Eu,points_vert:Au,points_frag:Tu,shadow_vert:Cu,shadow_frag:Lu,sprite_vert:Du,sprite_frag:Pu},se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},Gt={basic:{uniforms:ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ut([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ut([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ut([se.points,se.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ut([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ut([se.common,se.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ut([se.sprite,se.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ut([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ut([se.lights,se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Gt.physical={uniforms:ut([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Ji={r:0,b:0,g:0};function Ru(a,e,t,n,i,s,o){const r=new Re(0);let c=s===!0?0:1,l,h,u=null,f=0,m=null;function x(d,g){let S=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b));const E=a.xr,M=E.getSession&&E.getSession();M&&M.environmentBlendMode==="additive"&&(b=null),b===null?p(r,c):b&&b.isColor&&(p(b,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ss)?(h===void 0&&(h=new rt(new Dn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ri(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,z,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=b.encoding!==Ue,(u!==b||f!==b.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=a.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new rt(new Ii(2,2),new Cn({name:"BackgroundMaterial",uniforms:ri(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=b.encoding!==Ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,m=a.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,g){d.getRGB(Ji,vo(a)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,g,o)}return{getClearColor:function(){return r},setClearColor:function(d,g=1){r.set(d),c=g,p(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(r,c)},render:x}}function Iu(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},c=d(null);let l=c,h=!1;function u(P,V,j,Z,q){let ne=!1;if(o){const Q=p(Z,j,V);l!==Q&&(l=Q,m(l.object)),ne=g(P,Z,j,q),ne&&S(P,Z,j,q)}else{const Q=V.wireframe===!0;(l.geometry!==Z.id||l.program!==j.id||l.wireframe!==Q)&&(l.geometry=Z.id,l.program=j.id,l.wireframe=Q,ne=!0)}q!==null&&t.update(q,34963),(ne||h)&&(h=!1,_(P,V,j,Z),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,V,j){const Z=j.wireframe===!0;let q=r[P.id];q===void 0&&(q={},r[P.id]=q);let ne=q[V.id];ne===void 0&&(ne={},q[V.id]=ne);let Q=ne[Z];return Q===void 0&&(Q=d(f()),ne[Z]=Q),Q}function d(P){const V=[],j=[],Z=[];for(let q=0;q<i;q++)V[q]=0,j[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:Z,object:P,attributes:{},index:null}}function g(P,V,j,Z){const q=l.attributes,ne=V.attributes;let Q=0;const U=j.getAttributes();for(const H in U)if(U[H].location>=0){const te=q[H];let re=ne[H];if(re===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Z}function S(P,V,j,Z){const q={},ne=V.attributes;let Q=0;const U=j.getAttributes();for(const H in U)if(U[H].location>=0){let te=ne[H];te===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),q[H]=re,Q++}l.attributes=q,l.attributesNum=Q,l.index=Z}function b(){const P=l.newAttributes;for(let V=0,j=P.length;V<j;V++)P[V]=0}function E(P){M(P,0)}function M(P,V){const j=l.newAttributes,Z=l.enabledAttributes,q=l.attributeDivisors;j[P]=1,Z[P]===0&&(a.enableVertexAttribArray(P),Z[P]=1),q[P]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),q[P]=V)}function C(){const P=l.newAttributes,V=l.enabledAttributes;for(let j=0,Z=V.length;j<Z;j++)V[j]!==P[j]&&(a.disableVertexAttribArray(j),V[j]=0)}function z(P,V,j,Z,q,ne){n.isWebGL2===!0&&(j===5124||j===5125)?a.vertexAttribIPointer(P,V,j,q,ne):a.vertexAttribPointer(P,V,j,Z,q,ne)}function _(P,V,j,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const q=Z.attributes,ne=j.getAttributes(),Q=V.defaultAttributeValues;for(const U in ne){const H=ne[U];if(H.location>=0){let J=q[U];if(J===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const te=J.normalized,re=J.itemSize,X=t.get(J);if(X===void 0)continue;const Ae=X.buffer,de=X.type,_e=X.bytesPerElement;if(J.isInterleavedBufferAttribute){const ue=J.data,Fe=ue.stride,ye=J.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)M(H.location+xe,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<H.locationSize;xe++)E(H.location+xe);a.bindBuffer(34962,Ae);for(let xe=0;xe<H.locationSize;xe++)z(H.location+xe,re/H.locationSize,de,te,Fe*_e,(ye+re/H.locationSize*xe)*_e)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)M(H.location+ue,J.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<H.locationSize;ue++)E(H.location+ue);a.bindBuffer(34962,Ae);for(let ue=0;ue<H.locationSize;ue++)z(H.location+ue,re/H.locationSize,de,te,re*_e,re/H.locationSize*ue*_e)}}else if(Q!==void 0){const te=Q[U];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(H.location,te);break;case 3:a.vertexAttrib3fv(H.location,te);break;case 4:a.vertexAttrib4fv(H.location,te);break;default:a.vertexAttrib1fv(H.location,te)}}}}C()}function T(){$();for(const P in r){const V=r[P];for(const j in V){const Z=V[j];for(const q in Z)x(Z[q].object),delete Z[q];delete V[j]}delete r[P]}}function R(P){if(r[P.id]===void 0)return;const V=r[P.id];for(const j in V){const Z=V[j];for(const q in Z)x(Z[q].object),delete Z[q];delete V[j]}delete r[P.id]}function W(P){for(const V in r){const j=r[V];if(j[P.id]===void 0)continue;const Z=j[P.id];for(const q in Z)x(Z[q].object),delete Z[q];delete j[P.id]}}function $(){F(),h=!0,l!==c&&(l=c,m(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:b,enableAttribute:E,disableUnusedAttributes:C}}function Fu(a,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){a.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=r,this.renderInstances=c}function Nu(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let r=t.precision!==void 0?t.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),x=a.getParameter(34076),p=a.getParameter(34921),d=a.getParameter(36347),g=a.getParameter(36348),S=a.getParameter(36349),b=f>0,E=o||e.has("OES_texture_float"),M=b&&E,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:C}}function zu(a){const e=this;let t=null,n=0,i=!1,s=!1;const o=new gn,r=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const x=u.length!==0||f||n!==0||i;return i=f,t=h(u,m,0),n=u.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,f,m){const x=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,g=a.get(u);if(!i||x===null||x.length===0||s&&!d)s?h(null):l();else{const S=s?0:n,b=S*4;let E=g.clippingState||null;c.value=E,E=h(x,f,b,m);for(let M=0;M!==b;++M)E[M]=t[M];g.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,x){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=c.value,x!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;r.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let b=0,E=m;b!==p;++b,E+=4)o.copy(u[b]).applyMatrix4(S,r),o.normal.toArray(d,E),d[E+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Ou(a){let e=new WeakMap;function t(o,r){return r===lr?o.mapping=ni:r===cr&&(o.mapping=ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===lr||r===cr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yo extends xr{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jn=4,xa=[.125,.215,.35,.446,.526,.582],xn=20,Js=new yo,va=new Re;let Qs=null;const _n=(1+Math.sqrt(5))/2,Zn=1/_n,Ma=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_n,Zn),new D(0,_n,-Zn),new D(Zn,0,_n),new D(-Zn,0,_n),new D(_n,Zn,0),new D(-_n,Zn,0)];class ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:wi,format:Nt,encoding:En,depthBuffer:!1},i=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(s)),this._blurMaterial=Bu(s,e,t)}return i}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i){const r=new gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(va),h.toneMapping=Jt,h.autoClear=!1;const m=new go({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),x=new rt(new Dn,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(va),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(r.up.set(0,c[g],0),r.lookAt(l[g],0,0)):S===1?(r.up.set(0,0,c[g]),r.lookAt(0,l[g],0)):(r.up.set(0,c[g],0),r.lookAt(0,0,l[g]));const b=this._cubeSize;Qi(i,S*b,g>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(x,r),h.render(e,r)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ni||e.mapping===ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const c=this._cubeSize;Qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ma[(i-1)%Ma.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),p=s/x,d=isFinite(s)?1+Math.floor(h*p):xn;d>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xn}`);const g=[];let S=0;for(let z=0;z<xn;++z){const _=z/p,T=Math.exp(-_*_/2);g.push(T),z===0?S+=T:z<d&&(S+=2*T)}for(let z=0;z<g.length;z++)g[z]=g[z]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:b}=this;f.dTheta.value=x,f.mipInt.value=b-n;const E=this._sizeLods[i],M=3*E*(i>b-Jn?i-b+Jn:0),C=4*(this._cubeSize-E);Qi(t,M,C,3*E,2*E),c.setRenderTarget(t),c.render(u,Js)}}function Uu(a){const e=[],t=[],n=[];let i=a;const s=a-Jn+1+xa.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let c=1/r;o>a-Jn?c=xa[o-a+Jn-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,p=3,d=2,g=1,S=new Float32Array(p*x*m),b=new Float32Array(d*x*m),E=new Float32Array(g*x*m);for(let C=0;C<m;C++){const z=C%3*2/3-1,_=C>2?0:-1,T=[z,_,0,z+2/3,_,0,z+2/3,_+1,0,z,_,0,z+2/3,_+1,0,z,_+1,0];S.set(T,p*x*C),b.set(f,d*x*C);const R=[C,C,C,C,C,C];E.set(R,g*x*C)}const M=new Ut;M.setAttribute("position",new Vt(S,p)),M.setAttribute("uv",new Vt(b,d)),M.setAttribute("faceIndex",new Vt(E,g)),e.push(M),i>Jn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(a,e,t){const n=new An(a,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Bu(a,e,t){const n=new Float32Array(xn),i=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Sa(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function wa(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ku(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===lr||c===cr,h=c===ni||c===ii;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=e.get(r);return t===null&&(t=new ba(a)),u=l?t.fromEquirectangular(r,u):t.fromCubemap(r,u),e.set(r,u),u.texture}else{if(e.has(r))return e.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new ba(a));const f=l?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gu(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vu(a,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const x in f)e.update(f[x],34962);const m=u.morphAttributes;for(const x in m){const p=m[x];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function l(u){const f=[],m=u.index,x=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let b=0,E=S.length;b<E;b+=3){const M=S[b+0],C=S[b+1],z=S[b+2];f.push(M,C,C,z,z,M)}}else{const S=x.array;p=x.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const M=b+0,C=b+1,z=b+2;f.push(M,C,C,z,z,M)}}const d=new(lo(f)?xo:_o)(f,1);d.version=p;const g=s.get(u);g&&e.remove(g),s.set(u,d)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:r,update:c,getWireframeAttribute:h}}function Hu(a,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let r,c;function l(f){r=f.type,c=f.bytesPerElement}function h(f,m){a.drawElements(s,m,r,f*c),t.update(m,s,1)}function u(f,m,x){if(x===0)return;let p,d;if(i)p=a,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,r,f*c,x),t.update(m,s,x)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Wu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xu(a,e){return a[0]-e[0]}function Yu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function qu(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ke,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,u,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(h);if(g===void 0||g.count!==d){let j=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var x=j;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),C===!0&&(R=3);let W=h.attributes.position.count*R,$=1;W>e.maxTextureSize&&($=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const F=new Float32Array(W*$*4*d),P=new fo(F,W,$,d);P.type=Mn,P.needsUpdate=!0;const V=R*4;for(let Z=0;Z<d;Z++){const q=z[Z],ne=_[Z],Q=T[Z],U=W*$*4*Z;for(let H=0;H<q.count;H++){const J=H*V;E===!0&&(o.fromBufferAttribute(q,H),F[U+J+0]=o.x,F[U+J+1]=o.y,F[U+J+2]=o.z,F[U+J+3]=0),M===!0&&(o.fromBufferAttribute(ne,H),F[U+J+4]=o.x,F[U+J+5]=o.y,F[U+J+6]=o.z,F[U+J+7]=0),C===!0&&(o.fromBufferAttribute(Q,H),F[U+J+8]=o.x,F[U+J+9]=o.y,F[U+J+10]=o.z,F[U+J+11]=Q.itemSize===4?o.w:1)}}g={count:d,texture:P,size:new be(W,$)},s.set(h,g),h.addEventListener("dispose",j)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const b=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[h.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[h.id]=d}for(let M=0;M<p;M++){const C=d[M];C[0]=M,C[1]=m[M]}d.sort(Yu);for(let M=0;M<8;M++)M<p&&d[M][1]?(r[M][0]=d[M][0],r[M][1]=d[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(Xu);const g=h.morphAttributes.position,S=h.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const C=r[M],z=C[0],_=C[1];z!==Number.MAX_SAFE_INTEGER&&_?(g&&h.getAttribute("morphTarget"+M)!==g[z]&&h.setAttribute("morphTarget"+M,g[z]),S&&h.getAttribute("morphNormal"+M)!==S[z]&&h.setAttribute("morphNormal"+M,S[z]),i[M]=_,b+=_):(g&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),S&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const E=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",E),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function $u(a,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const So=new _t,wo=new fo,Eo=new Fl,Ao=new Mo,Ea=[],Aa=[],Ta=new Float32Array(16),Ca=new Float32Array(9),La=new Float32Array(4);function li(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Ea[i];if(s===void 0&&(s=new Float32Array(i),Ea[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(s,r)}return s}function Qe(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function et(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function as(a,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function ju(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Zu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;a.uniform2fv(this.addr,e),et(t,e)}}function Ku(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;a.uniform3fv(this.addr,e),et(t,e)}}function Ju(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;a.uniform4fv(this.addr,e),et(t,e)}}function Qu(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;La.set(n),a.uniformMatrix2fv(this.addr,!1,La),et(t,n)}}function ed(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ca.set(n),a.uniformMatrix3fv(this.addr,!1,Ca),et(t,n)}}function td(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ta.set(n),a.uniformMatrix4fv(this.addr,!1,Ta),et(t,n)}}function nd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function id(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;a.uniform2iv(this.addr,e),et(t,e)}}function sd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;a.uniform3iv(this.addr,e),et(t,e)}}function rd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;a.uniform4iv(this.addr,e),et(t,e)}}function ad(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function od(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;a.uniform2uiv(this.addr,e),et(t,e)}}function ld(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;a.uniform3uiv(this.addr,e),et(t,e)}}function cd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;a.uniform4uiv(this.addr,e),et(t,e)}}function hd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||So,i)}function ud(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eo,i)}function dd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ao,i)}function fd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wo,i)}function pd(a){switch(a){case 5126:return ju;case 35664:return Zu;case 35665:return Ku;case 35666:return Ju;case 35674:return Qu;case 35675:return ed;case 35676:return td;case 5124:case 35670:return nd;case 35667:case 35671:return id;case 35668:case 35672:return sd;case 35669:case 35673:return rd;case 5125:return ad;case 36294:return od;case 36295:return ld;case 36296:return cd;case 35678:case 36198:case 36298:case 36306:case 35682:return hd;case 35679:case 36299:case 36307:return ud;case 35680:case 36300:case 36308:case 36293:return dd;case 36289:case 36303:case 36311:case 36292:return fd}}function md(a,e){a.uniform1fv(this.addr,e)}function gd(a,e){const t=li(e,this.size,2);a.uniform2fv(this.addr,t)}function _d(a,e){const t=li(e,this.size,3);a.uniform3fv(this.addr,t)}function xd(a,e){const t=li(e,this.size,4);a.uniform4fv(this.addr,t)}function vd(a,e){const t=li(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Md(a,e){const t=li(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function bd(a,e){const t=li(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yd(a,e){a.uniform1iv(this.addr,e)}function Sd(a,e){a.uniform2iv(this.addr,e)}function wd(a,e){a.uniform3iv(this.addr,e)}function Ed(a,e){a.uniform4iv(this.addr,e)}function Ad(a,e){a.uniform1uiv(this.addr,e)}function Td(a,e){a.uniform2uiv(this.addr,e)}function Cd(a,e){a.uniform3uiv(this.addr,e)}function Ld(a,e){a.uniform4uiv(this.addr,e)}function Dd(a,e,t){const n=this.cache,i=e.length,s=as(t,i);Qe(n,s)||(a.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||So,s[o])}function Pd(a,e,t){const n=this.cache,i=e.length,s=as(t,i);Qe(n,s)||(a.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eo,s[o])}function Rd(a,e,t){const n=this.cache,i=e.length,s=as(t,i);Qe(n,s)||(a.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ao,s[o])}function Id(a,e,t){const n=this.cache,i=e.length,s=as(t,i);Qe(n,s)||(a.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wo,s[o])}function Fd(a){switch(a){case 5126:return md;case 35664:return gd;case 35665:return _d;case 35666:return xd;case 35674:return vd;case 35675:return Md;case 35676:return bd;case 5124:case 35670:return yd;case 35667:case 35671:return Sd;case 35668:case 35672:return wd;case 35669:case 35673:return Ed;case 5125:return Ad;case 36294:return Td;case 36295:return Cd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Id}}class Nd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pd(t.type)}}class zd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fd(t.type)}}class Od{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const er=/(\w+)(\])?(\[|\.)?/g;function Da(a,e){a.seq.push(e),a.map[e.id]=e}function Ud(a,e,t){const n=a.name,i=n.length;for(er.lastIndex=0;;){const s=er.exec(n),o=er.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===i){Da(t,l===void 0?new Nd(r,a,e):new zd(r,a,e));break}else{let u=t.map[r];u===void 0&&(u=new Od(r),Da(t,u)),t=u}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ud(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pa(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Bd=0;function kd(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Gd(a){switch(a){case En:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ra(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+kd(a.getShaderSource(e),o)}else return i}function Vd(a,e){const t=Gd(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hd(a,e){let t;switch(e){case ol:t="Linear";break;case ll:t="Reinhard";break;case cl:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wd(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bi).join(`
`)}function Xd(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yd(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function bi(a){return a!==""}function Ia(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fa(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qd=/^[ \t]*#include +<([\w\d./]+)>/gm;function pr(a){return a.replace(qd,$d)}function $d(a,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pr(t)}const jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(a){return a.replace(jd,Zd)}function Zd(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function za(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kd(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===to?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jd(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ni:case ii:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qd(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ii:e="ENVMAP_MODE_REFRACTION";break}return e}function ef(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case so:e="ENVMAP_BLENDING_MULTIPLY";break;case rl:e="ENVMAP_BLENDING_MIX";break;case al:e="ENVMAP_BLENDING_ADD";break}return e}function tf(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nf(a,e,t,n){const i=a.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const c=Kd(t),l=Jd(t),h=Qd(t),u=ef(t),f=tf(t),m=t.isWebGL2?"":Wd(t),x=Xd(s),p=i.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(bi).join(`
`),d.length>0&&(d+=`
`),g=[m,x].filter(bi).join(`
`),g.length>0&&(g+=`
`)):(d=[za(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),g=[m,za(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Hd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Vd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bi).join(`
`)),o=pr(o),o=Ia(o,t),o=Fa(o,t),r=pr(r),r=Ia(r,t),r=Fa(r,t),o=Na(o),r=Na(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=S+d+o,E=S+g+r,M=Pa(i,35633,b),C=Pa(i,35632,E);if(i.attachShader(p,M),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),W=i.getShaderInfoLog(C).trim();let $=!0,F=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const P=Ra(i,M,"vertex"),V=Ra(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+P+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||W==="")&&(F=!1);F&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:R,prefix:d},fragmentShader:{log:W,prefix:g}})}i.deleteShader(M),i.deleteShader(C);let z;this.getUniforms=function(){return z===void 0&&(z=new is(i,p)),z};let _;return this.getAttributes=function(){return _===void 0&&(_=Yd(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Bd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let sf=0;class rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new af(e),t.set(e,n)),n}}class af{constructor(e){this.id=sf++,this.code=e,this.usedTimes=0}}function of(a,e,t,n,i,s,o){const r=new mo,c=new rf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,T,R,W,$){const F=W.fog,P=$.geometry,V=_.isMeshStandardMaterial?W.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),Z=j&&j.mapping===ss?j.image.height:null,q=x[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ne=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=ne!==void 0?ne.length:0;let U=0;P.morphAttributes.position!==void 0&&(U=1),P.morphAttributes.normal!==void 0&&(U=2),P.morphAttributes.color!==void 0&&(U=3);let H,J,te,re;if(q){const Fe=Gt[q];H=Fe.vertexShader,J=Fe.fragmentShader}else H=_.vertexShader,J=_.fragmentShader,c.update(_),te=c.getVertexShaderID(_),re=c.getFragmentShaderID(_);const X=a.getRenderTarget(),Ae=_.alphaTest>0,de=_.clearcoat>0,_e=_.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:_.type,vertexShader:H,fragmentShader:J,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:En,map:!!_.map,matcap:!!_.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Dl,tangentSpaceNormalMap:_.normalMapType===oo,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ue,clearcoat:de,clearcoatMap:de&&!!_.clearcoatMap,clearcoatRoughnessMap:de&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!_.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!_.iridescenceMap,iridescenceThicknessMap:_e&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ei,alphaMap:!!_.alphaMap,alphaTest:Ae,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!P.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!F,useFog:_.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:U,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:Jt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_r,flipSided:_.side===Dt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(T,_),S(T,_),T.push(a.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.map&&r.enable(4),T.matcap&&r.enable(5),T.envMap&&r.enable(6),T.lightMap&&r.enable(7),T.aoMap&&r.enable(8),T.emissiveMap&&r.enable(9),T.bumpMap&&r.enable(10),T.normalMap&&r.enable(11),T.objectSpaceNormalMap&&r.enable(12),T.tangentSpaceNormalMap&&r.enable(13),T.clearcoat&&r.enable(14),T.clearcoatMap&&r.enable(15),T.clearcoatRoughnessMap&&r.enable(16),T.clearcoatNormalMap&&r.enable(17),T.iridescence&&r.enable(18),T.iridescenceMap&&r.enable(19),T.iridescenceThicknessMap&&r.enable(20),T.displacementMap&&r.enable(21),T.specularMap&&r.enable(22),T.roughnessMap&&r.enable(23),T.metalnessMap&&r.enable(24),T.gradientMap&&r.enable(25),T.alphaMap&&r.enable(26),T.alphaTest&&r.enable(27),T.vertexColors&&r.enable(28),T.vertexAlphas&&r.enable(29),T.vertexUvs&&r.enable(30),T.vertexTangents&&r.enable(31),T.uvsVertexOnly&&r.enable(32),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.physicallyCorrectLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.specularIntensityMap&&r.enable(15),T.specularColorMap&&r.enable(16),T.transmission&&r.enable(17),T.transmissionMap&&r.enable(18),T.thicknessMap&&r.enable(19),T.sheen&&r.enable(20),T.sheenColorMap&&r.enable(21),T.sheenRoughnessMap&&r.enable(22),T.decodeVideoTexture&&r.enable(23),T.opaque&&r.enable(24),_.push(r.mask)}function b(_){const T=x[_.type];let R;if(T){const W=Gt[T];R=Yl.clone(W.uniforms)}else R=_.uniforms;return R}function E(_,T){let R;for(let W=0,$=l.length;W<$;W++){const F=l[W];if(F.cacheKey===T){R=F,++R.usedTimes;break}}return R===void 0&&(R=new nf(a,T,_,s),l.push(R)),R}function M(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),_.destroy()}}function C(_){c.remove(_)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:C,programs:l,dispose:z}}function lf(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Oa(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ua(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,x,p,d){let g=a[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:p,group:d},a[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=p,g.group=d),e++,g}function r(u,f,m,x,p,d){const g=o(u,f,m,x,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function c(u,f,m,x,p,d){const g=o(u,f,m,x,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,f){t.length>1&&t.sort(u||cf),n.length>1&&n.sort(f||Oa),i.length>1&&i.sort(f||Oa)}function h(){for(let u=e,f=a.length;u<f;u++){const m=a[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function hf(){let a=new WeakMap;function e(n,i){const s=a.get(n);let o;return s===void 0?(o=new Ua,a.set(n,[o])):i>=s.length?(o=new Ua,s.push(o)):o=s[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function uf(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function df(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ff=0;function pf(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function mf(a,e){const t=new uf,n=df(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,o=new We,r=new We;function c(h,u){let f=0,m=0,x=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,d=0,g=0,S=0,b=0,E=0,M=0,C=0,z=0,_=0;h.sort(pf);const T=u!==!0?Math.PI:1;for(let W=0,$=h.length;W<$;W++){const F=h[W],P=F.color,V=F.intensity,j=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=P.r*V*T,m+=P.g*V*T,x+=P.b*V*T;else if(F.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(F.sh.coefficients[q],V);else if(F.isDirectionalLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const ne=F.shadow,Q=n.get(F);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=F.shadow.matrix,E++}i.directional[p]=q,p++}else if(F.isSpotLight){const q=t.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(P).multiplyScalar(V*T),q.distance=j,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,i.spot[g]=q;const ne=F.shadow;if(F.map&&(i.spotLightMap[z]=F.map,z++,ne.updateMatrices(F),F.castShadow&&_++),i.spotLightMatrix[g]=ne.matrix,F.castShadow){const Q=n.get(F);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.spotShadow[g]=Q,i.spotShadowMap[g]=Z,C++}g++}else if(F.isRectAreaLight){const q=t.get(F);q.color.copy(P).multiplyScalar(V),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=q,S++}else if(F.isPointLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity*T),q.distance=F.distance,q.decay=F.decay,F.castShadow){const ne=F.shadow,Q=n.get(F);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,Q.shadowCameraNear=ne.camera.near,Q.shadowCameraFar=ne.camera.far,i.pointShadow[d]=Q,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=F.shadow.matrix,M++}i.point[d]=q,d++}else if(F.isHemisphereLight){const q=t.get(F);q.skyColor.copy(F.color).multiplyScalar(V*T),q.groundColor.copy(F.groundColor).multiplyScalar(V*T),i.hemi[b]=q,b++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const R=i.hash;(R.directionalLength!==p||R.pointLength!==d||R.spotLength!==g||R.rectAreaLength!==S||R.hemiLength!==b||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==C||R.numSpotMaps!==z)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+z-_,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=_,R.directionalLength=p,R.pointLength=d,R.spotLength=g,R.rectAreaLength=S,R.hemiLength=b,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=C,R.numSpotMaps=z,i.version=ff++)}function l(h,u){let f=0,m=0,x=0,p=0,d=0;const g=u.matrixWorldInverse;for(let S=0,b=h.length;S<b;S++){const E=h[S];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(E.isSpotLight){const M=i.spot[x];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(E.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(E.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(E.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(g),d++}}}return{setup:c,setupView:l,state:i}}function Ba(a,e){const t=new mf(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function r(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function gf(a,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let c;return r===void 0?(c=new Ba(a,e),t.set(s,[c])):o>=r.length?(c=new Ba(a,e),r.push(c)):c=r[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class _f extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bf(a,e,t){let n=new vr;const i=new be,s=new be,o=new ke,r=new _f({depthPacking:Ll}),c=new xf,l={},h=t.maxTextureSize,u={0:Dt,1:Sn,2:_r},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:vf,fragmentShader:Mf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ut;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new rt(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo,this.render=function(E,M,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const z=a.getRenderTarget(),_=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),R=a.state;R.setBlending(sn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let W=0,$=E.length;W<$;W++){const F=E[W],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const V=P.getFrameExtents();if(i.multiply(V),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,P.mapSize.y=s.y)),P.map===null){const Z=this.type!==Mi?{minFilter:dt,magFilter:dt}:{};P.map=new An(i.x,i.y,Z),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const j=P.getViewportCount();for(let Z=0;Z<j;Z++){const q=P.getViewport(Z);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),R.viewport(o),P.updateMatrices(F,Z),n=P.getFrustum(),b(M,C,P.camera,F,this.type)}P.isPointLightShadow!==!0&&this.type===Mi&&g(P,C),P.needsUpdate=!1}d.needsUpdate=!1,a.setRenderTarget(z,_,T)};function g(E,M){const C=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(M,null,C,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(M,null,C,m,p,null)}function S(E,M,C,z,_,T){let R=null;const W=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(W!==void 0)R=W;else if(R=C.isPointLight===!0?c:r,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=R.uuid,F=M.uuid;let P=l[$];P===void 0&&(P={},l[$]=P);let V=P[F];V===void 0&&(V=R.clone(),P[F]=V),R=V}return R.visible=M.visible,R.wireframe=M.wireframe,T===Mi?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:u[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=z,R.farDistance=_),R}function b(E,M,C,z,_){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const W=e.update(E),$=E.material;if(Array.isArray($)){const F=W.groups;for(let P=0,V=F.length;P<V;P++){const j=F[P],Z=$[j.materialIndex];if(Z&&Z.visible){const q=S(E,Z,z,C.near,C.far,_);a.renderBufferDirect(C,null,W,q,E,j)}}}else if($.visible){const F=S(E,$,z,C.near,C.far,_);a.renderBufferDirect(C,null,W,F,E,null)}}const R=E.children;for(let W=0,$=R.length;W<$;W++)b(R[W],M,C,z,_)}}function yf(a,e,t){const n=t.isWebGL2;function i(){let L=!1;const k=new ke;let K=null;const ce=new ke(0,0,0,0);return{setMask:function(me){K!==me&&!L&&(a.colorMask(me,me,me,me),K=me)},setLocked:function(me){L=me},setClear:function(me,Ne,nt,at,cn){cn===!0&&(me*=at,Ne*=at,nt*=at),k.set(me,Ne,nt,at),ce.equals(k)===!1&&(a.clearColor(me,Ne,nt,at),ce.copy(k))},reset:function(){L=!1,K=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,k=null,K=null,ce=null;return{setTest:function(me){me?Ae(2929):de(2929)},setMask:function(me){k!==me&&!L&&(a.depthMask(me),k=me)},setFunc:function(me){if(K!==me){switch(me){case Jo:a.depthFunc(512);break;case Qo:a.depthFunc(519);break;case el:a.depthFunc(513);break;case or:a.depthFunc(515);break;case tl:a.depthFunc(514);break;case nl:a.depthFunc(518);break;case il:a.depthFunc(516);break;case sl:a.depthFunc(517);break;default:a.depthFunc(515)}K=me}},setLocked:function(me){L=me},setClear:function(me){ce!==me&&(a.clearDepth(me),ce=me)},reset:function(){L=!1,k=null,K=null,ce=null}}}function o(){let L=!1,k=null,K=null,ce=null,me=null,Ne=null,nt=null,at=null,cn=null;return{setTest:function(Be){L||(Be?Ae(2960):de(2960))},setMask:function(Be){k!==Be&&!L&&(a.stencilMask(Be),k=Be)},setFunc:function(Be,Wt,At){(K!==Be||ce!==Wt||me!==At)&&(a.stencilFunc(Be,Wt,At),K=Be,ce=Wt,me=At)},setOp:function(Be,Wt,At){(Ne!==Be||nt!==Wt||at!==At)&&(a.stencilOp(Be,Wt,At),Ne=Be,nt=Wt,at=At)},setLocked:function(Be){L=Be},setClear:function(Be){cn!==Be&&(a.clearStencil(Be),cn=Be)},reset:function(){L=!1,k=null,K=null,ce=null,me=null,Ne=null,nt=null,at=null,cn=null}}}const r=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let f={},m={},x=new WeakMap,p=[],d=null,g=!1,S=null,b=null,E=null,M=null,C=null,z=null,_=null,T=!1,R=null,W=null,$=null,F=null,P=null;const V=a.getParameter(35661);let j=!1,Z=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=Z>=2);let ne=null,Q={};const U=a.getParameter(3088),H=a.getParameter(2978),J=new ke().fromArray(U),te=new ke().fromArray(H);function re(L,k,K){const ce=new Uint8Array(4),me=a.createTexture();a.bindTexture(L,me),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let Ne=0;Ne<K;Ne++)a.texImage2D(k+Ne,0,6408,1,1,0,6408,5121,ce);return me}const X={};X[3553]=re(3553,3553,1),X[34067]=re(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(2929),c.setFunc(or),Ze(!1),lt(Pr),Ae(2884),tt(sn);function Ae(L){f[L]!==!0&&(a.enable(L),f[L]=!0)}function de(L){f[L]!==!1&&(a.disable(L),f[L]=!1)}function _e(L,k){return m[L]!==k?(a.bindFramebuffer(L,k),m[L]=k,n&&(L===36009&&(m[36160]=k),L===36160&&(m[36009]=k)),!0):!1}function ue(L,k){let K=p,ce=!1;if(L)if(K=x.get(k),K===void 0&&(K=[],x.set(k,K)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(K.length!==me.length||K[0]!==36064){for(let Ne=0,nt=me.length;Ne<nt;Ne++)K[Ne]=36064+Ne;K.length=me.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Fe(L){return d!==L?(a.useProgram(L),d=L,!0):!1}const ye={[Kn]:32774,[Go]:32778,[Vo]:32779};if(n)ye[Nr]=32775,ye[zr]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[Nr]=L.MIN_EXT,ye[zr]=L.MAX_EXT)}const xe={[Ho]:0,[Wo]:1,[Xo]:768,[no]:770,[Ko]:776,[jo]:774,[qo]:772,[Yo]:769,[io]:771,[Zo]:775,[$o]:773};function tt(L,k,K,ce,me,Ne,nt,at){if(L===sn){g===!0&&(de(3042),g=!1);return}if(g===!1&&(Ae(3042),g=!0),L!==ko){if(L!==S||at!==T){if((b!==Kn||C!==Kn)&&(a.blendEquation(32774),b=Kn,C=Kn),at)switch(L){case ei:a.blendFuncSeparate(1,771,1,771);break;case Rr:a.blendFunc(1,1);break;case Ir:a.blendFuncSeparate(0,769,0,1);break;case Fr:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ei:a.blendFuncSeparate(770,771,1,771);break;case Rr:a.blendFunc(770,1);break;case Ir:a.blendFuncSeparate(0,769,0,1);break;case Fr:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,M=null,z=null,_=null,S=L,T=at}return}me=me||k,Ne=Ne||K,nt=nt||ce,(k!==b||me!==C)&&(a.blendEquationSeparate(ye[k],ye[me]),b=k,C=me),(K!==E||ce!==M||Ne!==z||nt!==_)&&(a.blendFuncSeparate(xe[K],xe[ce],xe[Ne],xe[nt]),E=K,M=ce,z=Ne,_=nt),S=L,T=!1}function je(L,k){L.side===_r?de(2884):Ae(2884);let K=L.side===Dt;k&&(K=!K),Ze(K),L.blending===ei&&L.transparent===!1?tt(sn):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;l.setTest(ce),ce&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(32926):de(32926)}function Ze(L){R!==L&&(L?a.frontFace(2304):a.frontFace(2305),R=L)}function lt(L){L!==Uo?(Ae(2884),L!==W&&(L===Pr?a.cullFace(1029):L===Bo?a.cullFace(1028):a.cullFace(1032))):de(2884),W=L}function Ve(L){L!==$&&(j&&a.lineWidth(L),$=L)}function ze(L,k,K){L?(Ae(32823),(F!==k||P!==K)&&(a.polygonOffset(k,K),F=k,P=K)):de(32823)}function Et(L){L?Ae(3089):de(3089)}function pt(L){L===void 0&&(L=33984+V-1),ne!==L&&(a.activeTexture(L),ne=L)}function w(L,k,K){K===void 0&&(ne===null?K=33984+V-1:K=ne);let ce=Q[K];ce===void 0&&(ce={type:void 0,texture:void 0},Q[K]=ce),(ce.type!==L||ce.texture!==k)&&(ne!==K&&(a.activeTexture(K),ne=K),a.bindTexture(L,k||X[L]),ce.type=L,ce.texture=k)}function v(){const L=Q[ne];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){J.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function fe(L){te.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Te(L,k){let K=u.get(k);K===void 0&&(K=new WeakMap,u.set(k,K));let ce=K.get(L);ce===void 0&&(ce=a.getUniformBlockIndex(k,L.name),K.set(L,ce))}function Ce(L,k){const ce=u.get(k).get(L);h.get(k)!==ce&&(a.uniformBlockBinding(k,ce,L.__bindingPointIndex),h.set(k,ce))}function Oe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ne=null,Q={},m={},x=new WeakMap,p=[],d=null,g=!1,S=null,b=null,E=null,M=null,C=null,z=null,_=null,T=!1,R=null,W=null,$=null,F=null,P=null,J.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Ae,disable:de,bindFramebuffer:_e,drawBuffers:ue,useProgram:Fe,setBlending:tt,setMaterial:je,setFlipSided:Ze,setCullFace:lt,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:Et,activeTexture:pt,bindTexture:w,unbindTexture:v,compressedTexImage2D:B,compressedTexImage3D:ee,texImage2D:he,texImage3D:oe,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:I,texStorage3D:le,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:A,scissor:pe,viewport:fe,reset:Oe}}function Sf(a,e,t,n,i,s,o){const r=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,v){return g?new OffscreenCanvas(w,v):Ai("canvas")}function b(w,v,B,ee){let ie=1;if((w.width>ee||w.height>ee)&&(ie=ee/Math.max(w.width,w.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ae=v?fr:Math.floor,ve=ae(ie*w.width),A=ae(ie*w.height);p===void 0&&(p=S(ve,A));const I=B?S(ve,A):p;return I.width=ve,I.height=A,I.getContext("2d").drawImage(w,0,0,ve,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+A+")."),I}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return oa(w.width)&&oa(w.height)}function M(w){return r?!1:w.wrapS!==Ft||w.wrapT!==Ft||w.minFilter!==dt&&w.minFilter!==Ct}function C(w,v){return w.generateMipmaps&&v&&w.minFilter!==dt&&w.minFilter!==Ct}function z(w){a.generateMipmap(w)}function _(w,v,B,ee,ie=!1){if(r===!1)return v;if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae=v;return v===6403&&(B===5126&&(ae=33326),B===5131&&(ae=33325),B===5121&&(ae=33321)),v===33319&&(B===5126&&(ae=33328),B===5131&&(ae=33327),B===5121&&(ae=33323)),v===6408&&(B===5126&&(ae=34836),B===5131&&(ae=34842),B===5121&&(ae=ee===Ue&&ie===!1?35907:32856),B===32819&&(ae=32854),B===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(w,v,B){return C(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==dt&&w.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){return w===dt||w===Or||w===ws?9728:9729}function W(w){const v=w.target;v.removeEventListener("dispose",W),F(v),v.isVideoTexture&&x.delete(v)}function $(w){const v=w.target;v.removeEventListener("dispose",$),V(v)}function F(w){const v=n.get(w);if(v.__webglInit===void 0)return;const B=w.source,ee=d.get(B);if(ee){const ie=ee[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(w),Object.keys(ee).length===0&&d.delete(B)}n.remove(w)}function P(w){const v=n.get(w);a.deleteTexture(v.__webglTexture);const B=w.source,ee=d.get(B);delete ee[v.__cacheKey],o.memory.textures--}function V(w){const v=w.texture,B=n.get(w),ee=n.get(v);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)a.deleteFramebuffer(B.__webglFramebuffer[ie]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[ie]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,ae=v.length;ie<ae;ie++){const ve=n.get(v[ie]);ve.__webglTexture&&(a.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[ie])}n.remove(v),n.remove(w)}let j=0;function Z(){j=0}function q(){const w=j;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),j+=1,w}function ne(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function Q(w,v){const B=n.get(w);if(w.isVideoTexture&&Et(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,w,v);return}}t.bindTexture(3553,B.__webglTexture,33984+v)}function U(w,v){const B=n.get(w);if(w.version>0&&B.__version!==w.version){de(B,w,v);return}t.bindTexture(35866,B.__webglTexture,33984+v)}function H(w,v){const B=n.get(w);if(w.version>0&&B.__version!==w.version){de(B,w,v);return}t.bindTexture(32879,B.__webglTexture,33984+v)}function J(w,v){const B=n.get(w);if(w.version>0&&B.__version!==w.version){_e(B,w,v);return}t.bindTexture(34067,B.__webglTexture,33984+v)}const te={[Ot]:10497,[Ft]:33071,[hr]:33648},re={[dt]:9728,[Or]:9984,[ws]:9986,[Ct]:9729,[dl]:9985,[Si]:9987};function X(w,v,B){if(B?(a.texParameteri(w,10242,te[v.wrapS]),a.texParameteri(w,10243,te[v.wrapT]),(w===32879||w===35866)&&a.texParameteri(w,32882,te[v.wrapR]),a.texParameteri(w,10240,re[v.magFilter]),a.texParameteri(w,10241,re[v.minFilter])):(a.texParameteri(w,10242,33071),a.texParameteri(w,10243,33071),(w===32879||w===35866)&&a.texParameteri(w,32882,33071),(v.wrapS!==Ft||v.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(w,10240,R(v.magFilter)),a.texParameteri(w,10241,R(v.minFilter)),v.minFilter!==dt&&v.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===dt||v.minFilter!==ws&&v.minFilter!==Si||v.type===Mn&&e.has("OES_texture_float_linear")===!1||r===!1&&v.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(a.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ae(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",W));const ee=v.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const ae=ne(v);if(ae!==w.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[ae].usedTimes++;const ve=ie[w.__cacheKey];ve!==void 0&&(ie[w.__cacheKey].usedTimes--,ve.usedTimes===0&&P(v)),w.__cacheKey=ae,w.__webglTexture=ie[ae].texture}return B}function de(w,v,B){let ee=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=35866),v.isData3DTexture&&(ee=32879);const ie=Ae(w,v),ae=v.source;t.bindTexture(ee,w.__webglTexture,33984+B);const ve=n.get(ae);if(ae.version!==ve.__version||ie===!0){t.activeTexture(33984+B),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const A=M(v)&&E(v.image)===!1;let I=b(v.image,A,!1,h);I=pt(v,I);const le=E(I)||r,he=s.convert(v.format,v.encoding);let oe=s.convert(v.type),pe=_(v.internalFormat,he,oe,v.encoding,v.isVideoTexture);X(ee,v,le);let fe;const Te=v.mipmaps,Ce=r&&v.isVideoTexture!==!0,Oe=ve.__version===void 0||ie===!0,L=T(v,I,le);if(v.isDepthTexture)pe=6402,r?v.type===Mn?pe=36012:v.type===vn?pe=33190:v.type===ti?pe=35056:pe=33189:v.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===bn&&pe===6402&&v.type!==ao&&v.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=vn,oe=s.convert(v.type)),v.format===si&&pe===6402&&(pe=34041,v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ti,oe=s.convert(v.type))),Oe&&(Ce?t.texStorage2D(3553,1,pe,I.width,I.height):t.texImage2D(3553,0,pe,I.width,I.height,0,he,oe,null));else if(v.isDataTexture)if(Te.length>0&&le){Ce&&Oe&&t.texStorage2D(3553,L,pe,Te[0].width,Te[0].height);for(let k=0,K=Te.length;k<K;k++)fe=Te[k],Ce?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,he,oe,fe.data):t.texImage2D(3553,k,pe,fe.width,fe.height,0,he,oe,fe.data);v.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,L,pe,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,he,oe,I.data)):t.texImage2D(3553,0,pe,I.width,I.height,0,he,oe,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(35866,L,pe,Te[0].width,Te[0].height,I.depth);for(let k=0,K=Te.length;k<K;k++)fe=Te[k],v.format!==Nt?he!==null?Ce?t.compressedTexSubImage3D(35866,k,0,0,0,fe.width,fe.height,I.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,k,pe,fe.width,fe.height,I.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(35866,k,0,0,0,fe.width,fe.height,I.depth,he,oe,fe.data):t.texImage3D(35866,k,pe,fe.width,fe.height,I.depth,0,he,oe,fe.data)}else{Ce&&Oe&&t.texStorage2D(3553,L,pe,Te[0].width,Te[0].height);for(let k=0,K=Te.length;k<K;k++)fe=Te[k],v.format!==Nt?he!==null?Ce?t.compressedTexSubImage2D(3553,k,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,k,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,he,oe,fe.data):t.texImage2D(3553,k,pe,fe.width,fe.height,0,he,oe,fe.data)}else if(v.isDataArrayTexture)Ce?(Oe&&t.texStorage3D(35866,L,pe,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,he,oe,I.data)):t.texImage3D(35866,0,pe,I.width,I.height,I.depth,0,he,oe,I.data);else if(v.isData3DTexture)Ce?(Oe&&t.texStorage3D(32879,L,pe,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,he,oe,I.data)):t.texImage3D(32879,0,pe,I.width,I.height,I.depth,0,he,oe,I.data);else if(v.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(3553,L,pe,I.width,I.height);else{let k=I.width,K=I.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,pe,k,K,0,he,oe,null),k>>=1,K>>=1}}else if(Te.length>0&&le){Ce&&Oe&&t.texStorage2D(3553,L,pe,Te[0].width,Te[0].height);for(let k=0,K=Te.length;k<K;k++)fe=Te[k],Ce?t.texSubImage2D(3553,k,0,0,he,oe,fe):t.texImage2D(3553,k,pe,he,oe,fe);v.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,L,pe,I.width,I.height),t.texSubImage2D(3553,0,0,0,he,oe,I)):t.texImage2D(3553,0,pe,he,oe,I);C(v,le)&&z(ee),ve.__version=ae.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function _e(w,v,B){if(v.image.length!==6)return;const ee=Ae(w,v),ie=v.source;t.bindTexture(34067,w.__webglTexture,33984+B);const ae=n.get(ie);if(ie.version!==ae.__version||ee===!0){t.activeTexture(33984+B),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const ve=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,I=[];for(let k=0;k<6;k++)!ve&&!A?I[k]=b(v.image[k],!1,!0,l):I[k]=A?v.image[k].image:v.image[k],I[k]=pt(v,I[k]);const le=I[0],he=E(le)||r,oe=s.convert(v.format,v.encoding),pe=s.convert(v.type),fe=_(v.internalFormat,oe,pe,v.encoding),Te=r&&v.isVideoTexture!==!0,Ce=ae.__version===void 0||ee===!0;let Oe=T(v,le,he);X(34067,v,he);let L;if(ve){Te&&Ce&&t.texStorage2D(34067,Oe,fe,le.width,le.height);for(let k=0;k<6;k++){L=I[k].mipmaps;for(let K=0;K<L.length;K++){const ce=L[K];v.format!==Nt?oe!==null?Te?t.compressedTexSubImage2D(34069+k,K,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+k,K,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+k,K,0,0,ce.width,ce.height,oe,pe,ce.data):t.texImage2D(34069+k,K,fe,ce.width,ce.height,0,oe,pe,ce.data)}}}else{L=v.mipmaps,Te&&Ce&&(L.length>0&&Oe++,t.texStorage2D(34067,Oe,fe,I[0].width,I[0].height));for(let k=0;k<6;k++)if(A){Te?t.texSubImage2D(34069+k,0,0,0,I[k].width,I[k].height,oe,pe,I[k].data):t.texImage2D(34069+k,0,fe,I[k].width,I[k].height,0,oe,pe,I[k].data);for(let K=0;K<L.length;K++){const me=L[K].image[k].image;Te?t.texSubImage2D(34069+k,K+1,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(34069+k,K+1,fe,me.width,me.height,0,oe,pe,me.data)}}else{Te?t.texSubImage2D(34069+k,0,0,0,oe,pe,I[k]):t.texImage2D(34069+k,0,fe,oe,pe,I[k]);for(let K=0;K<L.length;K++){const ce=L[K];Te?t.texSubImage2D(34069+k,K+1,0,0,oe,pe,ce.image[k]):t.texImage2D(34069+k,K+1,fe,oe,pe,ce.image[k])}}}C(v,he)&&z(34067),ae.__version=ie.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ue(w,v,B,ee,ie){const ae=s.convert(B.format,B.encoding),ve=s.convert(B.type),A=_(B.internalFormat,ae,ve,B.encoding);n.get(v).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,A,v.width,v.height,v.depth,0,ae,ve,null):t.texImage2D(ie,0,A,v.width,v.height,0,ae,ve,null)),t.bindFramebuffer(36160,w),ze(v)?f.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(B).__webglTexture,0,Ve(v)):(ie===3553||ie>=34069&&ie<=34074)&&a.framebufferTexture2D(36160,ee,ie,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(w,v,B){if(a.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let ee=33189;if(B||ze(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Mn?ee=36012:ie.type===vn&&(ee=33190));const ae=Ve(v);ze(v)?f.renderbufferStorageMultisampleEXT(36161,ae,ee,v.width,v.height):a.renderbufferStorageMultisample(36161,ae,ee,v.width,v.height)}else a.renderbufferStorage(36161,ee,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Ve(v);B&&ze(v)===!1?a.renderbufferStorageMultisample(36161,ee,35056,v.width,v.height):ze(v)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,w)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<ee.length;ie++){const ae=ee[ie],ve=s.convert(ae.format,ae.encoding),A=s.convert(ae.type),I=_(ae.internalFormat,ve,A,ae.encoding),le=Ve(v);B&&ze(v)===!1?a.renderbufferStorageMultisample(36161,le,I,v.width,v.height):ze(v)?f.renderbufferStorageMultisampleEXT(36161,le,I,v.width,v.height):a.renderbufferStorage(36161,I,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function ye(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,ie=Ve(v);if(v.depthTexture.format===bn)ze(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(v.depthTexture.format===si)ze(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(w){const v=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,w)}else if(B){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=a.createRenderbuffer(),Fe(v.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),Fe(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function tt(w,v,B){const ee=n.get(w);v!==void 0&&ue(ee.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&xe(w)}function je(w){const v=w.texture,B=n.get(w),ee=n.get(v);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=v.version,o.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,ae=w.isWebGLMultipleRenderTargets===!0,ve=E(w)||r;if(ie){B.__webglFramebuffer=[];for(let A=0;A<6;A++)B.__webglFramebuffer[A]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),ae)if(i.drawBuffers){const A=w.texture;for(let I=0,le=A.length;I<le;I++){const he=n.get(A[I]);he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&w.samples>0&&ze(w)===!1){const A=ae?v:[v];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let I=0;I<A.length;I++){const le=A[I];B.__webglColorRenderbuffer[I]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[I]);const he=s.convert(le.format,le.encoding),oe=s.convert(le.type),pe=_(le.internalFormat,he,oe,le.encoding,w.isXRRenderTarget===!0),fe=Ve(w);a.renderbufferStorageMultisample(36161,fe,pe,w.width,w.height),a.framebufferRenderbuffer(36160,36064+I,36161,B.__webglColorRenderbuffer[I])}a.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),X(34067,v,ve);for(let A=0;A<6;A++)ue(B.__webglFramebuffer[A],w,v,36064,34069+A);C(v,ve)&&z(34067),t.unbindTexture()}else if(ae){const A=w.texture;for(let I=0,le=A.length;I<le;I++){const he=A[I],oe=n.get(he);t.bindTexture(3553,oe.__webglTexture),X(3553,he,ve),ue(B.__webglFramebuffer,w,he,36064+I,3553),C(he,ve)&&z(3553)}t.unbindTexture()}else{let A=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(r?A=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ee.__webglTexture),X(A,v,ve),ue(B.__webglFramebuffer,w,v,36064,A),C(v,ve)&&z(A),t.unbindTexture()}w.depthBuffer&&xe(w)}function Ze(w){const v=E(w)||r,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,ie=B.length;ee<ie;ee++){const ae=B[ee];if(C(ae,v)){const ve=w.isWebGLCubeRenderTarget?34067:3553,A=n.get(ae).__webglTexture;t.bindTexture(ve,A),z(ve),t.unbindTexture()}}}function lt(w){if(r&&w.samples>0&&ze(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,ee=w.height;let ie=16384;const ae=[],ve=w.stencilBuffer?33306:36096,A=n.get(w),I=w.isWebGLMultipleRenderTargets===!0;if(I)for(let le=0;le<v.length;le++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let le=0;le<v.length;le++){ae.push(36064+le),w.depthBuffer&&ae.push(ve);const he=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(he===!1&&(w.depthBuffer&&(ie|=256),w.stencilBuffer&&(ie|=1024)),I&&a.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[le]),he===!0&&(a.invalidateFramebuffer(36008,[ve]),a.invalidateFramebuffer(36009,[ve])),I){const oe=n.get(v[le]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,oe,0)}a.blitFramebuffer(0,0,B,ee,0,0,B,ee,ie,9728),m&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let le=0;le<v.length;le++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,A.__webglColorRenderbuffer[le]);const he=n.get(v[le]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,he,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ve(w){return Math.min(u,w.samples)}function ze(w){const v=n.get(w);return r&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(w){const v=o.render.frame;x.get(w)!==v&&(x.set(w,v),w.update())}function pt(w,v){const B=w.encoding,ee=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ur||B!==En&&(B===Ue?r===!1?e.has("EXT_sRGB")===!0&&ee===Nt?(w.format=ur,w.minFilter=Ct,w.generateMipmaps=!1):v=ho.sRGBToLinear(v):(ee!==Nt||ie!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),v}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=tt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ze}function wf(a,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===wn)return 5121;if(s===gl)return 32819;if(s===_l)return 32820;if(s===fl)return 5120;if(s===pl)return 5122;if(s===ao)return 5123;if(s===ml)return 5124;if(s===vn)return 5125;if(s===Mn)return 5126;if(s===wi)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===xl)return 6406;if(s===Nt)return 6408;if(s===Ml)return 6409;if(s===bl)return 6410;if(s===bn)return 6402;if(s===si)return 34041;if(s===vl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ur)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===yl)return 6403;if(s===Sl)return 36244;if(s===wl)return 33319;if(s===El)return 33320;if(s===Al)return 36249;if(s===Es||s===As||s===Ts||s===Cs)if(o===Ue)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ur||s===Br||s===kr||s===Gr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tl)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vr||s===Hr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Vr)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Hr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wr||s===Xr||s===Yr||s===qr||s===$r||s===jr||s===Zr||s===Kr||s===Jr||s===Qr||s===ea||s===ta||s===na||s===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Wr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$r)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qr)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ea)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===na)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ia)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===sa)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ti?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Ef extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(l,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tf extends _t{constructor(e,t,n,i,s,o,r,c,l,h){if(h=h!==void 0?h:bn,h!==bn&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bn&&(n=vn),n===void 0&&h===si&&(n=ti),super(null,i,s,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1}}class Cf extends Ln{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",c=null,l=null,h=null,u=null,f=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const g=[],S=[],b=new Set,E=new Map,M=new gt;M.layers.enable(1),M.viewport=new ke;const C=new gt;C.layers.enable(2),C.viewport=new ke;const z=[M,C],_=new Ef;_.layers.enable(1),_.layers.enable(2);let T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=g[U];return H===void 0&&(H=new tr,g[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=g[U];return H===void 0&&(H=new tr,g[U]=H),H.getGripSpace()},this.getHand=function(U){let H=g[U];return H===void 0&&(H=new tr,g[U]=H),H.getHandSpace()};function W(U){const H=S.indexOf(U.inputSource);if(H===-1)return;const J=g[H];J!==void 0&&J.dispatchEvent({type:U.type,data:U.inputSource})}function $(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",F);for(let U=0;U<g.length;U++){const H=S[U];H!==null&&(S[U]=null,g[U].disconnect(H))}T=null,R=null,e.setRenderTarget(p),f=null,u=null,h=null,i=null,d=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",$),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),d=new An(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:wn,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let H=null,J=null,te=null;x.depth&&(te=x.stencil?35056:33190,H=x.stencil?si:bn,J=x.stencil?ti:vn);const re={colorFormat:32856,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(re),i.updateRenderState({layers:[u]}),d=new An(u.textureWidth,u.textureHeight,{format:Nt,type:wn,depthTexture:new Tf(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const X=e.properties.get(d);X.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(r),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(U){for(let H=0;H<U.removed.length;H++){const J=U.removed[H],te=S.indexOf(J);te>=0&&(S[te]=null,g[te].disconnect(J))}for(let H=0;H<U.added.length;H++){const J=U.added[H];let te=S.indexOf(J);if(te===-1){for(let X=0;X<g.length;X++)if(X>=S.length){S.push(J),te=X;break}else if(S[X]===null){S[X]=J,te=X;break}if(te===-1)break}const re=g[te];re&&re.connect(J)}}const P=new D,V=new D;function j(U,H,J){P.setFromMatrixPosition(H.matrixWorld),V.setFromMatrixPosition(J.matrixWorld);const te=P.distanceTo(V),re=H.projectionMatrix.elements,X=J.projectionMatrix.elements,Ae=re[14]/(re[10]-1),de=re[14]/(re[10]+1),_e=(re[9]+1)/re[5],ue=(re[9]-1)/re[5],Fe=(re[8]-1)/re[0],ye=(X[8]+1)/X[0],xe=Ae*Fe,tt=Ae*ye,je=te/(-Fe+ye),Ze=je*-Fe;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ze),U.translateZ(je),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const lt=Ae+je,Ve=de+je,ze=xe-Ze,Et=tt+(te-Ze),pt=_e*de/Ve*lt,w=ue*de/Ve*lt;U.projectionMatrix.makePerspective(ze,Et,pt,w,lt,Ve)}function Z(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;_.near=C.near=M.near=U.near,_.far=C.far=M.far=U.far,(T!==_.near||R!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,R=_.far);const H=U.parent,J=_.cameras;Z(_,H);for(let re=0;re<J.length;re++)Z(J[re],H);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),U.matrix.copy(_.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const te=U.children;for(let re=0,X=te.length;re<X;re++)te[re].updateMatrixWorld(!0);J.length===2?j(_,M,C):_.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return b};let q=null;function ne(U,H){if(l=H.getViewerPose(c||o),m=H,l!==null){const J=l.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let te=!1;J.length!==_.cameras.length&&(_.cameras.length=0,te=!0);for(let re=0;re<J.length;re++){const X=J[re];let Ae=null;if(f!==null)Ae=f.getViewport(X);else{const _e=h.getViewSubImage(u,X);Ae=_e.viewport,re===0&&(e.setRenderTargetTextures(d,_e.colorTexture,u.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(d))}let de=z[re];de===void 0&&(de=new gt,de.layers.enable(re),de.viewport=new ke,z[re]=de),de.matrix.fromArray(X.transform.matrix),de.projectionMatrix.fromArray(X.projectionMatrix),de.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),re===0&&_.matrix.copy(de.matrix),te===!0&&_.cameras.push(de)}}for(let J=0;J<g.length;J++){const te=S[J],re=g[J];te!==null&&re!==void 0&&re.update(te,H,c||o)}if(q&&q(U,H),H.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let J=null;for(const te of b)H.detectedPlanes.has(te)||(J===null&&(J=[]),J.push(te));if(J!==null)for(const te of J)b.delete(te),E.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of H.detectedPlanes)if(!b.has(te))b.add(te),E.set(te,H.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const re=E.get(te);te.lastChangedTime>re&&(E.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const Q=new bo;Q.setAnimationLoop(ne),this.setAnimationLoop=function(U){q=U},this.dispose=function(){}}}function Lf(a,e){function t(p,d){d.color.getRGB(p.fogColor.value,vo(a)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),h(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,b)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?r(p,d,g,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Dt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Dt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function r(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Dt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Df(a,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?a.getParameter(35375):0;function c(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=i[S.id];E===void 0&&(x(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",d));const M=b.program;n.updateUBOMapping(S,M);const C=e.render.frame;s[S.id]!==C&&(f(S),s[S.id]=C)}function h(S){const b=u();S.__bindingPointIndex=b;const E=a.createBuffer(),M=S.__size,C=S.usage;return a.bindBuffer(35345,E),a.bufferData(35345,M,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,b,E),E}function u(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=i[S.id],E=S.uniforms,M=S.__cache;a.bindBuffer(35345,b);for(let C=0,z=E.length;C<z;C++){const _=E[C];if(m(_,C,M)===!0){const T=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let W=0;for(let $=0;$<R.length;$++){const F=R[$],P=p(F);typeof F=="number"?(_.__data[0]=F,a.bufferSubData(35345,T+W,_.__data)):F.isMatrix3?(_.__data[0]=F.elements[0],_.__data[1]=F.elements[1],_.__data[2]=F.elements[2],_.__data[3]=F.elements[0],_.__data[4]=F.elements[3],_.__data[5]=F.elements[4],_.__data[6]=F.elements[5],_.__data[7]=F.elements[0],_.__data[8]=F.elements[6],_.__data[9]=F.elements[7],_.__data[10]=F.elements[8],_.__data[11]=F.elements[0]):(F.toArray(_.__data,W),W+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,T,_.__data)}}a.bindBuffer(35345,null)}function m(S,b,E){const M=S.value;if(E[b]===void 0){if(typeof M=="number")E[b]=M;else{const C=Array.isArray(M)?M:[M],z=[];for(let _=0;_<C.length;_++)z.push(C[_].clone());E[b]=z}return!0}else if(typeof M=="number"){if(E[b]!==M)return E[b]=M,!0}else{const C=Array.isArray(E[b])?E[b]:[E[b]],z=Array.isArray(M)?M:[M];for(let _=0;_<C.length;_++){const T=C[_];if(T.equals(z[_])===!1)return T.copy(z[_]),!0}}return!1}function x(S){const b=S.uniforms;let E=0;const M=16;let C=0;for(let z=0,_=b.length;z<_;z++){const T=b[z],R={boundary:0,storage:0},W=Array.isArray(T.value)?T.value:[T.value];for(let $=0,F=W.length;$<F;$++){const P=W[$],V=p(P);R.boundary+=V.boundary,R.storage+=V.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,z>0){C=E%M;const $=M-C;C!==0&&$-R.boundary<0&&(E+=M-C,T.__offset=E)}E+=R.storage}return C=E%M,C>0&&(E+=M-C),S.__size=E,S.__cache={},this}function p(S){const b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function d(S){const b=S.target;b.removeEventListener("dispose",d);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(const S in i)a.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}function Pf(){const a=Ai("canvas");return a.style.display="block",a}function To(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Pf(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=En,this.physicallyCorrectLights=!1,this.toneMapping=Jt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,S=0,b=null,E=-1,M=null;const C=new ke,z=new ke;let _=null,T=e.width,R=e.height,W=1,$=null,F=null;const P=new ke(0,0,T,R),V=new ke(0,0,T,R);let j=!1;const Z=new vr;let q=!1,ne=!1,Q=null;const U=new We,H=new be,J=new D,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return b===null?W:1}let X=t;function Ae(y,O){for(let G=0;G<y.length;G++){const N=y[G],Y=e.getContext(N,O);if(Y!==null)return Y}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gr}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Te,!1),X===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),X=Ae(O,y),X===null)throw Ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let de,_e,ue,Fe,ye,xe,tt,je,Ze,lt,Ve,ze,Et,pt,w,v,B,ee,ie,ae,ve,A,I,le;function he(){de=new Gu(X),_e=new Nu(X,de,a),de.init(_e),A=new wf(X,de,_e),ue=new yf(X,de,_e),Fe=new Wu,ye=new lf,xe=new Sf(X,de,ue,ye,_e,A,Fe),tt=new Ou(p),je=new ku(p),Ze=new Ql(X,_e),I=new Iu(X,de,Ze,_e),lt=new Vu(X,Ze,Fe,I),Ve=new $u(X,lt,Ze,Fe),ie=new qu(X,_e,xe),v=new zu(ye),ze=new of(p,tt,je,de,_e,I,v),Et=new Lf(p,ye),pt=new hf,w=new gf(de,_e),ee=new Ru(p,tt,je,ue,Ve,h,o),B=new bf(p,Ve,_e),le=new Df(X,Fe,_e,ue),ae=new Fu(X,de,Fe,_e),ve=new Hu(X,de,Fe,_e),Fe.programs=ze.programs,p.capabilities=_e,p.extensions=de,p.properties=ye,p.renderLists=pt,p.shadowMap=B,p.state=ue,p.info=Fe}he();const oe=new Cf(p,X);this.xr=oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const y=de.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=de.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(T,R,!1))},this.getSize=function(y){return y.set(T,R)},this.setSize=function(y,O,G){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=y,R=O,e.width=Math.floor(y*W),e.height=Math.floor(O*W),G!==!1&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(T*W,R*W).floor()},this.setDrawingBufferSize=function(y,O,G){T=y,R=O,W=G,e.width=Math.floor(y*G),e.height=Math.floor(O*G),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(P)},this.setViewport=function(y,O,G,N){y.isVector4?P.set(y.x,y.y,y.z,y.w):P.set(y,O,G,N),ue.viewport(C.copy(P).multiplyScalar(W).floor())},this.getScissor=function(y){return y.copy(V)},this.setScissor=function(y,O,G,N){y.isVector4?V.set(y.x,y.y,y.z,y.w):V.set(y,O,G,N),ue.scissor(z.copy(V).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(y){ue.setScissorTest(j=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){F=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(y=!0,O=!0,G=!0){let N=0;y&&(N|=16384),O&&(N|=256),G&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),pt.dispose(),w.dispose(),ye.dispose(),tt.dispose(),je.dispose(),Ve.dispose(),I.dispose(),le.dispose(),ze.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",me),Q&&(Q.dispose(),Q=null),Ne.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const y=Fe.autoReset,O=B.enabled,G=B.autoUpdate,N=B.needsUpdate,Y=B.type;he(),Fe.autoReset=y,B.enabled=O,B.autoUpdate=G,B.needsUpdate=N,B.type=Y}function Te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ce(y){const O=y.target;O.removeEventListener("dispose",Ce),Oe(O)}function Oe(y){L(y),ye.remove(y)}function L(y){const O=ye.get(y).programs;O!==void 0&&(O.forEach(function(G){ze.releaseProgram(G)}),y.isShaderMaterial&&ze.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,G,N,Y,ge){O===null&&(O=te);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,we=Fo(y,O,G,N,Y);ue.setMaterial(N,Me);let Ee=G.index,Ie=1;N.wireframe===!0&&(Ee=lt.getWireframeAttribute(G),Ie=2);const Le=G.drawRange,De=G.attributes.position;let Xe=Le.start*Ie,vt=(Le.start+Le.count)*Ie;ge!==null&&(Xe=Math.max(Xe,ge.start*Ie),vt=Math.min(vt,(ge.start+ge.count)*Ie)),Ee!==null?(Xe=Math.max(Xe,0),vt=Math.min(vt,Ee.count)):De!=null&&(Xe=Math.max(Xe,0),vt=Math.min(vt,De.count));const Xt=vt-Xe;if(Xt<0||Xt===1/0)return;I.setup(Y,N,we,G,Ee);let hn,Ye=ae;if(Ee!==null&&(hn=Ze.get(Ee),Ye=ve,Ye.setIndex(hn)),Y.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*re()),Ye.setMode(1)):Ye.setMode(4);else if(Y.isLine){let Pe=N.linewidth;Pe===void 0&&(Pe=1),ue.setLineWidth(Pe*re()),Y.isLineSegments?Ye.setMode(1):Y.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else Y.isPoints?Ye.setMode(0):Y.isSprite&&Ye.setMode(4);if(Y.isInstancedMesh)Ye.renderInstances(Xe,Xt,Y.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ms=Math.min(G.instanceCount,Pe);Ye.renderInstances(Xe,Xt,Ms)}else Ye.render(Xe,Xt)},this.compile=function(y,O){function G(N,Y,ge){N.transparent===!0&&N.side===Fi?(N.side=Dt,N.needsUpdate=!0,At(N,Y,ge),N.side=Sn,N.needsUpdate=!0,At(N,Y,ge),N.side=Fi):At(N,Y,ge)}f=w.get(y),f.init(),x.push(f),y.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const Me=Y[ge];G(Me,y,N)}else G(Y,y,N)}),x.pop(),f=null};let k=null;function K(y){k&&k(y)}function ce(){Ne.stop()}function me(){Ne.start()}const Ne=new bo;Ne.setAnimationLoop(K),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(y){k=y,oe.setAnimationLoop(y),y===null?Ne.stop():Ne.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",me),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,O,b),f=w.get(y,x.length),f.init(),x.push(f),U.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(U),ne=this.localClippingEnabled,q=v.init(this.clippingPlanes,ne,O),u=pt.get(y,m.length),u.init(),m.push(u),nt(y,O,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort($,F),q===!0&&v.beginShadows();const G=f.state.shadowsArray;if(B.render(G,y,O),q===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(u,y),f.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let Y=0,ge=N.length;Y<ge;Y++){const Me=N[Y];at(u,y,Me,Me.viewport)}}else at(u,y,O);b!==null&&(xe.updateMultisampleRenderTarget(b),xe.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(p,y,O),I.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function nt(y,O,G,N){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){N&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(U);const Me=Ve.update(y),we=y.material;we.visible&&u.push(y,Me,we,G,J.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Fe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Fe.render.frame),!y.frustumCulled||Z.intersectsObject(y))){N&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(U);const Me=Ve.update(y),we=y.material;if(Array.isArray(we)){const Ee=Me.groups;for(let Ie=0,Le=Ee.length;Ie<Le;Ie++){const De=Ee[Ie],Xe=we[De.materialIndex];Xe&&Xe.visible&&u.push(y,Me,Xe,G,J.z,De)}}else we.visible&&u.push(y,Me,we,G,J.z,null)}}const ge=y.children;for(let Me=0,we=ge.length;Me<we;Me++)nt(ge[Me],O,G,N)}function at(y,O,G,N){const Y=y.opaque,ge=y.transmissive,Me=y.transparent;f.setupLightsView(G),ge.length>0&&cn(Y,O,G),N&&ue.viewport(C.copy(N)),Y.length>0&&Be(Y,O,G),ge.length>0&&Be(ge,O,G),Me.length>0&&Be(Me,O,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function cn(y,O,G){const N=_e.isWebGL2;Q===null&&(Q=new An(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?wi:wn,minFilter:Si,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(H),N?Q.setSize(H.x,H.y):Q.setSize(fr(H.x),fr(H.y));const Y=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const ge=p.toneMapping;p.toneMapping=Jt,Be(y,O,G),p.toneMapping=ge,xe.updateMultisampleRenderTarget(Q),xe.updateRenderTargetMipmap(Q),p.setRenderTarget(Y)}function Be(y,O,G){const N=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,ge=y.length;Y<ge;Y++){const Me=y[Y],we=Me.object,Ee=Me.geometry,Ie=N===null?Me.material:N,Le=Me.group;we.layers.test(G.layers)&&Wt(we,O,G,Ee,Ie,Le)}}function Wt(y,O,G,N,Y,ge){y.onBeforeRender(p,O,G,N,Y,ge),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(p,O,G,N,y,ge),Y.transparent===!0&&Y.side===Fi?(Y.side=Dt,Y.needsUpdate=!0,p.renderBufferDirect(G,O,N,Y,y,ge),Y.side=Sn,Y.needsUpdate=!0,p.renderBufferDirect(G,O,N,Y,y,ge),Y.side=Fi):p.renderBufferDirect(G,O,N,Y,y,ge),y.onAfterRender(p,O,G,N,Y,ge)}function At(y,O,G){O.isScene!==!0&&(O=te);const N=ye.get(y),Y=f.state.lights,ge=f.state.shadowsArray,Me=Y.state.version,we=ze.getParameters(y,Y.state,ge,O,G),Ee=ze.getProgramCacheKey(we);let Ie=N.programs;N.environment=y.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(y.isMeshStandardMaterial?je:tt).get(y.envMap||N.environment),Ie===void 0&&(y.addEventListener("dispose",Ce),Ie=new Map,N.programs=Ie);let Le=Ie.get(Ee);if(Le!==void 0){if(N.currentProgram===Le&&N.lightsStateVersion===Me)return Cr(y,we),Le}else we.uniforms=ze.getUniforms(y),y.onBuild(G,we,p),y.onBeforeCompile(we,p),Le=ze.acquireProgram(we,Ee),Ie.set(Ee,Le),N.uniforms=we.uniforms;const De=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=v.uniform),Cr(y,we),N.needsLights=zo(y),N.lightsStateVersion=Me,N.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Xe=Le.getUniforms(),vt=is.seqWithValue(Xe.seq,De);return N.currentProgram=Le,N.uniformsList=vt,Le}function Cr(y,O){const G=ye.get(y);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Fo(y,O,G,N,Y){O.isScene!==!0&&(O=te),xe.resetTextureUnits();const ge=O.fog,Me=N.isMeshStandardMaterial?O.environment:null,we=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:En,Ee=(N.isMeshStandardMaterial?je:tt).get(N.envMap||Me),Ie=N.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!N.normalMap&&!!G.attributes.tangent,De=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,vt=!!G.morphAttributes.color,Xt=N.toneMapped?p.toneMapping:Jt,hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=hn!==void 0?hn.length:0,Pe=ye.get(N),Ms=f.state.lights;if(q===!0&&(ne===!0||y!==M)){const Mt=y===M&&N.id===E;v.setState(N,y,Mt)}let it=!1;N.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ms.state.version||Pe.outputEncoding!==we||Y.isInstancedMesh&&Pe.instancing===!1||!Y.isInstancedMesh&&Pe.instancing===!0||Y.isSkinnedMesh&&Pe.skinning===!1||!Y.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Ee||N.fog===!0&&Pe.fog!==ge||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==v.numPlanes||Pe.numIntersection!==v.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Le||Pe.morphTargets!==De||Pe.morphNormals!==Xe||Pe.morphColors!==vt||Pe.toneMapping!==Xt||_e.isWebGL2===!0&&Pe.morphTargetsCount!==Ye)&&(it=!0):(it=!0,Pe.__version=N.version);let un=Pe.currentProgram;it===!0&&(un=At(N,O,Y));let Lr=!1,ui=!1,bs=!1;const ct=un.getUniforms(),dn=Pe.uniforms;if(ue.useProgram(un.program)&&(Lr=!0,ui=!0,bs=!0),N.id!==E&&(E=N.id,ui=!0),Lr||M!==y){if(ct.setValue(X,"projectionMatrix",y.projectionMatrix),_e.logarithmicDepthBuffer&&ct.setValue(X,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,ui=!0,bs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Mt=ct.map.cameraPosition;Mt!==void 0&&Mt.setValue(X,J.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ct.setValue(X,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&ct.setValue(X,"viewMatrix",y.matrixWorldInverse)}if(Y.isSkinnedMesh){ct.setOptional(X,Y,"bindMatrix"),ct.setOptional(X,Y,"bindMatrixInverse");const Mt=Y.skeleton;Mt&&(_e.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),ct.setValue(X,"boneTexture",Mt.boneTexture,xe),ct.setValue(X,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ys=G.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&_e.isWebGL2===!0)&&ie.update(Y,G,N,un),(ui||Pe.receiveShadow!==Y.receiveShadow)&&(Pe.receiveShadow=Y.receiveShadow,ct.setValue(X,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(dn.envMap.value=Ee,dn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),ui&&(ct.setValue(X,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&No(dn,bs),ge&&N.fog===!0&&Et.refreshFogUniforms(dn,ge),Et.refreshMaterialUniforms(dn,N,W,R,Q),is.upload(X,Pe.uniformsList,dn,xe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(is.upload(X,Pe.uniformsList,dn,xe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ct.setValue(X,"center",Y.center),ct.setValue(X,"modelViewMatrix",Y.modelViewMatrix),ct.setValue(X,"normalMatrix",Y.normalMatrix),ct.setValue(X,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Mt=N.uniformsGroups;for(let Ss=0,Oo=Mt.length;Ss<Oo;Ss++)if(_e.isWebGL2){const Dr=Mt[Ss];le.update(Dr,un),le.bind(Dr,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function No(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function zo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,O,G){ye.get(y.texture).__webglTexture=O,ye.get(y.depthTexture).__webglTexture=G;const N=ye.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=G===void 0,N.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const G=ye.get(y);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,G=0){b=y,g=O,S=G;let N=!0,Y=null,ge=!1,Me=!1;if(y){const Ee=ye.get(y);Ee.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):Ee.__webglFramebuffer===void 0?xe.setupRenderTarget(y):Ee.__hasExternalTextures&&xe.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Y=Le[O],ge=!0):_e.isWebGL2&&y.samples>0&&xe.useMultisampledRTT(y)===!1?Y=ye.get(y).__webglMultisampledFramebuffer:Y=Le,C.copy(y.viewport),z.copy(y.scissor),_=y.scissorTest}else C.copy(P).multiplyScalar(W).floor(),z.copy(V).multiplyScalar(W).floor(),_=j;if(ue.bindFramebuffer(36160,Y)&&_e.drawBuffers&&N&&ue.drawBuffers(y,Y),ue.viewport(C),ue.scissor(z),ue.setScissorTest(_),ge){const Ee=ye.get(y.texture);X.framebufferTexture2D(36160,36064,34069+O,Ee.__webglTexture,G)}else if(Me){const Ee=ye.get(y.texture),Ie=O||0;X.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Ie)}E=-1},this.readRenderTargetPixels=function(y,O,G,N,Y,ge,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){ue.bindFramebuffer(36160,we);try{const Ee=y.texture,Ie=Ee.format,Le=Ee.type;if(Ie!==Nt&&A.convert(Ie)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===wi&&(de.has("EXT_color_buffer_half_float")||_e.isWebGL2&&de.has("EXT_color_buffer_float"));if(Le!==wn&&A.convert(Le)!==X.getParameter(35738)&&!(Le===Mn&&(_e.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-N&&G>=0&&G<=y.height-Y&&X.readPixels(O,G,N,Y,A.convert(Ie),A.convert(Le),ge)}finally{const Ee=b!==null?ye.get(b).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(y,O,G=0){const N=Math.pow(2,-G),Y=Math.floor(O.image.width*N),ge=Math.floor(O.image.height*N);xe.setTexture2D(O,0),X.copyTexSubImage2D(3553,G,0,0,y.x,y.y,Y,ge),ue.unbindTexture()},this.copyTextureToTexture=function(y,O,G,N=0){const Y=O.image.width,ge=O.image.height,Me=A.convert(G.format),we=A.convert(G.type);xe.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?X.texSubImage2D(3553,N,y.x,y.y,Y,ge,Me,we,O.image.data):O.isCompressedTexture?X.compressedTexSubImage2D(3553,N,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):X.texSubImage2D(3553,N,y.x,y.y,Me,we,O.image),N===0&&G.generateMipmaps&&X.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,O,G,N,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=y.max.x-y.min.x+1,Me=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Ee=A.convert(N.format),Ie=A.convert(N.type);let Le;if(N.isData3DTexture)xe.setTexture3D(N,0),Le=32879;else if(N.isDataArrayTexture)xe.setTexture2DArray(N,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const De=X.getParameter(3314),Xe=X.getParameter(32878),vt=X.getParameter(3316),Xt=X.getParameter(3315),hn=X.getParameter(32877),Ye=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,Ye.width),X.pixelStorei(32878,Ye.height),X.pixelStorei(3316,y.min.x),X.pixelStorei(3315,y.min.y),X.pixelStorei(32877,y.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Le,Y,O.x,O.y,O.z,ge,Me,we,Ee,Ie,Ye.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Le,Y,O.x,O.y,O.z,ge,Me,we,Ee,Ye.data)):X.texSubImage3D(Le,Y,O.x,O.y,O.z,ge,Me,we,Ee,Ie,Ye),X.pixelStorei(3314,De),X.pixelStorei(32878,Xe),X.pixelStorei(3316,vt),X.pixelStorei(3315,Xt),X.pixelStorei(32877,hn),Y===0&&N.generateMipmaps&&X.generateMipmap(Le),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?xe.setTextureCube(y,0):y.isData3DTexture?xe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?xe.setTexture2DArray(y,0):xe.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){g=0,S=0,b=null,ue.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Rf extends To{}Rf.prototype.isWebGL1Renderer=!0;class br{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new br(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class If extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Co extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new D,Ga=new D,Va=new We,nr=new po,es=new rs;class Ff extends Je{constructor(e=new Ut,t=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ka.fromBufferAttribute(t,i-1),Ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ka.distanceTo(Ga);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;Va.copy(i).invert(),nr.copy(e.ray).applyMatrix4(Va);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new D,h=new D,u=new D,f=new D,m=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const g=Math.max(0,o.start),S=Math.min(x.count,o.start+o.count);for(let b=g,E=S-1;b<E;b+=m){const M=x.getX(b),C=x.getX(b+1);if(l.fromBufferAttribute(d,M),h.fromBufferAttribute(d,C),nr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(f);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let b=g,E=S-1;b<E;b+=m){if(l.fromBufferAttribute(d,b),h.fromBufferAttribute(d,b+1),nr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Ha=new D,Wa=new D;class Nf extends Ff{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ha.fromBufferAttribute(t,i),Wa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ha.distanceTo(Wa);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let x=0;const p=[],d=n/2;let g=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(m,2));function S(){const E=new D,M=new D;let C=0;const z=(t-e)/n;for(let _=0;_<=s;_++){const T=[],R=_/s,W=R*(t-e)+e;for(let $=0;$<=i;$++){const F=$/i,P=F*c+r,V=Math.sin(P),j=Math.cos(P);M.x=W*V,M.y=-R*n+d,M.z=W*j,u.push(M.x,M.y,M.z),E.set(V,z,j).normalize(),f.push(E.x,E.y,E.z),m.push(F,1-R),T.push(x++)}p.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){const R=p[T][_],W=p[T+1][_],$=p[T+1][_+1],F=p[T][_+1];h.push(R,W,F),h.push(W,$,F),C+=6}l.addGroup(g,C,0),g+=C}function b(E){const M=x,C=new be,z=new D;let _=0;const T=E===!0?e:t,R=E===!0?1:-1;for(let $=1;$<=i;$++)u.push(0,d*R,0),f.push(0,R,0),m.push(.5,.5),x++;const W=x;for(let $=0;$<=i;$++){const P=$/i*c+r,V=Math.cos(P),j=Math.sin(P);z.x=T*j,z.y=d*R,z.z=T*V,u.push(z.x,z.y,z.z),f.push(0,R,0),C.x=V*.5+.5,C.y=j*.5*R+.5,m.push(C.x,C.y),x++}for(let $=0;$<i;$++){const F=M+$,P=W+$;E===!0?h.push(P,P+1,F):h.push(P+1,P,F),_+=3}l.addGroup(g,_,E===!0?1:2),g+=_}}static fromJSON(e){return new yr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends yr{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,r=Math.PI*2){super(0,e,t,n,i,s,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:r}}static fromJSON(e){return new Sr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+r,Math.PI);let l=0;const h=[],u=new D,f=new D,m=[],x=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],b=g/n;let E=0;g==0&&o==0?E=.5/t:g==n&&c==Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){const C=M/t;u.x=-e*Math.cos(i+C*s)*Math.sin(o+b*r),u.y=e*Math.cos(o+b*r),u.z=e*Math.sin(i+C*s)*Math.sin(o+b*r),x.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),d.push(C+E,1-b),S.push(l++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const b=h[g][S+1],E=h[g][S],M=h[g+1][S],C=h[g+1][S+1];(g!==0||o>0)&&m.push(b,E,C),(g!==n-1||c<Math.PI)&&m.push(E,M,C)}this.setIndex(m),this.setAttribute("position",new $e(x,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(d,2))}static fromJSON(e){return new wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xa={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class zf{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const Of=new zf;class Lo{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Uf extends Lo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r=Ai("img");function c(){h(),Xa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){r.removeEventListener("load",c,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",c,!1),r.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class Bf extends Lo{constructor(e){super(e)}load(e,t,n,i){const s=new _t,o=new Uf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class os extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ir=new We,Ya=new D,qa=new D;class Er{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qa),t.updateMatrixWorld(),ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kf extends Er{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gf extends os{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $a=new We,vi=new D,sr=new D;class Vf extends Er{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vi.setFromMatrixPosition(e.matrixWorld),n.position.copy(vi),sr.copy(n.position),sr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sr),n.updateMatrixWorld(),i.makeTranslation(-vi.x,-vi.y,-vi.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class ls extends os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hf extends Er{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.shadow=new Hf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xf extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ja(){return(typeof performance>"u"?Date:performance).now()}class Za{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ts=new D,Ge=new xr;class qf extends Nf{constructor(e){const t=new Ut,n=new Co({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};r("n1","n2"),r("n2","n4"),r("n4","n3"),r("n3","n1"),r("f1","f2"),r("f2","f4"),r("f4","f3"),r("f3","f1"),r("n1","f1"),r("n2","f2"),r("n3","f3"),r("n4","f4"),r("p","n1"),r("p","n2"),r("p","n3"),r("p","n4"),r("u1","u2"),r("u2","u3"),r("u3","u1"),r("c","t"),r("p","c"),r("cn1","cn2"),r("cn3","cn4"),r("cf1","cf2"),r("cf3","cf4");function r(x,p){c(x),c(p)}function c(x){i.push(0,0,0),s.push(0,0,0),o[x]===void 0&&(o[x]=[]),o[x].push(i.length/3-1)}t.setAttribute("position",new $e(i,3)),t.setAttribute("color",new $e(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Re(16755200),h=new Re(16711680),u=new Re(43775),f=new Re(16777215),m=new Re(3355443);this.setColors(l,h,u,f,m)}setColors(e,t,n,i,s){const r=this.geometry.getAttribute("color");r.setXYZ(0,e.r,e.g,e.b),r.setXYZ(1,e.r,e.g,e.b),r.setXYZ(2,e.r,e.g,e.b),r.setXYZ(3,e.r,e.g,e.b),r.setXYZ(4,e.r,e.g,e.b),r.setXYZ(5,e.r,e.g,e.b),r.setXYZ(6,e.r,e.g,e.b),r.setXYZ(7,e.r,e.g,e.b),r.setXYZ(8,e.r,e.g,e.b),r.setXYZ(9,e.r,e.g,e.b),r.setXYZ(10,e.r,e.g,e.b),r.setXYZ(11,e.r,e.g,e.b),r.setXYZ(12,e.r,e.g,e.b),r.setXYZ(13,e.r,e.g,e.b),r.setXYZ(14,e.r,e.g,e.b),r.setXYZ(15,e.r,e.g,e.b),r.setXYZ(16,e.r,e.g,e.b),r.setXYZ(17,e.r,e.g,e.b),r.setXYZ(18,e.r,e.g,e.b),r.setXYZ(19,e.r,e.g,e.b),r.setXYZ(20,e.r,e.g,e.b),r.setXYZ(21,e.r,e.g,e.b),r.setXYZ(22,e.r,e.g,e.b),r.setXYZ(23,e.r,e.g,e.b),r.setXYZ(24,t.r,t.g,t.b),r.setXYZ(25,t.r,t.g,t.b),r.setXYZ(26,t.r,t.g,t.b),r.setXYZ(27,t.r,t.g,t.b),r.setXYZ(28,t.r,t.g,t.b),r.setXYZ(29,t.r,t.g,t.b),r.setXYZ(30,t.r,t.g,t.b),r.setXYZ(31,t.r,t.g,t.b),r.setXYZ(32,n.r,n.g,n.b),r.setXYZ(33,n.r,n.g,n.b),r.setXYZ(34,n.r,n.g,n.b),r.setXYZ(35,n.r,n.g,n.b),r.setXYZ(36,n.r,n.g,n.b),r.setXYZ(37,n.r,n.g,n.b),r.setXYZ(38,i.r,i.g,i.b),r.setXYZ(39,i.r,i.g,i.b),r.setXYZ(40,s.r,s.g,s.b),r.setXYZ(41,s.r,s.g,s.b),r.setXYZ(42,s.r,s.g,s.b),r.setXYZ(43,s.r,s.g,s.b),r.setXYZ(44,s.r,s.g,s.b),r.setXYZ(45,s.r,s.g,s.b),r.setXYZ(46,s.r,s.g,s.b),r.setXYZ(47,s.r,s.g,s.b),r.setXYZ(48,s.r,s.g,s.b),r.setXYZ(49,s.r,s.g,s.b),r.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),He("c",t,e,Ge,0,0,-1),He("t",t,e,Ge,0,0,1),He("n1",t,e,Ge,-n,-i,-1),He("n2",t,e,Ge,n,-i,-1),He("n3",t,e,Ge,-n,i,-1),He("n4",t,e,Ge,n,i,-1),He("f1",t,e,Ge,-n,-i,1),He("f2",t,e,Ge,n,-i,1),He("f3",t,e,Ge,-n,i,1),He("f4",t,e,Ge,n,i,1),He("u1",t,e,Ge,n*.7,i*1.1,-1),He("u2",t,e,Ge,-n*.7,i*1.1,-1),He("u3",t,e,Ge,0,i*2,-1),He("cf1",t,e,Ge,-n,0,1),He("cf2",t,e,Ge,n,0,1),He("cf3",t,e,Ge,0,-i,1),He("cf4",t,e,Ge,0,i,1),He("cn1",t,e,Ge,-n,0,-1),He("cn2",t,e,Ge,n,0,-1),He("cn3",t,e,Ge,0,-i,-1),He("cn4",t,e,Ge,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function He(a,e,t,n,i,s,o){ts.set(i,s,o).unproject(n);const r=e[a];if(r!==void 0){const c=t.getAttribute("position");for(let l=0,h=r.length;l<h;l++)c.setXYZ(r[l],ts.x,ts.y,ts.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);const Ka={type:"change"},rr={type:"start"},Ja={type:"end"};class $f extends Ln{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",pt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ka),n.update(),s=i.NONE},this.update=function(){const A=new D,I=new Tn().setFromUnitVectors(e.up,new D(0,1,0)),le=I.clone().invert(),he=new D,oe=new Tn,pe=2*Math.PI;return function(){const Te=n.object.position;A.copy(Te).sub(n.target),A.applyQuaternion(I),r.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(z()),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let Ce=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Oe)&&(Ce<-Math.PI?Ce+=pe:Ce>Math.PI&&(Ce-=pe),Oe<-Math.PI?Oe+=pe:Oe>Math.PI&&(Oe-=pe),Ce<=Oe?r.theta=Math.max(Ce,Math.min(Oe,r.theta)):r.theta=r.theta>(Ce+Oe)/2?Math.max(Ce,r.theta):Math.min(Oe,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),A.setFromSpherical(r),A.applyQuaternion(le),Te.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||he.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(Ka),he.copy(n.object.position),oe.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",tt),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",Et),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",pt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new Za,c=new Za;let l=1;const h=new D;let u=!1;const f=new be,m=new be,x=new be,p=new be,d=new be,g=new be,S=new be,b=new be,E=new be,M=[],C={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function T(A){c.theta-=A}function R(A){c.phi-=A}const W=function(){const A=new D;return function(le,he){A.setFromMatrixColumn(he,0),A.multiplyScalar(-le),h.add(A)}}(),$=function(){const A=new D;return function(le,he){n.screenSpacePanning===!0?A.setFromMatrixColumn(he,1):(A.setFromMatrixColumn(he,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(le),h.add(A)}}(),F=function(){const A=new D;return function(le,he){const oe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;A.copy(pe).sub(n.target);let fe=A.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),W(2*le*fe/oe.clientHeight,n.object.matrix),$(2*he*fe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),$(he*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){f.set(A.clientX,A.clientY)}function Z(A){S.set(A.clientX,A.clientY)}function q(A){p.set(A.clientX,A.clientY)}function ne(A){m.set(A.clientX,A.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const I=n.domElement;T(2*Math.PI*x.x/I.clientHeight),R(2*Math.PI*x.y/I.clientHeight),f.copy(m),n.update()}function Q(A){b.set(A.clientX,A.clientY),E.subVectors(b,S),E.y>0?P(_()):E.y<0&&V(_()),S.copy(b),n.update()}function U(A){d.set(A.clientX,A.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),F(g.x,g.y),p.copy(d),n.update()}function H(A){A.deltaY<0?V(_()):A.deltaY>0&&P(_()),n.update()}function J(A){let I=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),I=!0;break}I&&(A.preventDefault(),n.update())}function te(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);f.set(A,I)}}function re(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);p.set(A,I)}}function X(){const A=M[0].pageX-M[1].pageX,I=M[0].pageY-M[1].pageY,le=Math.sqrt(A*A+I*I);S.set(0,le)}function Ae(){n.enableZoom&&X(),n.enablePan&&re()}function de(){n.enableZoom&&X(),n.enableRotate&&te()}function _e(A){if(M.length==1)m.set(A.pageX,A.pageY);else{const le=ve(A),he=.5*(A.pageX+le.x),oe=.5*(A.pageY+le.y);m.set(he,oe)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const I=n.domElement;T(2*Math.PI*x.x/I.clientHeight),R(2*Math.PI*x.y/I.clientHeight),f.copy(m)}function ue(A){if(M.length===1)d.set(A.pageX,A.pageY);else{const I=ve(A),le=.5*(A.pageX+I.x),he=.5*(A.pageY+I.y);d.set(le,he)}g.subVectors(d,p).multiplyScalar(n.panSpeed),F(g.x,g.y),p.copy(d)}function Fe(A){const I=ve(A),le=A.pageX-I.x,he=A.pageY-I.y,oe=Math.sqrt(le*le+he*he);b.set(0,oe),E.set(0,Math.pow(b.y/S.y,n.zoomSpeed)),P(E.y),S.copy(b)}function ye(A){n.enableZoom&&Fe(A),n.enablePan&&ue(A)}function xe(A){n.enableZoom&&Fe(A),n.enableRotate&&_e(A)}function tt(A){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Ze)),ee(A),A.pointerType==="touch"?w(A):Ve(A))}function je(A){n.enabled!==!1&&(A.pointerType==="touch"?v(A):ze(A))}function Ze(A){ie(A),M.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(Ja),s=i.NONE}function lt(A){ie(A)}function Ve(A){let I;switch(A.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Nn.DOLLY:if(n.enableZoom===!1)return;Z(A),s=i.DOLLY;break;case Nn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;q(A),s=i.PAN}else{if(n.enableRotate===!1)return;j(A),s=i.ROTATE}break;case Nn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;j(A),s=i.ROTATE}else{if(n.enablePan===!1)return;q(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rr)}function ze(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(A);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(A);break;case i.PAN:if(n.enablePan===!1)return;U(A);break}}function Et(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(rr),H(A),n.dispatchEvent(Ja))}function pt(A){n.enabled===!1||n.enablePan===!1||J(A)}function w(A){switch(ae(A),M.length){case 1:switch(n.touches.ONE){case zn.ROTATE:if(n.enableRotate===!1)return;te(),s=i.TOUCH_ROTATE;break;case zn.PAN:if(n.enablePan===!1)return;re(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),s=i.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rr)}function v(A){switch(ae(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(A),n.update();break;default:s=i.NONE}}function B(A){n.enabled!==!1&&A.preventDefault()}function ee(A){M.push(A)}function ie(A){delete C[A.pointerId];for(let I=0;I<M.length;I++)if(M[I].pointerId==A.pointerId){M.splice(I,1);return}}function ae(A){let I=C[A.pointerId];I===void 0&&(I=new be,C[A.pointerId]=I),I.set(A.pageX,A.pageY)}function ve(A){const I=A.pointerId===M[0].pointerId?M[1]:M[0];return C[I.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",tt),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",Et,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ht{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ht.nextNameID=Ht.nextNameID||0,this.$name.id=`lil-gui-name-${++Ht.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jf extends Ht{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function mr(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Zf={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:mr,toHexString:mr},Ti={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Kf={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const n=Ti.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ti.toHexString(i)}},Jf={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=Ti.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return Ti.toHexString(i)}},Qf=[Zf,Ti,Kf,Jf];function ep(a){return Qf.find(e=>e.match(a))}class tp extends Ht{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ep(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=mr(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ar extends Ht{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class np extends Ht{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const r=o!==void 0;this.step(r?o:this._getImplicitStep(),r),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let s=!1,o,r,c,l,h;const u=5,f=g=>{o=g.clientX,r=c=g.clientY,s=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=g=>{if(s){const S=g.clientX-o,b=g.clientY-r;Math.abs(b)>u?(g.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&x()}if(!s){const S=g.clientY-c;h-=S*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=g.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},p=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,S,b,E,M)=>(g-S)/(b-S)*(M-E)+E,t=g=>{const S=this.$slider.getBoundingClientRect();let b=e(g,S.left,S.right,this._min,this._max);this._snapClampSetValue(b)},n=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=g=>{t(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,r,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(r=g.touches[0].clientX,c=g.touches[0].clientY,o=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=g=>{if(o){const S=g.touches[0].clientX-r,b=g.touches[0].clientY-c;Math.abs(S)>Math.abs(b)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else g.preventDefault(),t(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),x=400;let p;const d=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const b=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",d,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ip extends Ht{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class sp extends Ht{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const rp=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ap(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Qa=!1;class Ar{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:r=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),r&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Qa&&o&&(ap(rp),Qa=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new ip(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new np(this,e,t,n,i,s);case"boolean":return new jf(this,e,t);case"string":return new sp(this,e,t);case"function":return new ar(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new tp(this,e,t,n)}addFolder(e){return new Ar({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ar||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ar)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Pn=new Ar,Do=document.querySelector("canvas.webgl"),Bt=new If,op=new br("#262837",1,20);Bt.fog=op;const yi={x:0,y:0};window.addEventListener("mousemove",a=>{yi.x=a.clientX/Lt.width+1,yi.y=-(a.clientY/Lt.height+1),console.log(yi.x,yi.y)});const ft=new Bf,lp=ft.load("/textures/door/color.jpg"),cp=ft.load("/textures/door/alpha.jpg"),hp=ft.load("/textures/door/ambientOcclusion.jpg"),up=ft.load("/textures/door/height.jpg"),dp=ft.load("/textures/door/normal.jpg"),fp=ft.load("/textures/door/metalness.jpg"),pp=ft.load("/textures/door/roughness.jpg"),mp=ft.load("/textures/bricks/color.jpg"),gp=ft.load("/textures/bricks/ambientOcclusion.jpg"),_p=ft.load("/textures/bricks/normal.jpg"),xp=ft.load("/textures/bricks/roughenss.jpg"),cs=ft.load("/textures/grass/color.jpg"),hs=ft.load("/textures/grass/ambientOcclusion.jpg"),us=ft.load("/textures/grass/normal.jpg"),ds=ft.load("/textures/grass/roughenss.jpg");cs.repeat.set(8,8);hs.repeat.set(8,8);us.repeat.set(8,8);ds.repeat.set(8,8);cs.wrapS=Ot;hs.wrapS=Ot;us.wrapS=Ot;ds.wrapS=Ot;cs.wrapT=Ot;hs.wrapT=Ot;us.wrapT=Ot;ds.wrapT=Ot;const Rn=new Qn;Bt.add(Rn);const Ci=new rt(new Dn(4,2.5,4),new ci({map:mp,transparent:!0,aoMap:gp,normalMap:_p,roughnessMap:xp}));Ci.geometry.setAttribute("uv2",new $e(Ci.geometry.attributes.uv.array,2));Ci.position.y=2.5/2;Rn.add(Ci);const fs=new rt(new Sr(3.5,1,4),new ci({color:"#b35f45"}));fs.position.y=2.5+.5;fs.rotation.y=Math.PI*.25;Rn.add(fs);const Li=new rt(new Ii(2.2,2.2,100,100),new ci({map:lp,transparent:!0,alphaMap:cp,aoMap:hp,displacementMap:up,displacementScale:.1,normalMap:dp,metalnessMap:fp,roughnessMap:pp}));Li.geometry.setAttribute("uv2",new $e(Li.geometry.attributes.uv.array,2));Li.position.y=1;Li.position.z=2.01;Rn.add(Li);const ps=new wr(1,16,16),ms=new ci({color:"#89c854"}),gs=new rt(ps,ms);gs.scale.set(.5,.5,.5);gs.position.set(.8,.2,2.2);const _s=new rt(ps,ms);_s.scale.set(.25,.25,.25);_s.position.set(1.4,.1,2.1);const xs=new rt(ps,ms);xs.scale.set(.4,.4,.4);xs.position.set(-.8,.1,2.2);const vs=new rt(ps,ms);vs.scale.set(.15,.15,.15);vs.position.set(-1,.05,2.6);Rn.add(gs,_s,xs,vs);const ai=new rt(new Ii(20,20),new ci({map:cs,transparent:!0,aoMap:hs,roughnessMap:ds,normalMap:us}));ai.geometry.setAttribute("uv2",new $e(ai.geometry.attributes.uv.array,2));ai.rotation.x=-Math.PI*.5;ai.position.y=0;Rn.add(ai);const Po=new Qn;Bt.add(Po);const vp=new Dn(.6,.8,.2),Mp=new ci({color:"#b2b6b1"});for(let a=0;a<25;a++){const e=Math.random()*(Math.PI*2),t=3+Math.random()*6,n=Math.sin(e)*t,i=Math.cos(e)*t,s=new rt(vp,Mp);s.position.set(n,.3,i),s.rotation.y=(Math.random()-.5)*.4,s.rotation.z=(Math.random()-.5)*.4,s.castShadow=!0,Po.add(s)}const Ro=new Xf("#b9d5ff",.12);Pn.add(Ro,"intensity").min(0).max(1).step(.001);Bt.add(Ro);const In=new Wf("#b9d5ff",.12);In.position.set(4,5,-2);Pn.add(In,"intensity").min(0).max(1).step(.001);Pn.add(In.position,"x").min(-5).max(5).step(.001);Pn.add(In.position,"y").min(-5).max(5).step(.001);Pn.add(In.position,"z").min(-5).max(5).step(.001);Bt.add(In);const Fn=new ls("#ff7d46",.7,7);Fn.visible=!0;Fn.position.set(0,2.2,2.7);Rn.add(Fn);const rn=new ls("#ff00ff",2,3),an=new ls("#00ffff",2,3),on=new ls("#ffff00",2,3);Bt.add(rn,an,on);const Lt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Lt.width=window.innerWidth,Lt.height=window.innerHeight,zt.aspect=Lt.width/Lt.height,zt.updateProjectionMatrix(),ln.setSize(Lt.width,Lt.height),ln.setPixelRatio(Math.min(window.devicePixelRatio,2))});const zt=new gt(75,Lt.width/Lt.height,.1,100);zt.position.x=yi.x;zt.position.y=2;zt.position.z=10;Bt.add(zt);const xt=new Gf("0x0000ff",1.5,10,Math.PI*.2,.25);xt.visible=!0;Pn.add(xt,"visible").name("flashLight");Bt.add(xt);Bt.add(xt.target);const Tr=new qf(xt.shadow.camera);Tr.visible=!0;Pn.add(Tr,"visible").name("flashlight helper");Bt.add(Tr);const hi=new $f(zt,Do);hi.enableDamping=!0;hi.minDistance=6;hi.maxDistance=15;hi.minPolarAngle=Math.PI/4;hi.maxPolarAngle=Math.PI/2.1;const ln=new To({canvas:Do});ln.setSize(Lt.width,Lt.height);ln.setPixelRatio(Math.min(window.devicePixelRatio,2));ln.setClearColor("#262837");ln.shadowMap.enabled=!0;ln.shadowMap.type=to;In.castShadow=!0;Fn.castShadow=!0;xt.castShadow=!0;rn.castShadow=!0;an.castShadow=!0;on.castShadow=!0;Ci.castShadow=!0;fs.castShadow=!0;gs.castShadow=!0;_s.castShadow=!0;xs.castShadow=!0;vs.castShadow=!0;ai.receiveShadow=!0;xt.shadow.mapSize.width=1024;xt.shadow.mapSize.height=1024;xt.shadow.camera.fov=30;xt.angle=.3;xt.decay=1.4;xt.shadow.camera.near=1;xt.shadow.camera.far=15;Fn.shadow.mapSize.width=256;Fn.shadow.mapSize.height=256;Fn.shadow.camera.far=7;rn.shadow.mapSize.width=256;rn.shadow.mapSize.height=256;rn.shadow.camera.far=7;an.shadow.mapSize.width=256;an.shadow.mapSize.height=256;an.shadow.camera.far=7;on.shadow.mapSize.width=256;on.shadow.mapSize.height=256;on.shadow.camera.far=7;const bp=new Yf,Io=()=>{const a=bp.getElapsedTime(),e=a*.3;rn.position.x=Math.cos(e)*4,rn.position.y=Math.sin(a*3),rn.position.z=Math.sin(e)*4;const t=-a*.32;an.position.x=Math.cos(t)*5,an.position.y=Math.sin(a*3)+Math.sin(a*2.5),an.position.z=Math.sin(t)*5;const n=a*.18;on.position.x=Math.cos(n)*(6+Math.sin(a*.32)),on.position.z=Math.sin(n)*(6+Math.sin(a*.24)),on.position.y=Math.sin(a*5)+Math.sin(a*1.4),xt.position.set(zt.position.x,zt.position.y,zt.position.z),hi.update(),ln.render(Bt,zt),window.requestAnimationFrame(Io)};Io();
//# sourceMappingURL=index-d943f696.js.map

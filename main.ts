import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from"node:fs";
import{join as J}from"node:path";
function run(p,q){
let D=new Int32Array(256),C=new Int32Array(64),S=new Int32Array(256),o=new Uint8Array(65536),s=0,c=0,l=0,i=0,x=0,t=0,n=p.length,e=v=>[o.subarray(0,l),v];
for(;;){
if(t==1e6)return e(10);
if(x<0||x>=n)return e(9);
let u=p[x];
if(!(u<8||u>15&&u<35&&u!=31||u>47&&u<53||u==64||u==65||u>79&&u<84))return e(5);
let m=u==1?1:u==2?4:u>47&&u<52?2:0;
if(x+m>=n)return e(9);
t++;
let z=x+1+m,a,b,r,P=u==7?3:u==5|u==6|u==65|u>15&u<35&u!=31&u!=23&u!=27?2:u==3|u==4|u==23|u==27|u==49|u==50|u==64|u==80|u==81|u==83?1:0;
if(s<P)return e(2);
if(s-P+(u==6|u==7?3:u==4|u==5?2:u==1|u==2|u==64|u==82|u>15&u<35&u!=31?1:0)>256)return e(3);
x=z;
switch(u){
case 0:return e(0);
case 1:D[s++]=(p[z-1]<<24)>>24;break;
case 2:D[s++]=p[z-4]|p[z-3]<<8|p[z-2]<<16|p[z-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;
case 6:D[s]=D[s-2];s++;break;
case 7:a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 48:case 49:case 50:r=(p[z-2]|p[z-1]<<8)<<16>>16;if(u!=48)b=D[--s];if(u==48||(u==49?b==0:b!=0))x=z+r;break;
case 51:if(c==64)return e(7);C[c++]=z;x=p[z-2]|p[z-1]<<8;break;
case 52:if(!c)return e(8);x=C[--c];break;
case 64:a=D[s-1];if(a<0||a>255)return e(6);D[s-1]=S[a];break;
case 65:a=D[s-1];b=D[s-2];if(a<0||a>255)return e(6);s-=2;S[a]=b;break;
case 80:{let w=String(D[s-1]);if(l+w.length>65536)return e(11);s--;for(let j=0;j<w.length;)o[l++]=w.charCodeAt(j++);break}
case 81:if(l>65535)return e(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return e(D[--s]&255);
default:b=D[s-1];a=D[s-2];
if(u<19)r=u==16?a+b|0:u==17?a-b|0:Math.imul(a,b);
else if(u<23){if(!b)return e(4);r=u==19?(a==-2147483648&&b==-1?a:a/b|0):u==20?(b==-1?0:a%b|0):u==21?Math.floor((a>>>0)/(b>>>0)):(a>>>0)%(b>>>0)}
else if(u<27)r=u==24?a&b:u==25?a|b:a^b;
else if(u<31)r=u==28?a<<(b&31):u==29?a>>(b&31):a>>>(b&31);
else r=u==32?a==b?1:0:u==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=r;
}
}
}
let I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(let d of R(I).sort()){let[g,h]=run(F(J(I,d,"program.bin")),F(J(I,d,"input.bin")));M(J(O,d),{recursive:!0});W(J(O,d,"stdout.bin"),g);W(J(O,d,"exit.txt"),h+"\n")}

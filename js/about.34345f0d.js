"use strict";(self["webpackChunkmyvuesite"]=self["webpackChunkmyvuesite"]||[]).push([[443],{5642:function(n,t,u){u.d(t,{Z:function(){return s}});var a=u(3396),e=u(7139),o=u(9242);function l(n,t,u,l,i,c){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{onClick:t[0]||(t[0]=n=>(i.count+=1,i.cardnum+=1))},"+1"),(0,a._)("button",{onClick:t[1]||(t[1]=n=>(i.count+=0,i.cardnum+=1))},"+0"),(0,a._)("button",{onClick:t[2]||(t[2]=n=>(i.count-=1,i.cardnum+=1))},"-1"),(0,a._)("p",null,"Count is: "+(0,e.zw)(i.count),1),(0,a._)("p",null,"realnum is: "+(0,e.zw)(i.count/((52*i.message-i.cardnum)/52)),1),(0,a._)("p",null,"Card in bin is: "+(0,e.zw)(i.cardnum),1),(0,a._)("p",null,"Card in stack is: "+(0,e.zw)(52*i.message-i.cardnum),1),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>i.message=n),placeholder:"edit me"},null,512),[[o.nr,i.message]]),(0,a._)("p",null,"Message is: "+(0,e.zw)(i.message),1)])}var i={data(){return{count:0,cardnum:0,message:6}}},c=u(89);const r=(0,c.Z)(i,[["render",l]]);var s=r},2203:function(n,t,u){u.r(t),u.d(t,{default:function(){return _}});var a=u(3396);const e={class:"about"},o=(0,a._)("h1",null,"This is an about change page",-1),l=(0,a._)("h1",null,"To-Do List",-1);function i(n,t,u,i,c,r){const s=(0,a.up)("to-do-item"),m=(0,a.up)("BlackJack");return(0,a.wg)(),(0,a.iD)("div",e,[o,l,(0,a.Wm)(s),(0,a.Wm)(m)])}var c=u(5642),r=u(7139);const s={id:"app"},m=["onClick"];function d(n,t,u,e,o,l){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.products,(n=>((0,a.wg)(),(0,a.iD)("li",{key:n.id},(0,r.zw)(n),1)))),128))]),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.mytables,(n=>((0,a.wg)(),(0,a.iD)("li",{key:n.id},[(0,a.Uk)((0,r.zw)(n.name)+" "+(0,r.zw)(n.quantity)+" ",1),(0,a._)("button",{onClick:t=>n.quantity+=1},"add",8,m)])))),128))]),(0,a._)("h2",null,"Total : "+(0,r.zw)(n.totalnumber),1)])}var k={name:"BlackJack",data(){return{products:["Boots","Jack","Tony"],mytables:[{quantity:1,name:"Boots"},{quantity:1,name:"Boots"},{quantity:1,name:"Boots"}]}},totalnumber(){return this.mytables.reduce(((n,t)=>n+t.quantity),0)}},w=u(89);const p=(0,w.Z)(k,[["render",d]]);var g=p,b={name:"AboutView",components:{ToDoItem:c.Z,BlackJack:g}};const y=(0,w.Z)(b,[["render",i]]);var _=y}}]);
//# sourceMappingURL=about.34345f0d.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9965:function(e,t,n){Promise.resolve().then(n.bind(n,5156))},5156:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(9268),l=n(6006),i=n(4864),r=n(3270),o=n(3256),s=n(2516),c=n(1947),d=n(5626);let u=(0,s.Z)({palette:{mode:"dark"}});function v(){var e;let[t,n]=(0,l.useState)(!0),[s,v]=(0,l.useState)(0),[m,h]=(0,l.useState)("$"),[f,S]=(0,l.useState)(""),g=e=>{e.preventDefault()};(0,l.useEffect)(()=>(document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchstart",g,{passive:!1}),()=>{document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",g)}),[]),(0,l.useEffect)(()=>{(async function(){var e,t;let a=await fetch("https://blockchain.info/ticker"),l=await a.json(),i=Math.round(l.USD.last);v(i);let r=1e8/i*1;h(String(null===(e=p.format)||void 0===e?void 0:e.call(p,"1"))),S(String(null===(t=j.format)||void 0===t?void 0:t.call(j,r.toString()))),n(!1)})()},[]);let x=(0,o.KG)({thousandSeparator:",",decimalScale:0,prefix:"$"}),p=(0,o.KG)({thousandSeparator:",",decimalScale:2,prefix:"$"}),j=(0,o.KG)({thousandSeparator:",",decimalScale:0}),b=(0,a.jsxs)("span",{className:"inline-flex",children:[null===(e=x.format)||void 0===e?void 0:e.call(x,s.toString())," ",(0,a.jsx)("p",{className:"ml-5 text-[#90caf9] hover:text-[#42a5f5]",onClick:()=>window.location.reload(),children:"⟳"})]});return t&&(b=(0,a.jsx)(i.Z,{size:"1.5rem"})),(0,a.jsxs)(c.Z,{theme:u,children:[(0,a.jsx)(d.ZP,{}),(0,a.jsx)("main",{className:"bg-black flex min-h-screen flex-col items-center px-5",children:(0,a.jsxs)("div",{className:"w-9/10",children:[(0,a.jsx)("div",{className:"inline-flex",children:(0,a.jsxs)("div",{className:"mt-5 mb-10 text-white text-3xl",children:["BTC/USD: ",b]})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(r.Z,{label:"Dollars",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"decimal"},value:m,onFocus:e=>{let t=e.target;t.setSelectionRange(1,t.value.length)},onChange:e=>{var t,n,a;let l=e.target.value;if("."===l[l.length-4]&&(l=l.slice(0,-1)),""===l||"$"===l){h("$"),S("");return}if("$."===l){h("$0."),S("0");return}let i=Number(null===(t=p.removeFormatting)||void 0===t?void 0:t.call(p,l)),r=String(null===(n=p.format)||void 0===n?void 0:n.call(p,i.toString()));l.endsWith(".")?r+=".":l.endsWith(".0")?r+=".0":l.endsWith(".00")||l.endsWith(".000")?r+=".00":l.endsWith("0")&&"."===l[l.length-3]&&(console.log("ennds with the decimal"),r+="0"),h(r),S(String(null===(a=j.format)||void 0===a?void 0:a.call(j,Math.round(1e8/s*i).toString())))}})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(r.Z,{label:"Sats",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"numeric"},value:f,onChange:e=>{var t,n,a;let l=Number(null===(t=j.removeFormatting)||void 0===t?void 0:t.call(j,e.target.value));h(String(null===(n=p.format)||void 0===n?void 0:n.call(p,(s*l/1e8).toString()))),S(String(null===(a=j.format)||void 0===a?void 0:a.call(j,l.toString())))}})})]})})]})}}},function(e){e.O(0,[815,253,488,744],function(){return e(e.s=9965)}),_N_E=e.O()}]);
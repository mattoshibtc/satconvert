(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9965:function(e,t,l){Promise.resolve().then(l.bind(l,5156))},5156:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var a=l(9268),n=l(6006),i=l(4864),r=l(3270),o=l(3256),s=l(2516),c=l(1947),d=l(5626);let u=(0,s.Z)({palette:{mode:"dark"}});function m(){var e;let[t,l]=(0,n.useState)(!0),[s,m]=(0,n.useState)(0),[v,h]=(0,n.useState)("$"),[f,S]=(0,n.useState)("");(0,n.useEffect)(()=>{!async function(){var e,t;let a=await fetch("https://blockchain.info/ticker"),n=await a.json(),i=Math.round(n.USD.last);m(i);let r=1e8/i*1;h(String(null===(e=x.format)||void 0===e?void 0:e.call(x,"1"))),S(String(null===(t=p.format)||void 0===t?void 0:t.call(p,r.toString()))),l(!1)}()},[]);let g=(0,o.KG)({thousandSeparator:",",decimalScale:0,prefix:"$"}),x=(0,o.KG)({thousandSeparator:",",decimalScale:2,prefix:"$"}),p=(0,o.KG)({thousandSeparator:",",decimalScale:0}),j=(0,a.jsxs)("span",{className:"inline-flex",children:[null===(e=g.format)||void 0===e?void 0:e.call(g,s.toString())," ",(0,a.jsx)("p",{className:"ml-5 text-[#90caf9] hover:text-[#42a5f5]",onClick:()=>window.location.reload(),children:"⟳"})]});return t&&(j=(0,a.jsx)(i.Z,{size:"1.5rem"})),(0,a.jsxs)(c.Z,{theme:u,children:[(0,a.jsx)(d.ZP,{}),(0,a.jsx)("main",{className:"bg-black flex min-h-screen flex-col items-center px-5",children:(0,a.jsxs)("div",{className:"w-9/10",children:[(0,a.jsx)("div",{className:"inline-flex",children:(0,a.jsxs)("div",{className:"mt-5 mb-10 text-white text-3xl",children:["BTC/USD: ",j]})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(r.Z,{label:"Dollars",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"decimal"},value:v,onFocus:e=>{let t=e.target;t.setSelectionRange(1,t.value.length)},onChange:e=>{var t,l,a;let n=e.target.value;if("."===n[n.length-4]&&(n=n.slice(0,-1)),""===n||"$"===n){h("$"),S("");return}if("$."===n){h("$0."),S("0");return}let i=Number(null===(t=x.removeFormatting)||void 0===t?void 0:t.call(x,n)),r=String(null===(l=x.format)||void 0===l?void 0:l.call(x,i.toString()));n.endsWith(".")?r+=".":n.endsWith(".0")?r+=".0":n.endsWith(".00")||n.endsWith(".000")?r+=".00":n.endsWith("0")&&"."===n[n.length-3]&&(console.log("ennds with the decimal"),r+="0"),h(r),S(String(null===(a=p.format)||void 0===a?void 0:a.call(p,Math.round(1e8/s*i).toString())))}})}),(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(r.Z,{label:"Sats",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"numeric"},className:"focus:overflow-hidden",value:f,onFocus:e=>{e.target.preventDefault(),e.target.select()},onChange:e=>{var t,l,a;let n=Number(null===(t=p.removeFormatting)||void 0===t?void 0:t.call(p,e.target.value));h(String(null===(l=x.format)||void 0===l?void 0:l.call(x,(s*n/1e8).toString()))),S(String(null===(a=p.format)||void 0===a?void 0:a.call(p,n.toString())))}})})]})})]})}}},function(e){e.O(0,[815,253,488,744],function(){return e(e.s=9965)}),_N_E=e.O()}]);
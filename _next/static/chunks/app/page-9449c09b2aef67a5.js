(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9965:function(e,t,n){Promise.resolve().then(n.bind(n,5156))},5156:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var l=n(9268),a=n(6006),i=n(4864),o=n(3270),r=n(3256),s=n(2516),c=n(1947),d=n(5626);let u=(0,s.Z)({palette:{mode:"dark"}});function v(){var e;let[t,n]=(0,a.useState)(!0),[s,v]=(0,a.useState)(0),[m,h]=(0,a.useState)("$"),[f,S]=(0,a.useState)(""),g=e=>{e.preventDefault()};(0,a.useEffect)(()=>(window.addEventListener("touchmove",g,{passive:!1}),()=>{window.removeEventListener("touchmove",g)}),[]),(0,a.useEffect)(()=>{(async function(){var e,t;let l=await fetch("https://blockchain.info/ticker"),a=await l.json(),i=Math.round(a.USD.last);v(i);let o=1e8/i*1;h(String(null===(e=p.format)||void 0===e?void 0:e.call(p,"1"))),S(String(null===(t=j.format)||void 0===t?void 0:t.call(j,o.toString()))),n(!1)})()},[]);let x=(0,r.KG)({thousandSeparator:",",decimalScale:0,prefix:"$"}),p=(0,r.KG)({thousandSeparator:",",decimalScale:2,prefix:"$"}),j=(0,r.KG)({thousandSeparator:",",decimalScale:0}),b=(0,l.jsxs)("span",{className:"inline-flex",children:[null===(e=x.format)||void 0===e?void 0:e.call(x,s.toString())," ",(0,l.jsx)("p",{className:"ml-5 text-[#90caf9] hover:text-[#42a5f5]",onClick:()=>window.location.reload(),children:"⟳"})]});return t&&(b=(0,l.jsx)(i.Z,{size:"1.5rem"})),(0,l.jsxs)(c.Z,{theme:u,children:[(0,l.jsx)(d.ZP,{}),(0,l.jsx)("main",{className:"bg-black flex min-h-screen flex-col items-center px-5",children:(0,l.jsxs)("div",{className:"w-9/10",children:[(0,l.jsx)("div",{className:"inline-flex",children:(0,l.jsxs)("div",{className:"mt-5 mb-10 text-white text-3xl",children:["BTC/USD: ",b]})}),(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(o.Z,{label:"Dollars",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"decimal"},value:m,onFocus:e=>{let t=e.target;t.setSelectionRange(1,t.value.length)},onChange:e=>{var t,n,l;let a=e.target.value;if("."===a[a.length-4]&&(a=a.slice(0,-1)),""===a||"$"===a){h("$"),S("");return}if("$."===a){h("$0."),S("0");return}let i=Number(null===(t=p.removeFormatting)||void 0===t?void 0:t.call(p,a)),o=String(null===(n=p.format)||void 0===n?void 0:n.call(p,i.toString()));a.endsWith(".")?o+=".":a.endsWith(".0")?o+=".0":a.endsWith(".00")||a.endsWith(".000")?o+=".00":a.endsWith("0")&&"."===a[a.length-3]&&(console.log("ennds with the decimal"),o+="0"),h(o),S(String(null===(l=j.format)||void 0===l?void 0:l.call(j,Math.round(1e8/s*i).toString())))}})}),(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(o.Z,{label:"Sats",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"numeric"},value:f,onFocus:e=>{e.preventDefault(),e.stopPropagation(),e.target.select()},onChange:e=>{var t,n,l;let a=Number(null===(t=j.removeFormatting)||void 0===t?void 0:t.call(j,e.target.value));h(String(null===(n=p.format)||void 0===n?void 0:n.call(p,(s*a/1e8).toString()))),S(String(null===(l=j.format)||void 0===l?void 0:l.call(j,a.toString())))}})})]})})]})}}},function(e){e.O(0,[815,253,488,744],function(){return e(e.s=9965)}),_N_E=e.O()}]);
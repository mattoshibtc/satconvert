(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9965:function(e,t,l){Promise.resolve().then(l.bind(l,5156))},5156:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var n=l(9268),a=l(6006),i=l(4864),r=l(3270),o=l(3256),s=l(2516),c=l(1947),d=l(5626);let u=(0,s.Z)({palette:{mode:"dark"}});function m(){var e;let[t,l]=(0,a.useState)(!0),[s,m]=(0,a.useState)(0),[v,h]=(0,a.useState)("$"),[f,S]=(0,a.useState)("");(0,a.useEffect)(()=>{!async function(){var e,t;let n=await fetch("https://blockchain.info/ticker"),a=await n.json(),i=Math.round(a.USD.last);m(i);let r=1e8/i*1;h(String(null===(e=x.format)||void 0===e?void 0:e.call(x,"1"))),S(String(null===(t=p.format)||void 0===t?void 0:t.call(p,r.toString()))),l(!1)}()},[]);let g=(0,o.KG)({thousandSeparator:",",decimalScale:0,prefix:"$"}),x=(0,o.KG)({thousandSeparator:",",decimalScale:2,prefix:"$"}),p=(0,o.KG)({thousandSeparator:",",decimalScale:0}),j=(0,n.jsxs)("span",{className:"inline-flex",children:[null===(e=g.format)||void 0===e?void 0:e.call(g,s.toString())," ",(0,n.jsx)("p",{className:"ml-5 text-[#90caf9] hover:text-[#42a5f5]",onClick:()=>window.location.reload(),children:"⟳"})]});return t&&(j=(0,n.jsx)(i.Z,{size:"1.5rem"})),(0,n.jsxs)(c.Z,{theme:u,children:[(0,n.jsx)(d.ZP,{}),(0,n.jsx)("main",{className:"bg-black flex min-h-screen flex-col items-center px-5",children:(0,n.jsxs)("div",{className:"w-9/10",children:[(0,n.jsx)("div",{className:"inline-flex",children:(0,n.jsxs)("div",{className:"mt-5 mb-5 text-white text-3xl",children:["BTC/USD: ",j]})}),(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(r.Z,{label:"Dollars",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"decimal"},value:v,onFocus:e=>{let t=e.target;t.setSelectionRange(1,t.value.length)},onChange:e=>{var t,l,n;let a=e.target.value;if("."===a[a.length-4]&&(a=a.slice(0,-1)),""===a||"$"===a){h("$"),S("");return}if("$."===a){h("$0."),S("0");return}let i=Number(null===(t=x.removeFormatting)||void 0===t?void 0:t.call(x,a)),r=String(null===(l=x.format)||void 0===l?void 0:l.call(x,i.toString()));a.endsWith(".")?r+=".":a.endsWith(".0")?r+=".0":a.endsWith(".00")||a.endsWith(".000")?r+=".00":a.endsWith("0")&&"."===a[a.length-3]&&(console.log("ennds with the decimal"),r+="0"),h(r),S(String(null===(n=p.format)||void 0===n?void 0:n.call(p,Math.round(1e8/s*i).toString())))}})}),(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(r.Z,{label:"Sats",variant:"standard",inputProps:{style:{fontSize:"4rem"},inputMode:"numeric"},value:f,onFocus:e=>{e.target.select(),setTimeout(()=>window.scrollTo(0,0),100)},onChange:e=>{var t,l,n;let a=Number(null===(t=p.removeFormatting)||void 0===t?void 0:t.call(p,e.target.value));h(String(null===(l=x.format)||void 0===l?void 0:l.call(x,(s*a/1e8).toString()))),S(String(null===(n=p.format)||void 0===n?void 0:n.call(p,a.toString())))}})})]})})]})}}},function(e){e.O(0,[815,253,488,744],function(){return e(e.s=9965)}),_N_E=e.O()}]);
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),i=a(3),o=a(5),l=a(6),u=a(8),d=a(7),j=(a(13),a(0)),b=function(e){var t=e.options;return Object(j.jsxs)("div",{className:"Counter__controls",children:[Object(j.jsx)("button",{type:"button","data-name":"good",onClick:t,children:"Good"}),Object(j.jsx)("button",{type:"button","data-name":"neutral",onClick:t,children:"Neutral"}),Object(j.jsx)("button",{type:"button","data-name":"bad",onClick:t,children:"Bad"})]})},h=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return 0===t&&0===n&&0===a?Object(j.jsx)("p",{children:"No feedback given"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"Counter__value",children:["Good: ",t]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"Counter__value",children:["Neutral: ",a]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"Counter__value",children:["Bad: ",n]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"Counter__value",children:["Total: ",c]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"Counter__value",children:["Positive Feedback: ",r,"%"]})]})},p=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("div",{className:"Counter__controls",children:[Object(j.jsx)("h1",{children:t}),a]})},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue,all:e.props.initialValue,positive:e.props.initialValue},e.changeValue=function(t){var a=t.target.dataset.name;e.setState((function(e){var t;return t={},Object(i.a)(t,a,e[a]+1),Object(i.a)(t,"all",e.all+1),t}))},e.countPositiveFeedbackPercentage=function(){return(0!==e.state.good?e.state.good/e.state.all*100:0).toFixed(2)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.countPositiveFeedbackPercentage(),t=this.state,a=t.good,n=t.neutral,c=t.bad,r=t.all;return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(b,{options:this.changeValue})}),Object(j.jsx)(p,{title:"Statistics",children:Object(j.jsx)(h,{good:a,neutral:n,bad:c,total:r,positivePercentage:e})})]})}}]),a}(c.a.Component);O.defaultProps={initialValue:0};var v=O,x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{})})};s.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9ae5b580.chunk.js.map
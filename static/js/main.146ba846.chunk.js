(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var s=e(2),c=e.n(s),i=e(4),o=e.n(i),a=e(5),r=e(7),u=e(6),l=e(8),d=(e(13),e(0)),h=function(t){function n(){var t;Object(a.a)(this,n);for(var e=arguments.length,s=new Array(e),c=0;c<e;c++)s[c]=arguments[c];return(t=Object(u.a)(this,n,[].concat(s))).state={minutes:0,secoends:0,isRunning:!1},t.counter=function(){var n=t.state,e=n.secoends,s=n.isRunning;59===e&&!0===s&&t.setState((function(t){return{minutes:t.minutes+1,secoends:0}})),!0===s&&t.setState((function(t){return{secoends:t.secoends+1}}))},t.onClickStartBtn=function(){t.setState({isRunning:!0})},t.onClickStopBtn=function(){t.setState({isRunning:!1})},t.onClickResetBtn=function(){t.setState({isRunning:!1,minutes:0,secoends:0})},t}return Object(l.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.counter,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,n=t.minutes,e=t.secoends,s=n<10?"0".concat(n):n,c=e<10?"0".concat(e):e;return Object(d.jsxs)("div",{className:"bg",children:[Object(d.jsx)("h1",{className:"head",children:"Stopwatch"}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"h2-con",children:[Object(d.jsx)("img",{alt:"stopwatch",src:"https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "}),Object(d.jsx)("p",{className:"para",children:" Timer"})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"count",children:[s,":",c]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.onClickStartBtn,className:"cusbtn",type:"button",children:"Start"}),Object(d.jsx)("button",{onClick:this.onClickStopBtn,className:"cusbtn1",type:"button",children:"Stop"}),Object(d.jsx)("button",{onClick:this.onClickResetBtn,className:"cusbtn2",type:"button",children:"Reset"})]})]})]})]})}}])}(s.Component),j=h,b=(e(15),function(){return Object(d.jsx)(j,{})});o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.146ba846.chunk.js.map
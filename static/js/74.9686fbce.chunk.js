(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[74],{74:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(9439),i=n(2791),s=n(1087),a=n(6842),o=n(184),c=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(c,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,d=n(7892),h=n.n(d),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,s=t.startDate,a=t.endDate,c=t.summary,u=t.highlights;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:i,children:n})," - ",r]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",h()(s).format("MMMM YYYY")," - ",a?h()(a).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,o.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,u?(0,o.jsx)("ul",{className:"points",children:u.map((function(e){return(0,o.jsx)("li",{children:e},e)}))}):null]})},p=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,o.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};p.defaultProps={data:[]};var g=p,y=n(9142);function v(e,t,n){return(t=(0,y.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=$($({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:a,children:(0,o.jsx)("span",{children:s})}),(0,o.jsx)("div",{className:"skillbar-bar",style:c}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var S=x,D=function(e){var t=e.skills,n=e.categories,s=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),a=(0,i.useState)(s),c=(0,r.Z)(a,2),u=c[0],l=c[1],d=function(e){var t=Object.keys(u).reduce((function(t,n){return $($({},t),{},v({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,o.jsx)(b,{label:e,active:u,handleClick:d},e)}))}),(0,o.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,o.jsx)(S,{categories:n,data:e},e.title)}))}()})]})};D.defaultProps={skills:[],categories:[]};var M=D,w=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(s.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},O=[{school:"Oregon State University",degree:"B.S. Computer Science",link:"https://oregonstate.edu",year:2016}],k=[{name:"Quil",position:"Product Manager",url:"https://getquil.com",startDate:"2022-01-01",summary:"Quil provides income protection when you need it most",highlights:[]},{name:"New Relic",position:"Senior Software Engineer",url:"http://newrelic.com",startDate:"2019-07-01",summary:"Senior software engineer on logging team",highlights:["Developed and maintained UI interface for user to manage their logging and customize logging features"]},{name:"Acorns",position:"Software Engineer",url:"https://acrons.com",startDate:"2018-01-01",endDate:"2020-01-01",summary:"Investing app",highlights:["Build web platform for retirement accounts"]},{name:"XPO Logicists",position:"Software Engineer",url:"http://enveritas.org",startDate:"2016-09-01",endDate:"2018-01-01",summary:"Shipping and logistics",highlights:["Continuous integration of newest technologies to customer facing apps used to ship on average 160,000 shipments every day. Top contributor for new designs, bug fixes, and technology enhancements. Collaborate with UX designers, business analysts, and fellow developers on a daily basis to ensure high quality code and optimization."]},{name:"CDK Gloabl",position:"Software Engineer",url:"https://zenysis.com",startDate:"2016-02-01",endDate:"2016-03-01",summary:"Engineer",highlights:["Created intern app for college inters to stay connected","Lead project to implemented Okta integration"]}],N=n(3433),C=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Next.JS",competency:3,category:["Web Development","Javascript"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]}].map((function(e){return $($({},e),{},{category:e.category.sort()})})),Y=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(0,N.Z)(new Set(C.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:Y[t]}})),L={Education:function(){return(0,o.jsx)(l,{data:O})},Experience:function(){return(0,o.jsx)(g,{data:k})},Skills:function(){return(0,o.jsx)(M,{skills:C,categories:_})},References:function(){return(0,o.jsx)(w,{})}},P=function(){return(0,o.jsx)(a.Z,{title:"Resume",description:"Sonja Olson's Resume",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:Object.keys(L).map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(L).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,o.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:o,D:h,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},j="en",$={};$[j]=g;var b=function(e){return e instanceof M},x=function e(t,n,r){var i;if(!t)return j;if("string"==typeof t){var s=t.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,i=o}return!r&&i&&(j=i),i||!r&&j},S=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},D=v;D.l=x,D.i=b,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,l=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(o)},m=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,g):f(0,g+1);case c:var j=this.$locale().weekStart||0,$=(p<j?p+7:p)-j;return f(r?y-$:y+(6-$),g);case o:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=D.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],m=c===o?this.$D+(t-this.$W):t;if(c===u||c===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,l){var h,f=this;r=Number(r);var m=D.p(l),p=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===o)return p(1);if(m===c)return p(7);var g=(h={},h[s]=t,h[a]=n,h[i]=e,h)[m]||1,y=this.$d.getTime()+r*g;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},d=function(e){return D.s(s%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||m[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var m,p=D.p(h),g=S(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,j=D.m(this,g);return j=(m={},m[d]=j/12,m[u]=j,m[l]=j/3,m[c]=(v-y)/6048e5,m[o]=(v-y)/864e5,m[a]=v/n,m[s]=v/t,m[i]=v/e,m)[p]||v,f?j:D.a(j)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),w=M.prototype;return S.prototype=w,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,M,S),e.$i=!0),S},S.locale=x,S.isDayjs=b,S.unix=function(e){return S(1e3*e)},S.en=$[j],S.Ls=$,S.p={},S}()}}]);
//# sourceMappingURL=74.9686fbce.chunk.js.map
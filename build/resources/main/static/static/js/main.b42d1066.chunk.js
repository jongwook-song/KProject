(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(22),o=a.n(c),r=(a(30),a(31),a(32),a(4)),l=a(5),i=a(8),h=a(7),u=a(9),d=a.n(u),p=a(25),g=a(23),j=a.n(g),b=(a(52),a(53),a(2)),f=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onDateChange=function(e){var t=j()(e).format("YYYY.MM.DD");n.setState({date:t}),n.props.onDatePChange(t)},n.state={date:new Date},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"calender-div",children:Object(b.jsx)(p.a,{onChange:this.onDateChange})})}}]),a}(s.a.Component),m=a(24),O=(a(57),a(60)),P=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSearchBtn=function(){n.props.onSearchBtn(n.state.searchText)},n.onSearch=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.updatePage=function(e){n.props.updatePage(e)},n.state={searchText:null},n}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this,t=this.props.newsList,a=10*Math.floor(this.props.pageInfo.currentPage/10),n=[],s=(this.props.pageInfo.currentPage,-1),c=-1,o=a;o<a+10&&o<this.props.pageInfo.totalPages;o++)n.push(o);return s=n.length<1||0===n[0]?-1:n[0]-1,c=10===n&&n[n.length-1]<this.props.pageInfo.totalPages?n[n.length-1]+1:-1,Object(b.jsxs)("div",{className:"new-list-div",children:[null!==this.props.date?Object(b.jsxs)("div",{className:"search-div",children:[Object(b.jsx)("input",{type:"text",name:"searchText",className:"search-detail",onChange:this.onSearch}),Object(b.jsx)("button",{className:"search-btn",onClick:function(t){e.onSearchBtn()},children:"\uac80\uc0c9"})]}):null,null!==t?Object(b.jsx)("div",{className:"news-div",children:t.map((function(e,t,a){return Object(b.jsx)("div",{className:t===a.length-1?"news-content last":"news-content",children:Object(b.jsxs)("div",{className:"news-content-info",children:[Object(b.jsx)("div",{className:"news-title",onClick:function(){return window.open([e.url],"_blank")},children:Object(b.jsx)("span",{children:e.title})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:e.content})})]})},e.id)}))}):null,null!==n?Object(b.jsx)("div",{className:"page-div",children:Object(b.jsxs)(O.a,{horizontal:!0,children:[-1===s?null:Object(b.jsx)(O.a.Item,{onClick:function(){return e.updatePage(s)},children:"\uc774\uc804"}),n.map((function(t,a){return a.length-1!==t&&Object(b.jsx)(O.a.Item,{className:e.props.pageInfo.currentPage===t?"select":null,onClick:function(){return e.updatePage(t)},children:t+1},t)})),-1===c?null:Object(b.jsx)(O.a.Item,{onClick:function(){return e.updatePage(c)},children:"\ub2e4\uc74c"})]})}):null]})}}]),a}(s.a.Component),x=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onDatePChange=function(e){n.setState({date:e});var t=new Object;t.searchdate=e,t.currentPage=0,""!==e&&e.length>0?d.a.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/news",t).then((function(e){console.log(e.data),n.setState({newsList:e.data.content,pageInfo:{currentPage:e.data.pageable.pageNumber,totalElements:e.data.totalElements,totalPages:e.data.totalPages}})})):n.setState({newsList:[],pageInfo:{currentPage:0,totalElements:-1,totalPages:-1}})},n.updatePage=function(e){n.setState({pageInfo:{currentPage:e}});var t=new Object;t.searchdate=n.state.date,t.currentPage=e,null===n.state.searchText||n.state.searchText.length<1?d.a.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/news",t).then((function(e){n.setState({newsList:e.data.content,pageInfo:{currentPage:e.data.pageable.pageNumber,totalElements:e.data.totalElements,totalPages:e.data.totalPages}})})):(t.searchText=n.state.searchText,d.a.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/newsdetail/",t).then((function(e){n.setState({newsList:e.data.content,pageInfo:{currentPage:e.data.pageable.pageNumber,totalElements:e.data.totalElements,totalPages:e.data.totalPages}})})))},n.onSearchBtn=function(e){n.setState({searchText:e});var t=new Object;t.searchdate=n.state.date,t.searchText=e,t.currentPage=0,""!==t?d.a.get("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/newsdetail/",t).then((function(e){console.log(e),n.setState({newsList:e.data.content,pageInfo:{currentPage:e.data.pageable.pageNumber,totalElements:e.data.totalElements,totalPages:e.data.totalPages}})})):n.setState({newsList:[],pageInfo:{currentPage:0,totalElements:-1,totalPages:-1}})},n.state={date:null,newsList:null,searchText:null,pageInfo:{currentPage:0,totalElements:-1,totalPages:-1}},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main-div",children:[Object(b.jsx)("div",{className:"kproject-head",children:Object(b.jsx)("h1",{className:"kproject-title",children:"KProejct"})}),Object(b.jsxs)("div",{className:"kproject-content",children:[Object(b.jsx)(f,{onDatePChange:this.onDatePChange}),Object(b.jsx)(P,{date:this.state.date,onSearchBtn:this.onSearchBtn,newsList:this.state.newsList,pageInfo:this.state.pageInfo,updatePage:this.updatePage})]})]})}}]),a}(s.a.Component);var v=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),w()}},[[58,1,2]]]);
//# sourceMappingURL=main.b42d1066.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{ATf1:function(e,t,a){"use strict";var n=a("mZ4U"),l=a("fbTi");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Bm7G");var r=n(a("uUMF"));a("mKHy");var u=n(a("TVHA"));a("dyE5");var d=n(a("9dHm"));a("FdQn");var o=n(a("7yMw"));a("au98");var c=n(a("PAPO"));a("caz+");var s=n(a("w6jm"));a("qPrD");var f=n(a("aqTm"));a("9VH2");var i=n(a("tahc"));a("tXdJ");var m=n(a("vWMa")),h=n(a("43Yg")),v=n(a("/tCh")),E=n(a("scpF")),p=n(a("O/V9")),C=n(a("8aBX"));a("+JSM");var A,D,g,T,I=n(a("uDdG")),y=l(a("uqIC")),O=(n(a("jCnN")),a("LneV")),w=a("o/P3"),k=n(a("eKsz")),N=I.default.Item,S=(A=(0,w.createForm)(),D=(0,O.connect)(function(e){var t=e.user,a=e.loading;return{user:t,loading:a.models.user}}),A(g=D((T=function(e){function t(e){var a;return(0,h.default)(this,t),a=(0,E.default)(this,(0,p.default)(t).call(this,e)),a.componentDidMount=function(){var e=localStorage.getItem("userId");a.queryCurrent(e)},a.queryCurrent=function(e){var t=a.props.dispatch;t({type:"user/queryCurrent",payload:{userId:e},callback:function(e){if("success"===e.status){var t=e.data.customerUserList;a.setState({userInfo:e.data,visible:!1,customerUserList:t})}}})},a.goBack=function(){window.history.back()},a.handleItemChange=function(e,t){var n=a.props.dispatch;a.state.postData[t]=e,"ORGANIZATION_ID"===t&&n({type:"serviceAdd/queryCustomer",payload:{Id:e},callback:function(e){if("success"===e.status){var t=e.data.CUSTOMER_CONTACT,n=void 0===t?[]:t;a.setState({customerContact:n})}}}),a.setState({})},a.handleSwitch=function(e){a.setState({checked:e})},a.handleChangeData=function(e,t){var n=a.state.checked;console.log("data",e.valueOf()),n?(a.state.postData["START_DATE"]=e.valueOf(),a.state.postData["END_DATE"]=e.valueOf()):a.state.postData[t]=e.valueOf(),a.state[t]=e,a.setState({})},a.handleAdd=function(){var e=a.props.dispatch,t=a.state.postData;e({type:"serviceAdd/serviceAdd",payload:t})},a.state={customerUserList:[],postData:{},date:null,customerContact:[],checked:!1,START_DATE:null,END_DATE:null},a}return(0,C.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this;console.log("ssss",this.state);var t=this.state,a=t.customerUserList,n=t.customerContact,l=t.checked,h=t.START_DATE,v=t.END_DATE,E=t.postData,p=this.props.form;p.getFieldProps,p.getFieldError;_.map(a,function(e){e.label=e.NAME,e.value=e.ID}),_.map(n,function(e){e.label="".concat(e.CONTACT,"(").concat(e.MOBILE_PHONE,")"),e.value=e.ID});return y.default.createElement("div",{className:k.default.serviceAdd},y.default.createElement("div",null,y.default.createElement(i.default,{mode:"dark",icon:y.default.createElement(m.default,{type:"left",size:"lg"}),onLeftClick:this.goBack,rightContent:[]},"\u65b0\u4efb\u52a1")),y.default.createElement("div",null,y.default.createElement(I.default,null,y.default.createElement(f.default,{clear:!0,onChange:function(t){return e.handleItemChange(t,"SUBJECT")}},"\u6807\u9898"),y.default.createElement(s.default,{value:[E.ORGANIZATION_ID],data:a,cols:1,onOk:function(t){return e.handleItemChange(t[0],"ORGANIZATION_ID")},className:"forss"},y.default.createElement(I.default.Item,{arrow:"horizontal"},"\u516c\u53f8")),y.default.createElement(s.default,{value:[E.CONTACT_ID],data:n,cols:1,onOk:function(t){return e.handleItemChange(t[0],"CONTACT_ID")},className:"forss"},y.default.createElement(I.default.Item,{arrow:"horizontal"},"\u8054\u7cfb\u4eba")),y.default.createElement(c.default,{title:"\u5730\u5740",autoHeight:!0,onChange:function(t){return e.handleItemChange(t,"ADDRESS")}})),y.default.createElement(o.default,{size:"lg"}),y.default.createElement(I.default,null,y.default.createElement(N,{extra:y.default.createElement(d.default,{checked:l,onChange:function(t){return e.handleSwitch(t)}})},"\u5168\u5929"),y.default.createElement(u.default,{value:h,onChange:function(t){return e.handleChangeData(t,"START_DATE")},mode:l?"date":"datetime"},y.default.createElement(I.default.Item,{arrow:"horizontal"},"\u5f00\u59cb\u65f6\u95f4")),y.default.createElement(u.default,{value:v,onChange:function(t){return e.handleChangeData(t,"END_DATE")},mode:l?"date":"datetime"},y.default.createElement(I.default.Item,{arrow:"horizontal"},"\u7ed3\u675f\u65f6\u95f4"))),y.default.createElement(o.default,{size:"lg"}),y.default.createElement(I.default,{renderHeader:function(){return y.default.createElement("div",{style:{color:"#000",fontSize:17}},"\u63cf\u8ff0")}},y.default.createElement(c.default,{defaultValue:"\u6211\u662f\u63cf\u8ff0...",onChange:function(t){return e.handleItemChange(t,"DESCRIBE")},rows:5,count:100}))),y.default.createElement("div",{style:{display:"flex",position:"absolute",bottom:16,width:"100%",justifyContent:"space-around"}},y.default.createElement(r.default,{onClick:this.goBack,style:{width:"45%"},type:"warning"},"\u53d6\u6d88"),y.default.createElement(r.default,{onClick:this.handleAdd,style:{width:"45%"},type:"primary"},"\u4fdd\u5b58")))}}]),t}(y.Component),g=T))||g)||g);t.default=S},eKsz:function(e,t,a){e.exports={serviceAdd:"serviceAdd___ZVVmQ"}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{HVxL:function(e,t,a){e.exports=a.p+"static/logoO.1703c5fa.png"},Qwtm:function(e,t,a){"use strict";var l=a("mZ4U"),o=a("fbTi");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DpyA");var r=l(a("3dmf"));a("CTW5");var u=l(a("As5V"));a("Bler");var s=l(a("CS+4"));a("twMU");var n=l(a("T310"));a("rR2d");var c=l(a("tAas"));a("R1C7");var d=l(a("O4A6"));a("PZXF");var i=l(a("GI1m")),m=l(a("43Yg")),f=l(a("/tCh")),p=l(a("scpF")),g=l(a("O/V9")),v=l(a("8aBX"));a("xKti");var h,w,y,I,E=l(a("PXOp")),P=o(a("uqIC")),b=a("LneV"),N=(l(a("5Tjw")),l(a("jCnN")),l(a("wfkH"))),S=(a("sF2l"),l(a("m0DI"))),k=(l(a("HVxL")),l(a("XIKz")),h=E.default.create(),w=(0,b.connect)(function(e){var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/login"]}}),h(y=w((I=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,p.default)(this,(0,g.default)(t).call(this,e)),a.handleSubmit=function(e){var t=a.props.dispatch;e.preventDefault(),a.props.form.validateFields(function(e,a){if(console.log("999",a),!e){console.log("Received values of form: ",a);var l=a.remember,o=a.password,r=a.userName;l?(localStorage.setItem("mPassword",o),localStorage.setItem("mUserName",r)):(localStorage.setItem("mPassword",""),localStorage.setItem("mUserName","")),t({type:"user/login",payload:a})}})},a.state={},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.props.dispatch,N.default.get(this.props.location.query,"code"),N.default.get(this.props.location.query,"state")}},{key:"componentDidMount",value:function(){console.log("props",this.props.location);var e=N.default.get(this.props.location.query,"code");console.log("code2",e)}},{key:"render",value:function(){var e=this.props.loading,t=void 0!==e&&e,a=this.props.form.getFieldDecorator;return P.default.createElement("div",{className:S.default.welcomePage},P.default.createElement(i.default,{toast:!0,text:"\u767b\u5f55\u4e2d...",animating:t}),P.default.createElement(c.default,{className:"logo"},P.default.createElement(d.default,{shape:"square",src:localStorage.getItem("logoImgPath"),size:64,icon:"user"}),P.default.createElement("div",{className:"title"},localStorage.getItem("title"))),P.default.createElement(c.default,null,P.default.createElement(E.default,{onSubmit:this.handleSubmit,className:"login-form"},P.default.createElement(E.default.Item,null,a("userName",{initialValue:localStorage.getItem("mUserName"),rules:[{required:!0,message:"Please input your username!"}]})(P.default.createElement(s.default,{prefix:P.default.createElement(n.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),P.default.createElement(E.default.Item,null,a("password",{initialValue:localStorage.getItem("mPassword"),rules:[{required:!0,message:"Please input your Password!"}]})(P.default.createElement(s.default,{prefix:P.default.createElement(n.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),P.default.createElement(E.default.Item,null,a("remember",{valuePropName:"checked",initialValue:!0})(P.default.createElement(u.default,null,"\u8bb0\u4f4f\u5bc6\u7801")),P.default.createElement(r.default,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")))))}}]),t}(P.Component),y=I))||y)||y),x=k;t.default=x},m0DI:function(e,t,a){e.exports={welcomePage:"welcomePage___nuIPf"}}}]);
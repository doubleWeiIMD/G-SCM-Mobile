(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{cXvv:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3"));r("HVTF");var d=a(r("OT5E")),s=r("fmEU"),o=(a(r("usdK")),{namespace:"order",state:{orderDList:[],order:{}},effects:{getOrderDetail:u.default.mark(function e(t,r){var a,n,o,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=t.callback,o=r.call,c=r.put,e.next=4,o(s.getOrderDetail,a);case 4:if(l=e.sent,"success"!==l.status){e.next=11;break}return e.next=8,c({type:"save",payload:{order:l.data.order,orderDList:l.data.orderDList}});case 8:n&&n(l),e.next=14;break;case 11:return d.default.fail(l.message,1),e.next=14,c({type:"save",payload:{order:{},orderDList:[]}});case 14:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,n.default)({},e,t.payload)},saveCurrentUser:function(e,t){return(0,n.default)({},e,{currentUser:t.payload||{}})},changeNotifyCount:function(e,t){return(0,n.default)({},e,{currentUser:(0,n.default)({},e.currentUser,{notifyCount:t.payload.totalCount,unreadCount:t.payload.unreadCount})})}}});t.default=o}}]);
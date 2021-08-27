(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{181:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(45),o=n.n(a),i=n(6),s=n(7),l=n.n(s),u=n(12),j=n(4),d=n(209),b=n(213),p=n(195),h=n(215),x=n(192),m=n(194),f=n(196),O=n(208),v=n(198),g=n(20),y=n(3),w=function(e,t,n,r){return e?e.map((function(e){return Object(y.jsxs)(x.a,{my:"2",children:[Object(y.jsxs)(m.a,{children:["size"===e.name&&"Rozmiary:","colors"===e.name&&"Kolory:"]}),e.options.map((function(e){return Object(y.jsx)(p.b,{minw:"25px",h:"25px",px:"1",mx:"2",bgColor:t.id===e.id?r+".100":r+".50",fontSize:"xs",cursor:"pointer",onClick:function(){return n(e)},children:e.name},e.id)}))]},e.id)})):null};function k(e){var t=e.product,n=Object(r.useContext)(ce),c=Object(r.useState)({}),a=Object(j.a)(c,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){t.variant_groups.length>0&&t.variant_groups.map((function(e){return e.name&&i(e.options[0])}))}),[t.variant_groups]),Object(y.jsxs)(p.a,{m:"5",maxW:"300px",w:"100%",minH:"400px",borderRadius:"lg",borderWidth:"1px",overflow:"hidden",userSelect:"none",position:"relative",children:[Object(y.jsxs)(p.a,{h:"300px",p:"2",pos:"relative",overflow:"hidden",children:[Object(y.jsx)(h.a,{src:t.media.source,alt:t.name,w:"100%",h:"100%",borderRadius:"lg",objectFit:"cover"}),t.is.sold_out&&Object(y.jsx)(x.a,{w:"100%",h:"100%",borderRadius:"lg",pos:"absolute",top:"0",left:"0",justifyContent:"center",alignItems:"center",bgColor:"rgba(255,255,255,.6)",children:Object(y.jsx)(m.a,{fontWeight:"bold",fontSize:"lg",children:"Wyprzedane"})})]}),Object(y.jsxs)(x.a,{flexDir:"column",px:"6",h:"calc(100% - 300px)",children:[Object(y.jsx)(p.a,{as:g.b,to:"/przedmiot/"+t.permalink,fontWeight:"semibold",fontSize:"xl",isTruncated:!0,children:t.name}),Object(y.jsxs)(x.a,{flexDir:"column",h:"100%",justifyContent:"space-between",children:[Object(y.jsx)(m.a,{fontSize:"sm",textColor:"gray.500",dangerouslySetInnerHTML:{__html:t.description}}),w(t.variant_groups,o,i,n.colorScheme),Object(y.jsx)(f.a,{}),Object(y.jsxs)(x.a,{justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(m.a,{fontSize:"lg",fontWeight:"bold",my:"5",children:t.price.formatted_with_code}),Object(y.jsx)(p.a,{_active:{transform:"scale(0.9)"},cursor:t.is.sold_out?"not-allowed":"pointer",onClick:function(){return n.checkBeforeAddingToCart(t.id,t.variant_groups,o,t.is.sold_out)},children:Object(y.jsx)(O.a,{label:"Dodaj do koszyka",children:Object(y.jsx)(p.b,{backgroundColor:"gray.300",p:"2",children:Object(y.jsx)(v.a,{})})})})]})]})]})]})}var S=n(199),z=n(119);function _(e){var t,n,c=e.cart,a=Object(r.useContext)(ce);return c?Object(y.jsxs)(x.a,{backgroundColor:a.colorScheme+".50",p:"5",pos:"sticky",top:"0",zIndex:"1",boxShadow:"md",children:[Object(y.jsx)(p.a,{as:g.b,to:"/",fontSize:"md",fontWeight:"bold",children:"cmmrc"}),Object(y.jsx)(f.a,{}),Object(y.jsxs)(x.a,{as:g.b,to:"/cart",pos:"relative",justifyContent:"center",alignItems:"center",cursor:"pointer",children:[Object(y.jsx)(m.a,{fontSize:"lg",children:Object(y.jsx)(z.a,{icon:"ant-design:shopping-cart-outlined"})}),Object(y.jsx)(p.b,{pos:"absolute",left:"3",top:"-3",fontSize:"sm",fontWeight:"bold",color:"white",bgColor:a.colorScheme+".900",p:"2",overflow:"hidden",maxH:"20px",children:null===c||void 0===c||null===(t=c.line_items)||void 0===t?void 0:t.length}),Object(y.jsx)(S.a,{colorScheme:a.colorScheme,ml:"6",children:null===c||void 0===c||null===(n=c.subtotal)||void 0===n?void 0:n.formatted_with_code})]})]}):"\u0141adowanie..."}var C=n(16),W=n(70),T=n(203),D=n(216),R=n(211),I=n(204),q=n(200),E=n(205),A=n(201),N=n(212),B=n(95),H=n(120),P=new(n.n(H).a)("pk_test_318261bb29960dc80fd327dc51dd227d6a26a178c50c6",!0);function F(e){var t=e.checkoutToken;return Object(y.jsxs)(p.a,{children:[Object(y.jsx)(q.a,{fontSize:"xl",my:"6",children:"Podsumowanie zam\xf3wienia"}),t.live.line_items.map((function(e){return Object(y.jsxs)(x.a,{my:"4",justifyContent:"space-between",children:[Object(y.jsxs)(p.a,{children:[Object(y.jsx)(m.a,{fontWeight:"bold",children:e.name}),e.selected_options.length>0&&e.selected_options.map((function(t){return Object(y.jsxs)(m.a,{fontWeight:"normal",fontSize:"md",children:["size"===t.group_name&&"Rozmiar: ","color"===t.group_name&&"Kolor: ",e.selected_options.map((function(e){return e.option_name}))]},t.group_id)}))]}),Object(y.jsx)(m.a,{children:e.quantity+" x "+e.price.formatted_with_code})]},e.id)})),Object(y.jsx)(A.a,{}),Object(y.jsxs)(x.a,{fontWeight:"bold",justifyContent:"space-between",my:"4",children:[Object(y.jsx)(m.a,{children:"Cena za wszystko:"}),Object(y.jsx)(m.a,{color:"green",children:t.live.subtotal.formatted_with_code})]})]})}var J=n(71),M=n(121),K=Object(M.a)("pk_test_51JRhouFS0xxaWoVI92bBVvAlRWZavuc9LqJ5TakBGB2PqngYcxjNTkoeGARplixeKSvf4kuHkNwSNS0Fj9ubXgJB00IFwAGlyu");function L(e){var t=e.setStep,n=e.shippingData,c=e.checkoutToken,a=e.onCaptureCheckout,o=Object(r.useContext)(ce),i=Object(r.useState)(!1),s=Object(j.a)(i,2),b=s[0],h=s[1],m=Object(d.a)(),O=function(){var e=Object(u.a)(l.a.mark((function e(r,o,i){var s,u,j,d,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),i&&o){e.next=3;break}return e.abrupt("return");case 3:return s=o.getElement(J.CardElement),e.next=6,i.createPaymentMethod({type:"card",card:s});case 6:if(u=e.sent,j=u.error,d=u.paymentMethod,!j){e.next=13;break}return e.abrupt("return",m({title:"Wyst\u0105pi\u0142 b\u0142\u0105d.",description:j.message,status:"error",duration:9e3,isClosable:!0}));case 13:return h(!0),b={line_items:c.live.line_items,customer:{firstname:n.firstname,lastname:n.lastname,email:n.email},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},e.next=17,a(c.id,b);case 17:h(!1),t(3);case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(y.jsxs)(p.a,{children:[Object(y.jsx)(F,{checkoutToken:c}),console.log(c.live.line_items),Object(y.jsx)(A.a,{}),Object(y.jsxs)(p.a,{children:[Object(y.jsx)(q.a,{my:"6",fontSize:"xl",children:"Metoda p\u0142atno\u015bci"}),Object(y.jsx)(J.Elements,{stripe:K,children:Object(y.jsx)(J.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(y.jsxs)("form",{onSubmit:function(e){return O(e,n,r)},children:[Object(y.jsx)(J.CardElement,{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(R.a,{colorScheme:o.colorScheme,variant:"outline",my:"5",onClick:function(){return t(1)},children:"Wr\xf3\u0107"}),Object(y.jsx)(f.a,{}),Object(y.jsxs)(R.a,{type:"submit",isDisabled:!r,colorScheme:o.colorScheme,isLoading:b,my:"5",children:["Zap\u0142a\u0107 (",c.live.subtotal.formatted_with_code,")"]})]})]})}})})]})]})}var U=n.p+"static/media/undraw_Done_re_oak4.920c7ab7.svg";function G(){var e=Object(r.useContext)(ce);return Object(y.jsxs)(x.a,{flexDir:"column",alignItems:"center",children:[Object(y.jsx)(q.a,{my:"6",fontSize:"xl",children:"Twoje zam\xf3wienie zosta\u0142o zarejestowane! \ud83d\ude0e"}),Object(y.jsx)(h.a,{src:U,h:"200px"}),Object(y.jsx)(f.a,{}),Object(y.jsx)(R.a,{as:g.b,to:"/",maxW:"max-content",my:"6",colorScheme:e.colorScheme,children:"Strona g\u0142\xf3wna"})]})}var V=function(e){var t=e.id,n=e.label,r=e.inputType,c=void 0===r?"text":r,a=e.placeholder,o=e.helperText,i=e.register,s=e.isRequired;return Object(y.jsxs)(W.a,{id:t,my:"5",isRequired:s,children:[Object(y.jsx)(T.a,{children:n}),Object(y.jsx)(D.a,Object(C.a)({type:c,placeholder:a},i(t))),Object(y.jsx)(W.b,{children:o})]})};function Z(e){var t=e.cart,n=e.onCaptureCheckout,c=Object(r.useState)(1),a=Object(j.a)(c,2),o=a[0],i=a[1],s=Object(r.useState)(null),b=Object(j.a)(s,2),h=b[0],O=b[1],v=Object(r.useState)({}),w=Object(j.a)(v,2),k=w[0],S=w[1],z=Object(d.a)(),_=Object(B.b)(),C=_.register,W=_.handleSubmit,T=Object(r.useContext)(ce);Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,O(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),z({title:"Wyst\u0105pi\u0142 b\u0142\u0105d.",description:"Nie mo\u017cemy wczyta\u0107 ID zam\xf3wienia. Spr\xf3buj ponownie p\xf3\u017aniej.",status:"error",duration:9e3,isClosable:!0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var D=function(){return Object(y.jsxs)(p.a,{as:"form",onSubmit:function(e){return(t=e).preventDefault(),S({firstname:t.target[0].value,lastname:t.target[1].value,email:t.target[2].value}),void i(2);var t},children:[Object(y.jsx)(V,{id:"firstname",label:"Imi\u0119",placeholder:"Jan",isRequired:!0,register:C}),Object(y.jsx)(V,{id:"lastname",label:"Nazwisko",placeholder:"Kowalski",isRequired:!0,register:C}),Object(y.jsx)(V,{id:"email",label:"E-mail",type:"email",placeholder:"jan_kowalski@example.com",helperText:"Nigdy nie udost\u0119pniamy twojego adresu e-mail.",isRequired:!0,register:C}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(R.a,{as:g.b,to:"/cart",colorScheme:T.colorScheme,variant:"outline",my:"5",children:"Wr\xf3\u0107 do koszyka"}),Object(y.jsx)(f.a,{}),Object(y.jsx)(R.a,{colorScheme:T.colorScheme,my:"5",type:"submit",children:"Dalej"})]})]})},H=function(){return 1===o?"0":2===o?"50":3===o?"100":0};return Object(y.jsxs)(I.a,{border:"1px",borderRadius:"lg",my:"6",minH:"400px",children:[Object(y.jsx)(q.a,{fontSize:"3xl",py:"6",children:Object(y.jsx)(E.a,{children:"Checkout"})}),Object(y.jsx)(A.a,{}),Object(y.jsxs)(x.a,{py:"2",alignItems:"center",justifyContent:"space-between",children:[Object(y.jsx)(N.a,{value:H(),thickness:"5px",size:"50px",children:Object(y.jsxs)(N.b,{children:[H(),"%"]})}),Object(y.jsxs)(m.a,{fontSize:"xl",ml:"6",flex:"1",children:[1===o&&"Dane kontaktowe",2===o&&"P\u0142atno\u015b\u0107",3===o&&"Potwierdzenie zam\xf3wienia"]})]}),Object(y.jsx)(A.a,{}),Object(y.jsxs)(B.a,{children:[1===o&&Object(y.jsx)(D,{setStep:i}),2===o&&Object(y.jsx)(L,{onCaptureCheckout:n,shippingData:k,checkoutToken:h,onSubmit:function(e){return console.log(e)},setStep:i,handleSubmit:W}),3===o&&Object(y.jsx)(G,{})]})]})}var Y=n(206),X=n.p+"static/media/undraw_empty_xct9.927aee13.svg";function Q(e){var t=e.item,n=Object(r.useContext)(ce);return Object(y.jsxs)(x.a,{w:"100%",borderWidth:"1px",borderRadius:"lg",p:"2",my:"5",children:[Object(y.jsx)(h.a,{src:t.media.source,maxW:["100px","130px"],maxH:["100px","100%"],mr:"5",borderRadius:"lg",loading:"lazy"}),Object(y.jsxs)(x.a,{w:"100%",overflow:"hidden",flexWrap:"wrap",children:[Object(y.jsxs)(x.a,{pos:"relative",flexDir:"column",w:"100%",justifyContent:"space-between",fontSize:["sm","lg"],fontWeight:"bold",children:[Object(y.jsxs)(x.a,{flexDir:"column",h:"100%",children:[Object(y.jsx)(m.a,{as:g.b,to:"/przedmiot/".concat(t.permalink),isTruncated:!0,maxW:"100%",children:t.name}),Object(y.jsx)(S.a,{w:"max-content",colorScheme:n.colorScheme,children:t.price.formatted_with_code}),t.selected_options.length>0&&t.selected_options.map((function(e){return Object(y.jsxs)(m.a,{fontWeight:"normal",fontSize:"md",children:["size"===e.group_name&&"Rozmiar: ","color"===e.group_name&&"Kolor: ",t.selected_options.map((function(e){return e.option_name}))]},e.group_id)})),Object(y.jsx)(f.a,{}),Object(y.jsxs)(p.a,{color:"green",children:[t.quantity*t.price.raw," PLN"]})]}),Object(y.jsxs)(x.a,{pos:"absolute",right:"2",top:"50%",transform:"translateY(-50%)",bgColor:"white",flexDir:"column",borderRadius:"xl",borderWidth:"1px",boxShadow:"sm",overflow:"hidden",children:[Object(y.jsx)(E.a,{cursor:"pointer",_active:{transform:"scale(0.98)"},onClick:function(){n.handleUpdateItem(t.id,t.quantity+1)},children:"+"}),Object(y.jsx)(E.a,{px:"2",flex:"1",borderRadius:"lg",fontSize:["sm","lg"],children:t.quantity}),Object(y.jsx)(E.a,{cursor:"pointer",_active:{transform:"scale(0.98)"},onClick:function(){n.handleUpdateItem(t.id,t.quantity-1)},children:"-"})]})]}),Object(y.jsx)(f.a,{})]})]},t.id)}var $=n(202);function ee(){return Object(y.jsx)(E.a,{pos:"absolute",top:"0",h:"100vh",w:"100%",children:Object(y.jsx)($.a,{size:"lg"})})}function te(e){var t,n=e.items,c=Object(r.useContext)(ce);return n.line_items?Object(y.jsxs)(x.a,{flexDir:["column","column","column","row"],children:[Object(y.jsxs)(p.a,{p:"6",flex:"1",children:[Object(y.jsx)(q.a,{children:"Tw\xf3j koszyk"}),Object(y.jsxs)(x.a,{justifyContent:"space-between",alignItems:"center",fontSize:"sm",fontWeight:"normal",children:[Object(y.jsxs)(m.a,{children:[n.line_items.length," przed."]}),n.line_items.length?Object(y.jsx)(O.a,{label:"Wyczy\u015b\u0107 koszyk",hasArrow:!0,children:Object(y.jsx)(E.a,{onClick:function(){return c.handleClearCart()},cursor:"pointer",w:"50px",py:"2",fontSize:"lg",children:Object(y.jsx)(Y.a,{})})}):null]}),Object(y.jsxs)(p.a,{children:[0===n.line_items.length?Object(y.jsx)(E.a,{pos:"relative",children:Object(y.jsx)(h.a,{src:X,maxH:"60vh"})}):null,n.line_items.map((function(e){return Object(y.jsx)(Q,{item:e},e.id)}))]})]}),0!==n.line_items.length&&Object(y.jsx)(p.a,{p:"6",maxW:["100%","100%","100%","400px"],w:"100%",minH:"200px",bgColor:c.colorScheme+".100",children:Object(y.jsxs)(x.a,{flexDir:"column",h:"100%",children:[Object(y.jsx)(p.a,{textTransform:"uppercase",fontSize:"sm",py:"6",children:Object(y.jsxs)(x.a,{justifyContent:"space-between",children:[Object(y.jsx)(m.a,{children:"Cena za wszystko"}),Object(y.jsx)(m.a,{children:n.subtotal.formatted_with_code})]})}),Object(y.jsx)(A.a,{borderColor:"black"}),Object(y.jsxs)(x.a,{justifyContent:"space-between",textTransform:"uppercase",fontWeight:"bold",fontSize:["sm","lg"],py:"6",children:[Object(y.jsx)(m.a,{children:"Razem (z VAT)"}),Object(y.jsx)(m.a,{ml:"2",color:"green",children:null===n||void 0===n||null===(t=n.subtotal)||void 0===t?void 0:t.formatted_with_code})]}),Object(y.jsx)(E.a,{children:Object(y.jsx)(R.a,{as:g.b,to:"/checkout",colorScheme:c.colorScheme,children:"Zamawiam"})})]})})]}):Object(y.jsx)(ee,{})}var ne=n(17);function re(){var e=Object(ne.f)("permalink").permalink,t=Object(r.useState)({}),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)({}),i=Object(j.a)(o,2),s=i[0],d=i[1],b=Object(r.useContext)(ce),O=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.products.retrieve(e,{type:"permalink"});case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[]),Object(r.useEffect)((function(){c.variant_groups&&c.variant_groups.length>0&&c.variant_groups.map((function(e){return"size"===e.name&&d(e.options[0])}))}),[c]),0===Object.keys(c).length?Object(y.jsx)(ee,{}):Object(y.jsxs)(I.a,{as:x.a,flexDir:["column","column","row"],pos:"relative",maxW:"1200px",borderWidth:"1px",my:"6",p:"6",justifyContent:"space-between",children:[c.is.sold_out&&Object(y.jsxs)(x.a,{pos:"absolute",top:"0",left:"0",w:"100%",h:"100%",bgColor:"whiteAlpha.600",zIndex:"1",flexDir:"column",justifyContent:"center",alignItems:"center",userSelect:"none",children:[Object(y.jsx)(q.a,{textTransform:"uppercase",children:"Wyprzedane"}),Object(y.jsx)(R.a,{as:g.b,to:"/",mt:"6",variant:"outline",colorScheme:b.colorScheme,children:"Powr\xf3t do strony g\u0142\xf3wnej"})]}),Object(y.jsx)(x.a,{justifyContent:"center",w:"100%",borderRadius:"lg",children:Object(y.jsx)(h.a,{src:c.media.source,w:"100%",maxW:"400px",h:"400px",objectPosition:"center",objectFit:"contain",borderRadius:"lg"})}),Object(y.jsxs)(x.a,{flexDir:"column",maxW:["100%","100%","50%","50%"],w:"100%",mt:["6","6","0","0"],ml:["0","0","6","6"],p:"2",children:[Object(y.jsxs)(p.a,{children:[Object(y.jsx)(q.a,{fontSize:"xl",children:c.name}),Object(y.jsx)(m.a,{my:"2",dangerouslySetInnerHTML:{__html:c.description}}),Object(y.jsx)(A.a,{borderColor:"black"}),Object(y.jsx)(q.a,{my:"6",fontSize:"2xl",color:"green",children:c.price.formatted_with_code}),w(c.variant_groups,s,d,b.colorScheme)]}),Object(y.jsx)(f.a,{}),Object(y.jsx)(p.a,{children:Object(y.jsx)(R.a,{onClick:function(){return b.checkBeforeAddingToCart(c.id,c.variant_groups,s,c.is.sold_out)},w:"100%",mt:"6",isDisabled:c.is.sold_out,colorScheme:b.colorScheme,children:"Dodaj do koszyka"})})]})]})}var ce=c.a.createContext({handleUpdateItem:function(){},handleClearCart:function(){},checkBeforeAddingToCart:function(){},colorScheme:""});function ae(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),o=Object(j.a)(a,2),s=o[0],p=o[1],h=Object(d.a)(),x=Object(r.useState)({}),m=Object(j.a)(x,2),f=m[0],O=m[1],v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.products.list();case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h({title:"Nie mo\u017cna pobra\u0107 danych sklepu.",description:"Twoje po\u0142\u0105czenie mo\u017ce by\u0107 niestabilne.",status:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.cart.retrieve();case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h({title:"Nie mo\u017cna pobra\u0107 danych koszyka.",description:"Twoje po\u0142\u0105czenie mo\u017ce by\u0107 niestabilne.",status:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.cart.refresh();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.cart.add(t,n,r);case 3:c=e.sent,p(c.cart),h({title:"Dodano przedmiot do koszyka.",description:"Sprawd\u017a sw\xf3j koszyk.",status:"success",duration:9e3,isClosable:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h({title:"Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d.",description:"Nie uda\u0142o si\u0119 doda\u0107 przedmiotu.",status:"error",duration:9e3,isClosable:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.cart.empty();case 2:t=e.sent,p(t.cart),h({title:"Wyczyszczono koszyk.",description:"Tw\xf3j koszyk jest od teraz pusty \ud83d\ude25",status:"success",duration:9e3,isClosable:!0});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.checkout.capture(t,n);case 3:return r=e.sent,O(r),S(),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),h({title:"Nie mo\u017cemy przeanalizowa\u0107 Twojego zam\xf3wienia.",description:"Wyst\u0105pi\u0142 problem z zakupem przedmiotu. Spr\xf3buj ponownie p\xf3\u017aniej.",status:"error",duration:9e3,isClosable:!0}),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.cart.update(t,{quantity:n});case 2:r=e.sent,p(r.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){v(),w()}),[]),s?Object(y.jsx)(ce.Provider,{value:{handleUpdateItem:T,handleClearCart:C,colorScheme:"blue",checkBeforeAddingToCart:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(r)return!1;0===t.length?z(e,1):t.map((function(t){var r=Object(i.a)({},t.id,n.id);return z(e,1,r),!0}))}},children:Object(y.jsxs)(g.a,{basename:"/ecommerce",children:[Object(y.jsx)(_,{cart:s,onClearCart:C}),Object(y.jsxs)(ne.c,{children:[Object(y.jsx)(ne.a,{exact:!0,path:"/",children:Object(y.jsx)(b.a,{spacing:"5",mt:"5",minChildWidth:"300px",justifyItems:"center",children:Object.keys(s).length>0?Object(y.jsx)(y.Fragment,{children:n.map((function(e){return e.is.active&&Object(y.jsx)(k,{product:e,onAddToCart:z},e.id)}))}):Object(y.jsx)(ee,{})})}),Object(y.jsx)(ne.a,{exact:!0,path:"/cart",children:Object(y.jsx)(te,{items:s})}),Object(y.jsx)(ne.a,{exact:!0,path:"/checkout",children:Object(y.jsx)(Z,{order:f,onCaptureCheckout:W,cart:s})}),Object(y.jsx)(ne.a,{exact:!0,path:"/przedmiot/:permalink",children:Object(y.jsx)(re,{})})]})]})}):"loading..."}var oe=n(210);o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(oe.a,{children:Object(y.jsx)(ae,{})})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.fb59dfa1.chunk.js.map
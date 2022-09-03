"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{4548:function(n,e,t){t.d(e,{t:function(){return Zn},lh:function(){return Sn},CR:function(){return _n},W2:function(){return C},vE:function(){return hn},h4:function(){return L},X6:function(){return N},gM:function(){return A},or:function(){return y},zr:function(){return k},u_:function(){return En},l2:function(){return E},w2:function(){return T},Dx:function(){return P},fS:function(){return tn},Ie:function(){return on},g0:function(){return X},im:function(){return M}});var a,r,i,o,s,c,l,u,d,m,p,h,f,x,g,b,Z,v,_,j=t(168),w=t(7691),C=w.ZP.div(a||(a=(0,j.Z)(["\n  width: 50vw;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n"]))),y=w.ZP.main(r||(r=(0,j.Z)(["\n  padding-top: 25px;\n  padding-bottom: 25px;\n"]))),N=w.ZP.h1(i||(i=(0,j.Z)(["\n  padding: 0;\n  margin: 0;\n  margin-bottom: 25px;\n  text-decoration: underline;\n"]))),P=w.ZP.h2(o||(o=(0,j.Z)(["\n  padding: 0;\n  margin: 0;\n  margin-bottom: 15px;\n"]))),k=w.ZP.p(s||(s=(0,j.Z)(["\n  font-size: 18px;\n"]))),S=t(9434),z=t(9869),I=t(184),L=function(){var n=(0,S.v9)(z.u.getIsLoggedIn);return(0,I.jsx)(E,{children:(0,I.jsx)(C,{children:(0,I.jsxs)(A,{children:[(0,I.jsxs)(M,{children:[(0,I.jsx)(T,{to:"/",children:"Home"}),n&&(0,I.jsx)(T,{to:"/contacts",children:"Contacts"})]}),n?(0,I.jsx)(on,{}):(0,I.jsxs)(M,{children:[(0,I.jsx)(T,{to:"/register",children:"Register"}),(0,I.jsx)(T,{to:"/login",children:"Login"})]})]})})})},F=t(3504),E=w.ZP.header(c||(c=(0,j.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 3px solid gray;\n"]))),A=w.ZP.nav(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),M=w.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=(0,w.ZP)(F.OL)(d||(d=(0,j.Z)(["\n  padding: 5px;\n  font-weight: 600;\n  font-size: 18px;\n  color: black;\n  text-decoration: none;\n  border-radius: 5px;\n  transform: scale(1);\n\n  :not(:last-child) {\n    margin-right: 25px;\n  }\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n  }\n\n  &.active {\n    text-decoration: underline;\n    background-color: rgba(93, 174, 240, 0.9);\n    color: white;\n    transform: scale(1.05);\n  }\n"]))),q=t(885),D=t(2791),V="name",W="email",U="password",B="number",O=t(8724),J=t(167),R=t(986),H=t(5218),Y=t(6809),$=w.ZP.div(m||(m=(0,j.Z)(["\n  width: 320px;\n  margin: 0 auto;\n"]))),G=(0,w.ZP)(Y.Z)(p||(p=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),K=w.ZP.h1(h||(h=(0,j.Z)(["\n  font-size: 22px;\n  text-decoration: underline;\n  text-align: center;\n"]))),X=function(){var n=(0,S.I0)(),e=(0,D.useState)(""),t=(0,q.Z)(e,2),a=t[0],r=t[1],i=(0,D.useState)(""),o=(0,q.Z)(i,2),s=o[0],c=o[1],l=(0,D.useState)(""),u=(0,q.Z)(l,2),d=u[0],m=u[1],p=function(n){var e=V,t=W,a=U,i=n.target.name,o=n.target.value;switch(i){case e:r(o);break;case t:c(o);break;case a:m(o)}};return(0,I.jsxs)($,{children:[(0,I.jsx)(K,{children:"New User Registration"}),(0,I.jsxs)(G,{component:"form",name:"reg-form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=function(n){var e=n.name,t=n.email,a=n.password;return{name:e.trim(),email:t.trim().toLowerCase(),password:a.trim()}}({name:a,email:s,password:d}),i=function(n){var e=n.name,t=n.email,a=n.password,r=e.length>1,i=t.includes("@"),o=a.length>=6;return r||H.ZP.error("The name must be at least 1 character long."),i||H.ZP.error("Incorrect email."),o||H.ZP.error("The password must be at least 6 characters long."),r&&o&&i}(t);i&&(n(O.Z.register(t)),r(""),c(""),m(""))},sx:{"& .MuiTextField-root":{m:1,width:"30ch"}},children:[(0,I.jsx)(R.Z,{onChange:p,autoComplete:"given-name",name:V,value:a,required:!0,fullWidth:!0,label:"Name",autoFocus:!0}),(0,I.jsx)(R.Z,{onChange:p,required:!0,fullWidth:!0,label:"Email",name:W,value:s,type:"email",autoComplete:"email"}),(0,I.jsx)(R.Z,{onChange:p,required:!0,fullWidth:!0,name:U,value:d,label:"Password",type:"password",autoComplete:"new-password"}),(0,I.jsx)(J.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,width:"20ch"},children:"Sign Up"})]})]})},Q=w.ZP.div(f||(f=(0,j.Z)(["\n  width: 320px;\n  margin: 0 auto;\n"]))),nn=(0,w.ZP)(Y.Z)(x||(x=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),en=w.ZP.h1(g||(g=(0,j.Z)(["\n  font-size: 22px;\n  text-decoration: underline;\n  text-align: center;\n"]))),tn=function(){var n=(0,S.I0)(),e=(0,D.useState)(""),t=(0,q.Z)(e,2),a=t[0],r=t[1],i=(0,D.useState)(""),o=(0,q.Z)(i,2),s=o[0],c=o[1],l=function(n){var e=W,t=U,a=n.target.name,i=n.target.value;switch(a){case e:r(i);break;case t:c(i)}};return(0,I.jsxs)(Q,{children:[(0,I.jsx)(en,{children:"Log in"}),(0,I.jsxs)(nn,{component:"form",name:"reg-form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t={email:a,password:s};n(O.Z.logIn(t)),r(""),c("")},sx:{"& .MuiTextField-root":{m:1,width:"30ch"}},children:[(0,I.jsx)(R.Z,{onChange:l,required:!0,fullWidth:!0,label:"Email",name:W,value:a,type:"email",autoComplete:"email"}),(0,I.jsx)(R.Z,{onChange:l,required:!0,fullWidth:!0,name:U,value:s,label:"Password",type:"password",autoComplete:"new-password"}),(0,I.jsx)(J.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,width:"20ch"},children:"Log in"})]})]})},an=w.ZP.div(b||(b=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]))),rn=w.ZP.p(Z||(Z=(0,j.Z)(["\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n"]))),on=function(){var n=(0,S.v9)(z.u.getUserName),e=(0,S.I0)();return(0,I.jsxs)(an,{children:[(0,I.jsxs)(rn,{children:["User: ",n]}),(0,I.jsx)(J.Z,{onClick:function(){e(O.Z.logOut())},type:"button",variant:"contained",sx:{ml:3,p:"4px"},children:"Log Out"})]})},sn=t(5036),cn=function(n){return n.contacts.items},ln=function(n){return n.contacts.filter},un="EditContactForm_form__L+B1Z",dn="EditContactForm_form__label__q6TV8",mn="EditContactForm_form__input__Ol3+6",pn="EditContactForm_btn__submit__PCfYI",hn=function(n){var e=n.id,t=n.name,a=n.number,r=n.onModalClose,i=(0,D.useState)(t),o=(0,q.Z)(i,2),s=o[0],c=o[1],l=(0,D.useState)(a),u=(0,q.Z)(l,2),d=u[0],m=u[1],p=(0,S.I0)(),h=(0,S.v9)(cn),f=function(n){var e=n.currentTarget.name,t=n.currentTarget.value;switch(e){case V:c(t);break;case B:m(t);break;default:console.log("Unrecognized input name: ",{inputName:e})}};return(0,I.jsxs)("form",{className:un,onSubmit:function(n){n.preventDefault();var t=function(n){var t=n.toLowerCase();return h.filter((function(n){return n.name.toLowerCase()===t&&n.id!==e})).length}(s);t?H.ZP.error("".concat(s," is already in contacts.")):(p(sn.m.updateContact({id:e,name:s,number:d})),c(""),m(""),r())},children:[(0,I.jsxs)("label",{className:dn,children:["Name",(0,I.jsx)("input",{className:mn,type:"text",name:V,value:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f})]}),(0,I.jsxs)("label",{className:dn,children:["Number",(0,I.jsx)("input",{className:mn,type:"tel",name:B,value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:f})]}),(0,I.jsx)("button",{type:"submit",className:pn,children:"Submit"})]})},fn="ContactForm_form__dhl+T",xn="ContactForm_form__label__8W82B",gn="ContactForm_form__input__VGD4-",bn="ContactForm_btn__submit__zAi-V",Zn=function(){var n=(0,D.useState)(""),e=(0,q.Z)(n,2),t=e[0],a=e[1],r=(0,D.useState)(""),i=(0,q.Z)(r,2),o=i[0],s=i[1],c=(0,S.I0)(),l=(0,S.v9)(cn),u=function(n){var e=n.currentTarget.name,t=n.currentTarget.value;switch(e){case V:a(t);break;case B:s(t);break;default:console.log("Unrecognized input name: ",{inputName:e})}};return(0,I.jsxs)("form",{className:fn,onSubmit:function(n){n.preventDefault();var e=function(n){var e=n.toLowerCase();return l.filter((function(n){return n.name.toLowerCase()===e})).length}(t);e?H.ZP.error("".concat(t," is already in contacts.")):(c(sn.m.createContact({name:t,number:o})),a(""),s(""))},children:[(0,I.jsxs)("label",{className:xn,children:["Name",(0,I.jsx)("input",{className:gn,type:"text",name:V,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:u})]}),(0,I.jsxs)("label",{className:xn,children:["Number",(0,I.jsx)("input",{className:gn,type:"tel",name:B,value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:u})]}),(0,I.jsx)("button",{type:"submit",className:bn,children:"Add contact"})]})},vn="ContactList_contacts__list__hSN0M",_n=function(){var n=(0,S.v9)(ln),e=(0,S.v9)(cn),t=n.toLowerCase(),a=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,I.jsx)("ul",{className:vn,children:a.map((function(n){var e=n.id,t=n.name,a=n.number;return(0,I.jsx)(Sn,{id:e,name:t,number:a},e)}))})},jn=t(7692),wn=t(9126),Cn="ContactItem_contacts__item__0p8Ju",yn="ContactItem_contacts__text__jN4rs",Nn="ContactItem_contacts__btn__DMj2v",Pn="ContactItem_btn__wrapper__-9N8K",kn="ContactItem_edit__btn__PS5YV",Sn=function(n){var e=n.id,t=n.name,a=n.number,r=(0,S.I0)(),i=(0,D.useState)(!1),o=(0,q.Z)(i,2),s=o[0],c=o[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("li",{className:Cn,children:[(0,I.jsx)(wn.riV,{style:{scale:"1.5"}}),(0,I.jsxs)("p",{className:yn,children:[t,": ",(0,I.jsx)("span",{children:a})]}),(0,I.jsxs)("div",{className:Pn,children:[(0,I.jsx)("button",{type:"button",className:Nn,onClick:function(){r(sn.m.deleteContact(e))},children:"Delete"}),(0,I.jsx)("button",{type:"button",className:kn,onClick:function(){c(!0)},children:(0,I.jsx)(jn.Hlf,{style:{width:"100%",height:"100%"}})})]})]}),s&&(0,I.jsx)(En,{id:e,name:t,number:a,onModalClose:function(){c(!1)}})]})},zn=t(4164),In=w.ZP.div(v||(v=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  /* background-color: rgba(0, 0, 0, 0.5); */\n  background-color: white;\n  z-index: 1200;\n"]))),Ln=w.ZP.div(_||(_=(0,j.Z)(["\n  padding-top: 93px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Fn=document.getElementById("modal-root"),En=function(n){var e=n.id,t=n.name,a=n.number,r=n.onModalClose;function i(n){"Escape"!==n.key&&n.currentTarget!==n.target||(window.removeEventListener("keydown",i),r())}return(0,D.useEffect)((function(){window.addEventListener("keydown",i)})),(0,zn.createPortal)((0,I.jsx)(In,{onClick:i,children:(0,I.jsx)(C,{children:(0,I.jsxs)(Ln,{children:[(0,I.jsx)(N,{children:"Edit contact "}),(0,I.jsx)(hn,{id:e,name:t,number:a,onModalClose:r})]})})}),Fn)}}}]);
//# sourceMappingURL=548.1983026e.chunk.js.map
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[261],{692:(t,s,e)=>{e.r(s),e.d(s,{default:()=>C});var a=e(43),o=e(14);const i={posts:"MyPosts_posts__wHWBr",title:"MyPosts_title__MA3e0"},l={item:"Post_item__5kQGr",name:"Post_name__Wsyl3",comment:"Post_comment__hq9Hd",count:"Post_count__bzllY",button:"Post_button__dHC4v"};var n=e(579);const r=t=>(0,n.jsxs)("div",{className:l.item,children:[(0,n.jsx)("img",{src:t.image}),(0,n.jsxs)("div",{className:l.item_wrapper,children:[(0,n.jsx)("p",{className:l.name,children:t.name}),(0,n.jsx)("p",{className:l.comment,children:t.comment})]}),(0,n.jsxs)("p",{className:l.count,children:["Comments: ",t.likesCount]}),(0,n.jsx)("button",{className:l.button,type:"button",children:"Like!"})]});var u=e(892);const p=t=>(0,n.jsx)(u.l1,{initialValues:{newPostText:""},onSubmit:s=>{t.addPost(s.newPostText)},validate:t=>{const s={};return t.newPostText||(s.newPostText="Required"),s},children:()=>(0,n.jsxs)(u.lV,{children:[(0,n.jsx)(u.D0,{name:"newPostText",type:"text"}),(0,n.jsx)("button",{className:i.button,type:"submit",children:"Add post"})]})}),c=a.memo((t=>{let s=t.posts.map((t=>(0,n.jsx)(r,{name:t.name,comment:t.comment,likesCount:t.likesCount,image:t.image},t.id)));return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:i.title,children:"My posts"}),(0,n.jsx)(p,{addPost:t.addPost}),(0,n.jsx)("div",{className:i.posts,children:s})]})}));var m=e(3);const d=(0,m.Ng)((t=>({posts:t.profilePage.postsData})),(t=>({addPost:s=>{t((0,o.oL)(s))}})))(c),h={wrapper:"ProfileInfo_wrapper__B4Gb1",content__bg:"ProfileInfo_content__bg__Ufh6V",fullName:"ProfileInfo_fullName__X+CbU",aboutMe:"ProfileInfo_aboutMe__NXbSV",list:"ProfileInfo_list__IB9OT"},_=e.p+"static/media/gallery.a3fc021962fbde3568fe.jpg";var x=e(48);const f="ProfileStatus_statusText__fuZ2V",j="ProfileStatus_statusInput__+E2yi";a.Component;const g=t=>{let[s,e]=(0,a.useState)(!1),[o,i]=(0,a.useState)(t.status);(0,a.useEffect)((()=>{i(t.status)}),[t.status]);return(0,n.jsxs)("div",{children:[!s&&(0,n.jsx)("span",{className:f,onClick:()=>{e(!0)},children:t.status||"Hi all!"}),s&&(0,n.jsx)("input",{className:j,onBlur:()=>{e(!1),t.updateStatus(o)},onChange:t=>{i(t.currentTarget.value)},value:o,autoFocus:!0})]})},b=t=>t.profile?(0,n.jsxs)("div",{className:h.wrapper,children:[(0,n.jsx)("img",{className:h.content__bg,src:t.profile.photos.large?t.profile.photos.large:_}),(0,n.jsxs)("div",{className:h.content,children:[(0,n.jsx)("h2",{className:h.fullName,children:t.profile.fullName}),(0,n.jsx)(g,{status:t.status,updateStatus:t.updateStatus}),(0,n.jsx)("p",{className:h.aboutMe,children:t.profile.aboutMe}),(0,n.jsx)("i",{children:t.profile.lookingForAJob?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b...":"\u0420\u0430\u0431\u043e\u0442\u0443 \u043d\u0435 \u0438\u0449\u0443"}),(0,n.jsxs)("p",{children:["(",t.profile.lookingForAJobDescription,")"]}),(0,n.jsx)("h4",{children:"My contacts:"}),(0,n.jsxs)("ul",{className:h.list,children:[(0,n.jsx)("li",{className:`${h.item} ${h.itemGit}`,children:t.profile.contacts.github}),(0,n.jsx)("li",{className:`${h.item} ${h.itemVK}`,children:t.profile.contacts.vk}),(0,n.jsx)("li",{className:`${h.item} ${h.itemYoutube}`,children:t.profile.contacts.youtube})]})]})]}):(0,n.jsx)(x.A,{}),N=t=>(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,n.jsx)(d,{})]});var P=e(216),v=e(863),S=e(923);class y extends a.Component{componentDidMount(){let t=this.props.router.params.userId;t||(t=this.props.authUserId,t||this.props.history.push("/login")),this.props.getProfile(t),this.props.getStatus(t)}render(){return(0,n.jsx)("div",{children:(0,n.jsx)(N,{...this.props,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}const C=(0,S.Zz)((0,m.Ng)((t=>({profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.id,isAuth:t.auth.isAuth})),{getProfile:o.E$,getStatus:o.BS,updateStatus:o.yB}),(function(t){return function(s){let e=(0,P.zy)(),a=(0,P.Zp)(),o=(0,P.g)();return(0,n.jsx)(t,{...s,router:{location:e,navigate:a,params:o}})}}),v.j)(y)},863:(t,s,e)=>{e.d(s,{j:()=>r});var a=e(43),o=e(3),i=e(216),l=e(579);let n=t=>({isAuth:t.auth.isAuth});const r=t=>{class s extends a.Component{render(){return this.props.isAuth?(0,l.jsx)(t,{...this.props}):(0,l.jsx)(i.C5,{to:"/login/"})}}return(0,o.Ng)(n)(s)}}}]);
//# sourceMappingURL=261.d67fc84e.chunk.js.map
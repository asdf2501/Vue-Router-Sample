import{d,c as s,a as e,b as l,w as o,u as n,e as t,F as i,r as p,o as r,R as u,t as c,i as b}from"./index-81c04ce0.js";const f=e("h1",null,"会員管理",-1),h={id:"breadcrumbs"},L=e("li",null,"会員リスト",-1),k=e("h2",null,"会員リスト",-1),N=d({__name:"MemberList",setup(x){const m=b("memberList");return(B,D)=>(r(),s(i,null,[f,e("nav",h,[e("ul",null,[e("li",null,[l(n(u),{to:{name:"AppTop"}},{default:o(()=>[t(" TOP ")]),_:1})]),L])]),e("section",null,[k,e("p",null,[t(" 新規登録は"),l(n(u),{to:{name:"MemberAdd"}},{default:o(()=>[t("こちら")]),_:1}),t("から ")]),e("section",null,[e("ul",null,[(r(!0),s(i,null,p(n(m),([a,_])=>(r(),s("li",{key:a},[l(n(u),{to:{name:"MemberDetail",params:{id:a}}},{default:o(()=>[t(" IDが"+c(a)+"の"+c(_.name)+"さん ",1)]),_:2},1032,["to"])]))),128))])])])],64))}});export{N as default};

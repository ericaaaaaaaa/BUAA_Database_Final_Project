(self["webpackChunkeducational_administration_system"]=self["webpackChunkeducational_administration_system"]||[]).push([[488],{3488:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>P});var n=l(3673),s=l(2323),a=l(3999),o=l.n(a);const u=(0,n._)("img",{src:o()},null,-1),d=(0,n._)("div",{class:"text-center q-pt-lg"},[(0,n._)("div",{class:"col text-h6 ellipsis"}," 教务管理系统 ")],-1),i=(0,n._)("p",{class:"text-grey-6"},[(0,n.Uk)("没有账号？"),(0,n._)("a",{href:"http://localhost:8080/?#/student/signup"}," 注册 ")],-1);function r(t,e,l,a,o,r){const c=(0,n.up)("q-btn"),m=(0,n.up)("q-avatar"),p=(0,n.up)("q-card-section"),f=(0,n.up)("q-icon"),w=(0,n.up)("q-input"),h=(0,n.up)("q-form"),g=(0,n.up)("q-card"),_=(0,n.up)("q-page"),b=(0,n.up)("q-page-container"),y=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,{class:"flex bg-image flex-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"q-mt-md q-ml-md absolute-top-left",size:"15px",round:"",push:"",glossy:"",color:"blue-8",icon:"arrow_back",onClick:r.back},null,8,["onClick"]),(0,n.Wm)(g,{style:(0,s.j5)(t.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{size:"103px",class:"absolute-center shadow-10"},{default:(0,n.w5)((()=>[u])),_:1})])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{modelValue:o.studentId,"onUpdate:modelValue":e[0]||(e[0]=t=>o.studentId=t),filled:"",type:t.number,hint:"请输入学工号","bottom-slots":"",label:"学工号","error-message":"请输入 8 位数字",error:!o.isIdValid},{before:(0,n.w5)((()=>[(0,n.Wm)(f,{name:"person"})])),_:1},8,["modelValue","type","error"]),(0,n.Wm)(w,{modelValue:o.studentPwd,"onUpdate:modelValue":e[2]||(e[2]=t=>o.studentPwd=t),filled:"",type:o.isPwd?"password":"text",pattern:"[a-zA-Z0-9_]{6,10}",hint:"请输入密码","bottom-slots":"",label:"密码"},{before:(0,n.w5)((()=>[(0,n.Wm)(f,{name:"lock"})])),append:(0,n.w5)((()=>[(0,n.Wm)(f,{name:o.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=t=>o.isPwd=!o.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"]),(0,n._)("div",null,[(0,n.Wm)(c,{class:"full-width",label:"登录",onClick:r.onClick,type:"submit",color:"primary"},null,8,["onClick"])]),(0,n.Wm)(p,{class:"text-center q-pa-none"},{default:(0,n.w5)((()=>[i])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])])),_:1})])),_:1})])),_:1})}var c=l(52),m=l.n(c);const p={data(){return{studentId:"",studentPwd:"",isPwd:!0,isIdValid:!0}},methods:{onClick:function(){let t=this;m()({method:"GET",url:"http://localhost:8000/student/login/",params:{studentId:this.studentId,studentPwd:this.studentPwd}}).then((function(e){e.data.status?t.$q.notify({type:"negative",message:"请输入正确的用户名 / 密码"}):(t.$router.push("/student/homepage/"+t.studentId),console.log(e))})).catch((function(t){this.$q.notify({type:"negative",message:"请输入正确的用户名 / 密码"}),console.log(t)})).then((function(){}))},back:function(){this.$router.push("/")}}};var f=l(9214),w=l(2652),h=l(4379),g=l(8240),_=l(151),b=l(5589),y=l(5096),q=l(5269),k=l(4842),W=l(4554),v=l(7518),C=l.n(v);p.render=r;const P=p;C()(p,"components",{QLayout:f.Z,QPageContainer:w.Z,QPage:h.Z,QBtn:g.Z,QCard:_.Z,QCardSection:b.Z,QAvatar:y.Z,QForm:q.Z,QInput:k.Z,QIcon:W.Z})},3999:(t,e,l)=>{t.exports=l.p+"img/logo_big.a7b719be.png"}}]);
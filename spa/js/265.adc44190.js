"use strict";(self["webpackChunkeducational_administration_system"]=self["webpackChunkeducational_administration_system"]||[]).push([[265],{6265:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});var t=l(3673);const n=(0,t._)("div",{class:"q-pa-sm bg-grey-3"},[(0,t._)("h5",{align:"center"},[(0,t._)("b",null,"学生考试列表")])],-1);function c(e,a,l,c,i,r){const s=(0,t.up)("q-icon"),o=(0,t.up)("q-input"),d=(0,t.up)("q-table"),m=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(m,{class:""},{default:(0,t.w5)((()=>[n,(0,t._)("div",null,[(0,t.Wm)(d,{class:"my-sticky-header-table q-pa-sm",rows:i.rows,columns:i.columns,"row-key":"name",filter:i.filter,loading:i.loading},{"top-left":(0,t.w5)((()=>[(0,t.Wm)(o,{"bg-color":"white",filled:"",borderless:"",dense:"",debounce:"300",modelValue:i.filter,"onUpdate:modelValue":a[0]||(a[0]=e=>i.filter=e),placeholder:"查询考试"},{append:(0,t.w5)((()=>[(0,t.Wm)(s,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["rows","columns","filter","loading"])])])),_:1})}var i=l(1959);const r=[{name:"name",required:!0,label:"考试名称",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"id",align:"center",label:"课程号",field:"id",sortable:!0},{name:"capacity",label:"考试人数",field:"capacity",sortable:!0},{name:"teacher",label:"授课教师",field:"teacher",sortable:!0}];var s=[{name:"离散数学",capacity:57,id:1,teacher:"马殿富"},{name:"基物实验",capacity:1e3,id:4,teacher:"王文玲"},{name:"操作系统",capacity:75,id:2,teacher:"王雷"},{name:"形式语言与自动机",capacity:50,id:6,teacher:"胡春明"},{name:"高等代数",capacity:85,id:7,teacher:"孙晓伟"}];const o={data(){const e=(0,i.iH)(!1),a=(0,i.iH)("");return{filter:a,loading:e,columns:r,rows:s,tab:(0,i.iH)("selected_course")}}};var d=l(4379),m=l(6429),u=l(4842),p=l(4554),b=l(7518),f=l.n(b);o.render=c;const h=o;f()(o,"components",{QPage:d.Z,QTable:m.Z,QInput:u.Z,QIcon:p.Z})}}]);
"use strict";(self.webpackChunkbaby_app=self.webpackChunkbaby_app||[]).push([[82],{3082:(I,m,n)=>{n.r(m),n.d(m,{BreastFeedModule:()=>Y});var r=n(8583),u=n(4655),c=n(5257),g=n(5435),p=n(7626),b=n(8873),Z=n(6222),e=n(7716),h=n(8611),_=n(2238),f=n(9790),x=n(3332),F=n(4131),T=n(3107),v=n(6991),A=n(9712);function C(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"li"),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e._UZ(3,"ae-icon",10),e.TgZ(4,"div",11),e.TgZ(5,"h3"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",12),e.TgZ(12,"ae-icon-button",13),e.NdJ("click",function(){const l=e.CHM(a).$implicit;return e.oxw(2).addOrEdit(l)}),e.ALo(13,"translate"),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"ae-icon-button",14),e.NdJ("click",function(){const s=e.CHM(a),l=s.$implicit,d=s.index;return e.oxw(2).delete(l,d)}),e.ALo(16,"translate"),e.ALo(17,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const a=i.$implicit;e.xp6(6),e.AsE(" ",e.lcZ(7,7,"breast_feed_page.duration"),": ",a.totalTime," "),e.xp6(3),e.Oqu(e.Dn7(10,9,a.date,"YYYY-MM-dd HH:mm","-")),e.xp6(3),e.Q6J("tooltipText",e.lcZ(14,15,"breast_feed_page.tooltip.edit")),e.uIk("aria-label",e.lcZ(13,13,"breast_feed_page.tooltip.edit")),e.xp6(3),e.Q6J("tooltipText",e.lcZ(17,19,"breast_feed_page.tooltip.delete")),e.uIk("aria-label",e.lcZ(16,17,"breast_feed_page.tooltip.delete"))}}function B(t,i){if(1&t&&(e.TgZ(0,"ul",6),e.YNc(1,C,18,21,"li",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.breastFeed)}}function y(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"div",16),e.TgZ(4,"ae-button",17),e.NdJ("click",function(){return e.CHM(a),e.oxw().addOrEdit()}),e.ALo(5,"translate"),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,2,"breast_feed_page.empty_list")," "),e.xp6(3),e.Q6J("text",e.lcZ(5,4,"add")))}const J=[{path:"breast-feed",component:(()=>{class t{constructor(a,o,s,l){this.breastFeedService=a,this.dialog=o,this.translate=s,this.toastr=l,this.breadcrumbs=[{name:"Profile",link:"/profile"},{name:"food",link:"/profile/food"},{name:"Breast feed"}],this.breastFeedService.getAll().pipe((0,c.q)(1)).subscribe(d=>{this.breastFeed=d})}ngOnInit(){}addOrEdit(a){this.dialog.open(Z.i,{data:{size:"md",title:this.translate.instant(`breast_feed_page.breast_feed_modal.${a?"edit":"create"}_title`),breastFeed:a}}).afterClosed().pipe((0,c.q)(1),(0,g.h)(o=>!!o)).subscribe(o=>{o.totalTime=(0,p.HV)(o.leftSideTime+o.rightSideTime,this.translate),(0,p.fI)(this.breastFeed,o,"_id"),this.breastFeed=(0,p.DY)(this.breastFeed,"date","asc")})}delete(a,o){this.dialog.open(b.a,{autoFocus:!0,data:{size:"sm",title:this.translate.instant("breast_feed_page.breast_feed_modal.delete_title"),content:this.translate.instant("breast_feed_page.breast_feed_modal.delete_content"),primaryLabel:this.translate.instant("dialog.delete"),callback:this.deleteConfirmed.bind(this,a,o)}})}deleteConfirmed(a,o){this.breastFeedService.delete(a).pipe((0,c.q)(1)).subscribe(()=>{this.breastFeed.splice(o,1),this.dialog.closeAll(),this.toastr.success(this.translate.instant("breast_feed_page.breast_feed_modal.deleted"))})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(h.H),e.Y36(_.uw),e.Y36(f.sK),e.Y36(x._))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ae-breast-feed"]],decls:11,vars:12,consts:[[3,"breadcrumbs"],[1,"d-flex","justify-between","align-center"],[1,"heading-1"],["iconName","add","iconSize","32",3,"tooltipText","click"],["class","ae-action-list",4,"ngIf","ngIfElse"],["noItems",""],[1,"ae-action-list"],[4,"ngFor","ngForOf"],[1,"d-flex","align-center","justify-between"],[1,"d-flex","align-center"],["iconSize","28","iconName","emoji_events",1,"ae-action-list-icon","breastfeed"],[1,"ae-action-list-content"],[1,"actions"],["iconSize","28","iconName","edit",3,"tooltipText","click"],["iconSize","28","iconName","delete",3,"tooltipText","click"],[1,"ae-empty-results"],[1,"ae-empty-results-action","d-flex","justify-center"],["buttonIconName","add",1,"d-block",3,"text","click"]],template:function(a,o){if(1&a&&(e._UZ(0,"ae-breadcrumb",0),e.TgZ(1,"div",1),e.TgZ(2,"h1",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ae-icon-button",3),e.NdJ("click",function(){return o.addOrEdit()}),e.ALo(6,"translate"),e.ALo(7,"translate"),e.qZA(),e.qZA(),e.YNc(8,B,2,1,"ul",4),e.YNc(9,y,6,6,"ng-template",null,5,e.W1O)),2&a){const s=e.MAs(10);e.Q6J("breadcrumbs",o.breadcrumbs),e.xp6(3),e.hij(" ",e.lcZ(4,6,"breast_feed_page.title")," "),e.xp6(2),e.Q6J("tooltipText",e.lcZ(7,10,"breast_feed_page.tooltip.create")),e.uIk("aria-label",e.lcZ(6,8,"breast_feed_page.tooltip.create")),e.xp6(3),e.Q6J("ngIf",(null==o.breastFeed?null:o.breastFeed.length)>0)("ngIfElse",s)}},directives:[F.L,T.r,r.O5,r.sg,v.o,A.r],pipes:[f.X$,r.uU],styles:[""]}),t})(),data:{animation:"GrandChildProfilePage"}}];let L=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),t})();var M=n(4466),N=n(4675);let Y=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[M.m,N.W,r.ez,L]]}),t})()}}]);
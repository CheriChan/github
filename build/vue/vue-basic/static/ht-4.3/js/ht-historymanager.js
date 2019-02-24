!function(m,g){"use strict";var E="ht",t=m[E],x=t.Default,u=x.def,$="add",D="remove",J=x.getInternal(),w="propertyChange";t.HistoryManager=function(e){this._histories=[],this.setDataModel(e)},u(t.HistoryManager,g,{ms_ac:["dataModel","histories","historyIndex","maxHistoryCount"],ms_fire:1,_historyIndex:-1,$4p:0,$8p:0,_maxHistoryCount:10,beginInteraction:function(){var h=this;h.$4p++,1===h.$4p&&(h.$3p=[])},endInteraction:function(){var W=this,O=W._histories,r=W._historyIndex,y=W.$3p;W.$4p--,0===W.$4p&&(delete W.$3p,y.length&&(O=O.slice(0,r+1),O.push(y),O.length>W._maxHistoryCount&&(O=O.slice(O.length-W._maxHistoryCount)),W.setHistories(O),W.setHistoryIndex(O.length-1,!0)))},beginTransient:function(){this.$4p||this.$8p++},endTransient:function(){this.$4p||this.$8p--},setDataModel:function(f){var M=this,D=M._dataModel;D!==f&&(D&&(delete D._historyManager,D.umm(M.$5p,M),D.umd(M.$6p,M)),M._dataModel=f,f._historyManager=M,f.mm(M.$5p,M),f.md(M.$6p,M),M.fp("dataModel",D,f),M.clear())},setHistoryIndex:function(v,Z){var b=this,g=b._historyIndex,p=b._histories.length;if(-1>v?v=-1:v>=p&&(v=p-1),g!==v){if(!Z){var q=v-g;q>0?b.$2p(q):0>q&&b.$1p(-q)}b._historyIndex=v,b.fp("historyIndex",g,v)}},setMaxHistoryCount:function(B){var X=this,I=X._histories,L=X._maxHistoryCount;(!B||0>=B)&&(B=10),L!==B&&(X._maxHistoryCount=B,X.fp("maxHistoryCount",L,B),I.length>B&&X.clear())},$5p:function(B){if(!this.$7p&&!this.$8p){var e,M,F=this,d=F._histories,r=B.kind,g=B.property,t=F._historyIndex;if(r===$||r===D?M={type:B.kind,data:B.data}:g&&"children"!==g&&"attaches"!==g&&"shape"!==g&&(M={type:w,data:B.data,property:g,oldValue:B.oldValue,newValue:B.newValue}),M)if(F.$4p){e=F.$3p;var i=!1;if(M.type===w)for(var f=e.length-1;f>=0;f--){var j=e[f];if(j.type!==w)break;M.property===j.property&&j.property&&M.data===j.data&&(M.oldValue=j.oldValue,e[f]=M,i=!0)}i||e.push(M)}else e=[M],d=d.slice(0,t+1),d.push(e),d.length>F._maxHistoryCount&&(d=d.slice(d.length-F._maxHistoryCount)),F.setHistories(d),F.setHistoryIndex(d.length-1,!0)}},$6p:function(Z){this.$5p(Z)},undo:function(N){(!N||0>=N)&&(N=1),this.setHistoryIndex(this._historyIndex-N)},$1p:function(i){var l,g=this,T=g._dataModel,b=g._histories,a=g._historyIndex;for(g.$7p=1,x.setIsolating(!0);i>0;){if(a>=0&&a<b.length){l=b[a],a--;for(var B=l.length-1;B>=0;B--){var K=l[B],Y=K.type,R=K.data,V=K.property,I=K.oldValue;if(Y===$)T.remove(R);else if(Y===D)T.add(R);else{var q=null;0===V.indexOf("a:")?(q="attr",V=V.replace("a:","")):0===V.indexOf("s:")&&(q="style",V=V.replace("s:","")),J.setPropertyValue(R,q,V,I)}}}i--}x.setIsolating(!1),delete g.$7p},redo:function(g){(!g||0>=g)&&(g=1),this.setHistoryIndex(this._historyIndex+g)},$2p:function(h){var Z,Q=this,q=Q._dataModel,t=Q._histories,w=Q._historyIndex;for(Q.$7p=1,x.setIsolating(!0);h>0;){if(w>=-1&&w<t.length-1){w++,Z=t[w];for(var b=0;b<Z.length;b++){var R=Z[b],s=R.type,p=R.data,m=R.property,u=R.newValue;if(s===$)q.add(p);else if(s===D)q.remove(p);else{var C=null;0===m.indexOf("a:")?(C="attr",m=m.replace("a:","")):0===m.indexOf("s:")&&(C="style",m=m.replace("s:","")),J.setPropertyValue(p,C,m,u)}}}h--}x.setIsolating(!1),delete Q.$7p},clear:function(){this.setHistories([]),this.setHistoryIndex(-1,!0),this.$4p=0,delete this.$3p}})}(this,Object);
!function(M){"use strict";var R="ht",e=M[R],Q=function(){return document},P=function(){return Q().body},c=function(S,g,e){S.style.setProperty(g,e,null)},S=function(N){return Q().createElement(N)},u=function(){return S("div")},J=function(){var t=S("canvas");return t},i=function(J,m){c(J,"-webkit-transform",m),c(J,"-ms-transform",m),c(J,"transform",m)},x=function(A,a){c(A,"-webkit-transform-origin",a),c(A,"-ms-transform-origin",a),c(A,"transform-origin",a)},L=function(g,t){g.appendChild(t)},g=function(v,U){v.removeChild(U)},F=M.parseInt,k=e.Default,a=k.getInternal(),K=Math.PI,Y="white-space",B="visibility",v="left",H="top",r="width",y="height",j="position",d="display",f="z-index",o="px",b="0 0",m="absolute",T="visible",E="hidden",W="none",C="block",V="nowrap",_="rgba(0, 0, 0, 0.005)";k.setImage("node_dragger","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNrsV9sNhDAMKyzQVdgARmGzrMJNUFZhAh6nfkVcG9PQgHSR8lEksJs6pnGuLCimSRzAa0yyBK9O4gy8GokU+O0kJOAwiQYg0LP1xNYDW3+0CfBYNb7VOuN4LAGpiOaYUhFDas9F2NPHDELNENJqaHgBgSQJ3ufakfQJqckERcOiK+Ae1FGWBNKGh9oX5WPpLpdNYfffijbsxTHh7VKP7388n1g1h7OKUoUuyGpJakQEuhwkZAKcDXVOdWcrOrL/feBVBHI/q8fcjE1nA9PpyHQ+NJ2Qi8A3AQYAOtS27fCoRY0AAAAASUVORK5CYII=");var N=e.graph.GraphView.prototype,Z=N._42;N.adjustHtmlNodeIndex=!0,N._42=function(w,n){if(Z.call(this,w,n),this.adjustHtmlNodeIndex)for(var i=this.getDataModel()._datas._as,H=i.length,l=1,D=0;H>D;D++){var v=i[D];if(v instanceof G){var d=this.getDataUI(v);c(d.$2f,f,l+""),c(d.$3f,f,l+1+""),l+=2}}};var t=e.HtmlNodeUI=function(l,G){var S=this;t.superClass.constructor.call(S,l,G);var D=S.$2f=u(),i=S.$3f=J();c(D,j,m),c(D,B,E),c(D,Y,V),i.draggable=!1,c(i,j,m),c(i,d,W),x(i,b),D.addEventListener("change",function(r){var a=r.target,B=a.bind||a.getAttribute("bind"),D=a.type&&"checkbox"===a.type?a.checked:a.value,n=G.getContext();B&&n&&(n[B]=D,S.$4f=JSON.stringify(n))}),["mousedown","touchstart","keydown","mousewheel","DOMMouseScroll"].forEach(function(c){D.addEventListener(c,this.$9f.bind(this))},S)};k.def(t,a.ui().NodeUI,{_visible:!0,$11f:function(){var y=this,C=y.$3f,A=y._data,u=A.getDraggerImageWidth(),H=A.getDraggerImageHeight(),$=A.getDraggerImage(),z=a.initContext(C);z.beginPath(),a.setCanvas(C,u,H),a.translateAndScale(z,0,0,1),z.clearRect(0,0,u,H),k.drawImage(z,k.getImage($),0,0,u,H),z.restore()},_80o:function(J){t.superClass._80o.call(this,J);var M=this,I=M._data,w=I._padding,h=2*w,k=M.$2f,Y=M.$3f,R=M.gv,Q=R.getZoom(),x=R.getTranslateX(),N=R.getTranslateY(),P=R.getView(),O=M._83o,b=I._width,z=I._height,g=O.position,p=O.rotation,V=(b-h)/I.$5f*Q,Z=(z-h)/I.$6f*Q,l=M._html,X=I._html,S=I.getHtmlType();if("html"===S){var s=I.getContext()||{},D=M.$4f,n=I.$10f,a=JSON.stringify(s);l&&D&&l===X&&D===a||(M.$4f=a,M._html=X,k.innerHTML=n?n(s):X)}else if(null!=S){var e=I.getHtml();"ht"===S&&(e=e.getView()),l&&l===e||(M._html=e,k.innerHTML="",L(k,e))}if(!k.parentNode){var q=R.$1f;if(!q){var G=u();c(G,j,m),c(G,f,"0"),q=R.$1f=G;var A=R._canvas.nextSibling;A?P.insertBefore(G,A):L(P,G)}L(q,k),L(q,Y)}if(I._scalable){var U=I.$5f,$=I.$6f;i(k,"rotate("+180*(p/K)+"deg) scale("+V+","+Z+")"),c(k,v,(g.x-U/Q/2)*Q+x+o),c(k,H,(g.y-$/Q/2)*Q+N+o)}else{var up=F(k.style.width),$k=F(k.style.height),Nd=F((b-h)*Q),pf=F((z-h)*Q),Tp="100%",Yh=k.children[0];c(Yh,r,Tp),c(Yh,y,Tp),(up!==Nd||$k!==pf)&&(c(k,r,Nd+o),c(k,y,pf+o),"ht"===S&&X.invalidate()),i(k,"rotate("+180*(p/K)+"deg)"),c(k,v,(g.x-Nd/Q/2)*Q+x+o),c(k,H,(g.y-pf/Q/2)*Q+N+o)}var jj=M.dragRect;R.isMovable(I)&&R.isSelected(I)&&jj?(J.save(),J.fillStyle=_,J.fillRect(jj.x,jj.y,jj.width,jj.height),J.restore(),c(Y,v,jj.x*Q+x+o),c(Y,H,jj.y*Q+N+o),i(Y,"scale("+Q+","+Q+")"),c(Y,d,C),M.$11f()):c(Y,d,W),c(k,B,this._visible?T:E)},dispose:function(){var b=this.gv.$1f;b.removeChild(this.$2f),b.removeChild(this.$3f)},_84o:function(O){this._visible=O,c(this.$2f,B,O?T:E),c(this.$3f,d,O?C:W)},_3O:function(){var C=this,$=C._data;t.superClass._3O.call(C);var r=$.getRect();C.dragRect={x:r.x+r.width+$._padding,y:r.y+10,width:$.getDraggerImageWidth(),height:$.getDraggerImageHeight()},C._68o(C.dragRect)},rectIntersects:function(N){var b=this._79o();return e.Default.intersection(b,N)?!0:void 0},$9f:function(b){var h=this.gv,e=this._data;h.sm().contains(e)&&b.stopPropagation()}});var G=e.HtmlNode=function(){G.superClass.constructor.call(this)};e.Default.def(G,e.Node,{ms_ac:["html","context","scalable","padding","draggerImage","draggerImageWidth","draggerImageHeight"],_padding:e.Default.isTouchable?12:6,_image:null,_scalable:!0,_draggerImage:"node_dragger",_draggerImageWidth:20,_draggerImageHeight:20,setHtml:function(Y){var D=this,K=D._html;D._html=Y,"html"===D.getHtmlType()&&"Handlebars"in M&&(D.$10f=Handlebars.compile(Y)),D.$13f(),D.fp("html",K,Y)},setContext:function(i){var g=this,N=g._context;g._context=i,g.fp("context",N,i),g.$13f()},setScalable:function(W){var z=this,h=z._scalable;z._scalable=W,z.fp("scalable",h,W),z.$13f()},getHtmlType:function(){var P=this._html;return P?"string"==typeof P?"html":P.getView?"ht":"dom":null},$13f:function(){var C=this,Q=C._html,K=C.$10f;if(Q){var U=u(),J=!1,A=C.getHtmlType();if(c(U,j,m),c(U,Y,V),c(U,B,E),"html"===A?(U.innerHTML=K?K(C.getContext()||{}):Q,J=!0):"ht"===A?(L(U,Q.getView()),J=!0):"dom"===A&&(L(U,Q),J=!0),J){var o=2*C._padding;L(P(),U),C.$5f=U.scrollWidth,C.$6f=U.scrollHeight,C._width=C.$5f+o,C._height=C.$6f+o,C._originWidth=C._width,C._originHeight=C._height,g(P(),U)}}},getUIClass:function(){return e.HtmlNodeUI}})}(this,Object);
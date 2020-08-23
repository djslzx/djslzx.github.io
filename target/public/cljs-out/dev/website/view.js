// Compiled by ClojureScript 1.10.773 {}
goog.provide('website.view');
goog.require('cljs.core');
website.view.dark_color = "#333232";
website.view.light_color = "#B7B7B7";
website.view.very_light_color = "#f1f2f3";
website.view.dark_accent = "#AF5D63";
website.view.light_accent = "#CEB7B3";
website.view.code_color = "#e1e2e3";
website.view.light_weight = (300);
website.view.regular_weight = (400);
website.view.medium_weight = (500);
website.view.semi_bold_weight = (600);
website.view.bold_weight = (700);
website.view.link = (function website$view$link(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12534 = arguments.length;
var i__4737__auto___12535 = (0);
while(true){
if((i__4737__auto___12535 < len__4736__auto___12534)){
args__4742__auto__.push((arguments[i__4737__auto___12535]));

var G__12536 = (i__4737__auto___12535 + (1));
i__4737__auto___12535 = G__12536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.link.cljs$core$IFn$_invoke$arity$variadic = (function (p__12531,children){
var map__12532 = p__12531;
var map__12532__$1 = (((((!((map__12532 == null))))?(((((map__12532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12532):map__12532);
var url = cljs.core.get.call(null,map__12532__$1,new cljs.core.Keyword(null,"url","url",276297046));
var class$ = cljs.core.get.call(null,map__12532__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),children], null);
}));

(website.view.link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.link.cljs$lang$applyTo = (function (seq12529){
var G__12530 = cljs.core.first.call(null,seq12529);
var seq12529__$1 = cljs.core.next.call(null,seq12529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12530,seq12529__$1);
}));

website.view.simple_list = (function website$view$simple_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12538 = arguments.length;
var i__4737__auto___12539 = (0);
while(true){
if((i__4737__auto___12539 < len__4736__auto___12538)){
args__4742__auto__.push((arguments[i__4737__auto___12539]));

var G__12540 = (i__4737__auto___12539 + (1));
i__4737__auto___12539 = G__12540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.view.simple_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.view.simple_list.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null),cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),x], null);
}),items)], null);
}));

(website.view.simple_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.view.simple_list.cljs$lang$applyTo = (function (seq12537){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12537));
}));

website.view.styled_list = (function website$view$styled_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12543 = arguments.length;
var i__4737__auto___12544 = (0);
while(true){
if((i__4737__auto___12544 < len__4736__auto___12543)){
args__4742__auto__.push((arguments[i__4737__auto___12544]));

var G__12545 = (i__4737__auto___12544 + (1));
i__4737__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.styled_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.styled_list.cljs$core$IFn$_invoke$arity$variadic = (function (styles,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null))], null),children], null);
}));

(website.view.styled_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.styled_list.cljs$lang$applyTo = (function (seq12541){
var G__12542 = cljs.core.first.call(null,seq12541);
var seq12541__$1 = cljs.core.next.call(null,seq12541);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12542,seq12541__$1);
}));

website.view.code = (function website$view$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12547 = arguments.length;
var i__4737__auto___12548 = (0);
while(true){
if((i__4737__auto___12548 < len__4736__auto___12547)){
args__4742__auto__.push((arguments[i__4737__auto___12548]));

var G__12549 = (i__4737__auto___12548 + (1));
i__4737__auto___12548 = G__12549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.view.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.view.code.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"85%",new cljs.core.Keyword(null,"background-color","background-color",570434026),website.view.code_color,new cljs.core.Keyword(null,"padding","padding",1660304693),".2rem .4rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),children], null);
}));

(website.view.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.view.code.cljs$lang$applyTo = (function (seq12546){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12546));
}));

website.view.project = (function website$view$project(p__12550){
var map__12551 = p__12550;
var map__12551__$1 = (((((!((map__12551 == null))))?(((((map__12551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12551):map__12551);
var title = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"title","title",636505583));
var year = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"year","year",335913393));
var by = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"by","by",30600856));
var desc = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project","div.project",-77240323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 1.5rem 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),website.view.medium_weight], null)], null),title,(((!((year == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),website.view.regular_weight], null)], null),"(",year,")"], null)], null):null)], null),(((!((by == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.by-line","div.by-line",-2037570366),by], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),desc], null)], null);
});
website.view.section = (function website$view$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12558 = arguments.length;
var i__4737__auto___12559 = (0);
while(true){
if((i__4737__auto___12559 < len__4736__auto___12558)){
args__4742__auto__.push((arguments[i__4737__auto___12559]));

var G__12560 = (i__4737__auto___12559 + (1));
i__4737__auto___12559 = G__12560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.section.cljs$core$IFn$_invoke$arity$variadic = (function (p__12555,children){
var map__12556 = p__12555;
var map__12556__$1 = (((((!((map__12556 == null))))?(((((map__12556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12556):map__12556);
var style = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var header = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"header","header",119441134));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2.5rem 0"], null),style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),website.view.medium_weight,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.25rem"], null)], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),children], null)], null);
}));

(website.view.section.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.section.cljs$lang$applyTo = (function (seq12553){
var G__12554 = cljs.core.first.call(null,seq12553);
var seq12553__$1 = cljs.core.next.call(null,seq12553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12554,seq12553__$1);
}));

website.view.auto_play_video = (function website$view$auto_play_video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12563 = arguments.length;
var i__4737__auto___12564 = (0);
while(true){
if((i__4737__auto___12564 < len__4736__auto___12563)){
args__4742__auto__.push((arguments[i__4737__auto___12564]));

var G__12565 = (i__4737__auto___12564 + (1));
i__4737__auto___12564 = G__12565;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.auto_play_video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.auto_play_video.cljs$core$IFn$_invoke$arity$variadic = (function (m,sources){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),"true",new cljs.core.Keyword(null,"muted","muted",1275109029),"true",new cljs.core.Keyword(null,"playsInline","playsInline",417242820),"true",new cljs.core.Keyword(null,"loop","loop",-395552849),"true"], null)),sources], null);
}));

(website.view.auto_play_video.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.auto_play_video.cljs$lang$applyTo = (function (seq12561){
var G__12562 = cljs.core.first.call(null,seq12561);
var seq12561__$1 = cljs.core.next.call(null,seq12561);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12562,seq12561__$1);
}));

website.view.ar_demo = (function website$view$ar_demo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ar-demo","div.ar-demo",884816524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-wrapper","div.video-wrapper",811926696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.auto_play_video,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/gifs/curve.webm",new cljs.core.Keyword(null,"type","type",1174270348),"video/webm"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/gifs/curve.mp4",new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),"An early demo showcasing different stroke thicknesses and colors."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.video-wrapper","div.video-wrapper",811926696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.auto_play_video,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/gifs/flat-rainbow.webm",new cljs.core.Keyword(null,"type","type",1174270348),"video/webm"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"../images/gifs/flat-rainbow.mp4",new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),"A later demo showcasing a new brush type (flat) and color type (rainbow)."], null)], null)], null);
});
website.view.app = (function website$view$app(p__12566){
var map__12567 = p__12566;
var map__12567__$1 = (((((!((map__12567 == null))))?(((((map__12567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12567):map__12567);
var map__12568 = cljs.core.get.call(null,map__12567__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__12568__$1 = (((((!((map__12568 == null))))?(((((map__12568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568):map__12568);
var width = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var small_screen_QMARK_ = (width < (600));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout","div.layout",-118565911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"color","color",1011675173),website.view.dark_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),website.view.very_light_color], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(960),new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem auto 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pic","div.pic",-1246127078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem"], null),((small_screen_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.5rem"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1.5rem",new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/david.jpeg",new cljs.core.Keyword(null,"alt","alt",-3214426),"David J. Lee",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"height","height",1025178622),(240),new cljs.core.Keyword(null,"width","width",-384071477),(240)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.site_title","h1.site_title",-1866337648),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),website.view.medium_weight], null)], null),"David J. Lee"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem auto"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null)], null),"I'm a senior computer science & math major at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://www.williams.edu"], null),"Williams College"], null),". ","I'm interested in functional programming (particularly Lisps), data structures (primarily filters), and machine learning."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),""], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.styled_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"files/davidjlee_resume.pdf"], null),"CV"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/djslzx"], null),"GitHub"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"mailto:David.J.Lee@williams.edu"], null),"Email"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Research"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"A Practical Adaptive Quotient Filter",new cljs.core.Keyword(null,"year","year",335913393),"Summer 2020",new cljs.core.Keyword(null,"by","by",30600856),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Worked with Profs. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://www.shikhas.com/"], null),"Shikha Singh"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://mccauleysam.com/"], null),"Sam McCauley"], null),"."], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Designed and implemented a novel adaptive quotient filter from scratch in C."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Inferring Synchronization Disciplines to Verify Atomicity of Concurrent Code"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"files/davidjlee_poster.pdf"], null),"[Poster]"], null)], null),new cljs.core.Keyword(null,"year","year",335913393),"Summer 2019",new cljs.core.Keyword(null,"by","by",30600856),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Worked with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://dept.cs.williams.edu/~freund/index.html"], null),"Prof. Stephen Freund"], null)," as part of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://www.cs.williams.edu/~freund/synchronicity/"], null),"Synchronicity"], null),"."], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Developed and implemented an algorithm to automatically infer synchronization disciplines\n                                 for concurrent programs.  For an explanation of synchronization disciplines, see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"files/davidjlee_poster.pdf"], null),"my poster"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://plv.colorado.edu/dmoon/assets/docs/thesis.pdf"], null),"this thesis"], null)," (Moon, 2016)."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Knot Theory Research"], null),new cljs.core.Keyword(null,"year","year",335913393),"Spring 2019",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Wrote a combinatorial algorithm in Python to conjecture an upper bound\n                                    on the number of distinct virtual multi-crossings for a virtual n-crossing, ignoring symmetries."], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Projects"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A Peer-to-Peer Privacy-Preserving Location-Based Digital Contact Tracing Protocol"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/shvmsptl/footprint"], null),"[GitHub]"], null)], null),new cljs.core.Keyword(null,"year","year",335913393),"2020",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Designed a protocol that uses GPS data from cellular\n                                   devices to alert users of potential virus transmission events without compromising user anonymity.\n                                   Simulated in Go using Apache Cassandra. Nominated for the 2020 Ward Prize, an annual prize\n                                   awarded to the best student project in the Williams College CS Department."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Augmented-Reality Drawing for iOS"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/djslzx/ar-drawing"], null),"[GitHub]"], null)], null),new cljs.core.Keyword(null,"year","year",335913393),"2018",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Wrote an iOS application that lets users draw curves in 3D space by moving their devices.\n                                    I used ARKit to determine device position from camera data and SceneKit to generate 3D geometries.\n                                    I also learned some basic computer graphics (curve smoothing and quaternion rotation).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.ar_demo], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Hearthstone in Lisp"], null),new cljs.core.Keyword(null,"year","year",335913393),"2019",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Rewrote the Hearthstone game engine in Clojure following functional programming best practices.\n                                The core engine consists entirely of pure functions that are rigorously tested --\n                                mutation is limited to the namespace handling the engine's interface with a web view."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Pod Rank & Search"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/djslzx/housing"], null),"[GitHub]"], null)], null),new cljs.core.Keyword(null,"year","year",335913393),"2020",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Williams College instituted a new housing system for the 2020-21 academic year,\n                                   in light of the COVID-19 pandemic.\n                                   Under the new guidelines, dorm rooms are grouped into \"pods\" of 2 to 12 rooms: students in a pod are allowed to\n                                   interact with each other without observing social distancing, like a family unit. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I wrote some scripts in Clojure to parse data about dorm rooms\n                                    (e.g. room size, window facing direction), new data about pod groupings,\n                                    and real-time data on the availability of individual rooms to provide\n                                    listings of available pods, ordered by user preference."], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem 0",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small",new cljs.core.Keyword(null,"color","color",1011675173),website.view.light_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),website.view.dark_color], null)], null),"\u00A9 2020 David J. Lee. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Written in ClojureScript w/ Reagent. ","Source available ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/djslzx/djslzx.github.io"], null),"here"], null),"."], null)], null);
});

//# sourceMappingURL=view.js.map

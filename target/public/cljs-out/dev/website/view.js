// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('website.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var len__4736__auto___12104 = arguments.length;
var i__4737__auto___12105 = (0);
while(true){
if((i__4737__auto___12105 < len__4736__auto___12104)){
args__4742__auto__.push((arguments[i__4737__auto___12105]));

var G__12106 = (i__4737__auto___12105 + (1));
i__4737__auto___12105 = G__12106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.link.cljs$core$IFn$_invoke$arity$variadic = (function (p__12101,children){
var map__12102 = p__12101;
var map__12102__$1 = (((((!((map__12102 == null))))?(((((map__12102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12102):map__12102);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12102__$1,cljs.core.cst$kw$url);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12102__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"normal"], null),cljs.core.cst$kw$href,url,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$rel,"noopener noreferrer"], null),children], null);
}));

(website.view.link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.link.cljs$lang$applyTo = (function (seq12099){
var G__12100 = cljs.core.first(seq12099);
var seq12099__$1 = cljs.core.next(seq12099);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12100,seq12099__$1);
}));

website.view.simple_list = (function website$view$simple_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12108 = arguments.length;
var i__4737__auto___12109 = (0);
while(true){
if((i__4737__auto___12109 < len__4736__auto___12108)){
args__4742__auto__.push((arguments[i__4737__auto___12109]));

var G__12110 = (i__4737__auto___12109 + (1));
i__4737__auto___12109 = G__12110;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.view.simple_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.view.simple_list.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_style,"none",cljs.core.cst$kw$padding_DASH_left,(0)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),x], null);
}),items)], null);
}));

(website.view.simple_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.view.simple_list.cljs$lang$applyTo = (function (seq12107){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12107));
}));

website.view.styled_list = (function website$view$styled_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12113 = arguments.length;
var i__4737__auto___12114 = (0);
while(true){
if((i__4737__auto___12114 < len__4736__auto___12113)){
args__4742__auto__.push((arguments[i__4737__auto___12114]));

var G__12115 = (i__4737__auto___12114 + (1));
i__4737__auto___12114 = G__12115;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.styled_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.styled_list.cljs$core$IFn$_invoke$arity$variadic = (function (styles,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_style,"none",cljs.core.cst$kw$padding_DASH_left,(0)], null)], 0))], null),children], null);
}));

(website.view.styled_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.styled_list.cljs$lang$applyTo = (function (seq12111){
var G__12112 = cljs.core.first(seq12111);
var seq12111__$1 = cljs.core.next(seq12111);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12112,seq12111__$1);
}));

website.view.code = (function website$view$code(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12117 = arguments.length;
var i__4737__auto___12118 = (0);
while(true){
if((i__4737__auto___12118 < len__4736__auto___12117)){
args__4742__auto__.push((arguments[i__4737__auto___12118]));

var G__12119 = (i__4737__auto___12118 + (1));
i__4737__auto___12118 = G__12119;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.view.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.view.code.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_family,"IBM Plex Mono",cljs.core.cst$kw$font_DASH_size,"85%",cljs.core.cst$kw$background_DASH_color,website.view.code_color,cljs.core.cst$kw$padding,".2rem .4rem",cljs.core.cst$kw$border_DASH_radius,(4)], null)], null),children], null);
}));

(website.view.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.view.code.cljs$lang$applyTo = (function (seq12116){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12116));
}));

website.view.project = (function website$view$project(p__12120){
var map__12121 = p__12120;
var map__12121__$1 = (((((!((map__12121 == null))))?(((((map__12121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12121):map__12121);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$title);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$year);
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$by);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,cljs.core.cst$kw$description);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$project,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_bottom,"1rem"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,"0 0 1.5rem 0",cljs.core.cst$kw$font_DASH_size,"1.5rem",cljs.core.cst$kw$font_DASH_weight,website.view.medium_weight], null)], null),title,(((!((year == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,website.view.regular_weight], null)], null),"(",year,")"], null)], null):null)], null),(((!((by == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$by_DASH_line,by], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$description,desc], null)], null);
});
website.view.section = (function website$view$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12128 = arguments.length;
var i__4737__auto___12129 = (0);
while(true){
if((i__4737__auto___12129 < len__4736__auto___12128)){
args__4742__auto__.push((arguments[i__4737__auto___12129]));

var G__12130 = (i__4737__auto___12129 + (1));
i__4737__auto___12129 = G__12130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.section.cljs$core$IFn$_invoke$arity$variadic = (function (p__12125,children){
var map__12126 = p__12125;
var map__12126__$1 = (((((!((map__12126 == null))))?(((((map__12126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12126):map__12126);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12126__$1,cljs.core.cst$kw$style);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12126__$1,cljs.core.cst$kw$header);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"2.5rem 0"], null),style], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,website.view.medium_weight,cljs.core.cst$kw$font_DASH_size,"1.25rem"], null)], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.EMPTY], null),children], null)], null);
}));

(website.view.section.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.section.cljs$lang$applyTo = (function (seq12123){
var G__12124 = cljs.core.first(seq12123);
var seq12123__$1 = cljs.core.next(seq12123);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12124,seq12123__$1);
}));

website.view.auto_play_video = (function website$view$auto_play_video(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12133 = arguments.length;
var i__4737__auto___12134 = (0);
while(true){
if((i__4737__auto___12134 < len__4736__auto___12133)){
args__4742__auto__.push((arguments[i__4737__auto___12134]));

var G__12135 = (i__4737__auto___12134 + (1));
i__4737__auto___12134 = G__12135;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return website.view.auto_play_video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(website.view.auto_play_video.cljs$core$IFn$_invoke$arity$variadic = (function (m,sources){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$autoPlay,"true",cljs.core.cst$kw$muted,"true",cljs.core.cst$kw$playsInline,"true",cljs.core.cst$kw$loop,"true"], null)], 0)),sources], null);
}));

(website.view.auto_play_video.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website.view.auto_play_video.cljs$lang$applyTo = (function (seq12131){
var G__12132 = cljs.core.first(seq12131);
var seq12131__$1 = cljs.core.next(seq12131);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12132,seq12131__$1);
}));

website.view.ar_demo = (function website$view$ar_demo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ar_DASH_demo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$margin,"1rem 0",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$flex_DASH_wrap,"wrap",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$video_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"1rem",cljs.core.cst$kw$max_DASH_width,"400px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.auto_play_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$max_DASH_height,"400px",cljs.core.cst$kw$max_DASH_width,"400px",cljs.core.cst$kw$padding,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"../images/gifs/curve.webm",cljs.core.cst$kw$type,"video/webm"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"../images/gifs/curve.mp4",cljs.core.cst$kw$type,"video/mp4"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"gray"], null)], null),"An early demo showcasing different stroke thicknesses and colors."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$video_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"1rem",cljs.core.cst$kw$max_DASH_width,"400px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.auto_play_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$max_DASH_height,"400px",cljs.core.cst$kw$max_DASH_width,"400px",cljs.core.cst$kw$padding,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"../images/gifs/flat-rainbow.webm",cljs.core.cst$kw$type,"video/webm"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"../images/gifs/flat-rainbow.mp4",cljs.core.cst$kw$type,"video/mp4"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"gray"], null)], null),"A later demo showcasing a new brush type (flat) and color type (rainbow)."], null)], null)], null);
});
website.view.app = (function website$view$app(p__12136){
var map__12137 = p__12136;
var map__12137__$1 = (((((!((map__12137 == null))))?(((((map__12137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12137):map__12137);
var map__12138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12137__$1,cljs.core.cst$kw$size);
var map__12138__$1 = (((((!((map__12138 == null))))?(((((map__12138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12138):map__12138);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12138__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12138__$1,cljs.core.cst$kw$height);
var small_screen_QMARK_ = (width < (600));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$layout,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$color,website.view.dark_color,cljs.core.cst$kw$background_DASH_color,website.view.very_light_color], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$max_DASH_width,(960),cljs.core.cst$kw$margin,"1rem auto 0",cljs.core.cst$kw$padding,"1rem",cljs.core.cst$kw$flex,"1 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pic,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin,"1rem"], null),((small_screen_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"1.5rem"], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_left,"1.5rem",cljs.core.cst$kw$float,"right"], null))], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"images/david.jpeg",cljs.core.cst$kw$alt,"David J. Lee",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_radius,"50%",cljs.core.cst$kw$height,(240),cljs.core.cst$kw$width,(240)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$site_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,(0),cljs.core.cst$kw$font_DASH_weight,website.view.medium_weight], null)], null),"David J. Lee"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"1rem auto"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"150%"], null)], null),"I'm a senior computer science & math major at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://www.williams.edu"], null),"Williams College"], null),". ","I'm interested in functional programming (particularly Lisps), data structures (primarily filters), and machine learning."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,""], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.styled_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"150%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"files/davidjlee_resume.pdf"], null),"CV"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://github.com/djslzx"], null),"GitHub"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"mailto:David.J.Lee@williams.edu"], null),"Email"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Research"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"A Practical Adaptive Quotient Filter",cljs.core.cst$kw$year,"Summer 2020",cljs.core.cst$kw$by,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Worked with Profs. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"http://www.shikhas.com/"], null),"Shikha Singh"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"http://mccauleysam.com/"], null),"Sam McCauley"], null),"."], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Designed and implemented a novel adaptive quotient filter from scratch in C."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Inferring Synchronization Disciplines to Verify Atomicity of Concurrent Code"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"files/davidjlee_poster.pdf"], null),"[Poster]"], null)], null),cljs.core.cst$kw$year,"Summer 2019",cljs.core.cst$kw$by,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Worked with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"http://dept.cs.williams.edu/~freund/index.html"], null),"Prof. Stephen Freund"], null)," as part of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"http://www.cs.williams.edu/~freund/synchronicity/"], null),"Synchronicity"], null),"."], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Developed and implemented an algorithm to automatically infer synchronization disciplines\n                                 for concurrent programs.  For an explanation of synchronization disciplines, see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"files/davidjlee_poster.pdf"], null),"my poster"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"http://plv.colorado.edu/dmoon/assets/docs/thesis.pdf"], null),"this thesis"], null)," (Moon, 2016)."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Knot Theory Research"], null),cljs.core.cst$kw$year,"Spring 2019",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Wrote a combinatorial algorithm in Python to conjecture an upper bound\n                                    on the number of distinct virtual multi-crossings for a virtual n-crossing, ignoring symmetries."], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,"Projects"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A Peer-to-Peer Privacy-Preserving Location-Based Digital Contact Tracing Protocol"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://github.com/shvmsptl/footprint"], null),"[GitHub]"], null)], null),cljs.core.cst$kw$year,"2020",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Designed a protocol that uses GPS data from cellular\n                                   devices to alert users of potential virus transmission events without compromising user anonymity.\n                                   Simulated in Go using Apache Cassandra. Nominated for the 2020 Ward Prize, an annual prize\n                                   awarded to the best student project in the Williams College CS Department."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Augmented-Reality Drawing for iOS"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://github.com/djslzx/ar-drawing"], null),"[GitHub]"], null)], null),cljs.core.cst$kw$year,"2018",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Wrote an iOS application that lets users draw curves in 3D space by moving their devices.\n                                    I used ARKit to determine device position from camera data and SceneKit to generate 3D geometries.\n                                    I also learned some basic computer graphics (curve smoothing and quaternion rotation).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.ar_demo], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Hearthstone in Lisp"], null),cljs.core.cst$kw$year,"2019",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Rewrote the Hearthstone game engine in Clojure following functional programming best practices.\n                                The core engine consists entirely of pure functions that are rigorously tested --\n                                mutation is limited to the namespace handling the engine's interface with a web view."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.project,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Pod Rank & Search"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://github.com/djslzx/housing"], null),"[GitHub]"], null)], null),cljs.core.cst$kw$year,"2020",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Williams College instituted a new housing system for the 2020-21 academic year,\n                                   in light of the COVID-19 pandemic.\n                                   Under the new guidelines, dorm rooms are grouped into \"pods\" of 2 to 12 rooms: students in a pod are allowed to\n                                   interact with each other without observing social distancing, like a family unit. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I wrote some scripts in Clojure to parse data about dorm rooms\n                                    (e.g. room size, window facing direction), new data about pod groupings,\n                                    and real-time data on the availability of individual rooms to provide\n                                    listings of available pods, ordered by user preference."], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$padding,"2rem 0",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$font_DASH_size,"small",cljs.core.cst$kw$color,website.view.light_color,cljs.core.cst$kw$background_DASH_color,website.view.dark_color], null)], null),"\u00A9 2020 David J. Lee. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Written in ClojureScript w/ Reagent. ","Source available ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://github.com/djslzx/djslzx.github.io"], null),"here"], null),"."], null)], null);
});

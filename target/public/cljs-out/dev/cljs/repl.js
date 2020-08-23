// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11455){
var map__11456 = p__11455;
var map__11456__$1 = (((((!((map__11456 == null))))?(((((map__11456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11456):map__11456);
var m = map__11456__$1;
var n = cljs.core.get.call(null,map__11456__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11458_11490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11459_11491 = null;
var count__11460_11492 = (0);
var i__11461_11493 = (0);
while(true){
if((i__11461_11493 < count__11460_11492)){
var f_11494 = cljs.core._nth.call(null,chunk__11459_11491,i__11461_11493);
cljs.core.println.call(null,"  ",f_11494);


var G__11495 = seq__11458_11490;
var G__11496 = chunk__11459_11491;
var G__11497 = count__11460_11492;
var G__11498 = (i__11461_11493 + (1));
seq__11458_11490 = G__11495;
chunk__11459_11491 = G__11496;
count__11460_11492 = G__11497;
i__11461_11493 = G__11498;
continue;
} else {
var temp__5735__auto___11499 = cljs.core.seq.call(null,seq__11458_11490);
if(temp__5735__auto___11499){
var seq__11458_11500__$1 = temp__5735__auto___11499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11458_11500__$1)){
var c__4556__auto___11501 = cljs.core.chunk_first.call(null,seq__11458_11500__$1);
var G__11502 = cljs.core.chunk_rest.call(null,seq__11458_11500__$1);
var G__11503 = c__4556__auto___11501;
var G__11504 = cljs.core.count.call(null,c__4556__auto___11501);
var G__11505 = (0);
seq__11458_11490 = G__11502;
chunk__11459_11491 = G__11503;
count__11460_11492 = G__11504;
i__11461_11493 = G__11505;
continue;
} else {
var f_11506 = cljs.core.first.call(null,seq__11458_11500__$1);
cljs.core.println.call(null,"  ",f_11506);


var G__11507 = cljs.core.next.call(null,seq__11458_11500__$1);
var G__11508 = null;
var G__11509 = (0);
var G__11510 = (0);
seq__11458_11490 = G__11507;
chunk__11459_11491 = G__11508;
count__11460_11492 = G__11509;
i__11461_11493 = G__11510;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11511 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11511);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11511)))?cljs.core.second.call(null,arglists_11511):arglists_11511));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11462_11512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11463_11513 = null;
var count__11464_11514 = (0);
var i__11465_11515 = (0);
while(true){
if((i__11465_11515 < count__11464_11514)){
var vec__11476_11516 = cljs.core._nth.call(null,chunk__11463_11513,i__11465_11515);
var name_11517 = cljs.core.nth.call(null,vec__11476_11516,(0),null);
var map__11479_11518 = cljs.core.nth.call(null,vec__11476_11516,(1),null);
var map__11479_11519__$1 = (((((!((map__11479_11518 == null))))?(((((map__11479_11518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11479_11518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11479_11518):map__11479_11518);
var doc_11520 = cljs.core.get.call(null,map__11479_11519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11521 = cljs.core.get.call(null,map__11479_11519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11517);

cljs.core.println.call(null," ",arglists_11521);

if(cljs.core.truth_(doc_11520)){
cljs.core.println.call(null," ",doc_11520);
} else {
}


var G__11522 = seq__11462_11512;
var G__11523 = chunk__11463_11513;
var G__11524 = count__11464_11514;
var G__11525 = (i__11465_11515 + (1));
seq__11462_11512 = G__11522;
chunk__11463_11513 = G__11523;
count__11464_11514 = G__11524;
i__11465_11515 = G__11525;
continue;
} else {
var temp__5735__auto___11526 = cljs.core.seq.call(null,seq__11462_11512);
if(temp__5735__auto___11526){
var seq__11462_11527__$1 = temp__5735__auto___11526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11462_11527__$1)){
var c__4556__auto___11528 = cljs.core.chunk_first.call(null,seq__11462_11527__$1);
var G__11529 = cljs.core.chunk_rest.call(null,seq__11462_11527__$1);
var G__11530 = c__4556__auto___11528;
var G__11531 = cljs.core.count.call(null,c__4556__auto___11528);
var G__11532 = (0);
seq__11462_11512 = G__11529;
chunk__11463_11513 = G__11530;
count__11464_11514 = G__11531;
i__11465_11515 = G__11532;
continue;
} else {
var vec__11481_11533 = cljs.core.first.call(null,seq__11462_11527__$1);
var name_11534 = cljs.core.nth.call(null,vec__11481_11533,(0),null);
var map__11484_11535 = cljs.core.nth.call(null,vec__11481_11533,(1),null);
var map__11484_11536__$1 = (((((!((map__11484_11535 == null))))?(((((map__11484_11535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11484_11535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11484_11535):map__11484_11535);
var doc_11537 = cljs.core.get.call(null,map__11484_11536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11538 = cljs.core.get.call(null,map__11484_11536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11534);

cljs.core.println.call(null," ",arglists_11538);

if(cljs.core.truth_(doc_11537)){
cljs.core.println.call(null," ",doc_11537);
} else {
}


var G__11539 = cljs.core.next.call(null,seq__11462_11527__$1);
var G__11540 = null;
var G__11541 = (0);
var G__11542 = (0);
seq__11462_11512 = G__11539;
chunk__11463_11513 = G__11540;
count__11464_11514 = G__11541;
i__11465_11515 = G__11542;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__11486 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11487 = null;
var count__11488 = (0);
var i__11489 = (0);
while(true){
if((i__11489 < count__11488)){
var role = cljs.core._nth.call(null,chunk__11487,i__11489);
var temp__5735__auto___11543__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___11543__$1)){
var spec_11544 = temp__5735__auto___11543__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11544));
} else {
}


var G__11545 = seq__11486;
var G__11546 = chunk__11487;
var G__11547 = count__11488;
var G__11548 = (i__11489 + (1));
seq__11486 = G__11545;
chunk__11487 = G__11546;
count__11488 = G__11547;
i__11489 = G__11548;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__11486);
if(temp__5735__auto____$1){
var seq__11486__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11486__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__11486__$1);
var G__11549 = cljs.core.chunk_rest.call(null,seq__11486__$1);
var G__11550 = c__4556__auto__;
var G__11551 = cljs.core.count.call(null,c__4556__auto__);
var G__11552 = (0);
seq__11486 = G__11549;
chunk__11487 = G__11550;
count__11488 = G__11551;
i__11489 = G__11552;
continue;
} else {
var role = cljs.core.first.call(null,seq__11486__$1);
var temp__5735__auto___11553__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___11553__$2)){
var spec_11554 = temp__5735__auto___11553__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11554));
} else {
}


var G__11555 = cljs.core.next.call(null,seq__11486__$1);
var G__11556 = null;
var G__11557 = (0);
var G__11558 = (0);
seq__11486 = G__11555;
chunk__11487 = G__11556;
count__11488 = G__11557;
i__11489 = G__11558;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11559 = cljs.core.conj.call(null,via,t);
var G__11560 = cljs.core.ex_cause.call(null,t);
via = G__11559;
t = G__11560;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11563 = datafied_throwable;
var map__11563__$1 = (((((!((map__11563 == null))))?(((((map__11563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11563):map__11563);
var via = cljs.core.get.call(null,map__11563__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__11563__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__11563__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__11564 = cljs.core.last.call(null,via);
var map__11564__$1 = (((((!((map__11564 == null))))?(((((map__11564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11564):map__11564);
var type = cljs.core.get.call(null,map__11564__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__11564__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__11564__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__11565 = data;
var map__11565__$1 = (((((!((map__11565 == null))))?(((((map__11565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11565):map__11565);
var problems = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__11565__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__11566 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__11566__$1 = (((((!((map__11566 == null))))?(((((map__11566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11566):map__11566);
var top_data = map__11566__$1;
var source = cljs.core.get.call(null,map__11566__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__11571 = phase;
var G__11571__$1 = (((G__11571 instanceof cljs.core.Keyword))?G__11571.fqn:null);
switch (G__11571__$1) {
case "read-source":
var map__11572 = data;
var map__11572__$1 = (((((!((map__11572 == null))))?(((((map__11572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11572):map__11572);
var line = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11572__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__11574 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__11574__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11574,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11574);
var G__11574__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11574__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11574__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11574__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11574__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11575 = top_data;
var G__11575__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11575,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11575);
var G__11575__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11575__$1);
var G__11575__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11575__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11575__$2);
var G__11575__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11575__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11575__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11575__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11575__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11576 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11576,(0),null);
var method = cljs.core.nth.call(null,vec__11576,(1),null);
var file = cljs.core.nth.call(null,vec__11576,(2),null);
var line = cljs.core.nth.call(null,vec__11576,(3),null);
var G__11579 = top_data;
var G__11579__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__11579,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__11579);
var G__11579__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__11579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__11579__$1);
var G__11579__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__11579__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11579__$2);
var G__11579__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11579__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11579__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11579__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11579__$4;
}

break;
case "execution":
var vec__11580 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11580,(0),null);
var method = cljs.core.nth.call(null,vec__11580,(1),null);
var file = cljs.core.nth.call(null,vec__11580,(2),null);
var line = cljs.core.nth.call(null,vec__11580,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__11562_SHARP_){
var or__4126__auto__ = (p1__11562_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__11562_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__11583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__11583__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__11583,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__11583);
var G__11583__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11583__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11583__$1);
var G__11583__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__11583__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11583__$2);
var G__11583__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__11583__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__11583__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11583__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11583__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11571__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11587){
var map__11588 = p__11587;
var map__11588__$1 = (((((!((map__11588 == null))))?(((((map__11588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11588):map__11588);
var triage_data = map__11588__$1;
var phase = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__11588__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11590 = phase;
var G__11590__$1 = (((G__11590 instanceof cljs.core.Keyword))?G__11590.fqn:null);
switch (G__11590__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11591_11600 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11592_11601 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11593_11602 = true;
var _STAR_print_fn_STAR__temp_val__11594_11603 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11593_11602);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11594_11603);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11585_SHARP_){
return cljs.core.dissoc.call(null,p1__11585_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11592_11601);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11591_11600);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11595_11604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11596_11605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11597_11606 = true;
var _STAR_print_fn_STAR__temp_val__11598_11607 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11597_11606);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11598_11607);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11586_SHARP_){
return cljs.core.dissoc.call(null,p1__11586_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11596_11605);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11595_11604);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11590__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

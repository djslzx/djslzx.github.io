// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13437){
var map__13438 = p__13437;
var map__13438__$1 = (((((!((map__13438 == null))))?(((((map__13438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13438):map__13438);
var m = map__13438__$1;
var n = cljs.core.get.call(null,map__13438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13440_13472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13441_13473 = null;
var count__13442_13474 = (0);
var i__13443_13475 = (0);
while(true){
if((i__13443_13475 < count__13442_13474)){
var f_13476 = cljs.core._nth.call(null,chunk__13441_13473,i__13443_13475);
cljs.core.println.call(null,"  ",f_13476);


var G__13477 = seq__13440_13472;
var G__13478 = chunk__13441_13473;
var G__13479 = count__13442_13474;
var G__13480 = (i__13443_13475 + (1));
seq__13440_13472 = G__13477;
chunk__13441_13473 = G__13478;
count__13442_13474 = G__13479;
i__13443_13475 = G__13480;
continue;
} else {
var temp__5735__auto___13481 = cljs.core.seq.call(null,seq__13440_13472);
if(temp__5735__auto___13481){
var seq__13440_13482__$1 = temp__5735__auto___13481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13440_13482__$1)){
var c__4556__auto___13483 = cljs.core.chunk_first.call(null,seq__13440_13482__$1);
var G__13484 = cljs.core.chunk_rest.call(null,seq__13440_13482__$1);
var G__13485 = c__4556__auto___13483;
var G__13486 = cljs.core.count.call(null,c__4556__auto___13483);
var G__13487 = (0);
seq__13440_13472 = G__13484;
chunk__13441_13473 = G__13485;
count__13442_13474 = G__13486;
i__13443_13475 = G__13487;
continue;
} else {
var f_13488 = cljs.core.first.call(null,seq__13440_13482__$1);
cljs.core.println.call(null,"  ",f_13488);


var G__13489 = cljs.core.next.call(null,seq__13440_13482__$1);
var G__13490 = null;
var G__13491 = (0);
var G__13492 = (0);
seq__13440_13472 = G__13489;
chunk__13441_13473 = G__13490;
count__13442_13474 = G__13491;
i__13443_13475 = G__13492;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13493 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13493);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13493)))?cljs.core.second.call(null,arglists_13493):arglists_13493));
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
var seq__13444_13494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13445_13495 = null;
var count__13446_13496 = (0);
var i__13447_13497 = (0);
while(true){
if((i__13447_13497 < count__13446_13496)){
var vec__13458_13498 = cljs.core._nth.call(null,chunk__13445_13495,i__13447_13497);
var name_13499 = cljs.core.nth.call(null,vec__13458_13498,(0),null);
var map__13461_13500 = cljs.core.nth.call(null,vec__13458_13498,(1),null);
var map__13461_13501__$1 = (((((!((map__13461_13500 == null))))?(((((map__13461_13500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13461_13500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13461_13500):map__13461_13500);
var doc_13502 = cljs.core.get.call(null,map__13461_13501__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13503 = cljs.core.get.call(null,map__13461_13501__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13499);

cljs.core.println.call(null," ",arglists_13503);

if(cljs.core.truth_(doc_13502)){
cljs.core.println.call(null," ",doc_13502);
} else {
}


var G__13504 = seq__13444_13494;
var G__13505 = chunk__13445_13495;
var G__13506 = count__13446_13496;
var G__13507 = (i__13447_13497 + (1));
seq__13444_13494 = G__13504;
chunk__13445_13495 = G__13505;
count__13446_13496 = G__13506;
i__13447_13497 = G__13507;
continue;
} else {
var temp__5735__auto___13508 = cljs.core.seq.call(null,seq__13444_13494);
if(temp__5735__auto___13508){
var seq__13444_13509__$1 = temp__5735__auto___13508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13444_13509__$1)){
var c__4556__auto___13510 = cljs.core.chunk_first.call(null,seq__13444_13509__$1);
var G__13511 = cljs.core.chunk_rest.call(null,seq__13444_13509__$1);
var G__13512 = c__4556__auto___13510;
var G__13513 = cljs.core.count.call(null,c__4556__auto___13510);
var G__13514 = (0);
seq__13444_13494 = G__13511;
chunk__13445_13495 = G__13512;
count__13446_13496 = G__13513;
i__13447_13497 = G__13514;
continue;
} else {
var vec__13463_13515 = cljs.core.first.call(null,seq__13444_13509__$1);
var name_13516 = cljs.core.nth.call(null,vec__13463_13515,(0),null);
var map__13466_13517 = cljs.core.nth.call(null,vec__13463_13515,(1),null);
var map__13466_13518__$1 = (((((!((map__13466_13517 == null))))?(((((map__13466_13517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13466_13517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13466_13517):map__13466_13517);
var doc_13519 = cljs.core.get.call(null,map__13466_13518__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13520 = cljs.core.get.call(null,map__13466_13518__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13516);

cljs.core.println.call(null," ",arglists_13520);

if(cljs.core.truth_(doc_13519)){
cljs.core.println.call(null," ",doc_13519);
} else {
}


var G__13521 = cljs.core.next.call(null,seq__13444_13509__$1);
var G__13522 = null;
var G__13523 = (0);
var G__13524 = (0);
seq__13444_13494 = G__13521;
chunk__13445_13495 = G__13522;
count__13446_13496 = G__13523;
i__13447_13497 = G__13524;
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

var seq__13468 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13469 = null;
var count__13470 = (0);
var i__13471 = (0);
while(true){
if((i__13471 < count__13470)){
var role = cljs.core._nth.call(null,chunk__13469,i__13471);
var temp__5735__auto___13525__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13525__$1)){
var spec_13526 = temp__5735__auto___13525__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13526));
} else {
}


var G__13527 = seq__13468;
var G__13528 = chunk__13469;
var G__13529 = count__13470;
var G__13530 = (i__13471 + (1));
seq__13468 = G__13527;
chunk__13469 = G__13528;
count__13470 = G__13529;
i__13471 = G__13530;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__13468);
if(temp__5735__auto____$1){
var seq__13468__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13468__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__13468__$1);
var G__13531 = cljs.core.chunk_rest.call(null,seq__13468__$1);
var G__13532 = c__4556__auto__;
var G__13533 = cljs.core.count.call(null,c__4556__auto__);
var G__13534 = (0);
seq__13468 = G__13531;
chunk__13469 = G__13532;
count__13470 = G__13533;
i__13471 = G__13534;
continue;
} else {
var role = cljs.core.first.call(null,seq__13468__$1);
var temp__5735__auto___13535__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___13535__$2)){
var spec_13536 = temp__5735__auto___13535__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13536));
} else {
}


var G__13537 = cljs.core.next.call(null,seq__13468__$1);
var G__13538 = null;
var G__13539 = (0);
var G__13540 = (0);
seq__13468 = G__13537;
chunk__13469 = G__13538;
count__13470 = G__13539;
i__13471 = G__13540;
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
var G__13541 = cljs.core.conj.call(null,via,t);
var G__13542 = cljs.core.ex_cause.call(null,t);
via = G__13541;
t = G__13542;
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
var map__13545 = datafied_throwable;
var map__13545__$1 = (((((!((map__13545 == null))))?(((((map__13545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13545):map__13545);
var via = cljs.core.get.call(null,map__13545__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13545__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13545__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13546 = cljs.core.last.call(null,via);
var map__13546__$1 = (((((!((map__13546 == null))))?(((((map__13546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13546):map__13546);
var type = cljs.core.get.call(null,map__13546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13547 = data;
var map__13547__$1 = (((((!((map__13547 == null))))?(((((map__13547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13547):map__13547);
var problems = cljs.core.get.call(null,map__13547__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13547__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13547__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13548 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13548__$1 = (((((!((map__13548 == null))))?(((((map__13548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13548):map__13548);
var top_data = map__13548__$1;
var source = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13553 = phase;
var G__13553__$1 = (((G__13553 instanceof cljs.core.Keyword))?G__13553.fqn:null);
switch (G__13553__$1) {
case "read-source":
var map__13554 = data;
var map__13554__$1 = (((((!((map__13554 == null))))?(((((map__13554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13554):map__13554);
var line = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13556 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13556__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13556,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13556);
var G__13556__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13556__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13556__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13556__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13557 = top_data;
var G__13557__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13557,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13557);
var G__13557__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13557__$1);
var G__13557__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13557__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13557__$2);
var G__13557__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13557__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13557__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13557__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13557__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13558 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13558,(0),null);
var method = cljs.core.nth.call(null,vec__13558,(1),null);
var file = cljs.core.nth.call(null,vec__13558,(2),null);
var line = cljs.core.nth.call(null,vec__13558,(3),null);
var G__13561 = top_data;
var G__13561__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13561,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13561);
var G__13561__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13561__$1);
var G__13561__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__13561__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13561__$2);
var G__13561__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13561__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13561__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13561__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13561__$4;
}

break;
case "execution":
var vec__13562 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13562,(0),null);
var method = cljs.core.nth.call(null,vec__13562,(1),null);
var file = cljs.core.nth.call(null,vec__13562,(2),null);
var line = cljs.core.nth.call(null,vec__13562,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13544_SHARP_){
var or__4126__auto__ = (p1__13544_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13544_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__13565 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13565__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13565,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13565);
var G__13565__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13565__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13565__$1);
var G__13565__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__13565__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13565__$2);
var G__13565__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13565__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13565__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13565__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13565__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13553__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13569){
var map__13570 = p__13569;
var map__13570__$1 = (((((!((map__13570 == null))))?(((((map__13570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13570):map__13570);
var triage_data = map__13570__$1;
var phase = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13570__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__13572 = phase;
var G__13572__$1 = (((G__13572 instanceof cljs.core.Keyword))?G__13572.fqn:null);
switch (G__13572__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13573_13582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13574_13583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13575_13584 = true;
var _STAR_print_fn_STAR__temp_val__13576_13585 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13575_13584);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13576_13585);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13567_SHARP_){
return cljs.core.dissoc.call(null,p1__13567_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13574_13583);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13573_13582);
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
var _STAR_print_newline_STAR__orig_val__13577_13586 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13578_13587 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13579_13588 = true;
var _STAR_print_fn_STAR__temp_val__13580_13589 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13579_13588);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13580_13589);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13568_SHARP_){
return cljs.core.dissoc.call(null,p1__13568_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13578_13587);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13577_13586);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13572__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

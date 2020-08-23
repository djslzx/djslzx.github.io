// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('website.view');
if((typeof website !== 'undefined') && (typeof website.core !== 'undefined') && (typeof website.core.app_state_atom !== 'undefined')){
} else {
website.core.app_state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0)], null)], null));
}
website.core.render = (function website$core$render(app_state){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.app,app_state], null),document.getElementById("app"));
});
website.core.get_screen_size = (function website$core$get_screen_size(){
var bounding_client_rect = document.body.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,bounding_client_rect.height,cljs.core.cst$kw$width,bounding_client_rect.width], null);
});
website.core.re_render = (function website$core$re_render(){
return website.core.render(cljs.core.deref(website.core.app_state_atom));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(website.core.app_state_atom)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0)], null))){
cljs.core.add_watch(website.core.app_state_atom,cljs.core.cst$kw$change,(function (_,___$1,old_app_state,new_app_state){
return website.core.render(new_app_state);
}));

addEventListener("resize",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(website.core.app_state_atom,cljs.core.assoc,cljs.core.cst$kw$size,website.core.get_screen_size());
}));

cljs.core.reset_BANG_(website.core.app_state_atom,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,website.core.get_screen_size()], null));
} else {
}
if((typeof website !== 'undefined') && (typeof website.core !== 'undefined') && (typeof website.core.start_up !== 'undefined')){
} else {
website.core.start_up = (function (){
website.core.render(cljs.core.deref(website.core.app_state_atom));

return true;
})()
;
}

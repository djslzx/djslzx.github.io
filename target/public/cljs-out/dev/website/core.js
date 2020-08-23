// Compiled by ClojureScript 1.10.773 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('website.view');
if((typeof website !== 'undefined') && (typeof website.core !== 'undefined') && (typeof website.core.app_state_atom !== 'undefined')){
} else {
website.core.app_state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0)], null)], null));
}
website.core.render = (function website$core$render(app_state){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.view.app,app_state], null),document.getElementById("app"));
});
website.core.get_screen_size = (function website$core$get_screen_size(){
var bounding_client_rect = document.body.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),bounding_client_rect.height,new cljs.core.Keyword(null,"width","width",-384071477),bounding_client_rect.width], null);
});
website.core.re_render = (function website$core$re_render(){
return website.core.render.call(null,cljs.core.deref.call(null,website.core.app_state_atom));
});
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.core.app_state_atom)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0)], null))){
cljs.core.add_watch.call(null,website.core.app_state_atom,new cljs.core.Keyword(null,"change","change",-1163046502),(function (_,___$1,old_app_state,new_app_state){
return website.core.render.call(null,new_app_state);
}));

addEventListener("resize",(function (){
return cljs.core.swap_BANG_.call(null,website.core.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),website.core.get_screen_size.call(null));
}));

cljs.core.reset_BANG_.call(null,website.core.app_state_atom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),website.core.get_screen_size.call(null)], null));
} else {
}
if((typeof website !== 'undefined') && (typeof website.core !== 'undefined') && (typeof website.core.start_up !== 'undefined')){
} else {
website.core.start_up = (function (){
website.core.render.call(null,cljs.core.deref.call(null,website.core.app_state_atom));

return true;
})()
;
}

//# sourceMappingURL=core.js.map

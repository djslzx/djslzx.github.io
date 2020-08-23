(ns ^:figwheel-hooks website.core
  (:require [reagent.dom :as r.dom]
            [website.view :as view]))

(defonce app-state-atom (atom {:size {:height 0
                                      :width  0}}))

(defn render
  [app-state]
  (r.dom/render [view/app app-state]
                (js/document.getElementById "app")))

(defn get-screen-size
  []
  (let [bounding-client-rect (js/document.body.getBoundingClientRect)]
    {:height (.-height bounding-client-rect)
     :width  (.-width bounding-client-rect)}))

(defn ^:after-load re-render []
  (do (render (deref app-state-atom))))

(when (= (:size @app-state-atom) {:height 0
                                  :width  0})
  (add-watch app-state-atom
             :change
             (fn [_ _ old-app-state new-app-state]
               (render new-app-state)))

  (js/addEventListener "resize"
                       (fn [] (swap! app-state-atom assoc :size (get-screen-size))))

  (reset! app-state-atom {:size (get-screen-size)}))

(defonce start-up (do (render (deref app-state-atom))
                      true))
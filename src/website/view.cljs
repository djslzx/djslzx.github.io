(ns website.view
  (:require [clojure.string :as str]
            [reagent.core :as reagent]))

; Colors
(def dark-color "#333232")
(def light-color "#B7B7B7")
(def very-light-color "#f1f2f3")
(def dark-accent "#AF5D63")
(def light-accent "#CEB7B3")
(def code-color "#e1e2e3")

; Font weights
(def light-weight 300)
(def regular-weight 400)
(def medium-weight 500)
(def semi-bold-weight 600)
(def bold-weight 700)

; File locations
(def curve-webm "videos/curve.webm")
(def curve-mp4 "videos/curve.mp4")
(def rainbow-webm "videos/flat-rainbow.webm")
(def rainbow-mp4 "videos/flat-rainbow.mp4")
(def face "images/david.jpeg")
(def cv "files/davidjlee_cv.pdf")
(def poster "files/synchronicity19.pdf")

(defn link
  [{url   :url
    class :class} & children]
  [:a {:style  {:font-weight "normal"}
       :href   url
       :class  class
       :target "_blank"
       :rel    "noopener noreferrer"}
   children])

(defn simple-list
  [& items]
  [:ul {:style {:list-style   "none"
                :padding-left 0}}
   (map-indexed (fn [i x]
                  [:li {:key i} x])
                items)])

(defn styled-list
  [styles & children]
  [:ul {:style (merge styles
                      {:list-style   "none"
                       :padding-left 0})}
   children])

(defn code
  [& children]
  [:span {:style {:font-family      "IBM Plex Mono"
                  :font-size        "85%"
                  :background-color code-color
                  :padding          ".2rem .4rem"
                  :border-radius    4}}
   children])

(defn project
  [{title :title
    year  :year
    by    :by
    desc  :description}]
  [:div.project {:style {:padding-bottom "1rem"}}
   [:h3 {:style {:margin      "0"
                 :font-size   "1.5rem"
                 :font-weight regular-weight
                 }}
    title]
   (if (some? year)
     [:h4 {:style {:margin-top  "0.5rem"
                   :font-size   "1.25rem"
                   :font-weight regular-weight
                   :color       "gray"}}
      year])
   (if (some? by)
     [:div.by-line {:style {}}
      by])
   [:div.description desc]])

(defn line
  ([thickness color]
   [line thickness color {}])
  ([thickness color style]
   [:div {:style (merge style {:padding-bottom 10
                               :border-top     (str thickness " solid " color)})}]))

(defn section
  [m & children]
  (let [{header :header} m]
    [:div.section m
     (if (some? header)
       [:div [:h2 {:style {:font-weight medium-weight}}
              header]
        [line "1px" light-color]])
     [:div children]]))

(defn auto-play-video
  [m & sources]
  [:video (merge m
                 {:autoPlay    "true"
                  :muted       "true"
                  :playsInline "true"
                  :loop        "true"})
   sources])

(defn hidden-txt
  [off-txt on-txt & hidden-txt]
  (let [hidden? (reagent/atom true)]
    (fn []
      [:span
       [:a {:on-click #(swap! hidden? not)}
        (if @hidden?
          off-txt
          on-txt)]
       " "
       (if-not (deref hidden?)
         hidden-txt)])))

(defn ar-demo []
  [:div.ar-demo {:style {:margin          "1rem 0"
                         :display         "flex"
                         :flex-direction  "row"
                         :flex-wrap       "wrap"
                         :justify-content "center"}}
   [:div.video-wrapper {:style {:margin    "1rem"
                                :max-width "400px"}}
    [auto-play-video {:style {:width      "100%"
                              :max-height "400px"
                              :max-width  "400px"
                              :padding    0}}
     [:source {:src curve-webm :type "video/webm"}]
     [:source {:src curve-mp4 :type "video/mp4"}]]
    [:p {:style {:color "gray"}}
     "An early demo showcasing different stroke thicknesses and colors."]]
   [:div.video-wrapper {:style {:margin    "1rem"
                                :max-width "400px"}}
    [auto-play-video {:style {:width      "100%"
                              :max-height "400px"
                              :max-width  "400px"
                              :padding    0}}
     [:source {:src rainbow-webm :type "video/webm"}]
     [:source {:src rainbow-mp4 :type "video/mp4"}]]
    [:p {:style {:color "gray"}}
     "A later demo showcasing a new brush type (flat) and color type (rainbow)."]]])

(defn app
  [{{width  :width
     height :height} :size}]
  (let [small-screen? (< width 600)]
    [:div.layout {:style {:display          "flex"
                          :flex-direction   "column"
                          :min-height       "100vh"
                          :color            dark-color
                          :background-color very-light-color}}
     [:div.main {:style {:box-sizing "border-box"
                         :max-width  960
                         :margin     "1rem auto 0"
                         :padding    "1rem"
                         :flex       "1 1"}}

      [:div.pic
       {:style (merge {:text-align "center"
                       :margin     "1rem"}
                      (if small-screen?
                        {:margin-bottom "1.5rem"}
                        {:margin-left "1.5rem"
                         :float       "right"}))}
       [:img {:src   face
              :alt   "My face"
              :style {:border-radius "50%"
                      :height        240
                      :width         240}}]]

      [:h1.site_title {:style {:margin-top  0
                               :font-weight medium-weight}}
       "David J. Lee"]

      [section {:style {:padding-bottom "1rem"}}
       [:div
        [:p {:style {:font-size "1.5rem"}}
         "I'm a fourth year undergraduate computer science & math major at " [link {:url "https://www.williams.edu/"} "Williams College"] ". "
         "I'm interested in programming languages, data structures, and machine learning."]
        [:p {:style {:font-size "1.2rem"}}
         "My research experience is in concurrent program analysis and probabilistic data structures. "
         "I am currently working on developing adaptive filters for my undergraduate thesis. "]
        [:p {:style {:color     "gray"
                     :font-size "100%"}}
         "Last updated: 29 Dec 2020"]]
       [:div
        [styled-list {:font-size "150%"}
         [:li [link {:url cv} "CV"]]
         [:li [link {:url "https://github.com/djslzx"} "GitHub"]]
         [:li [link {:url "mailto:djl5@williams.edu"} "Email"]]]]]

      [section {:header "Research"}
       [simple-list
        [project {:title       [:span "A Practical Adaptive Quotient Filter" " " [:span {:style {:font-weight "normal"}} "(Senior Thesis)"]]
                  :year        "Summer 2020–Present"
                  :by          [:span "Advised by Profs. " [link {:url "http://cs.williams.edu/~shikha/"} "Shikha Singh"]
                                " and " [link {:url "http://mccauleysam.com/"} "Sam McCauley"] "."]
                  :description [:div
                                [:p "I'm currently working on building a novel adaptive quotient filter. "
                                 [hidden-txt
                                  [:span {:style {:color "gray"}} "Read more"]
                                  [:span {:style {:color "gray"}} "See less"]
                                  [:div {:style {:margin "1rem"}}
                                   [line "1px" light-color {:margin "2rem 0 1rem"}]
                                   [:h3 {:style {:font-weight medium-weight}} "What is a filter?"]
                                   [:p "A filter is a lossy set representation with a bounded and one-sided error rate. "
                                    "Because it is lossy, a filter is compact. It can therefore fit higher in the memory hierarchy than "
                                    "a lossless set representation, benefiting from faster queries. "
                                    "Because its error is bounded and one-sided (no false negatives), a filter can be queried "
                                    "before a lossless set to save time on queries by  \"filtering out\" most negative queries. "
                                    "A filter is useful insofar as it is small (to speed up queries by fitting in smaller caches) and accurate (to cut out more negative queries)."]
                                   [:h3 {:style {:font-weight medium-weight}} "What makes a filter adaptive?"]
                                   [:p "Conventional filters are static: they do not correct the false positives they report. "
                                    "If a static filter reports a false positive for an element x, all subsequent queries on x will also yield false positives, driving the filter's error rate to 1. "
                                    "Therefore, a static filter's error rate holds for single queries but not for sequences of queries. "]
                                   [:p "In contrast, an adaptive filter's error rate holds for (bounded) sequences of queries. "
                                    "Adaptive filters remember and fix past false positives, significantly outperforming static filters against adversaries or on queries following a Zipfian distribution - a feature of much real-world data. "
                                    "In general, adaptive filters are useful for data that contains repetitions. "]
                                   [:h3 {:style {:font-weight medium-weight}} "My Work"]
                                   [:p "Designing an adaptive filter entails coming up with clever mechanisms to compactly remember past errors. "
                                    "I've been working with my advisors to develop an adaptive quotient filter that effectively remembers and fixes "
                                    "past errors while maintaining high throughput."]
                                   [line "1px" light-color {:margin "2rem 0 1rem"}]]]
                                 ]]}]
        [project {:title       [:span "Inferring Synchronization Disciplines to Verify Atomicity of Concurrent Code"
                                " " [link {:url poster} "[Poster]"]]
                  :year        "Summer 2019"
                  :by          [:span "With " [link {:url "http://dept.cs.williams.edu/~freund/index.html"} "Prof. Stephen Freund"]
                                " for " [link {:url "http://www.cs.williams.edu/~freund/synchronicity/"} "Synchronicity"] "."]
                  :description [:p
                                "I developed and implemented an algorithm to automatically infer synchronization disciplines
                                 for concurrent programs.  For an explanation of synchronization disciplines, see "
                                [link {:url poster} "my poster"] " or "
                                [link {:url "http://plv.colorado.edu/dmoon/assets/docs/thesis.pdf"} "this thesis"] " (Moon, 2016)."]}]
        [project {:title       [:span "Knot Theory Research"]
                  :year        "Spring 2019"
                  :description [:p "I wrote a combinatorial algorithm in Python to conjecture an upper bound
                                    on the number of distinct virtual multi-crossings for a virtual n-crossing, ignoring symmetries."]}]]]

      [section {:header "Projects"}
       [simple-list
        [project {:title       [:span "Learned Bloom Filters"
                                " " [link {:url "https://github.com/djslzx/learned-filters"} "[GitHub]"]]
                  :year        "Fall 2020"
                  :description [:p "Implemented learning-augmented Bloom filters in Python using PyTorch, "
                                "working off of two papers: "
                                [link {:url "https://arxiv.org/abs/1712.01208"} "[Kraska 2018]"]
                                " & "
                                [link {:url "https://papers.nips.cc/paper/2018/file/0f49c89d1e7298bb9930789c8ed59d48-Paper.pdf"} "[Mitzenmacher 2018]"]
                                "."]}]
        [project {:title       [:span "A P2P Privacy-Preserving Location-Based Proximity Tracing Protocol"
                                " " [link {:url "https://github.com/shvmsptl/footprint"} "[GitHub]"]]
                  :year        "Spring 2020"
                  :description [:p "Designed a peer-to-peer digital contact tracing protocol that uses GPS data from cellular
                                   devices to alert users of potential virus transmission events without compromising user anonymity.
                                   Simulated in Go using Apache Cassandra. Nominated for the 2020 Ward Prize, an annual prize
                                   awarded to the best student project in the Williams College CS Department."]}]
        [project {:title       [:span "Hearthstone in Lisp"]
                  :year        "Fall 2019"
                  :description [:p "Rewrote the Hearthstone game engine in Clojure following functional programming best practices.
                                The engine core consists entirely of pure functions that are rigorously tested —
                                mutation is limited to the namespace handling the engine's interface with a web view."]}]
        [project {:title       [:span
                                "Augmented-Reality Drawing for iOS"
                                " " [link {:url "https://github.com/djslzx/ar-drawing"} "[GitHub]"]]
                  :year        "Fall 2018"
                  :description [:p "Wrote an iOS application that lets users draw curves in 3D space by moving their devices.
                                    I used ARKit to determine device position from camera data and SceneKit to generate 3D geometries.
                                    I also learned some basic computer graphics (curve smoothing and quaternion rotation)."
                                [ar-demo]]}]
        ;[project {:title       [:span "Pod Rank & Search"
        ;                        " " [link {:url "https://github.com/djslzx/housing"} "[GitHub]"]]
        ;          :year        "2020"
        ;          :description [:span
        ;                        [:p "Williams College instituted a new housing system for the 2020-21 academic year,
        ;                           in light of the COVID-19 pandemic.
        ;                           Under the new guidelines, dorm rooms are grouped into \"pods\" of 2 to 12 rooms: students in a pod are allowed to
        ;                           interact with each other without observing social distancing, like a family unit. "]
        ;                        [:p "I wrote some scripts in Clojure to parse data about dorm rooms
        ;                            (e.g. room size, window facing direction), new data about pod groupings,
        ;                            and real-time data on the availability of individual rooms to provide
        ;                            listings of available pods, ordered by user preference."]]}]
        ]]]

     [:div.footer {:style {:text-align       "center"
                           :padding          "2rem 0"
                           :width            "100%"
                           :font-size        "smaller"
                           :color            light-color
                           :background-color dark-color}}
      "© 2020 David J. Lee. "
      [:br] [:br]
      "Written in ClojureScript w/ Reagent. "
      "Source available " [link {:url "https://github.com/djslzx/djslzx.github.io"} "here"] "."]]))

(ns website.view
  (:require [reagent.core :as reagent]
            [reagent.impl.component :as comp]))

(def last-updated "July 2021")

; Colors
(def bkg-color "white")
(def text-color "#333232")
(def highlight-color "#e9eef2")
(def underline-color "#dfe5e9")
(def dark-gray "#494c4d")
(def light-gray "#8d9599")

; Font weights
(def light-weight 300)
(def regular-weight 400)
(def medium-weight 500)
(def semi-bold-weight 600)
(def bold-weight 700)

; Font families
(def serif "Newsreader, serif")
(def sans "Jost, sans serif")

; File locations
(def curve-webm "videos/curve.webm")
(def curve-mp4 "videos/curve.mp4")
(def rainbow-webm "videos/flat-rainbow.webm")
(def rainbow-mp4 "videos/flat-rainbow.mp4")
(def face "images/david.jpeg")
(def cv "files/davidjlee_cv.pdf")
(def poster "files/synchronicity19.pdf")
(def thesis "files/thesis.pdf")

(def small-caps
  {:text-transform "uppercase"
   :letter-spacing "0.08em"
   :font-size      "85%"})

(def link-style
  {:font-family serif
   :font-weight medium-weight})

(defn link
  [{url   :url
    style :style
    class :class} & children]
  [:a {:style  (merge link-style style)
       :href   url
       :class  class
       :target "_blank"
       :rel    "noopener noreferrer"}
   children])

(defn embedded-link
  "Take in a sequence of items, which can either be strings or vectors containing 
   string-url pairs"
  [& items]
  [:span {:style link-style}
   (map (fn [item]
          (if (vector? item)
            (let [[str url] item]
              [:a {:href   url
                   :target "_blank"
                   :rel    "noopener noreferrer"}
               str])
            item))
        items)])

(defn name-emph [x]
  [:span {:style {}}
   x])

(defn simple-list
  [style & items]
  [:ul {:style (merge {:list-style   "none"
                       :padding-left 0}
                      style)}
   (map-indexed (fn [i x]
                  [:li {:key i} x])
                items)])

(defn section
  [m & children]
  (let [{header :header} m]
    [:div.section (merge {:style {:margin "2.5rem 0 1.5rem"}}
                         m)
     (if (some? header)
       [:div [:h2.section_header header]])
     [:div children]]))

(defn paper
  [title authors & rest]
  [:div.paper {:style {:margin-bottom "1rem"}}
   [:h3 {:style {:font-weight   medium-weight
                 :font-family   sans
                 :margin-bottom "0.05rem"}}
    title]
   [:div authors]
   [:div rest]])

(defn project
  [{title :title
    desc  :desc}]
  [:div.project {:style {:margin-bottom "1rem"}}
   [:h3 {:style {:font-weight medium-weight
                 :font-family sans
                 :margin      "0 0 0.5rem"}}
    title]
   [:div.description desc]])

(defn course
  [title sems]
  [:div {:style {}}
   [:span
    [:span {:style {:margin 0
                    :float  "left"}}
     title]
    " "
    [:span {:style {:font-size   "90%"
                    :font-family sans
                    :float       "right"}}
     sems]]
   [:div {:style {:clear "both"}}]])

(defn award
  [title year desc]
  [:div {:style {:margin-bottom "1rem"}}
   [:span
    [:span {:style {:font-family sans
                    :font-weight medium-weight}}
     title]
    " "
    [:span {:style {:font-family sans
                    :font-size   "90%"}}
     "(" year ")"]
    ". "
    (if (not-empty desc)
      [:span {:style {}}
       [:br] desc])
    ]])

(defn reveal
  [title contents]
  (let [hidden? (reagent/atom true)]
    (fn []
      [section {:header [:a {:on-click #(swap! hidden? not)}
                         title]}
       (if-not @hidden?
         contents)])))

(defn line
  ([thickness color]
   [line thickness color {}])
  ([thickness color style]
   [:div {:style (merge style {:padding-bottom 10
                               :border-top     (str thickness " solid " color)})}]))

(defn auto-play-video
  [m & sources]
  [:video (merge m
                 {:autoPlay    "true"
                  :muted       "true"
                  :playsInline "true"
                  :loop        "true"})
   sources])

(defn ar-demo
  [small-screen?]
  (let [video-size (if small-screen?
                     400
                     320)
        wrapper-style (fn [direction] {:max-width video-size
                                       :margin    (if small-screen?
                                                    "1rem"
                                                    (cond
                                                      (= :left direction) "0 1rem 0 0"
                                                      (= :right direction) "0 0 0 1rem"
                                                      :else "1rem"))})
        video-style {:width      "100%"
                     :max-height video-size
                     :max-width  video-size
                     :padding    0}
        caption (fn [text]
                  [:p {:style {:color     light-gray
                               :font-size "smaller"}}
                   text])]
    [:div.ar-demo {:style {:margin          "1rem 0"
                           :display         "flex"
                           :flex-direction  "row"
                           :flex-wrap       "wrap"
                           :justify-content "center"}}
     [:div.video-wrapper {:style (wrapper-style :left)}
      [auto-play-video {:style video-style}
       [:source {:src curve-webm :type "video/webm"}]
       [:source {:src curve-mp4 :type "video/mp4"}]]
      (caption "An early demo showcasing different stroke thicknesses and colors.")]
     [:div.video-wrapper {:style (wrapper-style :right)}
      [auto-play-video {:style video-style}
       [:source {:src rainbow-webm :type "video/webm"}]
       [:source {:src rainbow-mp4 :type "video/mp4"}]]
      (caption "A later demo showcasing a new brush type (flat) and color type (rainbow).")]]))

(def steve
  [link {:url "http://dept.cs.williams.edu/~freund/index.html"} " Stephen Freund"])

(def shikha
  [link {:url "http://cs.williams.edu/~shikha/"} "Shikha Singh"])

(def sam
  [link {:url "http://mccauleysam.com/"} "Sam McCauley"])

(defn app
  [{{width  :width
     height :height} :size}]
  (let [small-screen? (< width 720)
        tiny-screen? (< width 560)]
    [:div.layout {:style {:display          "flex"
                          :flex-direction   "column"
                          :min-height       "100vh"
                          :color            text-color
                          :background-color bkg-color}}
     (if-not small-screen?
       [:div {:style {:height           "20px"
                      :background-color "white"}}])
     [:div.main {:style {:box-sizing "border-box"
                         :max-width  720
                         :margin     "0 auto"
                         :padding    "0 1rem"
                         :flex       "1 1"}}
      (comment
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
                        :width         240}}]
         ])
      [:h1.site_title "David J. Lee"]
      [:div
       [:p {:style {:font-size "110%"}}
        "I'm an incoming Ph.D. student in computer science at Cornell University. "
        "I'm interested in data structures, programming languages, and machine learning."]
       [:p
        "I received my bachelor's from Williams College, where I majored in math and computer science. "
        "As an undergrad, I worked on adaptive filters and concurrent program analysis. "
        "My " [link {:url thesis} "thesis"] " was supervised by " shikha " and " sam ". "]]
      [:div
       (let [contact-link (fn [url txt]
                            [link {:url   url
                                   :style {}}
                             txt])]
         [simple-list {:font-family sans}
          [contact-link cv "CV"]
          [contact-link "https://github.com/djslzx" "GitHub"]
          [contact-link "mailto:djl328@cornell.edu" "Email"]])]
      [section {:header "Research"}
       [simple-list {}
        [paper
         [:span
          "Telescoping Filter: A Practical Adaptive Filter"
          [embedded-link " ("
           ["Paper" "https://arxiv.org/abs/2107.02866"]
           ", "
           ["Code" "https://github.com/djslzx/telescoping-filter"]
           ")"]]
         [:span [name-emph "David J. Lee"] ", Samuel McCauley, Shikha Singh, and Max Stein."]
         [:span "European Symposium on Algorithms (ESA), 2021."]]
        [paper
         [:span
          "A Practical Adaptive Quotient Filter"
          [embedded-link " (" ["Thesis" thesis] ")"]]
         [:span
          [name-emph "David J. Lee"]
          ". Undergraduate thesis, 2021. " [:br]
          "Advised by " shikha " and " sam "."]]
        [paper
         [:span
          "Virtual Multicrossings and Petal Diagrams for Virtual Knots and Links"
          [embedded-link " (" ["Paper" "https://arxiv.org/abs/2103.08314"] ")"]]
         [:span
          "Colin Adams, Chaim Even-Zohar, Jonah Greenberg, Reuben Kaufman, "
          [name-emph "David Lee"]
          ", Darin Li, Dustin Ping, Theodore Sandstrom, and Xiwen Wang. In Submission."]]
        [paper
         [:span
          "Inferring Synchronization Disciplines to Verify Atomicity of Concurrent Code"
          [embedded-link " (" ["Poster" poster] ")"]]
         [:span
          "Margaret Allen, " [name-emph "David J. Lee"] ", 2019. "
          "With " steve " for " [link {:url "http://www.cs.williams.edu/~freund/synchronicity/"} "Synchronicity"] "."]]]]
      [section {:header "Teaching"}
       [:div [:h3 "Teaching Assistant, Williams College"]
        [simple-list {}
         [course
          (if tiny-screen?
            "Programming Languages"
            "Principles of Programming Languages")
          "S19, F19, F20, S21"]
         [course "Software Methods" "S20"]
         [course "Intro to Computer Science" "F18"]
         [course
          (if tiny-screen?
            "Data Structures"
            "Data Structures & Advanced Programming")
          "S18"]]]]
      (comment
        [section {:header "Academic Honors"}
         [simple-list {}
          [award "Sam Goldberg Colloquium Prize in Computer Science" 2021
           "Awarded for the best student colloquium in computer science at Williams College."]
          [award "Sigma Xi" 2021 ""]
          [award "Phi Beta Kappa, Junior Year" 2020 "Awarded to top 5% of graduating class by GPA."]]])
      [section {:header "Side Projects"}
       [simple-list {}
        [project {:title [:span "Learned Bloom Filters "
                          [embedded-link "(" ["Code" "https://github.com/djslzx/learned-filters"] ")"]]
                  :year  "Fall 2020"
                  :desc  [:span
                          "I implemented learning-augmented Bloom filters in Python using PyTorch, "
                          "working off of two recent papers ["
                          [link {:url "https://arxiv.org/abs/1712.01208"} "1"]
                          ", "
                          [link {:url "https://papers.nips.cc/paper/2018/file/0f49c89d1e7298bb9930789c8ed59d48-Paper.pdf"} "2"]
                          "]. "
                          "Nominated for the 2021 Ward Prize, an annual prize awarded to the best "
                          "student project in the Williams College CS Department."]}]
        [project {:title [:span "A P2P Privacy-Preserving Location-Based Proximity Tracing Protocol "
                          [embedded-link "(" ["Code" "https://github.com/shvmsptl/footprint"] ")"]]
                  :year  "Spring 2020"
                  :desc  [:span
                          "I designed a peer-to-peer digital contact tracing protocol that uses location "
                          "point data (e.g. GPS) from cellular devices to alert users of potential virus "
                          "transmission events without compromising user anonymity. "
                          "Simulated in Go using Apache Cassandra. Nominated for the 2020 Ward Prize."]}]
        [project {:title [:span "Hearthstone in Lisp"]
                  :year  "Fall 2019"
                  :desc  [:span
                          "I rewrote the Hearthstone game engine in Clojure "
                          "following functional programming best practices. "
                          "The engine core consists entirely of pure functions that are rigorously tested — "
                          "mutation is limited to the namespace handling the engine's interface with a web view. "
                          "Contact me for code."]}]
        [project {:title [:span
                          "Augmented-Reality Drawing for iOS "
                          [embedded-link "(" ["Code" "https://github.com/djslzx/ar-drawing"] ")"]]
                  :year  "Fall 2018"
                  :desc  [:span
                          [:span
                           "I wrote an iOS application that lets users draw 3D curves by moving their devices. "
                           "Built using ARKit, to determine device position from camera feed, and "
                           "SceneKit to generate 3D geometries."]
                          [ar-demo small-screen?]]}]]]]

     [:div.footer {:style {:text-align       "center"
                           :margin-top       "3rem"
                           :padding          "1rem 0"
                           :width            "100%"
                           :font-size        "0.75rem"
                           :color            dark-gray
                           :background-color bkg-color}}
      "Last updated " last-updated ". "
      "Written in ClojureScript " [link {:url "https://github.com/djslzx/djslzx.github.io"}
                                   "(Source)"]
      "."]]))

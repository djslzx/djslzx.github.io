(ns website.view)

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
   [:h3 {:style {:margin      "0 0 1.5rem 0"
                 :font-size   "1.5rem"
                 :font-weight medium-weight}}
    title
    (if (some? year)
      [:span " " [:span {:style {:font-weight regular-weight}}
                  "(" year ")"]])]
   (if (some? by) [:div.by-line by])
   [:div.description desc]])

(defn section
  [{:keys [style header]} & children]
  [:div.section {:style (merge {:margin "2.5rem 0"}
                               style)}
   [:h2 {:style {:font-weight medium-weight
                 :font-size   "1.25rem"}}
    header]
   [:div {:style {}} children]])

(defn auto-play-video
  [m & sources]
  [:video (merge m
                 {:autoPlay    "true"
                  :muted       "true"
                  :playsInline "true"
                  :loop        "true"})
   sources])

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
     [:source {:src "../images/gifs/curve.webm" :type "video/webm"}]
     [:source {:src "../images/gifs/curve.mp4" :type "video/mp4"}]]
    [:p {:style {:color "gray"}}
     "An early demo showcasing different stroke thicknesses and colors."]]
   [:div.video-wrapper {:style {:margin    "1rem"
                                :max-width "400px"}}
    [auto-play-video {:style {:width      "100%"
                              :max-height "400px"
                              :max-width  "400px"
                              :padding    0}}
     [:source {:src "../images/gifs/flat-rainbow.webm" :type "video/webm"}]
     [:source {:src "../images/gifs/flat-rainbow.mp4" :type "video/mp4"}]]
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
       [:img {:src   "images/david.jpeg"
              :alt   "David J. Lee"
              :style {:border-radius "50%"
                      :height        240
                      :width         240}}]]

      [:h1.site_title {:style {:margin-top  0
                               :font-weight medium-weight}}
       "David J. Lee"]

      [section {:style {:padding "1rem auto"}}
       [:p {:style {:font-size "150%"}}
        "I'm a senior computer science & math major at " [link {:url "https://www.williams.edu"} "Williams College"] ". "
        "I'm interested in functional programming (particularly Lisps), data structures (primarily filters), and machine learning."]]

      [section {:header ""}
       [styled-list {:font-size "150%"}
        [:li [link {:url "files/davidjlee_resume.pdf"} "CV"]]
        [:li [link {:url "https://github.com/djslzx"} "GitHub"]]
        [:li [link {:url "mailto:David.J.Lee@williams.edu"} "Email"]]]]

      [section {:header "Research"}
       [simple-list
        [project {:title       "A Practical Adaptive Quotient Filter"
                  :year        "Summer 2020"
                  :by          [:span "Worked with Profs. " [link {:url "http://www.shikhas.com/"} "Shikha Singh"]
                                " and " [link {:url "http://mccauleysam.com/"} "Sam McCauley"] "."]
                  :description [:p
                                "Designed and implemented a novel adaptive quotient filter from scratch in C."]}]
        [project {:title       [:span "Inferring Synchronization Disciplines to Verify Atomicity of Concurrent Code"
                                " " [link {:url "files/davidjlee_poster.pdf"} "[Poster]"]]
                  :year        "Summer 2019"
                  :by          [:span "Worked with " [link {:url "http://dept.cs.williams.edu/~freund/index.html"} "Prof. Stephen Freund"]
                                " as part of " [link {:url "http://www.cs.williams.edu/~freund/synchronicity/"} "Synchronicity"] "."]
                  :description [:p
                                "Developed and implemented an algorithm to automatically infer synchronization disciplines
                                 for concurrent programs.  For an explanation of synchronization disciplines, see "
                                [link {:url "files/davidjlee_poster.pdf"} "my poster"] " or "
                                [link {:url "http://plv.colorado.edu/dmoon/assets/docs/thesis.pdf"} "this thesis"] " (Moon, 2016)."]}]
        [project {:title       [:span "Knot Theory Research"]
                  :year        "Spring 2019"
                  :description [:p "Wrote a combinatorial algorithm in Python to conjecture an upper bound
                                    on the number of distinct virtual multi-crossings for a virtual n-crossing, ignoring symmetries."]}]]]

      [section {:header "Projects"}
       [simple-list
        [project {:title       [:span "A Peer-to-Peer Privacy-Preserving Location-Based Digital Contact Tracing Protocol"
                                " " [link {:url "https://github.com/shvmsptl/footprint"} "[GitHub]"]]
                  :year        "2020"
                  :description [:p "Designed a protocol that uses GPS data from cellular
                                   devices to alert users of potential virus transmission events without compromising user anonymity.
                                   Simulated in Go using Apache Cassandra. Nominated for the 2020 Ward Prize, an annual prize
                                   awarded to the best student project in the Williams College CS Department."]}]
        [project {:title       [:span
                                "Augmented-Reality Drawing for iOS"
                                " " [link {:url "https://github.com/djslzx/ar-drawing"} "[GitHub]"]]
                  :year        "2018"
                  :description [:p "Wrote an iOS application that lets users draw curves in 3D space by moving their devices.
                                    I used ARKit to determine device position from camera data and SceneKit to generate 3D geometries.
                                    I also learned some basic computer graphics (curve smoothing and quaternion rotation)."
                                [ar-demo]]}]
        [project {:title       [:span "Hearthstone in Lisp"]
                  :year        "2019"
                  :description [:p "Rewrote the Hearthstone game engine in Clojure following functional programming best practices.
                                The core engine consists entirely of pure functions that are rigorously tested --
                                mutation is limited to the namespace handling the engine's interface with a web view."]}]
        [project {:title       [:span "Pod Rank & Search"
                                " " [link {:url "https://github.com/djslzx/housing"} "[GitHub]"]]
                  :year        "2020"
                  :description [:span
                                [:p "Williams College instituted a new housing system for the 2020-21 academic year,
                                   in light of the COVID-19 pandemic.
                                   Under the new guidelines, dorm rooms are grouped into \"pods\" of 2 to 12 rooms: students in a pod are allowed to
                                   interact with each other without observing social distancing, like a family unit. "]
                                [:p "I wrote some scripts in Clojure to parse data about dorm rooms
                                    (e.g. room size, window facing direction), new data about pod groupings,
                                    and real-time data on the availability of individual rooms to provide
                                    listings of available pods, ordered by user preference."]]}]]]]

     [:div.footer {:style {:text-align       "center"
                           :padding          "2rem 0"
                           :width            "100%"
                           :font-size        "small"
                           :color            light-color
                           :background-color dark-color}}
      "© 2020 David J. Lee. "
      [:br] [:br]
      "Written in ClojureScript w/ Reagent. "
      "Source available " [link {:url "https://github.com/djslzx/djslzx.github.io"} "here"] "."]]))

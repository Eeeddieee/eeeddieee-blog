(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{335:function(s,t,a){"use strict";a.r(t);var n=a(8),E=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flex布局案例-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex布局案例-基础"}},[s._v("#")]),s._v(" flex布局案例-基础")]),s._v(" "),t("blockquote",[t("p",[s._v("可用"),t("kbd",[s._v("F12")]),s._v("开发者工具查看元素及样式，可打开codepen在线编辑代码。")])]),s._v(" "),t("div",{staticClass:"vuepress-plugin-demo-block__wrapper",staticStyle:{display:"none"},attrs:{"data-config":"","data-type":"vanilla","data-code":"%3Chtml%3E%0A%20%20%3Cdiv%20class%3D%22box%22%3E%0A%20%20%20%20%3Cspan%3E1%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E2%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E3%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E4%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E5%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E6%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%3E7%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fhtml%3E%0A%3Cstyle%3E%0A%2F*%20%E7%88%B6%E5%85%83%E7%B4%A0%E4%B8%8A%E5%AE%9A%E4%B9%89%E5%BC%B9%E6%80%A7%E7%9B%92%E6%A8%A1%E5%9E%8B%EF%BC%8C%E7%A7%B0%E4%B9%8B%E4%B8%BA%20%E2%80%9C%E5%AE%B9%E5%99%A8%E2%80%9D%20*%2F%0A.box%7B%0A%20%20width%3A%20350px%3B%0A%20%20height%3A%20300px%3B%0A%20%20background%3A%20%23eee%3B%0A%20%20%2F*%20%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%EF%BC%9A.box%E4%B8%BA%E5%AE%B9%E5%99%A8%EF%BC%8C.box%E4%B8%8B%E7%9A%84span%E4%B8%BA%E9%A1%B9%E7%9B%AE%EF%BC%9B.box%E7%9A%84x%E8%BD%B4%E4%B8%BA%E4%B8%BB%E8%BD%B4%EF%BC%8Cy%E8%BD%B4%E4%B8%BA%E4%BA%A4%E5%8F%89%E8%BD%B4%20*%2F%0A%20%20%2F*%20flex%20%E5%AE%9A%E4%B9%89%E4%B8%BA%E5%BC%B9%E6%80%A7%E7%9B%92%E6%A8%A1%E5%9E%8B%20*%2F%0A%20%20display%3A%20flex%3B%0A%20%20%2F*flex-direction%20%E6%8E%92%E5%88%97%E6%96%B9%E5%90%91%EF%BC%9A%20row%20%E8%A1%8C%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%89%20%7C%20row-reverse%20%E8%A1%8C-%E5%8F%8D%E8%BD%AC%20%20%7C%20column%20%E5%88%97%20%7C%20column-reverse%20%E5%88%97-%E5%8F%8D%E8%BD%AC%20*%2F%0A%20%20flex-direction%3A%20row%3B%20%0A%20%20%2F*flex-wrap%20%E6%98%AF%E5%90%A6%E6%8D%A2%E8%A1%8C%EF%BC%9A%20nowrap%20%E4%B8%8D%E6%8D%A2%E8%A1%8C%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%8C%E5%8F%AF%E8%83%BD%E4%BC%9A%E5%8E%8B%E7%BC%A9%E9%A1%B9%E7%9B%AE%E5%AE%BD%E5%BA%A6%EF%BC%89%20%7C%20wrap%20%E6%8D%A2%E8%A1%8C%20%7C%20wrap-reverse%20%E6%8D%A2%E8%A1%8C-%E5%8F%8D%E8%BD%AC%EF%BC%8C%E7%AC%AC%E4%B8%80%E8%A1%8C%E5%9C%A8%E4%B8%8B%E6%96%B9%20*%2F%0A%20%20flex-wrap%3A%20wrap%3B%0A%20%20%2F*%20flex-flow%20%20%E6%96%B9%E5%90%91%E5%92%8C%E6%8D%A2%E8%A1%8C%E7%9A%84%E7%AE%80%E5%86%99%EF%BC%9A%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BArow%20nowrap%EF%BC%8C%E6%96%B9%E5%90%91%20%E5%92%8C%20%E6%98%AF%E5%90%A6%E6%8D%A2%E8%A1%8C%20%E7%9A%84%E5%8F%96%E5%80%BC%20*%2F%0A%20%20flex-flow%3A%20row%20wrap%3B%0A%20%20%2F*%20justify-content%20%E9%A1%B9%E7%9B%AE%E5%9C%A8%E4%B8%BB%E8%BD%B4%E4%B8%8A%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F%3A%20flex-start%20%E5%B7%A6%E5%AF%B9%E9%BD%90%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%89%20%7C%20flex-end%20%E5%8F%B3%E5%AF%B9%E9%BD%90%20%7C%20center%20%E5%B1%85%E4%B8%AD%20%7C%20space-between%20%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90%20%7C%20space-around%20%E9%A1%B9%E7%9B%AE%E4%B8%A4%E4%BE%A7%E7%9A%84%E9%97%B4%E9%9A%94%E7%9B%B8%E7%AD%89*%2F%0A%20%20justify-content%3A%20space-around%3B%0A%20%20%2F*%20align-items%20%E9%A1%B9%E7%9B%AE%E5%9C%A8%E4%BA%A4%E5%8F%89%E8%BD%B4%E4%B8%8A%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F%EF%BC%9Astretch%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%89%E4%BC%B8%E5%B1%95%EF%BC%8C%E5%A6%82%E6%9E%9C%E9%A1%B9%E7%9B%AE%E6%9C%AA%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%BA%A6%E6%88%96%E8%AE%BE%E4%B8%BAauto%EF%BC%8C%E5%B0%86%E5%8D%A0%E6%BB%A1%E6%95%B4%E4%B8%AA%E5%AE%B9%E5%99%A8%E7%9A%84%E9%AB%98%E5%BA%A6%20%7C%20%0A%20%20flex-start%20%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E8%B5%B7%E7%82%B9%E5%AF%B9%E9%BD%90%20%7C%20flex-end%20%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E7%BB%88%E7%82%B9%E5%AF%B9%E9%BD%90%20%7C%20center%20%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E4%B8%AD%E5%BF%83%E7%82%B9%E5%AF%B9%E9%BD%90%20%7C%20baseline%20%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%AC%AC%E4%B8%80%E8%A1%8C%E6%96%87%E5%AD%97%E7%9A%84%E5%9F%BA%E7%BA%BF%E5%AF%B9%E9%BD%90%EF%BC%88%E9%80%82%E7%94%A8%E4%BA%8E%E6%AF%8F%E4%B8%AA%E9%A1%B9%E7%9B%AE%E9%AB%98%E5%BA%A6%E4%B8%8D%E4%B8%80%E8%87%B4%EF%BC%8C%E4%BB%A5%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E6%96%87%E5%AD%97%E4%B8%BA%E5%9F%BA%E5%87%86%E5%AF%B9%E9%BD%90%EF%BC%89%20*%2F%0A%20%20align-items%3A%20center%0A%20%20%2F*%20align-content%20%E5%A4%9A%E6%A0%B9%E8%BD%B4%E7%BA%BF%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F%EF%BC%88%E4%B8%80%E6%8E%92%E9%A1%B9%E7%9B%AE%E4%B8%BA%E4%B8%80%E6%A0%B9%E8%BD%B4%E7%BA%BF%EF%BC%8C%E5%8F%AA%E6%9C%89%E4%B8%80%E6%A0%B9%E8%BD%B4%E7%BA%BF%E6%97%B6%E6%AD%A4%E6%A0%B7%E5%BC%8F%E4%B8%8D%E8%B5%B7%E4%BD%9C%E7%94%A8%EF%BC%89%3A%20%0A%20%20stretch%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%89%E4%BC%B8%E5%B1%95%EF%BC%8C%E8%BD%B4%E7%BA%BF%E5%8D%A0%E6%BB%A1%E6%95%B4%E4%B8%AA%E4%BA%A4%E5%8F%89%E8%BD%B4%20%7C%20flex-start%20%E5%AE%B9%E5%99%A8%E9%A1%B6%E9%83%A8%E5%AF%B9%E9%BD%90%20%7C%20flex-end%20%E5%AE%B9%E5%99%A8%E5%BA%95%E9%83%A8%E5%AF%B9%E9%BD%90%20%7C%20center%20%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E7%9A%84%E4%B8%AD%E7%82%B9%E5%AF%B9%E9%BD%90%20%7C%0A%20%20space-between%20%E4%B8%8E%E4%BA%A4%E5%8F%89%E8%BD%B4%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90%EF%BC%8C%E8%BD%B4%E7%BA%BF%E4%B9%8B%E9%97%B4%E7%9A%84%E9%97%B4%E9%9A%94%E5%B9%B3%E5%9D%87%E5%88%86%E5%B8%83%7C%20space-around%20%E6%AF%8F%E6%A0%B9%E8%BD%B4%E7%BA%BF%E4%B8%A4%E4%BE%A7%E7%9A%84%E9%97%B4%E9%9A%94%E9%83%BD%E7%9B%B8%E7%AD%89*%2F%0A%20%20align-content%EF%BC%9Aflex-start%0A%20%20%2F*%20%E4%BB%A3%E7%A0%81%E5%8D%95%E8%AF%8D%E4%B8%AD%E6%96%87%E5%90%AB%E4%B9%89%20%EF%BC%9A%0A%20%20flex%20%E5%BC%B9%E6%80%A7%EF%BC%9B%20direction%20%E6%96%B9%E5%90%91%EF%BC%9B%20wrap%20%E5%A4%96%E5%A5%97%E3%80%81%E5%8C%85%EF%BC%9B%20flow%20%E6%B5%81%E5%8A%A8%0A%20%20justify%20%E5%AF%B9%E9%BD%90%EF%BC%9B%20content%20%E5%86%85%E5%AE%B9%EF%BC%9Bspace%20%E7%A9%BA%E9%97%B4%E3%80%81%E8%B7%9D%E7%A6%BB%EF%BC%9Bbetween%20%E5%9C%A8...%E4%B9%8B%E9%97%B4%EF%BC%9Baround%20%E5%91%A8%E5%9B%B4%E7%9A%84%0A%20%20align%20%E6%8E%92%E5%88%97%EF%BC%9Bstretch%20%E4%BC%B8%E5%B1%95%EF%BC%9B%0A%20%20*%2F%0A%7D%0A%2F*%20%E5%AD%90%E5%85%83%E7%B4%A0%E7%A7%B0%E4%B9%8B%E4%B8%BA%20%E2%80%9C%E9%A1%B9%E7%9B%AE%E2%80%9D%20*%2F%0A.box%20span%7B%0A%20%20display%3Ablock%3Bwidth%3A%2050px%3Bheight%3A%2050px%3Bbackground%3A%20mediumspringgreen%3Bmargin%3A%2010px%3Btext-align%3A%20center%3Bline-height%3A%2050px%3B%0A%20%20%2F*%20flex-grow%20%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%BE%E5%A4%A7%E6%AF%94%E4%BE%8B%EF%BC%8C%E9%BB%98%E8%AE%A4%E4%B8%BA0%EF%BC%8C%E5%8D%B3%E5%A6%82%E6%9E%9C%E5%AD%98%E5%9C%A8%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%EF%BC%8C%E4%B9%9F%E4%B8%8D%E6%94%BE%E5%A4%A7%3B%0A%20%20%E5%A6%82%E6%9E%9C%E6%89%80%E6%9C%89%E4%B8%BA1%E6%97%B6%EF%BC%8C%E5%88%99%E5%AE%83%E4%BB%AC%E5%B0%86%E7%AD%89%E5%88%86%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%EF%BC%88%E5%A6%82%E6%9E%9C%E6%9C%89%E7%9A%84%E8%AF%9D%EF%BC%89%E3%80%82%0A%20%20%E5%A6%82%E6%9E%9C%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%BA2%EF%BC%8C%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE%E9%83%BD%E4%B8%BA1%EF%BC%8C%E5%88%99%E4%B8%BA2%E7%9A%84%E5%8D%A0%E6%8D%AE%E7%9A%84%E5%89%A9%E4%BD%99%E7%A9%BA%E9%97%B4%E5%B0%86%E6%AF%94%E5%85%B6%E4%BB%96%E9%A1%B9%E5%A4%9A%E4%B8%80%E5%80%8D%E3%80%82%0A%20%20*%2F%0A%20%20flex-grow%3A%200%3B%20%2F*%20grow%20%E6%89%A9%E5%A4%A7%20*%2F%0A%20%20%2F*%20flex-shrink%E5%B1%9E%E6%80%A7%E5%AE%9A%E4%B9%89%E4%BA%86%E9%A1%B9%E7%9B%AE%E7%9A%84%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%EF%BC%8C%E9%BB%98%E8%AE%A4%E4%B8%BA1%EF%BC%8C%E5%8D%B3%E5%A6%82%E6%9E%9C%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%EF%BC%8C%E8%AF%A5%E9%A1%B9%E7%9B%AE%E5%B0%86%E7%BC%A9%E5%B0%8F%E3%80%82%20%0A%20%20%E5%A6%82%E6%9E%9C%E6%89%80%E6%9C%89%E9%A1%B9%E7%9B%AE%E9%83%BD%E4%B8%BA1%EF%BC%8C%E5%BD%93%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%E6%97%B6%EF%BC%8C%E9%83%BD%E5%B0%86%E7%AD%89%E6%AF%94%E4%BE%8B%E7%BC%A9%E5%B0%8F%E3%80%82%0A%20%20%E5%A6%82%E6%9E%9C%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%BA0%EF%BC%8C%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE%E9%83%BD%E4%B8%BA1%EF%BC%8C%E5%88%99%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3%E6%97%B6%EF%BC%8C%E4%B8%BA0%E7%9A%84%E4%B8%8D%E7%BC%A9%E5%B0%8F*%2F%0A%20%20flex-shrink%3A%201%3B%20%2F*%20shrink%20%E7%BC%A9%E5%B0%8F%20*%2F%0A%20%20%2F*%20flex-basis%E5%B1%9E%E6%80%A7%E5%AE%9A%E4%B9%89%E4%BA%86%E5%9C%A8%E5%88%86%E9%85%8D%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E4%B9%8B%E5%89%8D%EF%BC%8C%E9%A1%B9%E7%9B%AE%E5%8D%A0%E6%8D%AE%E7%9A%84%E4%B8%BB%E8%BD%B4%E7%A9%BA%E9%97%B4%EF%BC%88%E5%AE%BD%E5%BA%A6%EF%BC%89%E3%80%82%0A%20%20%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A0%B9%E6%8D%AE%E8%BF%99%E4%B8%AA%E5%B1%9E%E6%80%A7%EF%BC%8C%E8%AE%A1%E7%AE%97%E4%B8%BB%E8%BD%B4%E6%98%AF%E5%90%A6%E6%9C%89%E5%A4%9A%E4%BD%99%E7%A9%BA%E9%97%B4%E3%80%82%E5%AE%83%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%60auto%60%EF%BC%8C%E5%8D%B3%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%9C%AC%E6%9D%A5%E5%A4%A7%E5%B0%8F%E3%80%82%0A%20%20%E5%AE%83%E5%8F%AF%E4%BB%A5%E8%AE%BE%E4%B8%BA%E8%B7%9F%60width%60%E6%88%96%60height%60%E5%B1%9E%E6%80%A7%E4%B8%80%E6%A0%B7%E7%9A%84%E5%80%BC%EF%BC%88%E6%AF%94%E5%A6%8250px%EF%BC%89%EF%BC%8C%E5%88%99%E9%A1%B9%E7%9B%AE%E5%B0%86%E5%8D%A0%E6%8D%AE%E5%9B%BA%E5%AE%9A%E7%A9%BA%E9%97%B4*%2F%0A%20%20flex-basis%3A%20auto%3B%20%2F*%20basis%20%E5%9F%BA%E7%A1%80%20*%2F%0A%20%20%2F*%20flex%E5%B1%9E%E6%80%A7%E6%98%AFflex-grow%2Cflex-shrink%20%E5%92%8C%20flex-basis%E7%9A%84%E7%AE%80%E5%86%99%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%600%201%20auto%60%E3%80%82%E5%90%8E%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%8F%AF%E9%80%89%E3%80%82%0A%20%20%E8%AF%A5%E5%B1%9E%E6%80%A7%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%BF%AB%E6%8D%B7%E5%80%BC%EF%BC%9Aauto%20(1%201%20auto)%EF%BC%8C%E5%8D%B3%E6%94%BE%E5%A4%A7%20%E5%92%8C%20none%20(0%200%20auto)%EF%BC%8C%E5%8D%B3%E7%BC%A9%E5%B0%8F%E3%80%82%0A%20%20%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%85%88%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E5%B1%9E%E6%80%A7%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8D%95%E7%8B%AC%E5%86%99%E4%B8%89%E4%B8%AA%E5%88%86%E7%A6%BB%E7%9A%84%E5%B1%9E%E6%80%A7%EF%BC%8C%E5%9B%A0%E4%B8%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%9A%E6%8E%A8%E7%AE%97%E7%9B%B8%E5%85%B3%E5%80%BC%E3%80%82*%2F%0A%20%20flex%3A0%201%20auto%3B%20%2F*%20flex%3A%200%E6%94%BE%E5%A4%A7%201%E7%BC%A9%E5%B0%8F%20auto%E5%8E%9F%E6%9C%AC%E5%AE%BD%E5%BA%A6*%2F%0A%7D%0A.box%20span%3Anth-child(2)%7B%0A%20%20%2F*%20order%20%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%8E%92%E5%88%97%E9%A1%BA%E5%BA%8F%E3%80%82%E6%95%B0%E5%80%BC%E8%B6%8A%E5%B0%8F%EF%BC%8C%E6%8E%92%E5%88%97%E8%B6%8A%E9%9D%A0%E5%89%8D%EF%BC%8C%E9%BB%98%E8%AE%A4%E4%B8%BA0%20%3B%20%E5%8F%96%E5%80%BC%EF%BC%9A%E6%AD%A3%E8%B4%9F%E6%95%B4%E6%95%B0%E3%80%82*%2F%0A%20%20order%3A%20-1%3B%0A%20%20background%3A%20red%3B%0A%7D%0A.box%20span%3Anth-child(7)%7B%0A%20%20%2F*%20align-self%20%E5%B1%9E%E6%80%A7%E5%85%81%E8%AE%B8%E5%8D%95%E4%B8%AA%E9%A1%B9%E7%9B%AE%E6%9C%89%E4%B8%8E%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F%EF%BC%8C%E5%8F%AF%E8%A6%86%E7%9B%96align-items%E5%B1%9E%E6%80%A7%E3%80%82%0A%20%20%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BAauto%EF%BC%8C%E8%A1%A8%E7%A4%BA%E7%BB%A7%E6%89%BF%E7%88%B6%E5%85%83%E7%B4%A0%E7%9A%84align-items%E5%B1%9E%E6%80%A7%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E7%88%B6%E5%85%83%E7%B4%A0%EF%BC%8C%E5%88%99%E7%AD%89%E5%90%8C%E4%BA%8Estretch%E3%80%82%0A%20%20%E5%8F%96%E5%80%BC%EF%BC%9Aauto%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%89%20%7C%20flex-start%20%7C%20flex-end%20%7C%20center%20%7C%20baseline%20%7C%20stretch%E3%80%82%0A%20%20*%2F%0A%20%20align-self%3A%20flex-end%3B%0A%20%20background%3A%20blue%3B%0A%7D%0A%3C%2Fstyle%3E%0A"}},[t("div",{staticClass:"vuepress-plugin-demo-block__display"},[t("div",{staticClass:"vuepress-plugin-demo-block__app"})]),s._v(" "),t("div",{staticClass:"vuepress-plugin-demo-block__code"},[t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("4"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("5"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("6"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("7"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token style"}},[t("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 父元素上定义弹性盒模型，称之为 “容器” */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 350px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #eee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 基本概念：.box为容器，.box下的span为项目；.box的x轴为主轴，y轴为交叉轴 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex 定义为弹性盒模型 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*flex-direction 排列方向： row 行（默认） | row-reverse 行-反转  | column 列 | column-reverse 列-反转 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*flex-wrap 是否换行： nowrap 不换行（默认，可能会压缩项目宽度） | wrap 换行 | wrap-reverse 换行-反转，第一行在下方 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex-flow  方向和换行的简写：默认值为row nowrap，方向 和 是否换行 的取值 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* justify-content 项目在主轴上的对齐方式: flex-start 左对齐（默认） | flex-end 右对齐 | center 居中 | space-between 两端对齐 | space-around 项目两侧的间隔相等*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space-around"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* align-items 项目在交叉轴上的对齐方式：stretch（默认）伸展，如果项目未设置高度或设为auto，将占满整个容器的高度 | \n  flex-start 交叉轴的起点对齐 | flex-end 交叉轴的终点对齐 | center 交叉轴的中心点对齐 | baseline 项目的第一行文字的基线对齐（适用于每个项目高度不一致，以项目中的文字为基准对齐） */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* align-content 多根轴线的对齐方式（一排项目为一根轴线，只有一根轴线时此样式不起作用）: \n  stretch（默认）伸展，轴线占满整个交叉轴 | flex-start 容器顶部对齐 | flex-end 容器底部对齐 | center 与交叉轴的中点对齐 |\n  space-between 与交叉轴两端对齐，轴线之间的间隔平均分布| space-around 每根轴线两侧的间隔都相等*/")]),s._v("\n  align-content：flex-start\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 代码单词中文含义 ：\n  flex 弹性； direction 方向； wrap 外套、包； flow 流动\n  justify 对齐； content 内容；space 空间、距离；between 在...之间；around 周围的\n  align 排列；stretch 伸展；\n  */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 子元素称之为 “项目” */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("block"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mediumspringgreen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-align")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("line-height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex-grow 项目的放大比例，默认为0，即如果存在剩余空间，也不放大;\n  如果所有为1时，则它们将等分剩余空间（如果有的话）。\n  如果其中一个项目为2，其他项目都为1，则为2的占据的剩余空间将比其他项多一倍。\n  */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* grow 扩大 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 \n  如果所有项目都为1，当空间不足时，都将等比例缩小。\n  如果其中一个项目为0，其他项目都为1，则空间不足时，为0的不缩小*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* shrink 缩小 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（宽度）。\n  浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。\n  它可以设为跟`width`或`height`属性一样的值（比如50px），则项目将占据固定空间*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* basis 基础 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex属性是flex-grow,flex-shrink 和 flex-basis的简写，默认值为`0 1 auto`。后两个属性可选。\n  该属性有两个快捷值：auto (1 1 auto)，即放大 和 none (0 0 auto)，即缩小。\n  建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0 1 auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex: 0放大 1缩小 auto原本宽度*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box span:nth-child(2)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* order 项目的排列顺序。数值越小，排列越靠前，默认为0 ; 取值：正负整数。*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box span:nth-child(7)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。\n  默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。\n  取值：auto（默认） | flex-start | flex-end | center | baseline | stretch。\n  */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br")])])]),s._v(" "),t("div",{staticClass:"vuepress-plugin-demo-block__footer"})]),s._v(" "),t("blockquote",[t("p",[s._v("参考："),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=E.exports}}]);
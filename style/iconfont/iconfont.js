;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-yonghu" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M581.8674 529.3851c99.0299-34.7734 172.662-161.7673 172.662-264.7995 0-120.6162-100.8298-218.3699-225.2035-218.3699-124.3748 0-225.2035 97.7537-225.2035 218.3699 0 101.5771 71.5644 226.4565 168.4797 263.2845C118.5805 548.9758 78.0663 835.5825 78.0663 919.6964c0 2.3044 326.8858 0 451.2605 0 124.3738 0 421.9142-0.1699 421.9142-0.8534C951.5609 796.486 912.9764 557.6139 581.8674 529.3851zM360.4224 264.5866c0-90.5036 75.6218-163.778 168.9034-163.778 93.2806 0 168.9024 73.2733 168.9024 163.778 0 90.4177-75.6218 219.3923-168.9024 219.3923C436.0452 483.9789 360.4224 355.0043 360.4224 264.5866zM514.8241 876.0211c-93.2786 0-393.0826 2.8151-393.0826 0 0-262.0433 262.0551-305.7177 393.0826-305.7177 131.0265 0 393.0826 43.6744 393.0826 305.7177C907.9067 876.4468 608.0617 876.0211 514.8241 876.0211z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M495.897106 752.797251c0.645733 0.937348 1.371286 1.836835 2.202245 2.669806 0.831982 0.829901 1.727412 1.551332 2.660705 2.194992 0.096195 0.065492 0.184203 0.140193 0.279374 0.203638 0.083915 0.058328 0.173969 0.104377 0.25993 0.157589 3.006597 1.956561 6.588315 3.103688 10.441221 3.103688 3.855976 0 7.437694-1.147126 10.441221-3.103688 0.085961-0.054235 0.176016-0.102331 0.261977-0.157589 0.096195-0.064468 0.186249-0.138146 0.279374-0.203638 0.933293-0.64366 1.828723-1.36509 2.660705-2.194992 0.833005-0.832971 1.558559-1.732457 2.204292-2.671852l304.705998-304.71091c7.400854-7.383154 7.400854-19.394722 0-26.797319-7.400854-7.421017-19.413937-7.421017-26.814791 0L530.931429 695.823656l0-529.530258c0-10.605545-8.582821-19.188015-19.187777-19.188015s-19.189824 8.582469-19.189824 19.188015l0 529.530258L218.005898 421.286975c-7.401877-7.421017-19.414961-7.421017-26.815814 0-7.401877 7.399527-7.401877 19.414165 0 26.797319L495.897106 752.797251zM876.332912 837.879022 147.152344 837.879022c-10.60598 0-19.188801 8.582469-19.188801 19.189038 0 10.587126 8.582821 19.186991 19.188801 19.186991l729.180568 0c10.58756 0 19.189824-8.599865 19.189824-19.186991C895.522736 846.461491 886.920472 837.879022 876.332912 837.879022z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)

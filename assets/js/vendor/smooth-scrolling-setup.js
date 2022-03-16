var html = document.documentElement;
var body = document.body;

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    window_width = w.innerWidth || e.clientWidth || g.clientWidth,
    window_height = w.innerHeight|| e.clientHeight|| g.clientHeight;

var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
var scroll_speed = 0.05;

if (is_safari) {
  scroll_speed = 0.225;
}

// console.log(scroll_steps);
// Elastic: function(e) {
//   return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
// }

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.125, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};



var requestId = null;

navigator.sayswho= (function(){
  var ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

// if(navigator.sayswho != 'Safari 12' && 'Safari 10' && 'Safari 9'){
if(navigator.sayswho != 'Safari 10' && 'Safari 9'){
// if(navigator.sayswho != 'Safari 12' && 'Safari 11' && 'Safari 10' && 'Safari 9'){



  //by default behaviour
  window.addEventListener("load", onLoad);

  TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
  });

}else{

  //backup for dificult browsers
  scroller.target.removeAttribute('id');
  body.removeAttribute('class');
  document.querySelector('.scroll-container').removeAttribute('class');
  document.querySelector('.viewport').removeAttribute('class');
  // document.addEventListener("scroll", backupScroll);
}

function backupScroll(){
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
  scroller.y += (scrollY - scroller.y) * scroller.ease;
  console.log(scroller.y);
  translateY(scroller.y, 'anim_figure_01', 'layout_v1');
  translateY(scroller.y, 'anim_figure_01_b', 'layout_v1');
  translateY(scroller.y, 'anim_figure_02', 'layout_v2');
  translateY(scroller.y, 'anim_figure_03', 'layout_v2');
  translateY(scroller.y, 'anim_figure_04', 'layout_v3');
  translateY(scroller.y, 'anim_figure_05', 'layout_v3');
  translateY(scroller.y, 'anim_figure_06', 'layout_v3');
}

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
   
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });

  translateY(scroller.y, 'anim_figure_01', 'layout_v1');
  translateY(scroller.y, 'anim_figure_01_b', 'layout_v1');
  translateY(scroller.y, 'anim_figure_02', 'layout_v2');
  translateY(scroller.y, 'anim_figure_03', 'layout_v2');
  translateY(scroller.y, 'anim_figure_04', 'layout_v3');
  translateY(scroller.y, 'anim_figure_05', 'layout_v3');
  translateY(scroller.y, 'anim_figure_06', 'layout_v3');

  // requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;

  if((scroller.scrollRequest > 20) && (scroller.y > 150) && (is_safari)){
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }else{
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

}

function getOffsetTop( elem )
{
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
}

// animate translateY for parallax effect
function translateY (pageY, target, target_wrapper){
  target_el = document.getElementById(target);
  target_el_wrapper = document.getElementById(target_wrapper);
  var rect = target_el_wrapper.getBoundingClientRect();
  // target element height
  var el_height = target_el_wrapper.offsetHeight;

  // target element window offset
  var el_y = rect.top;
  // target element document offset
  var el_doc_y = getOffsetTop(target_el_wrapper);

  // window final top offset (window top offset to the bottom of the window)
  // window_final_offset = window_top_offset + window_inner_height
  var window_final_offset = pageY + window_height;

  // if element is visible in viewport:
  // a) if target element starts to appear in the viewport
  // b) if target element starts to dissapear from the viewport
  if((el_doc_y <= window_final_offset) && ((el_doc_y + el_height) >= pageY) && (pageY >= 10)){

    // length of the image translateY value
    // var transition_length = Math.abs(el_endpoint);
    var transition_length = parseInt(target_el.dataset.length);
    // console.log(el_endpoint, el_startpoint, transition_length);
    // multiplication factor (round to 3 digits after the decimal)
    var k = Math.round((transition_length / window_height) * 1000)/1000;
    var animY = Math.round((pageY - el_doc_y)*k);
    // console.log(pageY);
    var translateY = (-1) * (animY);
    // console.log(translateY, pageY - el_doc_y);
    // console.log (translateY, k, transition_length);
    if(Math.abs(translateY) <= Math.abs(transition_length)){
      target_el.style.setProperty('--translate-y', translateY + "px");
    }
  }
}

// animate translateY for parallax effect on backup web browsers
function animateY (pageY, target, target_wrapper){
  target_el = document.getElementById(target);
  target_el_wrapper = document.getElementById(target_wrapper);
  var rect = target_el_wrapper.getBoundingClientRect();
  // target element height
  var el_height = target_el_wrapper.offsetHeight;

  // target element window offset
  var el_y = rect.top;
  // target element document offset
  var el_doc_y = getOffsetTop(target_el_wrapper);

  // window final top offset (window top offset to the bottom of the window)
  // window_final_offset = window_top_offset + window_inner_height
  var window_final_offset = pageY + window_height;

  // if element is visible in viewport:
  // a) if target element starts to appear in the viewport
  // b) if target element stops to be visible in the viewport
  if((el_doc_y <= window_final_offset) && ((el_doc_y + el_height) >= pageY) && (pageY >= 10)){

    // length of the image translateY value
    // var transition_length = Math.abs(el_endpoint);
    // flag = false;
    var transition_length = parseInt(target_el.dataset.length);
    var translateY = (-1) * transition_length;
    target_el.style.setProperty('--translate-y', translateY + "px");
    target_el.style.setProperty('transition', "all 500ms linear");
  }else{
    // flag = false;
  }
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function elastic(e) {
  return (.04 - .04 / e) * Math.sin(25 * e) + 1
}
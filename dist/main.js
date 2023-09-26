(()=>{"use strict";var t={};function e(t,e){const n=document.createElement("button");n.setAttribute("id",t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}function n(){const t=document.getElementById("main-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section"),t.classList.add("home-about");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Mellow World is a captivating world fusion restaurant that takes diners on a global culinary journey through its eclectic and harmonious menu. Combining flavors, techniques, and ingredients from diverse cultures, Mellow World offers a unique and immersive dining experience that delights the senses. Whether savoring Thai-inspired tacos or indulging in Mediterranean-infused sushi rolls, patrons are treated to a symphony of tastes that celebrate the beauty of culinary fusion.",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)}function c(t,e){const n=document.createElement("section");n.classList.add("contact-section");const c=document.createElement("h2");return c.classList.add("contact-section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("contact-section-description"),e.textContent=t,n.appendChild(e)})),n}function s(){const t=document.getElementById("main-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=c("Phone Number",["564-923-5014","104-385-2042"]),n=c("Address",["2880 Broadway, New York, NY, 10025"]),s=function(){const t=document.createElement("div");t.classList.add("mapouter");const e=document.createElement("div");e.classList.add("gmap-canvas");const n=document.createElement("iframe");return n.width="500",n.height="340",n.id="gmap_canvas",n.src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",e.appendChild(n),t.appendChild(e),t}();t.appendChild(e),t.appendChild(n),t.appendChild(s)}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");if(c.length)for(var s=c.length-1;s>-1&&!e;)e=c[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p;const a=t.p+"assets/beefspinach.jpg",o=t.p+"assets/lamb.jpg",i=t.p+"assets/salmon.jpg",d=t.p+"assets/sandwichsoup.jpg",r=t.p+"assets/shrimp.jpg",l=t.p+"assets/squashrav.jpg",u=t.p+"assets/stuffedpepper.jpg",m=t.p+"assets/turkeysandwich.jpg";function p(t,e,n,c){const s=document.createElement("div");s.classList.add("food");const a=document.createElement("div");a.classList.add("img-container");const o=document.createElement("img");o.setAttribute("src",t),o.setAttribute("alt",c);const i=document.createElement("div");i.classList.add("description");const d=document.createElement("h3");d.textContent=e;const r=document.createElement("h2");return r.textContent=n,i.appendChild(d),i.appendChild(r),a.appendChild(o),s.appendChild(a),s.appendChild(i),s}function h(){const t=document.getElementById("main-content");t.classList.add("grid-layout"),t.classList.remove("flex-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}();const e=document.createElement("div");e.classList.add("menu"),[p(o,"Lamb Kebab","$18","Delicious fresh kebab"),p(i,"Lemon Salmon","$21","Wild caught atlantic salmon"),p(a,"Beef in Aus Jus","$23","Succulent beef served in aus jus"),p(d,"Tomato Soup and Slider","$16","Fresh tomato soup with a chicken slider"),p(r,"Thai Coconut Shrimp","$16","Crispy shrimp with tangy sauce"),p(l,"Butternut Squash Ravioli","$17","Seasonal butternut squash in homemade ravioli"),p(u,"Stuffed Pepper","$16","Pepper stuffed with southwest style filling"),p(m,"Turkey Sandwich","$16","Turkey sandwich on ancient grain bread")].forEach((e=>{t.appendChild(e)})),t.appendChild(e)}(function(){const t=document.getElementById("content"),n=function(t){const n=document.createElement("nav");n.setAttribute("id","nav");const c=e("home","home"),s=e("menu","menu"),a=e("contact","contact");return n.appendChild(c),n.appendChild(s),n.appendChild(a),n}();t.appendChild(n);const c=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="Welcome to Mellow World",n.appendChild(c),n}();t.appendChild(c);const s=function(t){const e=document.createElement("main");return e.setAttribute("id","main-content"),e}();t.appendChild(s);const a=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="A taddymason creation",n.appendChild(c),n}();t.appendChild(a)})(),n(),function(){const t=document.getElementById("home"),e=document.getElementById("menu"),c=document.getElementById("contact");t.addEventListener("click",n),e.addEventListener("click",h),c.addEventListener("click",s)}()})();
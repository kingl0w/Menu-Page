(()=>{"use strict";var t={};function e(t,e){const n=document.createElement("button");n.setAttribute("id",t);const s=document.createElement("span");return s.textContent=e,n.appendChild(s),n.classList.add("tab"),n}function n(){const t=document.getElementById("main-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About Us",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Mellow World is a captivating world fusion restaurant that takes diners on a global culinary journey through its eclectic and harmonious menu. Combining flavors, techniques, and ingredients from diverse cultures, Mellow World offers a unique and immersive dining experience that delights the senses. Whether savoring Thai-inspired tacos or indulging in Mediterranean-infused sushi rolls, patrons are treated to a symphony of tastes that celebrate the beauty of culinary fusion.",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)}function s(t,e){const n=document.createElement("section");n.classList.add("section");const s=document.createElement("h2");return s.classList.add("section-title"),s.textContent=t,n.appendChild(s),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}function o(){const t=document.getElementById("main-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=s("Phone Number",["564-923-5014","104-385-2042"]),n=s("Address",["location#1","location#2"]);t.appendChild(e),t.appendChild(n)}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var s=n.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&!e;)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const c=t.p+"assets/beefspinach.jpg",a=t.p+"assets/lamb.jpg",i=t.p+"assets/salmon.jpg",d=t.p+"assets/sandwichsoup.jpg",r=t.p+"assets/shrimp.jpg",l=t.p+"assets/squashrav.jpg",u=t.p+"assets/stuffedpepper.jpg",m=t.p+"assets/turkeysandwich.jpg";function p(t,e,n,s){const o=document.createElement("div");o.classList.add("food");const c=document.createElement("img");c.setAttribute("src",t),c.setAttribute("alt",s);const a=document.createElement("div");a.classList.add("description");const i=document.createElement("h3");i.textContent=e;const d=document.createElement("h2");return d.textContent=n,a.appendChild(i),a.appendChild(d),o.appendChild(c),o.appendChild(a),o}function h(){const t=document.getElementById("main-content");t.classList.add("grid-layout"),t.classList.remove("flex-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[p(a,"Lamb Kebab","$18","Delicious fresh kebab"),p(i,"Lemon Salmon","$21","Wild caught atlantic salmon"),p(c,"Beef in Aus Jus","$23","Succulent beef served in aus jus"),p(d,"Tomato Soup and Slider","$16","Fresh tomato soup with a chicken slider"),p(r,"Thai Coconut Shrimp","$16","Crispy shrimp with tangy sauce"),p(l,"Butternut Squash Ravioli","$17","Seasonal butternut squash in homemade ravioli"),p(u,"Stuffed Pepper","$16","Pepper stuffed with southwest style filling"),p(m,"Turkey Sandwich","$16","Turkey sandwich on ancient grain bread")].forEach((e=>{t.appendChild(e)}))}(function(){const t=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const s=document.createElement("h1");return s.textContent="Welcome to Mellow World",n.appendChild(s),n}();t.appendChild(n);const s=function(t){const n=document.createElement("nav");n.setAttribute("id","nav");const s=e("home","home"),o=e("menu","menu"),c=e("contact","contact");return n.appendChild(s),n.appendChild(o),n.appendChild(c),n}();t.appendChild(s);const o=function(t){const e=document.createElement("main");return e.setAttribute("id","main-content"),e}();t.appendChild(o);const c=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const s=document.createElement("h3");return s.textContent="A taddymason creation",n.appendChild(s),n}();t.appendChild(c)})(),n(),function(){const t=document.getElementById("home"),e=document.getElementById("menu"),s=document.getElementById("contact");t.addEventListener("click",n),e.addEventListener("click",h),s.addEventListener("click",o)}()})();
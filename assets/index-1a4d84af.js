(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();document.querySelector("#app").innerHTML=`
<nav id="navigation">
<h2 id="logo">Nature</h2>
<div>
    <a id="nav-home" href="#header">Home</a>
    <a id="nav-explore" href="#beautiful-moments">Explore</a>
    <a id="nav-map" href="#map">Map</a>
    <button class="btn" id="btn-nav-contact">Contact</button>
</div>
</nav>
<div class="main-container">
<header id="header">
    <img class="back" src="img/back.jpg" alt="mountains">
    <img class="front" src="img/front.png" alt="flowers">
    <h1 class="hide" id="title">the beauty of nature</h1>
</header>
<main id="main-content">
    <section id="away-from" class="page">
        <h2 class="hide">away from the hustle and bustle of the city</h2>
        <p class="hide paragraph">Relax and recharge in nature.
            Nature offers stunning landscapes, beautiful views, and tranquil moments that will help you relax
            and
            refresh. There's an abundance of nature to admire.Follow nature's lead and find a place to hike or
            setup
            a picnic. Explore your city for local parks, trails, or green spaces. Find fun things to do near
            you:
            have a picnic in the park, go swimming at one of the city's beaches. Experience the wonders of
            nature by enjoying moments outdoors!
        </p>
    </section>
    <section id="beautiful-moments" class="page">
        <h2 class="hide">Beautiful moments for every occasion</h2>
        <div id="image-row" data-mouse-down-at="0" data-prev-percent="0">
            <img class="image hide" src="img/p1.jpg" draggable="'false">
            <img class="image hide" src="img/p2.jpg" draggable="'false">
            <img class="image hide" src="img/p3.jpg" draggable="'false">
            <img class="image hide" src="img/p4.jpg" draggable="'false">
            <img class="image hide" src="img/p5.jpg" draggable="'false">
            <img class="image hide" src="img/p6.jpg" draggable="'false">
            <img class="image hide" src="img/p7.jpg" draggable="'false">
            <img class="image hide" src="img/p8.jpg" draggable="'false">
        </div>
        <p class="hide paragraph">
            Experience contentment with nature and its wonders every moment!
            An outdoor experience that is effortless and hassle free.
        </p>
    </section>
    <section id="experience-life" class="page">
        <h2 class="hide">Experience life away from the city</h2>
        <p class="hide paragraph">Experience life away from the city with Nature.com! Enjoy serene moments away
            from all
            the
            noise and
            chaos of urban lifestyles. Explore new places and appreciate the beauty of nature in a new way.
            Nature
            is home to a wide variety of outdoor experiences from hiking and camping to fishing and hunting. An
            array of memories on nature, wildlife, and the natural world will inspire your next trip! Fill your
            life with
            beautiful
            moments for
            all occasions that are sure to bring a smile to your face.</p>
    </section>
    <section>
        <img class="back" src="img/cityback.jpg" alt="dawn">
        <img class="front" src="img/cityfront.png" alt="city">
        <h1 class="hide" id="title">city life</h1>
    </section>
    <section id="hidden-gems" class="page">
        <h2 class="hide"> Unlock hidden gems of nature</h2>
        <p class="hide paragraph">Discover the hidden gems of nature that are waiting for you to discover them!
            From
            beautiful
            forests to
            amazing mountains. Just take a trip to some of the most beautiful natural places in the world.
            Nature
            has a rich and expansive natural beauty. Its natural landscapes are breathtaking, featuring a wide
            variety of species and ecosystems. It is perfect way for those who want to
            enjoy
            the outdoors and be a part of nature, whether it's hiking, camping, or just enjoying the beauty of a
            beautiful forest or field.</p>
    </section>
    <section id="" class="page">
        <h2 class="hide">We are here</h2>
        <iframe class="hide" id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5394.396401994244!2d23.25213390694207!3d50.71703821863386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472367adda11d277%3A0xba00459202f8a580!2zMjItNDAwIFphbW_Fm8SH!5e1!3m2!1sen!2spl!4v1677246322668!5m2!1sen!2spl"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</main>
<footer>
    <img src="img/ar.svg" alt="ar">
</footer>
</div>

<div class="off hide conditional">
<div class="contact-container hide">
    <div class="form-container">
        <form method='POST' action='https://getform.io/f/d6b0629f-9720-4259-b68f-e587d6711c85'>
            <div class="input-container">
                <input type="text" required name="name">
                <label for="name">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
                        viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
                        </g>
                    </svg>
                </label>
            </div>
            <div class="input-container">
                <input type="email" required name="email">
                <label for="email">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </label>
            </div>
            <div class="input-container">
                <input type="text" required name="message-nature">
                <label for="message-nature">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="currentColor">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z" />
                    </svg>
                </label>
            </div>


            <button type="submit" class="btn" id="btn-contact">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                    fill="#FFFFFF">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            </button>
        </form>
    </div>
</div>
</div>

`;const m=document.querySelectorAll(".hide"),g=new IntersectionObserver(t=>{t.forEach(i=>{i.target.classList.toggle("show",i.isIntersecting)})});m.forEach(t=>g.observe(t));const o=document.getElementById("image-row");window.onmousedown=t=>{o.dataset.mouseDownAt=t.clientX};window.onmouseup=()=>{o.dataset.mouseDownAt="0",o.dataset.prevPercent=o.dataset.percent};window.onmousemove=t=>{if(o.dataset.mouseDownAt==="0")return;const i=parseFloat(o.dataset.mouseDownAt)-t.clientX,s=window.innerWidth/2,n=i/s*-100,e=parseFloat(o.dataset.prevPercent)+n,a=Math.max(Math.min(e,0),-100);o.dataset.percent=a,o.animate({transform:`translateX(${a}%)`},{duration:1e3,fill:"forwards"});for(const r of o.getElementsByClassName("image"))r.animate({objectPosition:`${100+a}% center`},{duration:1200,fill:"forwards"})};let h=["/img/back.jpg","/img/front.png","img/cityback.jpg","img/cityfront.png","/img/p1.jpg","/img/p2.jpg","img/p3.jpg","img/p4.jpg","/img/p5.jpg","/img/p6.jpg","img/p7.jpg","img/p8.jpg"];const p=async t=>{let i=h.map(async s=>{let n=new Image;return n.src=s,await new Promise(e=>{n.onload=()=>e(n)})});await Promise.all(i)};p();const l=document.querySelector("#btn-nav-contact"),c=document.querySelector(".conditional"),f=document.querySelector(".contact-container"),u=()=>{c.classList.add("contact-blur"),c.classList.remove("off")},v=()=>{c.classList.remove("contact-blur"),c.classList.add("off")};l.addEventListener("click",u);document.addEventListener("click",function(t){!l.contains(t.target)&&!f.contains(t.target)&&v()});const d=()=>{let t=document.getElementById("nav-home"),i=document.getElementById("nav-explore"),s=document.getElementById("nav-map"),n=document.getElementById("btn-nav-contact");window.innerWidth<600?(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>',i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>',s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#10051a"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/></svg>'):(t.innerHTML="Home",i.innerHTML="Explore",s.innerHTML="Map",n.innerHTML="Contact")};d();addEventListener("resize",t=>{});onresize=t=>{d()};document.querySelector(".main-container").classList.add("container","added","min");

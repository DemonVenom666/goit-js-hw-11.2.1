import{i as f,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${s}" alt="${l}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${a}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${d}</p>
        </div>
      </div>
    </li>`).join("")}const m={KEY:"45785559-b0577f06fb94f4ced9a4d3280",BASE_URL:"https://pixabay.com/api/"},{KEY:y,BASE_URL:g}=m,{loader:b}=c;function v(o){const s=`${g}?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>r.json()).then(r=>{if(b.style.display="none",!r.hits.length)throw new Error(f.error({message:"Sorry, there are no images matching your search query. Please try again!"}));return r})}const{form:u,gallery:i,loader:n}=c;n.style.display="none";u.addEventListener("submit",L);function L(o){o.preventDefault(),i.innerHTML="",n.style.display="block";const{query:s}=o.currentTarget.elements;v(s.value.split(" ").join("+")).then(r=>{i.innerHTML=h(r.hits),new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{n.style.display="none",console.log(`${r}`)}),u.reset()}
//# sourceMappingURL=index.js.map

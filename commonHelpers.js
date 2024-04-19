import{i as y,a as b,S as L}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function d(r){return r.hits.map(e=>`<div class="custom-gallery-item">
            <a class="custom-gallery-link" href="${e.largeImageURL}">
                <img class="custom-gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="custom-gallery-item-info">
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>
                </p>
                <p class="custom-gallery-item-info-par">
                    <span class="custom-gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`).join("")}function w(){y.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){y.info({timeout:3e3,position:"topRight",message:"The search query can not be empty!"})}function M(){y.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}async function g(r,e){try{const s="43280076-efaf032a147c4a401dc5ab87e",n="https://pixabay.com/api/";return(await b.get(n,{params:{key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(s){throw console.error("Error fetching images:",s),s}}const h=new L(".custom-gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".custom-search-form"),i=document.querySelector(".custom-gallery"),f=document.querySelector(".custom-loader"),a=document.querySelector(".custom-load-btn");let u=!0,l="",p;a.style.display="none";c.addEventListener("submit",E);a.addEventListener("click",S);async function E(r){if(p=1,r.preventDefault(),i.innerHTML="",l=c.elements.customSearchWord.value.trim(),a.style.display="none",l===""){v(),i.innerHTML="",a.style.display="none",c.reset();return}f.style.display="block";try{const e=await g(l,p).then(s=>{const n=d(s);if(s.hits.length===0){M(),f.style.display="none";return}i.insertAdjacentHTML("beforeend",n),f.style.display="none",h.refresh(),s.hits.length<=14?u=!1:(u=!0,a.style.display="block")})}catch(e){console.error("Error:",e)}c.reset()}async function S(){p+=1;try{a.style.display="none";const r=await g(l,p).then(e=>{const s=d(e);i.insertAdjacentHTML("beforeend",s),h.refresh();const n=i.getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"}),e.hits.length<=14?(w(),u=!1):(u=!0,a.style.display="block")})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map

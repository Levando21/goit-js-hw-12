import{i as y,a as h,S as b}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function d(r){return r.hits.map(e=>`<div class="custom-gallery-item">
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
        </div>`).join("")}function L(){y.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function w(){y.info({timeout:3e3,position:"topRight",message:"The search query can not be empty!"})}function v(){y.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}async function g(r,e){try{const s="43280076-efaf032a147c4a401dc5ab87e",n="https://pixabay.com/api/";return(await h.get(n,{params:{key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(s){throw console.error("Error fetching images:",s),s}}const f=new b(".custom-gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".custom-search-form"),a=document.querySelector(".custom-gallery"),u=document.querySelector(".custom-loader"),i=document.querySelector(".custom-load-btn");let l="",m;c.addEventListener("submit",M);i.addEventListener("click",E);async function M(r){if(m=1,r.preventDefault(),a.innerHTML="",l=c.elements.customSearchWord.value.trim(),i.style.display="block",l===""){w(),a.innerHTML="",i.style.display="none",c.reset();return}u.style.display="block";try{const e=await g(l,m).then(s=>{const n=d(s);if(s.hits.length===0){v(),i.style.display="none",u.style.display="none";return}a.insertAdjacentHTML("beforeend",n),f.refresh(),u.style.display="none"})}catch(e){console.error("Error:",e)}c.reset()}async function E(){m+=1;try{const r=await g(l,m).then(e=>{const s=d(e);a.insertAdjacentHTML("beforeend",s),f.refresh();const n=a.getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"}),e.hits.length<=14&&(i.style.display="none",L(),f.refresh())})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map

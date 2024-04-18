import{a as c}from"./assets/vendor-34f890c2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=r=>{const o="33885109-a6cb8296a367a3cf09d2759c8";return new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})};function l(r){return r.map(({id:o,likes:n,views:a,comments:e,downloads:t,largeImageUrl:s})=>`
            <li class = "picture-card" data-id = "${o}">
            <img src = "${s}"/>
            <div class = "picture-info">
            <span>Likes: ${n}</span>
                                                <span>Views: ${a}</span>
                                                <span>Comments: ${e}</span>
                                                <span>Downloads: ${t}</span>
            </div>
            </li>`).join()}const u="cat",d=i(u),f={container:document.querySelector(".js-list"),loadBtn:document.querySelector(".js-button"),loadBtnTwo:document.querySelector(".js-button-load")};c.get(`https://pixabay.com/api/?${d}`).then(r=>{console.log(r.data),f.container.insertAdjacentHTML("beforeend",l(r.data.hits))}).catch(r=>{console.error("Error fetching data:",r)});
//# sourceMappingURL=commonHelpers.js.map

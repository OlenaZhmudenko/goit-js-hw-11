import{a as u,S as d,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="51380638-a34062252f8813c2e88fcdb66";async function p(s){return(await u.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let y=new d(".gallery a");const c=document.querySelector(".gallery"),a=document.querySelector(".loader");function g(s){const o=s.map(r=>`
        <li class="gallery-item">
        <a href="${r.largeImageURL}">
           <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
           <p><b>Likes:</b> ${r.likes}</p>
           <p><b>Views:</b> ${r.views}</p>
           <p><b>Comments:</b> ${r.comments}</p>
           <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
        </li>
        `).join("");c.innerHTML+=o,y.refresh()}function h(){c.innerHTML=""}function b(){console.log("SHOW:",a),a.classList.remove("is-hidden")}function L(){console.log("HIDE:",a),a.classList.add("is-hidden")}const w=document.querySelector(".form");document.querySelector(".gallery");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({title:"Error",message:"Please enter a search term!"});return}h(),b();try{const{hits:r}=await p(o);r.length===0?i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r)}catch{i.error({title:"Fetch Error",message:"Failed to load images. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map

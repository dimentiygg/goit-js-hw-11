import{S as f,i as n}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a=document.querySelector(".search-form");function m(){const s=a.inputForm.value.trim();if(s!==""){const i=`https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(o=>{if(!o.ok)throw new Error(`status of error${o.status}`);return a.reset(),o.json()})}}const y=new f(".gallery a",{captionsData:"alt"}),g=document.querySelector(".loader");function h(s){const t=document.querySelector(".gallery");g.style.display="none";const i=s.map(({largeImageURL:o,webformatURL:e,tags:r,likes:l,views:u,comments:d,downloads:p})=>`<li class="gallery-item">
    	<a class="gallery-link" href="${o}">
    		<img
    			class="gallery-image"
    			src="${e}"
    			alt="${r}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${l}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${u}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${d}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${p}</p>
          </li>
      </ul>
    </div>
    </li>
    `).join("");t.innerHTML=i,y.refresh()}const c=document.querySelector(".search-form"),b=document.querySelector(".loader");c.addEventListener("submit",S);function S(s){s.preventDefault(),document.querySelector(".gallery").innerHTML="",c.inputForm.value!==""?(b.style.display="block",m().then(({hits:t})=>{t.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),h(t)})):n.error({title:"Error",message:"field cannot be empty"})}
//# sourceMappingURL=commonHelpers.js.map

import{i as n,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const a=document.querySelector(".search-form");function d(){return new Promise((o,t)=>{const s=a.inputForm.value.trim();if(s!==""){const r=`https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(r).then(e=>{if(!e.ok)throw new Error(`status of error${e.status}`);return e.json()}).then(({hits:e})=>{e.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),o(e)}).catch(e=>{t(e)}),a.reset();return}n.error({title:"Error",message:"field cannot be empty"})})}const f=document.querySelector(".loader");function p(o){const t=document.querySelector(".gallery");o.then(s=>{f.style.display="none";const i=s.map(e=>`<li class="gallery-item">
    	<a class="gallery-link" href="${e.largeImageURL}">
    		<img
    			class="gallery-image"
    			src="${e.webformatURL}"
    			alt="${e.tags}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${e.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${e.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${e.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </li>
      </ul>
    </div>
    </li>
    `).join("");t.innerHTML=i,new u(".gallery a",{captionsData:"alt"}).refresh()})}const c=document.querySelector(".search-form"),m=document.querySelector(".loader");c.addEventListener("submit",y);function y(o){o.preventDefault(),document.querySelector(".gallery").innerHTML="",c.inputForm.value!==""&&(m.style.display="block"),p(d())}
//# sourceMappingURL=commonHelpers.js.map

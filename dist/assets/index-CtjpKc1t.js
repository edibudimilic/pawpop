(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const I={sweet:[["Mochi","A soft little name for a certified cuddle expert."],["Peaches","Sweet, sunny, and impossible not to smile at."],["Maple","Warm and golden with a cozy sort of charm."],["Honey","For the friend who makes every day sweeter."],["Poppy","A bright bloom with a tiny spring in their step."],["Mallow","Squishy, dreamy, and made for sofa naps."],["Clover","A pocket-sized piece of good luck."],["Biscuit","Buttery, beloved, and always welcome nearby."],["Nilla","A vanilla cloud with very important business."],["Toffee","Small, golden, and a little bit irresistible."]],silly:[["Waffles","A breakfast icon with impeccable comic timing."],["Pickle","Bright, crunchy energy in one tiny package."],["Boop","Short, bouncy, and best said with one finger."],["Tater Tot","Crispy confidence with a warm little center."],["Noodle","Long on personality, delightfully low on plans."],["Bumble","A happy zigzag disguised as a pet."],["Crumpet","Very polite. Slightly toasted. Entirely adorable."],["Scoot","Already halfway across the room, probably."],["Puddle","A soft heap of mischief wherever they land."],["Beans","Tiny toe beans, enormous main-character energy."]],fancy:[["Clementine","Elegant, sun-kissed, and just a bit theatrical."],["Percival","A noble name for a very small adventurer."],["Duchess","Grace, glamour, and premium napping standards."],["Fitzgerald","Bookish charm with a magnificent little strut."],["Cosette","Softly sophisticated and sweet as a song."],["Montgomery","A grand name for grand hallway entrances."],["Bijou","French for jewel—and equally sparkly."],["Wellington","Dignified, dependable, secretly very goofy."],["Prudence","Poised on the outside, zoomies on the inside."],["Margot","Effortlessly chic, even with bed hair."]],tiny:[["Pip","Three tiny letters for one enormous personality."],["Dot","A perfect little punctuation mark with paws."],["Mimi","Mini, musical, and made to be called twice."],["Fig","Small, sweet, and pleasantly unexpected."],["Bibi","A bubbly little name that never sits still."],["Pebble","Pocket-sized, precious, and pleasingly round."],["Tink","A bright little sound with fairy-sized sparkle."],["Miso","Tiny, savory, and full of comforting character."],["Bug","The littlest lovebug in the whole wide world."],["Sprout","Small today, full of wild possibility tomorrow."]]},j={cat:["Mittens","Mew","Suki","Tuna","Purrcy"],dog:["Barkley","Rolo","Scout","Fido","Wiggles"],bunny:["Thumper","Bunbun","Flopsy","Cinnabun","Hopper"],bird:["Kiwi","Pico","Chirpy","Sunny","Feather"],surprise:["Mochi","Bean","Puff","Ziggy","Pookie"]},P={cat:"Cat",dog:"Dog",bunny:"Bunny",bird:"Bird",surprise:"Surprise me"},L={cat:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 13 5 5l7 4a14 14 0 0 1 8 0l7-4-2 8v7c0 5-4 8-9 8s-9-3-9-8v-7Z"/><path d="M11 17h.01M21 17h.01M14 22c1.2 1 2.8 1 4 0"/></svg>',dog:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 11c3-3 11-3 14 0l1 12c-2 5-14 5-16 0l1-12Z"/><path d="M9 12C4 8 3 11 5 18l3 2M23 12c5-4 6-1 4 6l-3 2M12 17h.01M20 17h.01M14 22c1.3 1.2 2.7 1.2 4 0"/></svg>',bunny:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 11C7 3 10 1 14 10M21 11c4-8 1-10-3-1"/><path d="M7 19c0-6 4-9 9-9s9 3 9 9-4 9-9 9-9-3-9-9Z"/><path d="M12 18h.01M20 18h.01M14 23c1.3 1 2.7 1 4 0"/></svg>',bird:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 17c0-6 4-10 10-10s9 4 9 10-3 10-9 10S7 23 7 17Z"/><path d="m26 16 5 3-5 2M12 16h.01M10 24l-2 4M17 27l1 2"/></svg>',surprise:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 15c0-5 4-9 9-9s9 4 9 9v5c0 5-4 8-9 8s-9-3-9-8v-5Z"/><path d="M7 14 4 8l7 2M24 14l4-6-7 2M12 17h.01M20 17h.01M14 22c1.3 1 2.7 1 4 0"/></svg>'},W=document.querySelector("#app");W.innerHTML=`
  <div class="noise" aria-hidden="true"></div>
  <div class="ambient ambient-one" aria-hidden="true"></div>
  <div class="ambient ambient-two" aria-hidden="true"></div>
  <div class="ambient ambient-three" aria-hidden="true"></div>
  <div class="floaty floaty-one" aria-hidden="true">✦</div>
  <div class="floaty floaty-two" aria-hidden="true">♡</div>
  <div class="floaty floaty-three" aria-hidden="true">✿</div>

  <header class="site-header reveal" style="--delay: 0s">
    <a class="brand" href="#top" aria-label="Pawpop home">
      <span class="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 56 56">
          <path class="logo-blob" d="M46.9 27.2c4.9 12.4-4.3 23.3-16.9 24.2-13 .9-25.7-7-24.9-19.5.7-10.8 10.9-14.4 21.1-21.8 8.6-6.3 16.7 7 20.7 17.1Z"/>
          <g class="paw">
            <ellipse cx="27.8" cy="34" rx="9.3" ry="7.2" transform="rotate(-6 27.8 34)"/>
            <ellipse cx="17.5" cy="25.7" rx="4.2" ry="5.1" transform="rotate(-30 17.5 25.7)"/>
            <ellipse cx="27" cy="21" rx="4.3" ry="5.3"/>
            <ellipse cx="37.2" cy="24.6" rx="4.2" ry="5.1" transform="rotate(29 37.2 24.6)"/>
          </g>
          <path class="logo-spark" d="m45 7 1.3 3.7L50 12l-3.7 1.3L45 17l-1.3-3.7L40 12l3.7-1.3L45 7Z"/>
        </svg>
      </span>
      <span class="brand-name">pawpop<span>!</span></span>
    </a>
    <div class="header-note">
      <span class="pulse-dot"></span>
      names made fresh daily
    </div>
  </header>

  <main id="top">
    <section class="hero-shell">
      <div class="hero-copy">
        <div class="eyebrow reveal" style="--delay: .08s">
          <span>✦</span> A name is waiting
        </div>
        <h1 class="reveal" style="--delay: .16s">
          Meet the name<br />
          that makes their<br />
          <span class="scribble">ears perk up.</span>
        </h1>
        <p class="intro reveal" style="--delay: .24s">
          Pick your little friend, choose a vibe, and let the name jar do its magic.
        </p>
        <div class="tiny-proof reveal" style="--delay: .32s">
          <div class="face-stack" aria-hidden="true">
            <span>🐶</span><span>🐱</span><span>🐰</span>
          </div>
          <p><strong><span id="names-count">2,847</span> happy names</strong><br />and counting</p>
        </div>
      </div>

      <section class="name-machine-wrap reveal" style="--delay: .24s" aria-label="Pet name randomizer">
        <div class="name-machine" id="name-machine">
          <div class="machine-top">
            <p class="step-label"><span>01</span> Who are we naming?</p>
            <div class="pet-tabs" role="radiogroup" aria-label="Pet type">
              ${Object.entries(P).map(([e,a],t)=>`
                <button class="pet-tab ${t===0?"active":""}" type="button" data-pet="${e}" role="radio" aria-checked="${t===0}">
                  <span class="tab-icon">${L[e]}</span>
                  <span>${a}</span>
                </button>`).join("")}
            </div>

            <p class="step-label vibe-label"><span>02</span> Pick their energy</p>
            <div class="vibe-tabs" role="radiogroup" aria-label="Name vibe">
              <button class="vibe-tab active" data-vibe="sweet" type="button" role="radio" aria-checked="true"><span>♡</span> Sweet</button>
              <button class="vibe-tab" data-vibe="silly" type="button" role="radio" aria-checked="false"><span>☻</span> Silly</button>
              <button class="vibe-tab" data-vibe="fancy" type="button" role="radio" aria-checked="false"><span>✦</span> Fancy</button>
              <button class="vibe-tab" data-vibe="tiny" type="button" role="radio" aria-checked="false"><span>·</span> Tiny</button>
            </div>
          </div>

          <div class="result-stage">
            <div class="pet-portrait cat" id="pet-portrait" aria-hidden="true">
              <span class="portrait-halo"></span>
              <div class="ear ear-left"></div>
              <div class="ear ear-right"></div>
              <div class="pet-head">
                <span class="eye eye-left"></span>
                <span class="eye eye-right"></span>
                <span class="nose"></span>
                <span class="mouth"></span>
                <span class="whiskers whiskers-left"></span>
                <span class="whiskers whiskers-right"></span>
                <span class="cheek cheek-left"></span>
                <span class="cheek cheek-right"></span>
              </div>
              <span class="portrait-star star-a">✦</span>
              <span class="portrait-star star-b">✦</span>
            </div>
            <div class="name-result" aria-live="polite" aria-atomic="true">
              <p class="tiny-label">Your new favorite name is...</p>
              <h2 id="result-name">Mochi</h2>
              <p id="result-description">A soft little name for a certified cuddle expert.</p>
            </div>
            <div class="result-actions">
              <button class="round-button tooltip" type="button" id="save-button" aria-label="Save this name" data-tooltip="Save name">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
              </button>
              <button class="round-button tooltip" type="button" id="copy-button" aria-label="Copy this name" data-tooltip="Copy name">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg>
              </button>
            </div>
          </div>

          <div class="machine-bottom">
            <button class="generate-button" id="generate-button" type="button">
              <span class="button-spark">✦</span>
              <span class="button-label">Shake the name jar</span>
              <span class="dice" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
            <p class="keyboard-tip"><kbd>space</kbd> works too <span>♡</span></p>
          </div>
        </div>
      </section>
    </section>

    <section class="favorites-section reveal" style="--delay: .38s" aria-labelledby="favorites-title">
      <div class="favorites-heading">
        <div>
          <span class="mini-kicker">Your tiny shortlist</span>
          <h2 id="favorites-title">Names worth keeping</h2>
        </div>
        <button class="clear-button" id="clear-button" type="button" hidden>Clear all</button>
      </div>
      <div class="favorites-list" id="favorites-list">
        <div class="empty-favorites">
          <span class="empty-heart">♡</span>
          <p>Tap the heart when a name gives you that <em>oh, that's the one</em> feeling.</p>
        </div>
      </div>
    </section>

    <section class="ticker" aria-label="A parade of pet names">
      <div class="ticker-track">
        ${["PIP","♡","WAFFLES","✦","CLOVER","♡","BISCUIT","✦","BEANS","♡","MOCHI","✦","PIP","♡","WAFFLES","✦","CLOVER","♡","BISCUIT","✦","BEANS","♡","MOCHI","✦"].map(e=>`<span>${e}</span>`).join("")}
      </div>
    </section>
  </main>

  <footer>
    <a class="brand footer-brand" href="#top">
      <span class="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 56 56"><path class="logo-blob" d="M46.9 27.2c4.9 12.4-4.3 23.3-16.9 24.2-13 .9-25.7-7-24.9-19.5.7-10.8 10.9-14.4 21.1-21.8 8.6-6.3 16.7 7 20.7 17.1Z"/><g class="paw"><ellipse cx="27.8" cy="34" rx="9.3" ry="7.2"/><ellipse cx="17.5" cy="25.7" rx="4.2" ry="5.1"/><ellipse cx="27" cy="21" rx="4.3" ry="5.3"/><ellipse cx="37.2" cy="24.6" rx="4.2" ry="5.1"/></g></svg>
      </span>
      <span class="brand-name">pawpop<span>!</span></span>
    </a>
    <p>Made for paws, claws, wings &amp; wiggles.</p>
    <span class="footer-flower" aria-hidden="true">✿</span>
  </footer>

  <div class="toast" id="toast" role="status" aria-live="polite">
    <span>✓</span><strong>Name copied!</strong>
  </div>
  <div class="spark-layer" id="spark-layer" aria-hidden="true"></div>
`;let c="cat",v="sweet",l={name:"Mochi",description:I.sweet[0][1]},E="Mochi",A=2847,r=Z(),N;const d=document.querySelector("#name-machine"),w=document.querySelector("#pet-portrait"),u=document.querySelector("#result-name"),g=document.querySelector("#result-description"),h=document.querySelector("#generate-button"),y=document.querySelector("#save-button"),x=document.querySelector("#copy-button"),b=document.querySelector("#favorites-list"),O=document.querySelector("#clear-button"),p=document.querySelector("#toast"),$=document.querySelector("#spark-layer");document.querySelectorAll(".pet-tab").forEach(e=>{e.addEventListener("click",a=>{c=e.dataset.pet,k(".pet-tab",e),R(c),S(a,["#ff7c73","#ffd663","#6ed3aa"])})});document.querySelectorAll(".vibe-tab").forEach(e=>{e.addEventListener("click",a=>{v=e.dataset.vibe,k(".vibe-tab",e),e.classList.remove("bop"),e.offsetWidth,e.classList.add("bop"),S(a,["#a997ff","#ff7c73","#ffd663"])})});h.addEventListener("click",e=>{F(),S(e,["#fff7e4","#ffd663","#ff7c73","#312943"])});y.addEventListener("click",e=>{const a=r.findIndex(t=>t.name===l.name);a>=0?(r.splice(a,1),f("Removed from your list","♡")):(r.unshift({...l,pet:c,vibe:v}),r=r.slice(0,8),f("Saved to your shortlist!","♥"),V(e.clientX,e.clientY)),B(),M(),m()});x.addEventListener("click",e=>{const a=()=>{const t=document.createElement("textarea");t.value=l.name,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()};navigator.clipboard?.writeText?navigator.clipboard.writeText(l.name).catch(a):a(),x.classList.add("success"),window.setTimeout(()=>x.classList.remove("success"),650),f(`${l.name} copied!`,"✓"),S(e,["#6ed3aa","#ffd663"])});O.addEventListener("click",()=>{r=[],B(),M(),m(),f("A fresh little list","✦")});document.addEventListener("keydown",e=>{const a=e.target,t=["INPUT","TEXTAREA","BUTTON","SELECT","A"].includes(a.tagName);e.code==="Space"&&!t&&(e.preventDefault(),F())});d.addEventListener("pointermove",e=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.innerWidth<900)return;const a=d.getBoundingClientRect(),t=(e.clientX-a.left)/a.width-.5,s=(e.clientY-a.top)/a.height-.5;d.style.setProperty("--tilt-x",`${s*-2.5}deg`),d.style.setProperty("--tilt-y",`${t*3}deg`)});d.addEventListener("pointerleave",()=>{d.style.setProperty("--tilt-x","0deg"),d.style.setProperty("--tilt-y","0deg")});document.addEventListener("pointerdown",e=>{e.target.closest("button, a, .favorite-card")&&H(e.clientX,e.clientY,"#ff7c73",7)});function k(e,a){document.querySelectorAll(e).forEach(t=>{const s=t===a;t.classList.toggle("active",s),t.setAttribute("aria-checked",String(s))})}function F(){h.classList.remove("shaking"),w.classList.remove("celebrate"),u.classList.add("leaving"),g.classList.add("leaving"),h.offsetWidth,h.classList.add("shaking"),window.setTimeout(()=>{let e=[...I[v]];Math.random()<.3&&e.push(...j[c].map(t=>[t,D(t,c)]));let a=e[Math.floor(Math.random()*e.length)];a[0]===E&&e.length>1&&(a=e[(e.indexOf(a)+1)%e.length]),l={name:a[0],description:a[1]},E=l.name,u.setAttribute("aria-label",l.name),u.innerHTML=[...l.name].map((t,s)=>`<span aria-hidden="true" style="--i:${s}">${t===" "?"&nbsp;":t}</span>`).join(""),g.textContent=l.description,u.classList.remove("leaving"),g.classList.remove("leaving"),w.classList.add("celebrate"),A+=1,document.querySelector("#names-count").textContent=A.toLocaleString(),m(),z()},260),window.setTimeout(()=>h.classList.remove("shaking"),850)}function D(e,a){const t=a==="surprise"?"little friend":P[a].toLowerCase();return`${e} has just the right bounce for one unforgettable ${t}.`}function R(e){w.className=`pet-portrait ${e==="surprise"?"cat surprise":e} switching`,window.setTimeout(()=>w.classList.remove("switching"),550)}function Z(){try{return JSON.parse(localStorage.getItem("pawpop-saved"))||[]}catch{return[]}}function B(){localStorage.setItem("pawpop-saved",JSON.stringify(r))}function M(){if(O.hidden=r.length===0,!r.length){b.innerHTML=`
      <div class="empty-favorites">
        <span class="empty-heart">♡</span>
        <p>Tap the heart when a name gives you that <em>oh, that's the one</em> feeling.</p>
      </div>`;return}b.innerHTML=r.map((e,a)=>`
    <article class="favorite-card" tabindex="0" role="button" data-index="${a}" style="--i:${a}">
      <span class="favorite-icon">${L[e.pet]||L.surprise}</span>
      <span class="favorite-copy">
        <strong>${q(e.name)}</strong>
        <small>${e.vibe} · ${P[e.pet]||"Pet"}</small>
      </span>
      <button class="remove-favorite tooltip" type="button" data-remove="${a}" aria-label="Remove ${q(e.name)}" data-tooltip="Remove">×</button>
    </article>`).join(""),b.querySelectorAll(".favorite-card").forEach(e=>{const a=()=>{const t=r[Number(e.dataset.index)];l={name:t.name,description:t.description},c=t.pet,v=t.vibe,u.removeAttribute("aria-label"),u.textContent=t.name,g.textContent=t.description;const s=document.querySelector(`[data-pet="${c}"]`),i=document.querySelector(`[data-vibe="${v}"]`);s&&k(".pet-tab",s),i&&k(".vibe-tab",i),R(c),m(),document.querySelector(".name-machine-wrap").scrollIntoView({behavior:"smooth",block:"center"}),f(`${t.name} is back!`,"♡")};e.addEventListener("click",t=>{t.target.closest("[data-remove]")||a()}),e.addEventListener("keydown",t=>{t.key==="Enter"&&a()})}),b.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation(),r.splice(Number(e.dataset.remove),1),B(),M(),m()})})}function m(){const e=r.some(a=>a.name===l.name);y.classList.toggle("saved",e),y.setAttribute("aria-label",e?"Remove this saved name":"Save this name"),y.dataset.tooltip=e?"Saved!":"Save name"}function q(e){const a=document.createElement("div");return a.textContent=e,a.innerHTML}function f(e,a="✓"){p.querySelector("span").textContent=a,p.querySelector("strong").textContent=e,p.classList.remove("show"),clearTimeout(N),p.offsetWidth,p.classList.add("show"),N=window.setTimeout(()=>p.classList.remove("show"),2200)}function S(e,a){const t=e.currentTarget.getBoundingClientRect();H(t.left+t.width/2,t.top+t.height/2,a,12)}function H(e,a,t,s=8){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=Array.isArray(t)?t:[t];for(let n=0;n<s;n+=1){const o=document.createElement("i"),T=Math.PI*2*n/s+Math.random()*.4,C=18+Math.random()*28;o.className="click-spark",o.style.left=`${e}px`,o.style.top=`${a}px`,o.style.background=i[n%i.length],o.style.setProperty("--x",`${Math.cos(T)*C}px`),o.style.setProperty("--y",`${Math.sin(T)*C}px`),o.style.animationDelay=`${Math.random()*60}ms`,$.appendChild(o),window.setTimeout(()=>o.remove(),800)}}function z(){const e=document.querySelector(".result-stage").getBoundingClientRect(),a=["#ff7c73","#ffd663","#6ed3aa","#9c88ff","#312943"];for(let t=0;t<24;t+=1){const s=document.createElement("i");s.className="confetti",s.style.left=`${e.left+e.width*(.2+Math.random()*.6)}px`,s.style.top=`${e.top+e.height*.45}px`,s.style.background=a[t%a.length],s.style.setProperty("--tx",`${(Math.random()-.5)*260}px`),s.style.setProperty("--ty",`${-50-Math.random()*120}px`),s.style.setProperty("--rot",`${Math.random()*700-350}deg`),s.style.animationDelay=`${Math.random()*120}ms`,$.appendChild(s),window.setTimeout(()=>s.remove(),1500)}}function V(e,a){if(!e&&!a){const t=y.getBoundingClientRect();e=t.left+t.width/2,a=t.top+t.height/2}for(let t=0;t<7;t+=1){const s=document.createElement("i");s.className="burst-heart",s.textContent="♥",s.style.left=`${e}px`,s.style.top=`${a}px`,s.style.setProperty("--x",`${(Math.random()-.5)*100}px`),s.style.setProperty("--y",`${-35-Math.random()*70}px`),s.style.animationDelay=`${t*35}ms`,$.appendChild(s),window.setTimeout(()=>s.remove(),1100)}}M();m();window.addEventListener("load",()=>document.body.classList.add("loaded"));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const D={sweet:[["Mochi","A soft little name for a certified cuddle expert."],["Peaches","Sweet, sunny, and impossible not to smile at."],["Maple","Warm and golden with a cozy sort of charm."],["Honey","For the friend who makes every day sweeter."],["Poppy","A bright bloom with a tiny spring in their step."],["Mallow","Squishy, dreamy, and made for sofa naps."],["Clover","A pocket-sized piece of good luck."],["Biscuit","Buttery, beloved, and always welcome nearby."],["Nilla","A vanilla cloud with very important business."],["Toffee","Small, golden, and a little bit irresistible."]],silly:[["Waffles","A breakfast icon with impeccable comic timing."],["Pickle","Bright, crunchy energy in one tiny package."],["Boop","Short, bouncy, and best said with one finger."],["Tater Tot","Crispy confidence with a warm little center."],["Noodle","Long on personality, delightfully low on plans."],["Bumble","A happy zigzag disguised as a pet."],["Crumpet","Very polite. Slightly toasted. Entirely adorable."],["Scoot","Already halfway across the room, probably."],["Puddle","A soft heap of mischief wherever they land."],["Beans","Tiny toe beans, enormous main-character energy."]],fancy:[["Clementine","Elegant, sun-kissed, and just a bit theatrical."],["Percival","A noble name for a very small adventurer."],["Duchess","Grace, glamour, and premium napping standards."],["Fitzgerald","Bookish charm with a magnificent little strut."],["Cosette","Softly sophisticated and sweet as a song."],["Montgomery","A grand name for grand hallway entrances."],["Bijou","French for jewel—and equally sparkly."],["Wellington","Dignified, dependable, secretly very goofy."],["Prudence","Poised on the outside, zoomies on the inside."],["Margot","Effortlessly chic, even with bed hair."]],tiny:[["Pip","Three tiny letters for one enormous personality."],["Dot","A perfect little punctuation mark with paws."],["Mimi","Mini, musical, and made to be called twice."],["Fig","Small, sweet, and pleasantly unexpected."],["Bibi","A bubbly little name that never sits still."],["Pebble","Pocket-sized, precious, and pleasingly round."],["Tink","A bright little sound with fairy-sized sparkle."],["Miso","Tiny, savory, and full of comforting character."],["Bug","The littlest lovebug in the whole wide world."],["Sprout","Small today, full of wild possibility tomorrow."]],naughty:[["Pussy Galore","A legendary little pussy with expensive taste and absolutely no shame."],["Doggy Style","Always right behind you and suspiciously proud of the position."],["Clit Eastwood","Good, bad, and shamelessly obsessed with getting stroked."],["Master Baiter","Give them a wriggly toy and they will play with it for hours."],["Sir Licks-a-Lot","That tongue is out, the manners are gone, and nobody is safe."],["Spank Sinatra","They did it their way—and now the whole sofa needs a cigarette."],["Harry Balls","Fluffy underneath, swinging with confidence, and impossible to ignore."],["Bone Daddy","Big treat energy with a weakness for anything long, hard, and chewable."],["Muffin Diver","Headfirst into every warm, fluffy opening they can find."],["Biggus Dickus","A very grand name for a suspiciously tiny package."],["Furplay","All teasing, heavy petting, and absolutely no respect for personal space."],["Woody","Up at dawn, eager for action, and always carrying a large stick."],["Randy","Humps first, asks questions never. Hide the good cushions."],["Bitch Please","A bad bitch with flawless fur and a zero-tolerance treat policy."],["Motherfluffer","Soft to the touch, filthy in spirit, and banned from polite company."]]},W={cat:["Mittens","Mew","Suki","Tuna","Purrcy"],dog:["Barkley","Rolo","Scout","Fido","Wiggles"],bunny:["Thumper","Bunbun","Flopsy","Cinnabun","Hopper"],bird:["Kiwi","Pico","Chirpy","Sunny","Feather"],surprise:["Mochi","Bean","Puff","Ziggy","Pookie"]},Y={cat:[["Heavy Petting","One touch turns into an all-night session. That purr is indecent."],["Wet Pussy","One bath, two furious eyes, and a phrase you cannot say at the vet."]],dog:[["Morning Wood","Up early, carrying a branch, and thrilled to show everybody."],["Raw Dog","No collar, no filter, and no interest in behaving responsibly."]],bunny:[["Thumper? I Hardly Know Her","Fast feet, filthy timing, and one extremely suggestive surname."],["Hugh Hopner","A tiny robe, a velvet hutch, and several scandalous girlfriends."]],bird:[["Pecker","Small beak, enormous confidence, and always banging on something."],["Cock Robin","Bright feathers, a proud chest, and a name that enters the room first."]],surprise:[["Safeword","The one name guaranteed to make the entire dog park stop."],["Dirty Little Secret","Cute in public. Absolutely unprintable behind closed doors."]]},L=["PIP","♡","WAFFLES","✦","CLOVER","♡","BISCUIT","✦","BEANS","♡","MOCHI","✦"],Z=["PUSSY GALORE","♥","DOGGY STYLE","✦","BONE DADDY","♥","FURPLAY","✦","HARRY BALLS","♥","SPANK SINATRA","✦"],P={cat:"Cat",dog:"Dog",bunny:"Bunny",bird:"Bird",surprise:"Surprise me"},A={cat:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 13 5 5l7 4a14 14 0 0 1 8 0l7-4-2 8v7c0 5-4 8-9 8s-9-3-9-8v-7Z"/><path d="M11 17h.01M21 17h.01M14 22c1.2 1 2.8 1 4 0"/></svg>',dog:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 11c3-3 11-3 14 0l1 12c-2 5-14 5-16 0l1-12Z"/><path d="M9 12C4 8 3 11 5 18l3 2M23 12c5-4 6-1 4 6l-3 2M12 17h.01M20 17h.01M14 22c1.3 1.2 2.7 1.2 4 0"/></svg>',bunny:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 11C7 3 10 1 14 10M21 11c4-8 1-10-3-1"/><path d="M7 19c0-6 4-9 9-9s9 3 9 9-4 9-9 9-9-3-9-9Z"/><path d="M12 18h.01M20 18h.01M14 23c1.3 1 2.7 1 4 0"/></svg>',bird:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 17c0-6 4-10 10-10s9 4 9 10-3 10-9 10S7 23 7 17Z"/><path d="m26 16 5 3-5 2M12 16h.01M10 24l-2 4M17 27l1 2"/></svg>',surprise:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 15c0-5 4-9 9-9s9 4 9 9v5c0 5-4 8-9 8s-9-3-9-8v-5Z"/><path d="M7 14 4 8l7 2M24 14l4-6-7 2M12 17h.01M20 17h.01M14 22c1.3 1 2.7 1 4 0"/></svg>'},z=document.querySelector("#app");z.innerHTML=`
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
      <span id="header-note-copy">names made fresh daily</span>
    </div>
  </header>

  <main id="top">
    <section class="hero-shell">
      <div class="hero-copy">
        <div class="eyebrow reveal" style="--delay: .08s">
          <span id="eyebrow-icon">✦</span><b id="eyebrow-copy">A name is waiting</b>
        </div>
        <h1 class="reveal" id="hero-title" style="--delay: .16s">
          Meet the name<br />
          that makes their<br />
          <span class="scribble">ears perk up.</span>
        </h1>
        <p class="intro reveal" id="hero-intro" style="--delay: .24s">
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
              ${Object.entries(P).map(([e,t],a)=>`
                <button class="pet-tab ${a===0?"active":""}" type="button" data-pet="${e}" role="radio" aria-checked="${a===0}">
                  <span class="tab-icon">${A[e]}</span>
                  <span>${t}</span>
                </button>`).join("")}
            </div>

            <p class="step-label vibe-label"><span>02</span> Pick their energy</p>
            <div class="vibe-tabs" role="radiogroup" aria-label="Name vibe">
              <button class="vibe-tab active" data-vibe="sweet" type="button" role="radio" aria-checked="true"><span>♡</span> Sweet</button>
              <button class="vibe-tab" data-vibe="silly" type="button" role="radio" aria-checked="false"><span>☻</span> Silly</button>
              <button class="vibe-tab" data-vibe="fancy" type="button" role="radio" aria-checked="false"><span>✦</span> Fancy</button>
              <button class="vibe-tab" data-vibe="tiny" type="button" role="radio" aria-checked="false"><span>·</span> Tiny</button>
              <button class="vibe-tab naughty-tab" data-vibe="naughty" type="button" role="radio" aria-checked="false"><span>♠</span> Naughty</button>
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
              <p class="tiny-label" id="result-kicker">Your new favorite name is...</p>
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
              <span class="button-label" id="button-label">Shake the name jar</span>
              <span class="dice" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
            <p class="keyboard-tip"><kbd>space</kbd> <b id="keyboard-copy">works too</b> <span id="keyboard-icon">♡</span></p>
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
      <div class="ticker-track" id="ticker-track">
        ${[...L,...L].map(e=>`<span>${e}</span>`).join("")}
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
    <p id="footer-copy">Made for paws, claws, wings &amp; wiggles.</p>
    <span class="footer-flower" aria-hidden="true">✿</span>
  </footer>

  <div class="toast" id="toast" role="status" aria-live="polite">
    <span>✓</span><strong>Name copied!</strong>
  </div>
  <div class="spark-layer" id="spark-layer" aria-hidden="true"></div>
`;let d="cat",c="sweet",l={name:"Mochi",description:D.sweet[0][1]},q="Mochi",E=2847,r=V(),N;const p=document.querySelector("#name-machine"),w=document.querySelector("#pet-portrait"),h=document.querySelector("#result-name"),g=document.querySelector("#result-description"),m=document.querySelector("#generate-button"),f=document.querySelector("#save-button"),x=document.querySelector("#copy-button"),v=document.querySelector("#favorites-list"),R=document.querySelector("#clear-button"),u=document.querySelector("#toast"),T=document.querySelector("#spark-layer"),G=document.querySelector('meta[name="theme-color"]');document.querySelectorAll(".pet-tab").forEach(e=>{e.addEventListener("click",t=>{d=e.dataset.pet,k(".pet-tab",e),F(d),M(t,["#ff7c73","#ffd663","#6ed3aa"])})});document.querySelectorAll(".vibe-tab").forEach(e=>{e.addEventListener("click",t=>{c=e.dataset.vibe,k(".vibe-tab",e),O(c),e.classList.remove("bop"),e.offsetWidth,e.classList.add("bop"),M(t,c==="naughty"?["#ff1f6d","#ff70a6","#b32cff","#ffca3a"]:["#a997ff","#ff7c73","#ffd663"])})});m.addEventListener("click",e=>{I(),M(e,["#fff7e4","#ffd663","#ff7c73","#312943"])});f.addEventListener("click",e=>{const t=r.findIndex(a=>a.name===l.name);t>=0?(r.splice(t,1),b("Removed from your list","♡")):(r.unshift({...l,pet:d,vibe:c}),r=r.slice(0,8),b("Saved to your shortlist!","♥"),X(e.clientX,e.clientY)),C(),S(),y()});x.addEventListener("click",e=>{const t=()=>{const a=document.createElement("textarea");a.value=l.name,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()};navigator.clipboard?.writeText?navigator.clipboard.writeText(l.name).catch(t):t(),x.classList.add("success"),window.setTimeout(()=>x.classList.remove("success"),650),b(`${l.name} copied!`,"✓"),M(e,["#6ed3aa","#ffd663"])});R.addEventListener("click",()=>{r=[],C(),S(),y(),b("A fresh little list","✦")});document.addEventListener("keydown",e=>{const t=e.target,a=["INPUT","TEXTAREA","BUTTON","SELECT","A"].includes(t.tagName);e.code==="Space"&&!a&&(e.preventDefault(),I())});p.addEventListener("pointermove",e=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.innerWidth<900)return;const t=p.getBoundingClientRect(),a=(e.clientX-t.left)/t.width-.5,s=(e.clientY-t.top)/t.height-.5;p.style.setProperty("--tilt-x",`${s*-2.5}deg`),p.style.setProperty("--tilt-y",`${a*3}deg`)});p.addEventListener("pointerleave",()=>{p.style.setProperty("--tilt-x","0deg"),p.style.setProperty("--tilt-y","0deg")});document.addEventListener("pointerdown",e=>{e.target.closest("button, a, .favorite-card")&&j(e.clientX,e.clientY,c==="naughty"?"#ff1f6d":"#ff7c73",7)});function k(e,t){document.querySelectorAll(e).forEach(a=>{const s=a===t;a.classList.toggle("active",s),a.setAttribute("aria-checked",String(s))})}function O(e){const t=e==="naughty";document.body.classList.toggle("naughty-mode",t),G?.setAttribute("content",t?"#11060d":"#fff8ed"),document.querySelector("#header-note-copy").textContent=t?"bad names made after dark":"names made fresh daily",document.querySelector("#eyebrow-icon").textContent=t?"♥":"✦",document.querySelector("#eyebrow-copy").textContent=t?"Zero shame. All game.":"A name is waiting",document.querySelector("#hero-title").innerHTML=t?'Meet the name<br />that makes the<br /><span class="scribble">neighbors blush.</span>':'Meet the name<br />that makes their<br /><span class="scribble">ears perk up.</span>',document.querySelector("#hero-intro").textContent=t?"Pick your filthy little accomplice, dim the lights, and shake out a name that belongs behind closed doors.":"Pick your little friend, choose a vibe, and let the name jar do its magic.",document.querySelector("#result-kicker").textContent=t?"Your safeword is...":"Your new favorite name is...",document.querySelector("#button-label").textContent=t?"Make it filthy":"Shake the name jar",document.querySelector("#keyboard-copy").textContent=t?"gets you off too":"works too",document.querySelector("#keyboard-icon").textContent=t?"♥":"♡",document.querySelector("#footer-copy").textContent=t?"Made for heavy petting, bad decisions & dirty little animals.":"Made for paws, claws, wings & wiggles.",document.querySelector(".footer-flower").textContent=t?"♥":"✿";const a=t?["♠","♥","×"]:["✦","♡","✿"];document.querySelectorAll(".floaty").forEach((n,o)=>{n.textContent=a[o]});const s=t?Z:L;document.querySelector("#ticker-track").innerHTML=[...s,...s].map(n=>`<span>${n}</span>`).join("")}function I(){m.classList.remove("shaking"),w.classList.remove("celebrate"),h.classList.add("leaving"),g.classList.add("leaving"),m.offsetWidth,m.classList.add("shaking"),window.setTimeout(()=>{let e=[...D[c]];c==="naughty"?e.push(...Y[d]):Math.random()<.3&&e.push(...W[d].map(a=>[a,U(a,d)]));let t=e[Math.floor(Math.random()*e.length)];t[0]===q&&e.length>1&&(t=e[(e.indexOf(t)+1)%e.length]),l={name:t[0],description:t[1]},q=l.name,h.setAttribute("aria-label",l.name),h.innerHTML=[...l.name].map((a,s)=>`<span aria-hidden="true" style="--i:${s}">${a===" "?"&nbsp;":a}</span>`).join(""),g.textContent=l.description,h.classList.remove("leaving"),g.classList.remove("leaving"),w.classList.add("celebrate"),E+=1,document.querySelector("#names-count").textContent=E.toLocaleString(),y(),K()},260),window.setTimeout(()=>m.classList.remove("shaking"),850)}function U(e,t){const a=t==="surprise"?"little friend":P[t].toLowerCase();return`${e} has just the right bounce for one unforgettable ${a}.`}function F(e){w.className=`pet-portrait ${e==="surprise"?"cat surprise":e} switching`,window.setTimeout(()=>w.classList.remove("switching"),550)}function V(){try{return JSON.parse(localStorage.getItem("pawpop-saved"))||[]}catch{return[]}}function C(){localStorage.setItem("pawpop-saved",JSON.stringify(r))}function S(){if(R.hidden=r.length===0,!r.length){v.innerHTML=`
      <div class="empty-favorites">
        <span class="empty-heart">♡</span>
        <p>Tap the heart when a name gives you that <em>oh, that's the one</em> feeling.</p>
      </div>`;return}v.innerHTML=r.map((e,t)=>`
    <article class="favorite-card" tabindex="0" role="button" data-index="${t}" style="--i:${t}">
      <span class="favorite-icon">${A[e.pet]||A.surprise}</span>
      <span class="favorite-copy">
        <strong>${H(e.name)}</strong>
        <small>${e.vibe} · ${P[e.pet]||"Pet"}</small>
      </span>
      <button class="remove-favorite tooltip" type="button" data-remove="${t}" aria-label="Remove ${H(e.name)}" data-tooltip="Remove">×</button>
    </article>`).join(""),v.querySelectorAll(".favorite-card").forEach(e=>{const t=()=>{const a=r[Number(e.dataset.index)];l={name:a.name,description:a.description},d=a.pet,c=a.vibe,h.removeAttribute("aria-label"),h.textContent=a.name,g.textContent=a.description;const s=document.querySelector(`[data-pet="${d}"]`),n=document.querySelector(`[data-vibe="${c}"]`);s&&k(".pet-tab",s),n&&k(".vibe-tab",n),O(c),F(d),y(),document.querySelector(".name-machine-wrap").scrollIntoView({behavior:"smooth",block:"center"}),b(`${a.name} is back!`,"♡")};e.addEventListener("click",a=>{a.target.closest("[data-remove]")||t()}),e.addEventListener("keydown",a=>{a.key==="Enter"&&t()})}),v.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),r.splice(Number(e.dataset.remove),1),C(),S(),y()})})}function y(){const e=r.some(t=>t.name===l.name);f.classList.toggle("saved",e),f.setAttribute("aria-label",e?"Remove this saved name":"Save this name"),f.dataset.tooltip=e?"Saved!":"Save name"}function H(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function b(e,t="✓"){u.querySelector("span").textContent=t,u.querySelector("strong").textContent=e,u.classList.remove("show"),clearTimeout(N),u.offsetWidth,u.classList.add("show"),N=window.setTimeout(()=>u.classList.remove("show"),2200)}function M(e,t){const a=e.currentTarget.getBoundingClientRect();j(a.left+a.width/2,a.top+a.height/2,t,12)}function j(e,t,a,s=8){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=Array.isArray(a)?a:[a];for(let o=0;o<s;o+=1){const i=document.createElement("i"),B=Math.PI*2*o/s+Math.random()*.4,$=18+Math.random()*28;i.className="click-spark",i.style.left=`${e}px`,i.style.top=`${t}px`,i.style.background=n[o%n.length],i.style.setProperty("--x",`${Math.cos(B)*$}px`),i.style.setProperty("--y",`${Math.sin(B)*$}px`),i.style.animationDelay=`${Math.random()*60}ms`,T.appendChild(i),window.setTimeout(()=>i.remove(),800)}}function K(){const e=document.querySelector(".result-stage").getBoundingClientRect(),t=c==="naughty"?["#ff1f6d","#ff70a6","#b32cff","#ffca3a","#fff2f5"]:["#ff7c73","#ffd663","#6ed3aa","#9c88ff","#312943"];for(let a=0;a<24;a+=1){const s=document.createElement("i");s.className="confetti",s.style.left=`${e.left+e.width*(.2+Math.random()*.6)}px`,s.style.top=`${e.top+e.height*.45}px`,s.style.background=t[a%t.length],s.style.setProperty("--tx",`${(Math.random()-.5)*260}px`),s.style.setProperty("--ty",`${-50-Math.random()*120}px`),s.style.setProperty("--rot",`${Math.random()*700-350}deg`),s.style.animationDelay=`${Math.random()*120}ms`,T.appendChild(s),window.setTimeout(()=>s.remove(),1500)}}function X(e,t){if(!e&&!t){const a=f.getBoundingClientRect();e=a.left+a.width/2,t=a.top+a.height/2}for(let a=0;a<7;a+=1){const s=document.createElement("i");s.className="burst-heart",s.textContent="♥",s.style.left=`${e}px`,s.style.top=`${t}px`,s.style.setProperty("--x",`${(Math.random()-.5)*100}px`),s.style.setProperty("--y",`${-35-Math.random()*70}px`),s.style.animationDelay=`${a*35}ms`,T.appendChild(s),window.setTimeout(()=>s.remove(),1100)}}S();y();window.addEventListener("load",()=>document.body.classList.add("loaded"));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const F={sweet:[["Mochi","A soft little name for a certified cuddle expert."],["Peaches","Sweet, sunny, and impossible not to smile at."],["Maple","Warm and golden with a cozy sort of charm."],["Honey","For the friend who makes every day sweeter."],["Poppy","A bright bloom with a tiny spring in their step."],["Mallow","Squishy, dreamy, and made for sofa naps."],["Clover","A pocket-sized piece of good luck."],["Biscuit","Buttery, beloved, and always welcome nearby."],["Nilla","A vanilla cloud with very important business."],["Toffee","Small, golden, and a little bit irresistible."],["Daisy","Fresh-faced, cheerful, and always ready for a sunny stroll."],["Rosie","A rosy little sweetheart with cuddles to spare."],["Coco","Smooth, cozy, and happiest tucked right beside you."],["Lulu","Light, lovely, and full of tiny happy dances."],["Teddy","A living teddy bear with champion-level snuggle skills."],["Pumpkin","Round, warm, and perfect for crisp-evening cuddles."],["Olive","A gentle little charmer with a quietly sunny spirit."],["Millie","Soft around the edges and sweet through the middle."],["Gingersnap","A little bit spicy and a whole lot lovable."],["Cupcake","Frosted with sweetness and topped with tiny paws."],["Buttercup","A golden bloom who brightens every room."],["Cherry","Bright, joyful, and always the treat on top."],["Fudge","Rich, squishy, and dangerously easy to adore."],["Sugarplum","A dreamy little darling sprinkled with storybook magic."],["Twinkle","Small enough to cuddle, bright enough to guide you home."],["Blossom","A gentle soul who makes love grow everywhere."],["Cinnamon","Warm, comforting, and just spicy enough to be fun."],["Marzipan","Fancy-sweet, delightfully soft, and made for special occasions."],["Truffle","A rare little treasure worth finding under every blanket."],["Snuggles","The name says it all: clear your lap immediately."]],silly:[["Waffles","A breakfast icon with impeccable comic timing."],["Pickle","Bright, crunchy energy in one tiny package."],["Boop","Short, bouncy, and best said with one finger."],["Tater Tot","Crispy confidence with a warm little center."],["Noodle","Long on personality, delightfully low on plans."],["Bumble","A happy zigzag disguised as a pet."],["Crumpet","Very polite. Slightly toasted. Entirely adorable."],["Scoot","Already halfway across the room, probably."],["Puddle","A soft heap of mischief wherever they land."],["Beans","Tiny toe beans, enormous main-character energy."],["Gizmo","A mysterious little gadget powered entirely by snacks."],["Bongo","Two beats, four paws, and no indoor voice."],["Zoodles","All tangled up in joy and running through the kitchen."],["Sprocket","A tiny moving part in a very chaotic machine."],["Goober","Lovably clueless and somehow sticky again."],["Fizzgig","Half fizz, half fluff, and one hundred percent commotion."],["Doodle","A happy little scribble that wandered off the page."],["Quirk","Proudly odd, endlessly entertaining, and impossible to copy."],["Chonk","Built like a loaf and carried like royalty."],["Snorfle","A noise, a lifestyle, and now an excellent name."],["Wigglebutt","The front half arrives shortly after the back half."],["Pogo","Why walk anywhere when bouncing is an option?"],["Nacho","Cheesy, crunchy, and definitely trying to steal your dinner."],["Dumpling","A plump little parcel filled with mischief."],["Bonkers","No thoughts, just speed and excellent vibes."],["Squeegee","An odd little word for an odd little roommate."],["Meatball","Round, saucy, and always under the table."],["Whoops","The perfect thing to shout whenever they enter a room."],["Goblin","A tiny household creature who hoards socks and crumbs."],["Pants","Nonsense on paper, pure comedy at the dog park."]],fancy:[["Clementine","Elegant, sun-kissed, and just a bit theatrical."],["Percival","A noble name for a very small adventurer."],["Duchess","Grace, glamour, and premium napping standards."],["Fitzgerald","Bookish charm with a magnificent little strut."],["Cosette","Softly sophisticated and sweet as a song."],["Montgomery","A grand name for grand hallway entrances."],["Bijou","French for jewel—and equally sparkly."],["Wellington","Dignified, dependable, secretly very goofy."],["Prudence","Poised on the outside, zoomies on the inside."],["Margot","Effortlessly chic, even with bed hair."],["Theodore","A timeless gentleman with excellent fireside manners."],["Penelope","Graceful, clever, and never caught without composure."],["Archibald","Distinguished whiskers deserve a name with this much ceremony."],["Beatrice","A literary little lady with impeccable taste in cushions."],["Reginald","Proper at dinner, spectacularly silly after dessert."],["Genevieve","A sweeping name for a pet who glides into every room."],["Sebastian","Polished, charming, and born for a velvet collar."],["Arabella","Romantic, radiant, and just dramatic enough."],["Leopold","A stately name with a brave little heartbeat."],["Vivienne","Parisian poise with an occasional case of the zoomies."],["Bartholomew","Long, grand, and wonderfully excessive for someone so small."],["Ophelia","Dreamy-eyed, poetic, and happiest near a sunny window."],["Augustus","Imperial confidence with a weakness for belly rubs."],["Celeste","A heavenly name for the star of the household."],["Winston","Steady, dignified, and deeply serious about supper."],["Cordelia","Classic beauty with a clever spark behind the eyes."],["Ambrose","Old-world charm wrapped in a very modern cuddle bug."],["Florence","Elegant as a garden and twice as lovely."],["Maximilian","Maximum grandeur for a minimum-sized monarch."],["Esmeralda","Jewel-toned glamour with a hint of delightful mystery."]],tiny:[["Pip","Three tiny letters for one enormous personality."],["Dot","A perfect little punctuation mark with paws."],["Mimi","Mini, musical, and made to be called twice."],["Fig","Small, sweet, and pleasantly unexpected."],["Bibi","A bubbly little name that never sits still."],["Pebble","Pocket-sized, precious, and pleasingly round."],["Tink","A bright little sound with fairy-sized sparkle."],["Miso","Tiny, savory, and full of comforting character."],["Bug","The littlest lovebug in the whole wide world."],["Sprout","Small today, full of wild possibility tomorrow."],["Bitty","Just a bit of pet with a whole lot of heart."],["Nib","A tiny mark, a tiny munch, a perfect tiny name."],["Poco","A little name with a warm and musical bounce."],["Itty","So small the name nearly fits in a whisper."],["Speck","One precious dot in the great big universe."],["Teeny","Practically pocket-sized and proud of it."],["Nano","Microscopic name, astronomical personality."],["Dewdrop","Fresh, delicate, and sparkling in the morning light."],["Button","Cute as one, round as one, always coming loose."],["Crumb","Small, sweet, and somehow always on the sofa."],["Atom","The smallest possible unit of unstoppable energy."],["Fleck","A little dash of color with places to be."],["Wisp","Soft, airy, and gone the moment you look away."],["Minnow","A tiny swimmer in a very big bowl of life."],["Acorn","A pocket-sized beginning with mighty potential."],["Beep","Short, bright, and impossible not to repeat."],["Chip","A tiny piece that makes the whole family complete."],["Smidge","Just a smidge of fluff and an abundance of charm."],["Dinky","Delightfully little and completely unbothered by it."],["Pixel","One tiny square of pure high-resolution joy."]],naughty:[["Pussy Galore","A legendary little pussy with expensive taste and absolutely no shame."],["Doggy Style","Always right behind you and suspiciously proud of the position."],["Clit Eastwood","Good, bad, and shamelessly obsessed with getting stroked."],["Master Baiter","Give them a wriggly toy and they will play with it for hours."],["Sir Licks-a-Lot","That tongue is out, the manners are gone, and nobody is safe."],["Spank Sinatra","They did it their way—and now the whole sofa needs a cigarette."],["Harry Balls","Fluffy underneath, swinging with confidence, and impossible to ignore."],["Bone Daddy","Big treat energy with a weakness for anything long, hard, and chewable."],["Muffin Diver","Headfirst into every warm, fluffy opening they can find."],["Biggus Dickus","A very grand name for a suspiciously tiny package."],["Furplay","All teasing, heavy petting, and absolutely no respect for personal space."],["Woody","Up at dawn, eager for action, and always carrying a large stick."],["Randy","Humps first, asks questions never. Hide the good cushions."],["Bitch Please","A bad bitch with flawless fur and a zero-tolerance treat policy."],["Motherfluffer","Soft to the touch, filthy in spirit, and banned from polite company."],["Purrvert","Stares from the corner, watches you undress, then demands a lap dance."],["Pawrn Star","Always on camera, never wearing clothes, and shameless about the close-ups."],["Humpfrey Bogart","Of all the cushions in all the rooms, they had to climb onto yours."],["Lick Jagger","That tongue has moves, the hips have swagger, and satisfaction is guaranteed."],["Bark After Dark","Quiet all day, loud all night, and definitely disturbing the neighbors."],["Fifty Shades of Spay","Tied to a leash, dressed in leather, and very into obedience training."],["Mutt Plug","Small, rubbery, and somehow wedged exactly where it should not be."],["Paw McCartney","Wants to hold your hand, then hump your leg during the encore."],["Fluffy Bottoms","A luxurious rear end with absolutely scandalous intentions."],["Seymour Butts","Always looking behind them and inviting everyone else to do the same."],["Kitty Bang Bang","Cute face, loaded attitude, and ready to go off without warning."],["Barky Stinson","Suit up, sniff around, and make every night legendary."],["Chew Hefner","Silk robe, plush bed, and far too many bunnies in the lounge."],["Nip Tease","Shows a little fluff, pulls away, then leaves you begging for more."],["Poundcake","Thick, sweet, and taking the command far too literally."],["Hardcore Corgi","Low to the ground, high on stamina, and banned before the watershed."],["Freak on a Leash","Perfectly respectable until the collar clicks into place."],["Booty Sniffer","Introductions begin at the rear and manners never enter the conversation."],["Sir Mounts-a-Lot","No cushion, shin, or innocent stuffed toy escapes the royal attention."],["Dirty Sanchez","That mustache is suspicious, the grin is worse, and bath time is overdue."]]},I={cat:["Mittens","Mew","Suki","Tuna","Purrcy"],dog:["Barkley","Rolo","Scout","Fido","Wiggles"],bunny:["Thumper","Bunbun","Flopsy","Cinnabun","Hopper"],bird:["Kiwi","Pico","Chirpy","Sunny","Feather"],surprise:["Mochi","Bean","Puff","Ziggy","Pookie"]},W={cat:[["Heavy Petting","One touch turns into an all-night session. That purr is indecent."],["Wet Pussy","One bath, two furious eyes, and a phrase you cannot say at the vet."]],dog:[["Morning Wood","Up early, carrying a branch, and thrilled to show everybody."],["Raw Dog","No collar, no filter, and no interest in behaving responsibly."]],bunny:[["Thumper? I Hardly Know Her","Fast feet, filthy timing, and one extremely suggestive surname."],["Hugh Hopner","A tiny robe, a velvet hutch, and several scandalous girlfriends."]],bird:[["Pecker","Small beak, enormous confidence, and always banging on something."],["Cock Robin","Bright feathers, a proud chest, and a name that enters the room first."]],surprise:[["Safeword","The one name guaranteed to make the entire dog park stop."],["Dirty Little Secret","Cute in public. Absolutely unprintable behind closed doors."]]},x=["PIP","♡","WAFFLES","✦","CLOVER","♡","BISCUIT","✦","BEANS","♡","MOCHI","✦"],G=["PUSSY GALORE","♥","DOGGY STYLE","✦","BONE DADDY","♥","FURPLAY","✦","HARRY BALLS","♥","SPANK SINATRA","✦"],P={cat:"Cat",dog:"Dog",bunny:"Bunny",bird:"Bird",surprise:"Surprise me"},L={cat:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 13 5 5l7 4a14 14 0 0 1 8 0l7-4-2 8v7c0 5-4 8-9 8s-9-3-9-8v-7Z"/><path d="M11 17h.01M21 17h.01M14 22c1.2 1 2.8 1 4 0"/></svg>',dog:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 11c3-3 11-3 14 0l1 12c-2 5-14 5-16 0l1-12Z"/><path d="M9 12C4 8 3 11 5 18l3 2M23 12c5-4 6-1 4 6l-3 2M12 17h.01M20 17h.01M14 22c1.3 1.2 2.7 1.2 4 0"/></svg>',bunny:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 11C7 3 10 1 14 10M21 11c4-8 1-10-3-1"/><path d="M7 19c0-6 4-9 9-9s9 3 9 9-4 9-9 9-9-3-9-9Z"/><path d="M12 18h.01M20 18h.01M14 23c1.3 1 2.7 1 4 0"/></svg>',bird:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 17c0-6 4-10 10-10s9 4 9 10-3 10-9 10S7 23 7 17Z"/><path d="m26 16 5 3-5 2M12 16h.01M10 24l-2 4M17 27l1 2"/></svg>',surprise:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 15c0-5 4-9 9-9s9 4 9 9v5c0 5-4 8-9 8s-9-3-9-8v-5Z"/><path d="M7 14 4 8l7 2M24 14l4-6-7 2M12 17h.01M20 17h.01M14 22c1.3 1 2.7 1 4 0"/></svg>'},Y=document.querySelector("#app");Y.innerHTML=`
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
                  <span class="tab-icon">${L[e]}</span>
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
        ${[...x,...x].map(e=>`<span>${e}</span>`).join("")}
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
`;let c="cat",d="sweet",l={name:"Mochi",description:F.sweet[0][1]},E="Mochi",$=2847,r=V(),N;const h=document.querySelector("#name-machine"),w=document.querySelector("#pet-portrait"),p=document.querySelector("#result-name"),v=document.querySelector("#result-description"),m=document.querySelector("#generate-button"),f=document.querySelector("#save-button"),M=document.querySelector("#copy-button"),b=document.querySelector("#favorites-list"),H=document.querySelector("#clear-button"),u=document.querySelector("#toast"),C=document.querySelector("#spark-layer"),Z=document.querySelector('meta[name="theme-color"]');document.querySelectorAll(".pet-tab").forEach(e=>{e.addEventListener("click",t=>{c=e.dataset.pet,k(".pet-tab",e),z(c),A(t,["#ff7c73","#ffd663","#6ed3aa"])})});document.querySelectorAll(".vibe-tab").forEach(e=>{e.addEventListener("click",t=>{d=e.dataset.vibe,k(".vibe-tab",e),R(d),e.classList.remove("bop"),e.offsetWidth,e.classList.add("bop"),A(t,d==="naughty"?["#ff1f6d","#ff70a6","#b32cff","#ffca3a"]:["#a997ff","#ff7c73","#ffd663"])})});m.addEventListener("click",e=>{O(),A(e,["#fff7e4","#ffd663","#ff7c73","#312943"])});f.addEventListener("click",e=>{const t=r.findIndex(a=>a.name===l.name);t>=0?(r.splice(t,1),g("Removed from your list","♡")):(r.unshift({...l,pet:c,vibe:d}),r=r.slice(0,8),g("Saved to your shortlist!","♥"),K(e.clientX,e.clientY)),T(),S(),y()});M.addEventListener("click",e=>{const t=()=>{const a=document.createElement("textarea");a.value=l.name,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()};navigator.clipboard?.writeText?navigator.clipboard.writeText(l.name).catch(t):t(),M.classList.add("success"),window.setTimeout(()=>M.classList.remove("success"),650),g(`${l.name} copied!`,"✓"),A(e,["#6ed3aa","#ffd663"])});H.addEventListener("click",()=>{r=[],T(),S(),y(),g("A fresh little list","✦")});document.addEventListener("keydown",e=>{const t=e.target,a=["INPUT","TEXTAREA","BUTTON","SELECT","A"].includes(t.tagName);e.code==="Space"&&!a&&(e.preventDefault(),O())});h.addEventListener("pointermove",e=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.innerWidth<900)return;const t=h.getBoundingClientRect(),a=(e.clientX-t.left)/t.width-.5,n=(e.clientY-t.top)/t.height-.5;h.style.setProperty("--tilt-x",`${n*-2.5}deg`),h.style.setProperty("--tilt-y",`${a*3}deg`)});h.addEventListener("pointerleave",()=>{h.style.setProperty("--tilt-x","0deg"),h.style.setProperty("--tilt-y","0deg")});document.addEventListener("pointerdown",e=>{e.target.closest("button, a, .favorite-card")&&j(e.clientX,e.clientY,d==="naughty"?"#ff1f6d":"#ff7c73",7)});function k(e,t){document.querySelectorAll(e).forEach(a=>{const n=a===t;a.classList.toggle("active",n),a.setAttribute("aria-checked",String(n))})}function R(e){const t=e==="naughty";document.body.classList.toggle("naughty-mode",t),Z?.setAttribute("content",t?"#11060d":"#fff8ed"),document.querySelector("#header-note-copy").textContent=t?"bad names made after dark":"names made fresh daily",document.querySelector("#eyebrow-icon").textContent=t?"♥":"✦",document.querySelector("#eyebrow-copy").textContent=t?"Zero shame. All game.":"A name is waiting",document.querySelector("#hero-title").innerHTML=t?'Meet the name<br />that makes the<br /><span class="scribble">neighbors blush.</span>':'Meet the name<br />that makes their<br /><span class="scribble">ears perk up.</span>',document.querySelector("#hero-intro").textContent=t?"Pick your filthy little accomplice, dim the lights, and shake out a name that belongs behind closed doors.":"Pick your little friend, choose a vibe, and let the name jar do its magic.",document.querySelector("#result-kicker").textContent=t?"Your safeword is...":"Your new favorite name is...",document.querySelector("#button-label").textContent=t?"Make it filthy":"Shake the name jar",document.querySelector("#keyboard-copy").textContent=t?"gets you off too":"works too",document.querySelector("#keyboard-icon").textContent=t?"♥":"♡",document.querySelector("#footer-copy").textContent=t?"Made for heavy petting, bad decisions & dirty little animals.":"Made for paws, claws, wings & wiggles.",document.querySelector(".footer-flower").textContent=t?"♥":"✿";const a=t?["♠","♥","×"]:["✦","♡","✿"];document.querySelectorAll(".floaty").forEach((o,s)=>{o.textContent=a[s]});const n=t?G:x;document.querySelector("#ticker-track").innerHTML=[...n,...n].map(o=>`<span>${o}</span>`).join("")}function O(){m.classList.remove("shaking"),w.classList.remove("celebrate"),p.classList.add("leaving"),v.classList.add("leaving"),m.offsetWidth,m.classList.add("shaking"),window.setTimeout(()=>{let e=[...F[d]];d==="naughty"?e.push(...W[c]):Math.random()<.3&&e.push(...I[c].map(a=>[a,U(a,c)]));let t=e[Math.floor(Math.random()*e.length)];t[0]===E&&e.length>1&&(t=e[(e.indexOf(t)+1)%e.length]),l={name:t[0],description:t[1]},E=l.name,p.setAttribute("aria-label",l.name),p.innerHTML=[...l.name].map((a,n)=>`<span aria-hidden="true" style="--i:${n}">${a===" "?"&nbsp;":a}</span>`).join(""),v.textContent=l.description,p.classList.remove("leaving"),v.classList.remove("leaving"),w.classList.add("celebrate"),$+=1,document.querySelector("#names-count").textContent=$.toLocaleString(),y(),J()},260),window.setTimeout(()=>m.classList.remove("shaking"),850)}function U(e,t){const a=t==="surprise"?"little friend":P[t].toLowerCase();return`${e} has just the right bounce for one unforgettable ${a}.`}function z(e){w.className=`pet-portrait ${e==="surprise"?"cat surprise":e} switching`,window.setTimeout(()=>w.classList.remove("switching"),550)}function V(){try{return JSON.parse(localStorage.getItem("pawpop-saved"))||[]}catch{return[]}}function T(){localStorage.setItem("pawpop-saved",JSON.stringify(r))}function S(){if(H.hidden=r.length===0,!r.length){b.innerHTML=`
      <div class="empty-favorites">
        <span class="empty-heart">♡</span>
        <p>Tap the heart when a name gives you that <em>oh, that's the one</em> feeling.</p>
      </div>`;return}b.innerHTML=r.map((e,t)=>`
    <article class="favorite-card" tabindex="0" role="button" data-index="${t}" style="--i:${t}">
      <span class="favorite-icon">${L[e.pet]||L.surprise}</span>
      <span class="favorite-copy">
        <strong>${D(e.name)}</strong>
        <small>${e.vibe} · ${P[e.pet]||"Pet"}</small>
      </span>
      <button class="remove-favorite tooltip" type="button" data-remove="${t}" aria-label="Remove ${D(e.name)}" data-tooltip="Remove">×</button>
    </article>`).join(""),b.querySelectorAll(".favorite-card").forEach(e=>{const t=()=>{const a=r[Number(e.dataset.index)];l={name:a.name,description:a.description},c=a.pet,d=a.vibe,p.removeAttribute("aria-label"),p.textContent=a.name,v.textContent=a.description;const n=document.querySelector(`[data-pet="${c}"]`),o=document.querySelector(`[data-vibe="${d}"]`);n&&k(".pet-tab",n),o&&k(".vibe-tab",o),R(d),z(c),y(),document.querySelector(".name-machine-wrap").scrollIntoView({behavior:"smooth",block:"center"}),g(`${a.name} is back!`,"♡")};e.addEventListener("click",a=>{a.target.closest("[data-remove]")||t()}),e.addEventListener("keydown",a=>{a.key==="Enter"&&t()})}),b.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),r.splice(Number(e.dataset.remove),1),T(),S(),y()})})}function y(){const e=r.some(t=>t.name===l.name);f.classList.toggle("saved",e),f.setAttribute("aria-label",e?"Remove this saved name":"Save this name"),f.dataset.tooltip=e?"Saved!":"Save name"}function D(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function g(e,t="✓"){u.querySelector("span").textContent=t,u.querySelector("strong").textContent=e,u.classList.remove("show"),clearTimeout(N),u.offsetWidth,u.classList.add("show"),N=window.setTimeout(()=>u.classList.remove("show"),2200)}function A(e,t){const a=e.currentTarget.getBoundingClientRect();j(a.left+a.width/2,a.top+a.height/2,t,12)}function j(e,t,a,n=8){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=Array.isArray(a)?a:[a];for(let s=0;s<n;s+=1){const i=document.createElement("i"),B=Math.PI*2*s/n+Math.random()*.4,q=18+Math.random()*28;i.className="click-spark",i.style.left=`${e}px`,i.style.top=`${t}px`,i.style.background=o[s%o.length],i.style.setProperty("--x",`${Math.cos(B)*q}px`),i.style.setProperty("--y",`${Math.sin(B)*q}px`),i.style.animationDelay=`${Math.random()*60}ms`,C.appendChild(i),window.setTimeout(()=>i.remove(),800)}}function J(){const e=document.querySelector(".result-stage").getBoundingClientRect(),t=d==="naughty"?["#ff1f6d","#ff70a6","#b32cff","#ffca3a","#fff2f5"]:["#ff7c73","#ffd663","#6ed3aa","#9c88ff","#312943"];for(let a=0;a<24;a+=1){const n=document.createElement("i");n.className="confetti",n.style.left=`${e.left+e.width*(.2+Math.random()*.6)}px`,n.style.top=`${e.top+e.height*.45}px`,n.style.background=t[a%t.length],n.style.setProperty("--tx",`${(Math.random()-.5)*260}px`),n.style.setProperty("--ty",`${-50-Math.random()*120}px`),n.style.setProperty("--rot",`${Math.random()*700-350}deg`),n.style.animationDelay=`${Math.random()*120}ms`,C.appendChild(n),window.setTimeout(()=>n.remove(),1500)}}function K(e,t){if(!e&&!t){const a=f.getBoundingClientRect();e=a.left+a.width/2,t=a.top+a.height/2}for(let a=0;a<7;a+=1){const n=document.createElement("i");n.className="burst-heart",n.textContent="♥",n.style.left=`${e}px`,n.style.top=`${t}px`,n.style.setProperty("--x",`${(Math.random()-.5)*100}px`),n.style.setProperty("--y",`${-35-Math.random()*70}px`),n.style.animationDelay=`${a*35}ms`,C.appendChild(n),window.setTimeout(()=>n.remove(),1100)}}S();y();window.addEventListener("load",()=>document.body.classList.add("loaded"));

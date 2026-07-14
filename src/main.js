import './style.css';

const nameBank = {
  sweet: [
    ['Mochi', 'A soft little name for a certified cuddle expert.'],
    ['Peaches', 'Sweet, sunny, and impossible not to smile at.'],
    ['Maple', 'Warm and golden with a cozy sort of charm.'],
    ['Honey', 'For the friend who makes every day sweeter.'],
    ['Poppy', 'A bright bloom with a tiny spring in their step.'],
    ['Mallow', 'Squishy, dreamy, and made for sofa naps.'],
    ['Clover', 'A pocket-sized piece of good luck.'],
    ['Biscuit', 'Buttery, beloved, and always welcome nearby.'],
    ['Nilla', 'A vanilla cloud with very important business.'],
    ['Toffee', 'Small, golden, and a little bit irresistible.']
  ],
  silly: [
    ['Waffles', 'A breakfast icon with impeccable comic timing.'],
    ['Pickle', 'Bright, crunchy energy in one tiny package.'],
    ['Boop', 'Short, bouncy, and best said with one finger.'],
    ['Tater Tot', 'Crispy confidence with a warm little center.'],
    ['Noodle', 'Long on personality, delightfully low on plans.'],
    ['Bumble', 'A happy zigzag disguised as a pet.'],
    ['Crumpet', 'Very polite. Slightly toasted. Entirely adorable.'],
    ['Scoot', 'Already halfway across the room, probably.'],
    ['Puddle', 'A soft heap of mischief wherever they land.'],
    ['Beans', 'Tiny toe beans, enormous main-character energy.']
  ],
  fancy: [
    ['Clementine', 'Elegant, sun-kissed, and just a bit theatrical.'],
    ['Percival', 'A noble name for a very small adventurer.'],
    ['Duchess', 'Grace, glamour, and premium napping standards.'],
    ['Fitzgerald', 'Bookish charm with a magnificent little strut.'],
    ['Cosette', 'Softly sophisticated and sweet as a song.'],
    ['Montgomery', 'A grand name for grand hallway entrances.'],
    ['Bijou', 'French for jewel—and equally sparkly.'],
    ['Wellington', 'Dignified, dependable, secretly very goofy.'],
    ['Prudence', 'Poised on the outside, zoomies on the inside.'],
    ['Margot', 'Effortlessly chic, even with bed hair.']
  ],
  tiny: [
    ['Pip', 'Three tiny letters for one enormous personality.'],
    ['Dot', 'A perfect little punctuation mark with paws.'],
    ['Mimi', 'Mini, musical, and made to be called twice.'],
    ['Fig', 'Small, sweet, and pleasantly unexpected.'],
    ['Bibi', 'A bubbly little name that never sits still.'],
    ['Pebble', 'Pocket-sized, precious, and pleasingly round.'],
    ['Tink', 'A bright little sound with fairy-sized sparkle.'],
    ['Miso', 'Tiny, savory, and full of comforting character.'],
    ['Bug', 'The littlest lovebug in the whole wide world.'],
    ['Sprout', 'Small today, full of wild possibility tomorrow.']
  ],
  naughty: [
    ['Pussy Galore', 'A legendary little pussy with expensive taste and absolutely no shame.'],
    ['Doggy Style', 'Always right behind you and suspiciously proud of the position.'],
    ['Clit Eastwood', 'Good, bad, and shamelessly obsessed with getting stroked.'],
    ['Master Baiter', 'Give them a wriggly toy and they will play with it for hours.'],
    ['Sir Licks-a-Lot', 'That tongue is out, the manners are gone, and nobody is safe.'],
    ['Spank Sinatra', 'They did it their way—and now the whole sofa needs a cigarette.'],
    ['Harry Balls', 'Fluffy underneath, swinging with confidence, and impossible to ignore.'],
    ['Bone Daddy', 'Big treat energy with a weakness for anything long, hard, and chewable.'],
    ['Muffin Diver', 'Headfirst into every warm, fluffy opening they can find.'],
    ['Biggus Dickus', 'A very grand name for a suspiciously tiny package.'],
    ['Furplay', 'All teasing, heavy petting, and absolutely no respect for personal space.'],
    ['Woody', 'Up at dawn, eager for action, and always carrying a large stick.'],
    ['Randy', 'Humps first, asks questions never. Hide the good cushions.'],
    ['Bitch Please', 'A bad bitch with flawless fur and a zero-tolerance treat policy.'],
    ['Motherfluffer', 'Soft to the touch, filthy in spirit, and banned from polite company.']
  ]
};

const petTweaks = {
  cat: ['Mittens', 'Mew', 'Suki', 'Tuna', 'Purrcy'],
  dog: ['Barkley', 'Rolo', 'Scout', 'Fido', 'Wiggles'],
  bunny: ['Thumper', 'Bunbun', 'Flopsy', 'Cinnabun', 'Hopper'],
  bird: ['Kiwi', 'Pico', 'Chirpy', 'Sunny', 'Feather'],
  surprise: ['Mochi', 'Bean', 'Puff', 'Ziggy', 'Pookie']
};

const naughtyPetTweaks = {
  cat: [
    ['Heavy Petting', 'One touch turns into an all-night session. That purr is indecent.'],
    ['Wet Pussy', 'One bath, two furious eyes, and a phrase you cannot say at the vet.']
  ],
  dog: [
    ['Morning Wood', 'Up early, carrying a branch, and thrilled to show everybody.'],
    ['Raw Dog', 'No collar, no filter, and no interest in behaving responsibly.']
  ],
  bunny: [
    ['Thumper? I Hardly Know Her', 'Fast feet, filthy timing, and one extremely suggestive surname.'],
    ['Hugh Hopner', 'A tiny robe, a velvet hutch, and several scandalous girlfriends.']
  ],
  bird: [
    ['Pecker', 'Small beak, enormous confidence, and always banging on something.'],
    ['Cock Robin', 'Bright feathers, a proud chest, and a name that enters the room first.']
  ],
  surprise: [
    ['Safeword', 'The one name guaranteed to make the entire dog park stop.'],
    ['Dirty Little Secret', 'Cute in public. Absolutely unprintable behind closed doors.']
  ]
};

const defaultTicker = ['PIP', '♡', 'WAFFLES', '✦', 'CLOVER', '♡', 'BISCUIT', '✦', 'BEANS', '♡', 'MOCHI', '✦'];
const naughtyTicker = ['PUSSY GALORE', '♥', 'DOGGY STYLE', '✦', 'BONE DADDY', '♥', 'FURPLAY', '✦', 'HARRY BALLS', '♥', 'SPANK SINATRA', '✦'];

const petLabels = {
  cat: 'Cat',
  dog: 'Dog',
  bunny: 'Bunny',
  bird: 'Bird',
  surprise: 'Surprise me'
};

const petIcons = {
  cat: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 13 5 5l7 4a14 14 0 0 1 8 0l7-4-2 8v7c0 5-4 8-9 8s-9-3-9-8v-7Z"/><path d="M11 17h.01M21 17h.01M14 22c1.2 1 2.8 1 4 0"/></svg>`,
  dog: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 11c3-3 11-3 14 0l1 12c-2 5-14 5-16 0l1-12Z"/><path d="M9 12C4 8 3 11 5 18l3 2M23 12c5-4 6-1 4 6l-3 2M12 17h.01M20 17h.01M14 22c1.3 1.2 2.7 1.2 4 0"/></svg>`,
  bunny: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 11C7 3 10 1 14 10M21 11c4-8 1-10-3-1"/><path d="M7 19c0-6 4-9 9-9s9 3 9 9-4 9-9 9-9-3-9-9Z"/><path d="M12 18h.01M20 18h.01M14 23c1.3 1 2.7 1 4 0"/></svg>`,
  bird: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 17c0-6 4-10 10-10s9 4 9 10-3 10-9 10S7 23 7 17Z"/><path d="m26 16 5 3-5 2M12 16h.01M10 24l-2 4M17 27l1 2"/></svg>`,
  surprise: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 15c0-5 4-9 9-9s9 4 9 9v5c0 5-4 8-9 8s-9-3-9-8v-5Z"/><path d="M7 14 4 8l7 2M24 14l4-6-7 2M12 17h.01M20 17h.01M14 22c1.3 1 2.7 1 4 0"/></svg>`
};

const app = document.querySelector('#app');

app.innerHTML = `
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
              ${Object.entries(petLabels).map(([key, label], index) => `
                <button class="pet-tab ${index === 0 ? 'active' : ''}" type="button" data-pet="${key}" role="radio" aria-checked="${index === 0}">
                  <span class="tab-icon">${petIcons[key]}</span>
                  <span>${label}</span>
                </button>`).join('')}
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
        ${[...defaultTicker, ...defaultTicker].map(item => `<span>${item}</span>`).join('')}
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
`;

let selectedPet = 'cat';
let selectedVibe = 'sweet';
let currentName = { name: 'Mochi', description: nameBank.sweet[0][1] };
let lastName = 'Mochi';
let totalNames = 2847;
let savedNames = readSavedNames();
let toastTimeout;

const machine = document.querySelector('#name-machine');
const portrait = document.querySelector('#pet-portrait');
const resultName = document.querySelector('#result-name');
const resultDescription = document.querySelector('#result-description');
const generateButton = document.querySelector('#generate-button');
const saveButton = document.querySelector('#save-button');
const copyButton = document.querySelector('#copy-button');
const favoritesList = document.querySelector('#favorites-list');
const clearButton = document.querySelector('#clear-button');
const toast = document.querySelector('#toast');
const sparkLayer = document.querySelector('#spark-layer');
const themeColor = document.querySelector('meta[name="theme-color"]');

document.querySelectorAll('.pet-tab').forEach(button => {
  button.addEventListener('click', event => {
    selectedPet = button.dataset.pet;
    setRadioState('.pet-tab', button);
    changePortrait(selectedPet);
    popAtEvent(event, ['#ff7c73', '#ffd663', '#6ed3aa']);
  });
});

document.querySelectorAll('.vibe-tab').forEach(button => {
  button.addEventListener('click', event => {
    selectedVibe = button.dataset.vibe;
    setRadioState('.vibe-tab', button);
    applyVibeTheme(selectedVibe);
    button.classList.remove('bop');
    void button.offsetWidth;
    button.classList.add('bop');
    popAtEvent(event, selectedVibe === 'naughty'
      ? ['#ff1f6d', '#ff70a6', '#b32cff', '#ffca3a']
      : ['#a997ff', '#ff7c73', '#ffd663']);
  });
});

generateButton.addEventListener('click', event => {
  generateName();
  popAtEvent(event, ['#fff7e4', '#ffd663', '#ff7c73', '#312943']);
});

saveButton.addEventListener('click', event => {
  const existingIndex = savedNames.findIndex(item => item.name === currentName.name);

  if (existingIndex >= 0) {
    savedNames.splice(existingIndex, 1);
    showToast('Removed from your list', '♡');
  } else {
    savedNames.unshift({ ...currentName, pet: selectedPet, vibe: selectedVibe });
    savedNames = savedNames.slice(0, 8);
    showToast('Saved to your shortlist!', '♥');
    burstHearts(event.clientX, event.clientY);
  }

  persistSavedNames();
  renderFavorites();
  updateSaveButton();
});

copyButton.addEventListener('click', event => {
  const fallbackCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = currentName.name;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(currentName.name).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  copyButton.classList.add('success');
  window.setTimeout(() => copyButton.classList.remove('success'), 650);
  showToast(`${currentName.name} copied!`, '✓');
  popAtEvent(event, ['#6ed3aa', '#ffd663']);
});

clearButton.addEventListener('click', () => {
  savedNames = [];
  persistSavedNames();
  renderFavorites();
  updateSaveButton();
  showToast('A fresh little list', '✦');
});

document.addEventListener('keydown', event => {
  const target = event.target;
  const isInteractive = ['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'A'].includes(target.tagName);
  if (event.code === 'Space' && !isInteractive) {
    event.preventDefault();
    generateName();
  }
});

machine.addEventListener('pointermove', event => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 900) return;
  const rect = machine.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  machine.style.setProperty('--tilt-x', `${y * -2.5}deg`);
  machine.style.setProperty('--tilt-y', `${x * 3}deg`);
});

machine.addEventListener('pointerleave', () => {
  machine.style.setProperty('--tilt-x', '0deg');
  machine.style.setProperty('--tilt-y', '0deg');
});

document.addEventListener('pointerdown', event => {
  if (event.target.closest('button, a, .favorite-card')) {
    createSpark(event.clientX, event.clientY, selectedVibe === 'naughty' ? '#ff1f6d' : '#ff7c73', 7);
  }
});

function setRadioState(selector, activeButton) {
  document.querySelectorAll(selector).forEach(button => {
    const active = button === activeButton;
    button.classList.toggle('active', active);
    button.setAttribute('aria-checked', String(active));
  });
}

function applyVibeTheme(vibe) {
  const naughty = vibe === 'naughty';
  document.body.classList.toggle('naughty-mode', naughty);
  themeColor?.setAttribute('content', naughty ? '#11060d' : '#fff8ed');

  document.querySelector('#header-note-copy').textContent = naughty ? 'bad names made after dark' : 'names made fresh daily';
  document.querySelector('#eyebrow-icon').textContent = naughty ? '♥' : '✦';
  document.querySelector('#eyebrow-copy').textContent = naughty ? 'Zero shame. All game.' : 'A name is waiting';
  document.querySelector('#hero-title').innerHTML = naughty
    ? 'Meet the name<br />that makes the<br /><span class="scribble">neighbors blush.</span>'
    : 'Meet the name<br />that makes their<br /><span class="scribble">ears perk up.</span>';
  document.querySelector('#hero-intro').textContent = naughty
    ? 'Pick your filthy little accomplice, dim the lights, and shake out a name that belongs behind closed doors.'
    : 'Pick your little friend, choose a vibe, and let the name jar do its magic.';
  document.querySelector('#result-kicker').textContent = naughty ? 'Your safeword is...' : 'Your new favorite name is...';
  document.querySelector('#button-label').textContent = naughty ? 'Make it filthy' : 'Shake the name jar';
  document.querySelector('#keyboard-copy').textContent = naughty ? 'gets you off too' : 'works too';
  document.querySelector('#keyboard-icon').textContent = naughty ? '♥' : '♡';
  document.querySelector('#footer-copy').textContent = naughty
    ? 'Made for heavy petting, bad decisions & dirty little animals.'
    : 'Made for paws, claws, wings & wiggles.';
  document.querySelector('.footer-flower').textContent = naughty ? '♥' : '✿';

  const floatySymbols = naughty ? ['♠', '♥', '×'] : ['✦', '♡', '✿'];
  document.querySelectorAll('.floaty').forEach((item, index) => {
    item.textContent = floatySymbols[index];
  });

  const tickerItems = naughty ? naughtyTicker : defaultTicker;
  document.querySelector('#ticker-track').innerHTML = [...tickerItems, ...tickerItems]
    .map(item => `<span>${item}</span>`)
    .join('');
}

function generateName() {
  generateButton.classList.remove('shaking');
  portrait.classList.remove('celebrate');
  resultName.classList.add('leaving');
  resultDescription.classList.add('leaving');
  void generateButton.offsetWidth;
  generateButton.classList.add('shaking');

  window.setTimeout(() => {
    let options = [...nameBank[selectedVibe]];
    if (selectedVibe === 'naughty') {
      options.push(...naughtyPetTweaks[selectedPet]);
    } else if (Math.random() < 0.3) {
      options.push(...petTweaks[selectedPet].map(name => [name, petDescription(name, selectedPet)]));
    }

    let next = options[Math.floor(Math.random() * options.length)];
    if (next[0] === lastName && options.length > 1) {
      next = options[(options.indexOf(next) + 1) % options.length];
    }

    currentName = { name: next[0], description: next[1] };
    lastName = currentName.name;
    resultName.setAttribute('aria-label', currentName.name);
    resultName.innerHTML = [...currentName.name].map((letter, index) => `<span aria-hidden="true" style="--i:${index}">${letter === ' ' ? '&nbsp;' : letter}</span>`).join('');
    resultDescription.textContent = currentName.description;
    resultName.classList.remove('leaving');
    resultDescription.classList.remove('leaving');
    portrait.classList.add('celebrate');
    totalNames += 1;
    document.querySelector('#names-count').textContent = totalNames.toLocaleString();
    updateSaveButton();
    makeConfetti();
  }, 260);

  window.setTimeout(() => generateButton.classList.remove('shaking'), 850);
}

function petDescription(name, pet) {
  const friend = pet === 'surprise' ? 'little friend' : petLabels[pet].toLowerCase();
  return `${name} has just the right bounce for one unforgettable ${friend}.`;
}

function changePortrait(pet) {
  portrait.className = `pet-portrait ${pet === 'surprise' ? 'cat surprise' : pet} switching`;
  window.setTimeout(() => portrait.classList.remove('switching'), 550);
}

function readSavedNames() {
  try {
    return JSON.parse(localStorage.getItem('pawpop-saved')) || [];
  } catch {
    return [];
  }
}

function persistSavedNames() {
  localStorage.setItem('pawpop-saved', JSON.stringify(savedNames));
}

function renderFavorites() {
  clearButton.hidden = savedNames.length === 0;

  if (!savedNames.length) {
    favoritesList.innerHTML = `
      <div class="empty-favorites">
        <span class="empty-heart">♡</span>
        <p>Tap the heart when a name gives you that <em>oh, that's the one</em> feeling.</p>
      </div>`;
    return;
  }

  favoritesList.innerHTML = savedNames.map((item, index) => `
    <article class="favorite-card" tabindex="0" role="button" data-index="${index}" style="--i:${index}">
      <span class="favorite-icon">${petIcons[item.pet] || petIcons.surprise}</span>
      <span class="favorite-copy">
        <strong>${escapeHtml(item.name)}</strong>
        <small>${item.vibe} · ${petLabels[item.pet] || 'Pet'}</small>
      </span>
      <button class="remove-favorite tooltip" type="button" data-remove="${index}" aria-label="Remove ${escapeHtml(item.name)}" data-tooltip="Remove">×</button>
    </article>`).join('');

  favoritesList.querySelectorAll('.favorite-card').forEach(card => {
    const select = () => {
      const item = savedNames[Number(card.dataset.index)];
      currentName = { name: item.name, description: item.description };
      selectedPet = item.pet;
      selectedVibe = item.vibe;
      resultName.removeAttribute('aria-label');
      resultName.textContent = item.name;
      resultDescription.textContent = item.description;
      const petButton = document.querySelector(`[data-pet="${selectedPet}"]`);
      const vibeButton = document.querySelector(`[data-vibe="${selectedVibe}"]`);
      if (petButton) setRadioState('.pet-tab', petButton);
      if (vibeButton) setRadioState('.vibe-tab', vibeButton);
      applyVibeTheme(selectedVibe);
      changePortrait(selectedPet);
      updateSaveButton();
      document.querySelector('.name-machine-wrap').scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast(`${item.name} is back!`, '♡');
    };
    card.addEventListener('click', event => {
      if (!event.target.closest('[data-remove]')) select();
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter') select();
    });
  });

  favoritesList.querySelectorAll('[data-remove]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      savedNames.splice(Number(button.dataset.remove), 1);
      persistSavedNames();
      renderFavorites();
      updateSaveButton();
    });
  });
}

function updateSaveButton() {
  const isSaved = savedNames.some(item => item.name === currentName.name);
  saveButton.classList.toggle('saved', isSaved);
  saveButton.setAttribute('aria-label', isSaved ? 'Remove this saved name' : 'Save this name');
  saveButton.dataset.tooltip = isSaved ? 'Saved!' : 'Save name';
}

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value;
  return div.innerHTML;
}

function showToast(message, icon = '✓') {
  toast.querySelector('span').textContent = icon;
  toast.querySelector('strong').textContent = message;
  toast.classList.remove('show');
  clearTimeout(toastTimeout);
  void toast.offsetWidth;
  toast.classList.add('show');
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

function popAtEvent(event, colors) {
  const rect = event.currentTarget.getBoundingClientRect();
  createSpark(rect.left + rect.width / 2, rect.top + rect.height / 2, colors, 12);
}

function createSpark(x, y, colors, count = 8) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const palette = Array.isArray(colors) ? colors : [colors];
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement('i');
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const distance = 18 + Math.random() * 28;
    spark.className = 'click-spark';
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.background = palette[i % palette.length];
    spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    spark.style.animationDelay = `${Math.random() * 60}ms`;
    sparkLayer.appendChild(spark);
    window.setTimeout(() => spark.remove(), 800);
  }
}

function makeConfetti() {
  const rect = document.querySelector('.result-stage').getBoundingClientRect();
  const colors = selectedVibe === 'naughty'
    ? ['#ff1f6d', '#ff70a6', '#b32cff', '#ffca3a', '#fff2f5']
    : ['#ff7c73', '#ffd663', '#6ed3aa', '#9c88ff', '#312943'];
  for (let i = 0; i < 24; i += 1) {
    const piece = document.createElement('i');
    piece.className = 'confetti';
    piece.style.left = `${rect.left + rect.width * (0.2 + Math.random() * 0.6)}px`;
    piece.style.top = `${rect.top + rect.height * 0.45}px`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--tx', `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty('--ty', `${-50 - Math.random() * 120}px`);
    piece.style.setProperty('--rot', `${Math.random() * 700 - 350}deg`);
    piece.style.animationDelay = `${Math.random() * 120}ms`;
    sparkLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1500);
  }
}

function burstHearts(x, y) {
  if (!x && !y) {
    const rect = saveButton.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  }
  for (let i = 0; i < 7; i += 1) {
    const heart = document.createElement('i');
    heart.className = 'burst-heart';
    heart.textContent = '♥';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty('--x', `${(Math.random() - .5) * 100}px`);
    heart.style.setProperty('--y', `${-35 - Math.random() * 70}px`);
    heart.style.animationDelay = `${i * 35}ms`;
    sparkLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 1100);
  }
}

renderFavorites();
updateSaveButton();

window.addEventListener('load', () => document.body.classList.add('loaded'));

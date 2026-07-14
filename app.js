const $ = (selector) => document.querySelector(selector);

const reveal = $("#revealWish");
if (reveal) {
  reveal.addEventListener("click", () => {
    const secret = $("#secretWish");
    secret.classList.add("show");
    reveal.textContent = "Wish unlocked ✦";
    reveal.disabled = true;
  });
}

const grid = $("#photoGrid");
const photoInput = $("#photoUpload");
const storageKey = "kushi-birthday-photos";
const bundledPhotos = Array.from({ length: 6 }, (_, index) => `photos/kushi-${index + 1}.jpg`);

function addPhoto(url, index) {
  const slot = document.createElement("figure");
  slot.className = `photo-slot ${index === 0 ? "tall" : index === 3 ? "wide" : ""}`;
  slot.innerHTML = `<img src="${url}" alt="A happy memory of Kushi" /><figcaption>${["the star of the story", "a favourite smile", "birthday sparkle", "a moment to replay", "pure happiness", "made of magic"][index] || "a beautiful memory"}</figcaption>`;
  grid.append(slot);
}

function renderPhotos(urls) {
  if (!grid || !urls?.length) return;
  grid.innerHTML = "";
  urls.slice(0, 6).forEach(addPhoto);
}

if (grid) {
  try {
    const savedPhotos = JSON.parse(localStorage.getItem(storageKey));
    if (savedPhotos?.length) {
      renderPhotos(savedPhotos);
    } else {
      Promise.all(bundledPhotos.map((url) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(url);
        image.onerror = () => resolve(null);
        image.src = url;
      }))).then((urls) => renderPhotos(urls.filter(Boolean)));
    }
  } catch { localStorage.removeItem(storageKey); }
}

if (photoInput) {
  photoInput.addEventListener("change", async (event) => {
    const files = [...event.target.files].slice(0, 6);
    const urls = await Promise.all(files.map((file) => new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    })));
    try { localStorage.setItem(storageKey, JSON.stringify(urls)); renderPhotos(urls); }
    catch { alert("Those images are a little too large for the browser. Please choose smaller photos."); }
  });
}

$("#clearPhotos")?.addEventListener("click", () => { localStorage.removeItem(storageKey); location.reload(); });

function burstConfetti() {
  const holder = $("#confetti");
  if (!holder) return;
  holder.innerHTML = "";
  const colors = ["#ffd45a", "#f7528b", "#71cfe6", "#fff6e5", "#ff9e55"];
  for (let i = 0; i < 110; i += 1) {
    const bit = document.createElement("i");
    bit.className = "confetti-piece";
    bit.style.left = `${Math.random() * 100}vw`;
    bit.style.background = colors[i % colors.length];
    bit.style.setProperty("--drift", `${(Math.random() - .5) * 280}px`);
    bit.style.animationDuration = `${2.6 + Math.random() * 2.7}s`;
    bit.style.animationDelay = `${Math.random() * .6}s`;
    holder.append(bit);
  }
  setTimeout(() => { holder.innerHTML = ""; }, 6000);
}

$("#celebrate")?.addEventListener("click", burstConfetti);
if ($(".finale-page")) setTimeout(burstConfetti, 250);

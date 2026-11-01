const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

function closeNavigation() {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  navLinks?.classList.remove("open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navLinks?.classList.toggle("open", !isOpen);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const year = document.querySelector("#year");
const currentYear = String(new Date().getFullYear());
if (year) {
  year.textContent = currentYear;
  year.setAttribute("datetime", currentYear);
}
const profileImage = document.querySelector("[data-profile-photo]");
if (profileImage?.dataset.profilePhoto) {
  const portrait = new Image();
  portrait.addEventListener("load", () => {
    profileImage.src = portrait.src;
    profileImage.hidden = false;
    profileImage.previousElementSibling.hidden = true;
  });
  portrait.src = profileImage.dataset.profilePhoto;
}

const photoDialog = document.querySelector(".photo-dialog");
const dialogImage = photoDialog?.querySelector("img");
const dialogCaption = photoDialog?.querySelector("p");
const photoGallery = document.querySelector("#photoGallery");

const galleryItems = [
  { src: "photos/WhatsApp Image 2026-11-01 at 8.03.07 PM (1).jpeg", category: "Electrical systems", title: "Electrical control equipment", alt: "Electrical control equipment inside a service cabinet" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.03.07 PM (2).jpeg", category: "Networking", title: "Structured network cabinet", alt: "Organized network rack with patch panels and yellow cables" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.03.07 PM.jpeg", category: "Electrical systems", title: "Power control installation", alt: "Power control unit mounted inside an electrical enclosure" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.03.08 PM (1).jpeg", category: "Networking", title: "Network storage equipment", alt: "Network attached storage and connected equipment" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.03.08 PM.jpeg", category: "On site", title: "Evans on site", alt: "Evans Ngoko wearing work safety gear at a technical work site" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.07.20 PM (1).jpeg", category: "Electrical systems", title: "Electrical installation enclosure", alt: "Electrical cabinets and installation work in a service room" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.07.20 PM.jpeg", category: "Electrical systems", title: "Power distribution cabinet", alt: "Industrial electrical cabinet with control switches" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.23 PM.jpeg", category: "Electrical systems", title: "Electrical distribution board", alt: "Electrical distribution board with labeled wiring" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.24 PM.jpeg", category: "Electrical systems", title: "Circuit breaker panel", alt: "Open circuit breaker panel with color-coded wiring" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.25 PM (1).jpeg", category: "Electrical systems", title: "Power system cabinet", alt: "Power system components inside a distribution enclosure" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.25 PM.jpeg", category: "Networking", title: "Structured cabling", alt: "Network patch panel with neatly routed data cables" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.26 PM.jpeg", category: "Networking", title: "Network rack installation", alt: "Installed network rack and connected equipment" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.27 PM (1).jpeg", category: "Security systems", title: "Access control equipment", alt: "Biometric access control reader installed beside a door" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.27 PM (2).jpeg", category: "Solar and CCTV", title: "Solar-powered surveillance", alt: "Solar panel and CCTV camera mounted together" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.27 PM.jpeg", category: "Security systems", title: "CCTV camera equipment", alt: "Outdoor CCTV camera prepared for installation" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.28 PM.jpeg", category: "Access control", title: "Turnstile installation", alt: "Pedestrian access control turnstile in a blue entry area" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.29 PM (1).jpeg", category: "Security systems", title: "Exterior CCTV installation", alt: "Security camera mounted above an exterior entrance" },
  { src: "photos/WhatsApp Image 2026-11-01 at 8.13.29 PM.jpeg", category: "Access control", title: "Door security controls", alt: "Emergency door release and access control devices" },
];

function createPhotoCard(item, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  const art = document.createElement("div");
  art.className = "project-art";
  const trigger = document.createElement("button");
  trigger.className = "photo-trigger";
  trigger.type = "button";
  trigger.setAttribute("aria-label", `View photo: ${item.title}`);
  const image = new Image();
  image.src = item.src;
  image.alt = item.alt;
  image.loading = index < 3 ? "eager" : "lazy";
  trigger.append(image);
  const tag = document.createElement("span");
  tag.className = "photo-overlay-tag";
  tag.textContent = item.category;
  art.append(trigger, tag);
  const caption = document.createElement("div");
  caption.className = "project-caption";
  const text = document.createElement("div");
  const category = document.createElement("small");
  category.textContent = item.category.toUpperCase();
  const title = document.createElement("h3");
  title.textContent = item.title;
  text.append(category, title);
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  caption.append(text, arrow);
  card.append(art, caption);
  return card;
}

galleryItems.forEach((item, index) => photoGallery?.append(createPhotoCard(item, index)));

const videoCard = document.createElement("article");
videoCard.className = "project-card";
const videoArt = document.createElement("div");
videoArt.className = "project-art";
const galleryVideo = document.createElement("video");
galleryVideo.className = "gallery-video";
galleryVideo.src = "photos/WhatsApp Video 2026-11-01 at 8.07.21 PM.mp4";
galleryVideo.poster = "photos/WhatsApp Image 2026-11-01 at 8.13.27 PM (2).jpeg";
galleryVideo.controls = true;
galleryVideo.preload = "metadata";
galleryVideo.playsInline = true;
galleryVideo.setAttribute("aria-label", "On-site installation video");
const videoFallback = document.createElement("a");
videoFallback.className = "video-fallback";
videoFallback.href = galleryVideo.src;
videoFallback.download = "Evans-Ngoko-installation-video.mp4";
videoFallback.textContent = "Download video";
galleryVideo.addEventListener("error", () => videoCard.classList.add("video-unavailable"), { once: true });
videoArt.append(galleryVideo, videoFallback);
const videoTag = document.createElement("span");
videoTag.className = "photo-overlay-tag";
videoTag.textContent = "FIELD VIDEO";
videoArt.append(videoTag);
const videoCaption = document.createElement("div");
videoCaption.className = "project-caption";
const videoText = document.createElement("div");
const videoCategory = document.createElement("small");
videoCategory.textContent = "ON-SITE WORK";
const videoTitle = document.createElement("h3");
videoTitle.textContent = "Installation footage";
videoText.append(videoCategory, videoTitle);
const videoArrow = document.createElement("span");
videoArrow.setAttribute("aria-hidden", "true");
videoArrow.textContent = "▶";
videoCaption.append(videoText, videoArrow);
videoCard.append(videoArt, videoCaption);
photoGallery?.append(videoCard);

document.querySelectorAll(".photo-trigger").forEach((trigger) => {
  const sourceImage = trigger.querySelector("img");
  sourceImage?.addEventListener("error", () => trigger.classList.add("is-unavailable"));
  trigger.addEventListener("click", () => {
    if (!photoDialog || !dialogImage || !sourceImage) return;
    dialogImage.src = sourceImage.currentSrc || sourceImage.src;
    dialogImage.alt = sourceImage.alt;
    if (dialogCaption) dialogCaption.textContent = trigger.closest(".project-card")?.querySelector("h3")?.textContent ?? "Portfolio photo";
    photoDialog.showModal();
  });
});

photoDialog?.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
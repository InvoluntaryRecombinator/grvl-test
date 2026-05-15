// --- DIORAMA TOGGLE LOGIC ---
const toggleBtn = document.getElementById('toggle-btn');
const toggleSlider = document.getElementById('toggle-slider');
const labelBefore = document.getElementById('label-before');
const labelAfter = document.getElementById('label-after');

const card = document.getElementById('diorama-card');
const frontImage = document.getElementById('front-image');
const statusText = document.getElementById('toggle-status');

let currentRotation = 0;
let showingFirstImage = true;
let isAnimating = false;

function handleDioramaToggle() {
    if (isAnimating) return; 
    isAnimating = true;

    currentRotation -= 360;
    card.style.transform = `rotateX(${currentRotation}deg)`;
    
    statusText.style.opacity = '0';
    
    if (showingFirstImage) {
        toggleSlider.style.transform = 'translateX(100%)';
        labelBefore.classList.remove('text-white');
        labelBefore.classList.add('text-stone-500');
        labelAfter.classList.remove('text-stone-500');
        labelAfter.classList.add('text-white');
        toggleBtn.setAttribute('aria-checked', 'true');
    } else {
        toggleSlider.style.transform = 'translateX(0)';
        labelBefore.classList.remove('text-stone-500');
        labelBefore.classList.add('text-white');
        labelAfter.classList.remove('text-white');
        labelAfter.classList.add('text-stone-500');
        toggleBtn.setAttribute('aria-checked', 'false');
    }

    setTimeout(() => {
        if (showingFirstImage) {
            frontImage.src = 'assets/diorama-2.jpeg'; 
            statusText.innerHTML = '<span class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-stone-400">GRVL keeps your model\'s intelligence <span class="italic font-serif text-white">solid.</span></span>';
        } else {
            frontImage.src = 'assets/diorama-1.jpeg'; 
            statusText.innerHTML = '<span class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-stone-400">Native voice mode can make your AI seem dumber than a <span class="italic text-white font-serif">box of rocks.</span></span>';
        }
        statusText.style.opacity = '1';
        showingFirstImage = !showingFirstImage;
    }, 400);

    setTimeout(() => { isAnimating = false; }, 800); 
}

toggleBtn.addEventListener('click', handleDioramaToggle);
toggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleDioramaToggle();
    }
});


// --- DEMO VIDEO DROPDOWN LOGIC ---
function toggleVideo() {
    const container = document.getElementById('video-container');
    const btn = document.getElementById('demo-btn');
    const video = document.getElementById('grvlVideo'); // Grab the video
    
    if (container.style.maxHeight) {
        // Closing the accordion
        container.style.maxHeight = null;
        container.style.opacity = '0';
        btn.innerHTML = 'Watch the Demo';
        btn.setAttribute('aria-expanded', 'false');
        if (video) video.pause(); // Auto-pause so it doesn't keep playing in the background
    } else {
        // Opening the accordion
        container.style.maxHeight = "1200px"; // Gave it a bit more room just in case
        container.style.opacity = '1';
        btn.innerHTML = 'Close Demo';
        btn.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (video) video.play(); // Auto-play the video as soon as it scrolls into view
        }, 300);
    }
}


// --- THROTTLE DROPDOWN LOGIC ---
function toggleThrottle() {
    const container = document.getElementById('throttle-container');
    const btn = document.getElementById('throttle-btn');
    
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
        container.style.opacity = '0';
        btn.innerHTML = 'See Model Throttling';
        btn.setAttribute('aria-expanded', 'false');
    } else {
        container.style.maxHeight = "1200px";
        container.style.opacity = '1';
        btn.innerHTML = 'Close Example';
        btn.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}


// --- THROTTLE IMAGE TOGGLE LOGIC ---
const compToggleBtn = document.getElementById('comp-toggle-btn');
const compToggleSlider = document.getElementById('comp-toggle-slider');
const compLabelBefore = document.getElementById('comp-label-before');
const compLabelAfter = document.getElementById('comp-label-after');
const compImgNative = document.getElementById('comp-img-native');
const compImgGrvl = document.getElementById('comp-img-grvl');

let compShowingNative = true;
let compIsAnimating = false;

function handleCompToggle() {
    if (compIsAnimating) return; 
    compIsAnimating = true;

    if (compShowingNative) {
        compToggleSlider.style.transform = 'translateX(100%)';
        compLabelBefore.classList.remove('text-white');
        compLabelBefore.classList.add('text-stone-500');
        compLabelAfter.classList.remove('text-stone-500');
        compLabelAfter.classList.add('text-white');
        compToggleBtn.setAttribute('aria-checked', 'true');
        
        compImgNative.style.opacity = '0';
        compImgGrvl.style.opacity = '1';
    } else {
        compToggleSlider.style.transform = 'translateX(0)';
        compLabelBefore.classList.remove('text-stone-500');
        compLabelBefore.classList.add('text-white');
        compLabelAfter.classList.remove('text-white');
        compLabelAfter.classList.add('text-stone-500');
        compToggleBtn.setAttribute('aria-checked', 'false');

        compImgNative.style.opacity = '1';
        compImgGrvl.style.opacity = '0';
    }

    compShowingNative = !compShowingNative;
    setTimeout(() => { compIsAnimating = false; }, 500); 
}

compToggleBtn.addEventListener('click', handleCompToggle);
compToggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCompToggle();
    }
});
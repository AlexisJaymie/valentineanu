let musicStarted = false;

const herName = "My Love"; // ← change this to her name -also made a git

const loveNotes = [
  `Hi ${herName}, every day with you feels like a gift.`,
  `I love the way you make ordinary moments special.`,
  `You are my peace, my joy, and my favorite person.`,
  `Being with you feels like home.`,
  `I’m so grateful I get to love you.`
];

let noteIndex = 0;

function nextScreen(id) {
  document.querySelectorAll('.container').forEach(c => {
    c.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  // start music on first interaction
  if (!musicStarted) {
    document.getElementById('bgMusic').play();
    musicStarted = true;
  }

  if (id === 'notes') {
    document.getElementById('loveText').innerText = loveNotes[0];
  }
}


function nextNote() {
  noteIndex++;
  if (noteIndex < loveNotes.length) {
    document.getElementById('loveText').innerText = loveNotes[noteIndex];
  } else {
    nextScreen('gallery');
  }
}

function confetti() {
  document.getElementById('overlay').classList.add('show');
  createHearts();
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🤍🤍🤍';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}

function openViewer(imgSrc, text) {
  document.getElementById('viewerImg').src = imgSrc;
  document.getElementById('viewerText').innerText = text;
  document.getElementById('photoViewer').classList.add('show');
}

function closeViewer() {
  document.getElementById('photoViewer').classList.remove('show');
}
const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = valentineDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerText = "Happy Valentine’s Day ❤️";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function shareLove() {
  const text = "I just received the sweetest Valentine app 💖";
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "My Valentine 💕",
      text: text,
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied 💖");
  }
}


// setInterval(() => {
//   const heart = document.createElement("div");
//   heart.className = "bg-heart";
//   heart.innerText = "💖";
//   heart.style.left = Math.random() * 100 + "vw";
//   document.body.appendChild(heart);

//   setTimeout(() => heart.remove(), 10000);
// }, 1200);


function nextScreen(id) {
  document.querySelectorAll('.container').forEach(c => {
    c.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(id);
  targetScreen.classList.add('active');

  // START MUSIC
  if (!musicStarted) {
    document.getElementById('bgMusic').play();
    musicStarted = true;
  }

  // LOGIC FOR FALLING TILES
  if (id === 'gallery') {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
      // Set a random rotation so they look like scattered Polaroids
      const randomRotation = (Math.random() * 10 - 5) + 'deg';
      photo.style.setProperty('--rand-rot', randomRotation);
      
      // Delay each photo slightly for the "staggered" waterfall effect
      setTimeout(() => {
        photo.classList.add('fall-down');
      }, index * 400); // 400ms gap between photos
    });
  }

  if (id === 'notes') {
    document.getElementById('loveText').innerText = loveNotes[0];
  }
}

function createHearts() {
  // Use a variety to make it look rich
  const heartTypes = ['❤️', '💖', '🤍', '✨'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Pick ONE random emoji
    heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // Randomize position across the full width
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Randomize size slightly for depth
    const size = Math.random() * (30 - 15) + 15;
    heart.style.fontSize = size + 'px';
    
    document.body.appendChild(heart);

    // Clean up to keep the app fast
    setTimeout(() => heart.remove(), 4000);
  }, 300); // Adjust this number to make it more or less "crowded"
}

function confetti() {
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]); // Short heartbeat vibration
  }
  document.getElementById('overlay').classList.add('show');
  createHearts();
}










































// function nextScreen(id) {
//   document.querySelectorAll('.container').forEach(c => {
//     c.classList.remove('active');
//   });
//   document.getElementById(id).classList.add('active');
// }

// function confetti() {
//   document.getElementById('overlay').classList.add('show');
//   createHearts();
// }

// function createHearts() {
//   setInterval(() => {
//     const heart = document.createElement('div');
//     heart.classList.add('heart');
//     heart.innerHTML = '🤍🤍🤍';
//     heart.style.left = Math.random() * 100 + 'vw';
//     document.body.appendChild(heart);

//     setTimeout(() => {
//       heart.remove();
//     }, 4000);
//   }, 300);
// }













































// // function nextScreen(id) {
// //   document.querySelectorAll('.container').forEach(c => {
// //     c.classList.remove('active');
// //   });
// //   document.getElementById(id).classList.add('active');
// // }

// // // Lightweight confetti implementation using the canvas added in index.html
// // const confettiCanvas = document.getElementById('confetti-canvas');
// // const confettiCtx = confettiCanvas && confettiCanvas.getContext ? confettiCanvas.getContext('2d') : null;
// // let confettiParticles = [];
// // let confettiAnimId = null;

// // function resizeCanvas() {
// //   if (!confettiCanvas) return;
// //   confettiCanvas.width = window.innerWidth;
// //   confettiCanvas.height = window.innerHeight;
// // }

// // window.addEventListener('resize', resizeCanvas);
// // resizeCanvas();

// // function random(min, max) {
// //   return Math.random() * (max - min) + min;
// // }

// // function createParticle() {
// //   const colors = ['#ff6b9a', '#ffb3c6', '#fff176', '#ff8a65', '#ea80fc'];
// //   return {
// //     x: random(0, confettiCanvas.width),
// //     y: random(-confettiCanvas.height * 0.2, 0),
// //     w: random(6, 12),
// //     h: random(8, 16),
// //     color: colors[Math.floor(random(0, colors.length))],
// //     rotation: random(0, Math.PI * 2),
// //     speedX: random(-1.5, 1.5),
// //     speedY: random(2, 5),
// //     spin: random(-0.1, 0.1),
// //     opacity: 1,
// //     decay: random(0.004, 0.01)
// //   };
// // }

// // function spawnConfetti(count = 120) {
// //   confettiParticles = [];
// //   for (let i = 0; i < count; i++) confettiParticles.push(createParticle());
// // }

// // function draw() {
// //   if (!confettiCtx) return;
// //   confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

// //   confettiParticles.forEach((p) => {
// //     confettiCtx.save();
// //     confettiCtx.globalAlpha = Math.max(0, p.opacity);
// //     confettiCtx.translate(p.x, p.y);
// //     confettiCtx.rotate(p.rotation);
// //     confettiCtx.fillStyle = p.color;
// //     confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
// //     confettiCtx.restore();
// //   });
// // }

// // function update() {
// //   confettiParticles.forEach((p) => {
// //     p.x += p.speedX;
// //     p.y += p.speedY;
// //     p.rotation += p.spin;
// //     p.speedY += 0.03; // gravity
// //     p.opacity -= p.decay;
// //   });
// //   confettiParticles = confettiParticles.filter(p => p.opacity > 0 && p.y < confettiCanvas.height + 50);
// // }

// // function animate() {
// //   draw();
// //   update();
// //   if (confettiParticles.length > 0) {
// //     confettiAnimId = requestAnimationFrame(animate);
// //   } else {
// //     cancelAnimationFrame(confettiAnimId);
// //     confettiAnimId = null;
// //     confettiCtx && confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
// //   }
// // }

// // function confetti() {
// //   if (!confettiCanvas || !confettiCtx) {
// //     alert("💖 Happy Valentine’s Day 💖\nYou mean everything to me.");
// //     return;
// //   }

// //   // If an animation is running, spawn a fresh burst
// //   spawnConfetti(140);
// //   if (!confettiAnimId) animate();
// // }

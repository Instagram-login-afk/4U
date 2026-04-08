// Fade in effect on notes
window.addEventListener('DOMContentLoaded', () => {
    const notes = document.querySelectorAll('.rect-note, .square-note, .dream-box');
    notes.forEach((note, i) => {
        setTimeout(() => {
            note.classList.add('fade-in');
        }, 200 * i); // Staggered
    });
});
heart.style.transform = `translateX(${Math.random() * 40 - 20}px)`; // slight left/right
document.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = (12 + Math.random() * 10) + 'px';
    sparkle.style.opacity = 1;
    sparkle.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    sparkle.style.transform = `translateY(0px) rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.opacity = 0;
        sparkle.style.transform = 'translateY(-20px)';
    }, 10);

    setTimeout(() => sparkle.remove(), 800);
});
const pop = new Audio('pop.mp3');
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        pop.play();
    });
});
const emojis = ['❤️', '🌸', '🧸', '💫', '💖', '🐻'];
heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

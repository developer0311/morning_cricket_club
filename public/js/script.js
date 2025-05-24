const heartbeatSound = new Audio("public/audio/load_sound.m4a");

// Optional: preload the audio to reduce delay on first play
heartbeatSound.preload = "auto";

let sound_buttons = document.querySelectorAll(".sound-button");

sound_buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        heartbeatSound.pause();           // Stop if it's already playing
        heartbeatSound.currentTime = 0;   // Rewind to start
        heartbeatSound.play().catch(e => {
            console.warn("Audio playback failed:", e.message);
        });
    });
});

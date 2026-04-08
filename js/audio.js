class SoundManager {
    constructor() {
        this.deleteSound = null;
        this.successSound = null;
        this.initSounds();
    }

    initSounds() {
        this.deleteSound = new Audio('./assets/audio/aray-mo-pakak.mp3');
        this.deleteSound.volume = 0.5;

        this.successSound = new Audio('./assets/audio/success.mp3');
        this.successSound.volume = 0.5;
    }

    playDeleteSound() {
        try {
            const sound = this.deleteSound.cloneNode();
            sound.play().catch(error => {
                console.log('Delete sound play failed:', error);
            });
        } catch (error) {
            console.log('Error playing delete sound:', error);
        }
    }

    playSuccessSound() {
        try {
            const sound = this.successSound.cloneNode();
            sound.play().catch(error => {
                console.log('Success sound play failed:', error);
            });
        } catch (error) {
            console.log('Error playing success sound:', error);
        }
    }
    preloadSounds() {
        this.deleteSound.load();
        this.successSound.load();
    }
}

const soundManager = new SoundManager();

window.addEventListener('load', () => {
    soundManager.preloadSounds();
});
if (typeof module !== 'undefined' && module.exports) {
    module.exports = soundManager;
}
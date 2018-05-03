class Video {
	constructor(video) {
        this.videoContainer = video;
        this.video = this.videoContainer.querySelector('.js-video-video');
        this.playButton = this.videoContainer.querySelector('.js-video-play-button');
        this.pauseButton = this.videoContainer.querySelector('.js-video-pause-button');

        this.prefersReducedMotion();
		this.addEventListeners();
	}

    prefersReducedMotion() {
        // If the users browser supports reduced motion and the user has set it to true, remove the autoplay attribute from the video and pause it
        if(matchMedia('(prefers-reduced-motion)').matches) {
            this.video.removeAttribute('autoplay');
            this.pauseVideo();
        }
    }

    addEventListeners() {
        this.playButton.addEventListener('click', () => {
            this.playVideo();
            // Focus the pause button so keyboard users can immediately pause the video without having to tab away and back again
            this.pauseButton.focus();
        });

        this.pauseButton.addEventListener('click', () => {
            this.pauseVideo();
            // Focus the play button so keyboard users can immediately play the video without having to tab away and back again
            this.playButton.focus();
        });
    }

    playVideo() {
        this.video.play();
        // Set the play button as pressed so it's hidden and the pause button is displayed instead
        this.playButton.setAttribute('aria-pressed', 'true');
        this.pauseButton.setAttribute('aria-pressed', 'false');
    }

    pauseVideo() {
        this.video.pause();
        // Set the pause button as pressed so it's hidden and the play button is displayed instead
        this.playButton.setAttribute('aria-pressed', 'false');
        this.pauseButton.setAttribute('aria-pressed', 'true');
    }
}

export default Video;
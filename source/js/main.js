import Video from './molecules/video';

// Check if the users browser supports these features
const enhance = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.documentElement;

// If the users browser browser supports the features we need, remove the no-enhance class from the html element and execute our video JS
if(enhance) {
    document.documentElement.classList.remove('no-enhance');

    // Find all video molecules and create a new instance of the Video
    const videos = document.querySelectorAll('.js-video');
    Array.from(videos).forEach((video) => {
        const videoEl = new Video(video);
    });
}

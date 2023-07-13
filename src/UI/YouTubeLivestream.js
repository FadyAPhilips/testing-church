import React, { useEffect } from 'react';
import './youTubeLivestream.css';

const YouTubeLivestream = ({ channelId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-player', {
                height: '360',
                width: '640',
                videoId: '',
                playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    controls: 0,
                },
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        const onPlayerReady = (event) => {
            event.target.loadPlaylist({
                listType: 'live',
                list: channelId,
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [channelId]);

    return (
        <div className="youtube-livestream">
            <div id="youtube-player" />
        </div>
    );
};

export default YouTubeLivestream;
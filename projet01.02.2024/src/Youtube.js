import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YoutubeComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchYoutubeData = async () => {

        const API_KEY = 'apikey';
        const CHANNEL_ID = 'UC5H7jK_2reQHA1XxoNi7DDw';

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
        );

        setVideos(response.data.items);
    };

    fetchYoutubeData();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2>Vidéos Renault Sport UK</h2>
      <ul className="list-unstyled">
        {videos.map(video => (
          <li key={video.id.videoId} className="mb-4">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-2">{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeComponent;

import React from 'react';

type Video = {
  id: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  thumbnailUrl: string;
};

const Videos: React.FC<{ videos: Video[] }> = ({ videos = [] }) => {
  return (
    <>
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnailUrl} alt={video.title} />
          <div className="card-text">
            <div className="card">
              <h3>{video.title}</h3>
              <h4>{video.subtitle}</h4>
              <div className="hashtag">
                {video.hashtags.map((hashtag, index) => (
                  <span key={index}>#{hashtag} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Videos;

import React from "react";
import Thumbimage from "../app/public/images/image.png";
import Tseries from "../app/public/images/Tseries.jpg";
import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
  {
    vidoeTitle: "Jawan: Movie Song[Hindi] | Shahrukh Khan",
    videoViews: "45Mn",
    videoAuthor: "T-Series official",
    videoTimeStamp: "13 days ago",
    videoThumbImage: Thumbimage,
    videAuthorImage: Tseries,
  },
];
function VideoGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => (
          <VideoCard
            vidoeTitle={video.vidoeTitle}
            videoViews={video.videoViews}
            videoAuthor={video.videoAuthor}
            videoTimeStamp={video.videoTimeStamp}
            videoThumbImage={video.videoThumbImage}
            videAuthorImage={video.videAuthorImage}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;

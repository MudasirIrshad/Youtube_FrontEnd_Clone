import Image from "next/image";
import React from "react";

interface VideoCardProps {
  vidoeTitle: string;
  videoAuthor: string;
  videoViews: string;
  videoTimeStamp: string;
  videoThumbImage: any;
  videAuthorImage: any;
}
function VideoCard({
  vidoeTitle,
  videoAuthor,
  videoViews,
  videoTimeStamp,
  videoThumbImage,
  videAuthorImage,
}: VideoCardProps) {
  return (
    <div className="p-3">
      <Image
        className="rounded-xl hover:cursor-pointer"
        src={videoThumbImage}
        alt="YTV"
        width={500}
        height={500}
      />
      <div className="grid grid-cols-12 p-2">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src={videAuthorImage}
            alt="YTV"
            width={60}
            height={60}
          />
        </div>
        <div className="col-span-11 ml-1">
          <div>{vidoeTitle}</div>
          <div className="col-span-11 text-sm text-gray-400">{videoAuthor}</div>
          <div className="text-gray-400 col-span-11 text-sm">
            {videoViews} | {videoTimeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

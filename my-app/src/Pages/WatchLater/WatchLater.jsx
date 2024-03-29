import React from 'react';
import vid from '../../Components/Video/vid.mp4'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';
function WatchLater() {


  const watchLaterList = useSelector(state => state.watchLaterReducer);
  console.log(watchLaterList)

  const WatchLater =[
    {
    _id:1,
    video_src : vid,
    chanel:"cdd",
    title:"Video1",
    Uploader:"abc",
    description:"description of the video"
    },
    {
      _id:2,
      video_src : vid,
      chanel:"cdd",
      title:"Video2",
      Uploader:"abc",
      description:"description of the video"
      },
      {
        _id:3,
        video_src : vid,
        chanel:"add",
        title:"Video3",
        Uploader:"abc",
        description:"description of the video"
        },
        {
          _id:4,
          video_src : vid,
          chanel:"add",
          title:"Video3",
          Uploader:"abc",
          description:"description of the video"
          }
     ];
  return (
    <WHL page={"Watch Later"} videoList={watchLaterList}/>
  )
}  

export default WatchLater
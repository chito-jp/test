const ytdl = require("@distube/ytdl-core");

ytdl.getBasicInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ").then(info => {
  console.log(info.videoDetails.title);
  return info;
});

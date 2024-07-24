import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";

export const createAudioFromVideo = (input, output) =>
  new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegStatic);
    ffmpeg()
      .input(input)
      .outputOptions("-ab", "20k")
      .saveToFile(output)
      .on("end", () => {
        resolve();
      })
      .on("error", (error) => {
        console.error(error);
        reject();
      });
  });

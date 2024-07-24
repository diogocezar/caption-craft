import { createAudioFromVideo } from "./create-audio-from-video.js";
import { generatePrompt } from "./generate-prompt.js";
import { logger } from "./logs.js";
import { transcribeAudio } from "./transcribe-audio.js";
import clipboardy from "clipboardy";

const main = async () => {
  let start = performance.now();
  logger("Starting transcript videos");
  try {
    const inputFile = "./data/video.mov";
    const outputFile = "./data/audio.wav";

    logger(`Input file => ${inputFile}`);
    logger(`Output file => ${outputFile}`);

    logger(`Creating audio from movie file`);

    await createAudioFromVideo(inputFile, outputFile);

    logger(`Creating transcript text`);
    const data = await transcribeAudio(outputFile);

    logger(`Output data: ${JSON.stringify(data)}`);

    const prompt = generatePrompt(data);
    logger(`Prompt: ${prompt}`);

    await clipboardy.write(prompt);
    logger(`Prompt was copied to clipboard.`);
  } catch (error) {
    console.log(error);
  } finally {
    let end = performance.now();
    logger(`Execution duration: ${(end - start) / 1000} seconds`);
  }
};

main();

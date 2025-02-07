import { pipeline } from "@xenova/transformers";
import wavefile from "wavefile";
import { promises as fsp } from "fs";
import fs from "fs";
import { logger } from "./logs.js";

export const transcribeAudio = async (input) => {
  try {
    if (!fs.existsSync(input)) throw new Error("Input file do not exists.");
    const file = await fsp.readFile(input);
    let buffer = Buffer.from(file);
    let wav = new wavefile.WaveFile(buffer);
    wav.toBitDepth("32f");
    wav.toSampleRate(16000);
    let audioData = wav.getSamples();
    if (Array.isArray(audioData)) {
      if (audioData.length > 1) {
        const SCALING_FACTOR = Math.sqrt(2);
        for (let i = 0; i < audioData[0].length; ++i) {
          audioData[0][i] =
            (SCALING_FACTOR * (audioData[0][i] + audioData[1][i])) / 2;
        }
      }
      audioData = audioData[0];
    }
    const options = {
      chunk_length_s: 16,
      stride_length_s: 4,
      language: "portuguese",
      task: "transcribe",
      return_timestamps: true,
    };
    let transcriber = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small",
    );
    const result = await transcriber(audioData, options);
    return result;
  } catch (error) {
    logger(error);
  }
};

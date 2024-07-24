import { createAudioFromVideo } from "./create-audio-from-video.js";
import { fileExists, generateFileName, saveFile } from "./file.js";
import { generatePrompt } from "./generate-prompt.js";
import { generateText } from "./ollama.js";
import { getArg } from "./get-arg.js";
import { logger } from "./logs.js";
import { hasAutoEditor, execAutoEditor } from "./auto-editor.js";
import { transcribeAudio } from "./transcribe-audio.js";
import clipboardy from "clipboardy";
import { removeExt } from "./util.js";

const main = async () => {
  let start = performance.now();
  try {
    logger.pipe(`Lets Rock! 🤘`);

    logger.pipe(`Getting file from argument`);
    let input = getArg();
    let output = removeExt(input) + ".wav";

    logger.pipe(`Checking file`);
    if (!fileExists(input))
      throw new Error(`Cannot find the file passed as param ${input}.`);

    logger.pipe(`Checking if have 'auto-editor' installed`);
    const hasAutoEditorInstalled = hasAutoEditor();
    if (!hasAutoEditorInstalled) {
      logger.error(
        `Cannot find 'auto-editor' installed. We will skip the file split.`,
      );
    } else {
      logger.pipe(`Trim empty spaces on video using 'auto-editor'`);
      await execAutoEditor(input);
      input = `${removeExt(input)}_ALTERED.mov`;
      logger.pipe(`New file generated with name '${input}'`);
    }

    logger.pipe(`Creating audio from movie file`);
    await createAudioFromVideo(input, output);
    logger.pipe(`Audio was created successfully and saved as '${output}'`);

    logger.pipe(`Creating transcript text`);
    const transcribedAudio = await transcribeAudio(output);

    logger.pipe(`Saving transcription file`);
    const transcribedAudioFile = generateFileName(
      "./result/transcribed",
      "txt",
    );
    saveFile(transcribedAudio.text, transcribedAudioFile);
    logger.pipe(
      `Transcription file was created successfully and saved as '${transcribedAudioFile}'`,
    );

    logger.pipe(`Generating prompt`);
    const prompt = generatePrompt(transcribedAudio);

    logger.pipe(`Saving prompt file`);
    const promptFile = generateFileName("./result/prompt", "md");
    saveFile(prompt, promptFile);
    logger.pipe(
      `Prompt file was created successfully and saved as '${promptFile}'`,
    );

    logger.pipe(`Generating legends using Ollama`);
    const result = await generateText(prompt);

    logger.pipe(`Saving result file`);
    const resultFile = generateFileName("./result/result", "md");
    saveFile(result, resultFile);
    logger.pipe(
      `Result file was created successfully and saved as '${resultFile}'`,
    );

    await clipboardy.write(result);
    logger.pipe(`Generated text was copied to clipboard.`);
  } catch (error) {
    logger.error(error);
  } finally {
    let end = performance.now();
    logger.pipe(`Finishing execution.`);
    logger.pipe(
      `Execution duration: ${((end - start) / 1000).toFixed(2)} seconds`,
    );
  }
};

main();

import { logger } from "./logs.js";
import { getArg } from "./get-arg.js";
import { getFiles, directoryExists } from "./file.js";
import { main } from "./main.js";

const index = async () => {
  let start = performance.now();
  try {
    logger.pipe(`Lets Rock! 🤘`);
    logger.pipe(`Getting directory with videos`);
    let directory = getArg();

    if (!directoryExists(directory))
      throw new Error(
        `Cannot find the directory passed as param '${directory}'.`,
      );

    const files = getFiles(directory);

    if (files.length === 0)
      throw new Error(
        `Cannot find the files at directory passed as param '${directory}'.`,
      );

    for (const file of files) {
      await main(directory, file);
    }
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

index();

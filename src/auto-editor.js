import * as util from "util";
import { exec } from "child_process";
import commandExists from "command-exists";

const execSync = util.promisify(exec);
const commandExistsSync = commandExists.sync;

export const execAutoEditor = async (input) => {
  await execSync(`auto-editor ${input}`);
};

export const hasAutoEditor = () => {
  if (commandExistsSync("auto-editor")) return true;
  return false;
};

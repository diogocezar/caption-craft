import chalk from "chalk";

export const logger = {
  pipe: (msg) => {
    console.log(chalk.yellow(`🍿 ${msg}`));
  },
  log: (msg) => {
    console.log(chalk.yellow(`🤖 ${msg}`));
  },
  error: (msg) => {
    console.log(chalk.red(`💀 ${msg}`));
  },
};

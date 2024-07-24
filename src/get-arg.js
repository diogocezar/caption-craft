export const getArg = () => {
  const file = process.argv[2];
  if (!file)
    throw new Error(
      "You need to provide a directory with files of type '.mov' to be transcripted. \n💀 Example: `npm start data`",
    );
  return file;
};

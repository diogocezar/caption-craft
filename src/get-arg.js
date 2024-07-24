export const getArg = () => {
  const file = process.argv[2];
  if (!file)
    throw new Error(
      "You need to provide a file to be transcripted. \n💀 Example: `npm start data/file.mov`",
    );
  return file;
};

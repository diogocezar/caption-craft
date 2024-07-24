import fs from "fs";

export const getFiles = (directory) => {
  const files = [];
  const regex = /\.mov$/i;
  fs.readdirSync(directory).forEach((file) => {
    if (regex.test(file)) {
      files.push(file);
    }
  });
  return files;
};

export const createDirectory = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

export const directoryExists = (directory) => {
  try {
    return fs.statSync(directory).isDirectory();
  } catch (err) {
    return false;
  }
};

export const removeFile = (file) => {
  fs.unlinkSync(file);
};

export const fileExists = (file) => {
  return fs.existsSync(file);
};

export const saveFile = (content, fileName) => {
  fs.writeFileSync(fileName, content);
};

export const generateFileName = (prefix, ext) => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${prefix}_${year}${month}${day}_${hours}${minutes}${seconds}.${ext}`;
};

import fs from "fs";

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

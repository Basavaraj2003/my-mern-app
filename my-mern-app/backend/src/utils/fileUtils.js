const fs = require('fs');
const path = require('path');

exports.saveFile = (folder, filename, content) => {
  const dir = path.resolve(__dirname, '../../', folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, filename);
  fs.writeFileSync(filePath, content);
  return filePath;
};

exports.deleteFile = (folder, filename) => {
  const filePath = path.resolve(__dirname, '../../', folder, filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

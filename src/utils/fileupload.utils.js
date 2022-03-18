const config = require("../../config");

const fileUpload = async (file) => {
  const extension = file.name.split(".")[file.name.split(".").length - 1];
  let uniqNum = Date.now();
  const filename = `${config.dirName}/upload/` + uniqNum + `.${extension}`;
  await file.mv(`${filename}`, async (err) => {
    if (err) {
      throw new HttpException(500, "File Upload failed.");
    }
  });
  return uniqNum + `.${extension}`;
};

module.exports = {
  fileUpload,
};

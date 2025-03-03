// utils/uploadToS3.js
import { s3 } from "./awsConfig.js";

export const uploadToS3 = async (file, folder) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${folder}/${file.originalname}`, // Store images in a folder (e.g., products/seeds/)
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read", // Make the file publicly accessible
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) return reject(err);
      resolve(data.Location); // Returns the public URL of the uploaded file
    });
  });
};

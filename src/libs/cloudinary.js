import cloudinary from 'cloudinary';

const cloud = cloudinary.v2;

cloud.config({
  cloud_name: 'dogcmulpu',
  api_key: '829532235448456',
  api_secret: 'iiO-jozikyXBHUihsub6PR1685s',
});

const UploadFile = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloud.uploader.upload(file, { folder }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export default UploadFile;

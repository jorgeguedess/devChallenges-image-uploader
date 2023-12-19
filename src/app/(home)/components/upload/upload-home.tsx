import { UploadImage } from "./upload-image";

const UploadHome = () => {
  return (
    <>
      <h1 className="text-lg font-medium tracking-[-0.63px] text-primary-gray2">
        Upload your image
      </h1>
      <p className="mb-3 text-xs font-medium tracking-[-0.35px] text-primary-gray3">
        File should be Jpeg, Png,...
      </p>
      <UploadImage />
    </>
  );
};

export default UploadHome;

"use client";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import UploadSvg from "./upload-svg";
import { useImage } from "@/context/contextImage";

export const UploadImage = () => {
  const { setImageUrl, setLoading, setError } = useImage();

  return (
    <>
      <UploadDropzone
        appearance={{
          container: {
            border: "1px dashed #97BEF4;",
            backgroundColor: "#F6F8FB;",
            borderRadius: "0.75rem",
          },
        }}
        content={{
          label: "Drag & Drop your image here",
          uploadIcon: <UploadSvg />,
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(res[0].url);
          setLoading(false);
        }}
        onUploadError={(error: Error) => {
          setError(error.message);
        }}
        onUploadProgress={() => {
          setLoading(true);
        }}
        onUploadBegin={() => {
          setLoading(true);
        }}
      />
      <span className="text-sm font-medium tracking-[-0.42px] text-primary-gray4">
        Or
      </span>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(res[0].url);
          setLoading(false);
        }}
        onUploadError={(error: Error) => {
          setError(error.message);
        }}
        onUploadProgress={() => {
          setLoading(true);
        }}
        onUploadBegin={() => {
          setLoading(true);
        }}
      />
    </>
  );
};

export default UploadImage;

"use client";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import UploadSvg from "./upload-svg";
import { useImage } from "@/context/contextImage";

export const UploadImage = () => {
  const { setImageUrl, setLoading, setError } = useImage();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <UploadDropzone
        className="w-full rounded-xl border border-dashed border-[#97bef4] bg-[#f6f8fb]"
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
        config={{ mode: "auto" }}
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
    </div>
  );
};

export default UploadImage;

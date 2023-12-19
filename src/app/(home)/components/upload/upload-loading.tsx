import LoadingBar from "@/components/loading-bar";

export const UploadLoading = () => {
  return (
    <div className="flex w-full flex-col gap-5 py-5">
      <p className="font-main text-lg font-medium tracking-[-0.63px] text-primary-gray2">
        Uploading...
      </p>
      <LoadingBar />
    </div>
  );
};

export default UploadLoading;

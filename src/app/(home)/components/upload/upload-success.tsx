import Image from "next/image";
import TextDisplay from "../../../../components/text-display";
import CopyButton from "../../../../components/copy-button";
import { IconSuccess } from "@/components/icons";
import ButtonPrev from "@/components/button-prev";

interface UploadSuccessProps {
  imageUrl: string;
}

export const UploadSuccess = ({ imageUrl }: UploadSuccessProps) => {
  return (
    <div className="relative flex w-full flex-shrink-0 flex-col items-center justify-center gap-6">
      <div className="w-full">
        <ButtonPrev />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="h-10 w-10">
          <IconSuccess />
        </div>
        <p className="text-xl font-medium tracking-[-0.63px] text-primary-gray2 sm:text-2xl">
          Uploaded Successfully!
        </p>
      </div>
      <div className="w-full rounded-lg">
        <Image
          src={imageUrl}
          alt="my image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="drag-none max-h-[14rem] w-full select-none rounded-xl"
        />
      </div>
      <div className="flex w-full items-center  gap-3 border border-primary-gray1 bg-[#F6F8FB] font-main">
        <TextDisplay>{imageUrl}</TextDisplay>
        <CopyButton textToCopy={imageUrl} className="max-w-[20rem] flex-1" />
      </div>
    </div>
  );
};

export default UploadSuccess;

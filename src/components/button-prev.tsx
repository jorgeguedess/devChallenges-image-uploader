"use client";

import { useImage } from "@/context/contextImage";
import { IconPrev } from "./icons";

const ButtonPrev = () => {
  const { setImageUrl, setLoading } = useImage();

  const handleClickPrev = () => {
    setImageUrl("");
    setLoading(false);
  };

  return (
    <button className="h-5 w-5 fill-primary-gray4" onClick={handleClickPrev}>
      <IconPrev />
    </button>
  );
};

export default ButtonPrev;

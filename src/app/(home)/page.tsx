"use client";

import { useImage } from "@/context/contextImage";

import {
  UploadImage,
  UploadError,
  UploadLoading,
  UploadSuccess,
} from "./components/upload";

export default function HomePage() {
  const { imageUrl, loading, error } = useImage();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center p-3">
      <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-card p-3 font-main shadow-card sm:px-9 sm:py-8">
        {!error && !loading && !imageUrl.length && <UploadImage />}
        {error && <UploadError error={error} />}
        {loading && <UploadLoading />}
        {!loading && imageUrl.length ? (
          <UploadSuccess imageUrl={imageUrl} />
        ) : null}
      </div>
    </div>
  );
}

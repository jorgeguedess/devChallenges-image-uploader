"use client";

import { useImage } from "@/context/contextImage";

import {
  UploadError,
  UploadLoading,
  UploadSuccess,
  UploadHome,
} from "./components/upload";

export default function HomePage() {
  const { imageUrl, loading, error } = useImage();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center p-1">
      <div className="w-full rounded-xl bg-card p-3 font-main shadow-card sm:px-9 sm:py-8">
        {!error && !loading && !imageUrl.length && <UploadHome />}
        {error && <UploadError error={error} />}
        {loading && <UploadLoading />}
        {!loading && imageUrl.length ? (
          <UploadSuccess imageUrl={imageUrl} />
        ) : null}
      </div>
    </div>
  );
}

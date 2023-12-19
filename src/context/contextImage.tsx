"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ImageContextProps {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const ImageContext = createContext<ImageContextProps | null>(null);

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImage need in ImageContextProvider");
  return context;
};

export const ImageContextProvider = ({ children }: PropsWithChildren) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <ImageContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

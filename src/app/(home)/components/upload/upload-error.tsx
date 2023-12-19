interface UploadErrorProps {
  error: string;
}

const UploadError = ({ error }: UploadErrorProps) => {
  return (
    <div>
      Ocorreu um erro: <span>{error}</span>
    </div>
  );
};

export default UploadError;

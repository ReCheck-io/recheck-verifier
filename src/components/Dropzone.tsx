import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";

import { cn, getHash } from "@/utils";
import { Button } from "./ui";

export default function Dropzone() {
  const [file, setFile] = useState<File | null>(null);
  const { setValue } = useFormContext();

  // Function to read file and generate payload hash
  const readFileAsync = (
    file: File,
  ): Promise<{ file: File; payload: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const payload = btoa(reader.result as string);
        resolve({ file, payload });
      };

      reader.onerror = reject;
      reader.readAsBinaryString(file);
    });
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const { file, payload } = await readFileAsync(acceptedFiles[0]);

        // Set the file and payload in the form state
        setFile(file);
        setValue("dataId", getHash(getHash(payload))); // Store the hash of the payload
      }
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={cn(
        `dropzone rounded-lg border-2 border-dashed p-6 hover:cursor-pointer ${isDragActive ? "bg-gray-200" : "bg-gray-100"}`,
      )}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : file ? (
        <div className="flex items-center justify-between">
          <span>{file?.name}</span>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.stopPropagation();
              setValue("dataId", "");
              setFile(null);
            }}
          >
            Clear
          </Button>
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            ></path>
          </svg>
          <p>Drag &apos;n&apos; drop a file here, or click to select one</p>
        </div>
      )}
    </div>
  );
}

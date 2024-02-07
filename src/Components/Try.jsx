import React, { useCallback, useState, Fragment,useEffect } from "react";
import { useDropzone } from "react-dropzone";
// import "./App.css";

export default function MyDropeZone() {
  const [files, setFiles] = useState([]);

  const onDrop = acceptedFiles => {
    console.log(acceptedFiles);
    const allFiles = [...files, ...acceptedFiles]; //save all files here 
    console.log(allFiles);
    setFiles(allFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const drawImage = useCallback((file, id) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imgElement = document.getElementById(id);
      imgElement.src = reader.result;
    };
    reader.readAsDataURL(file);
  }, []);
  useEffect(() => {
    files.forEach((file, index) => {
      drawImage(file, `image-${index}`);
    });
  }, [files, drawImage]);

  return (
    <Fragment>
      <div {...getRootProps()} className="input-area">
        {
          <div>
            <p className="input-text">Drop the files here ...</p>
            <p> drop next file here </p>
          </div>
        }
        <input {...getInputProps()} />
        {files.map((file, index) => (
          <img id={`image-${index}`} key={index} alt="dropped image" />
          
        ))}
      </div>
      <div>

        Files :
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.path}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
import React, { useRef, useState } from "react";

function ImageUpload({ setImage, shape, border, borderColor, fallbackImage, height, width }) {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const inputFile = useRef();
  const imageUploadHandler = (e) => {
    if (e.target.files[0]) {
      setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };
  return (
      <div
        style={{
          border: border ? '2px solid black' : 'none',
          borderColor: borderColor ? borderColor : 'black',
          width: width ? width : '100%',
          height: height ? height : '100%',
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: shape == 'circle' ? '100%' : '0px'
        }}
        onClick={() => {
          inputFile.current.click();
        }}
      >
      {uploadedImageUrl ? (
        <img
          alt="profileImage"
          src={uploadedImageUrl}
          onError={(e)=>{e.target.onerror = null; e.target.src=(fallbackImage ? fallbackImage : "https://placehold.co/400x400/000000/FFF?text=Invalid\\nImage")}}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
        ></img>) : (
            <div className="initialImage---Div"
            style={{
              width: width ? width : '100%',
              height: height ? height : '100%',
              backgroundColor: 'rgb(33, 33, 33)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px'}}>
              +
            </div>
          )
      }
      <input
        type="file"
        id="file"
        accept="image/*"
        ref={inputFile}
        onChange={imageUploadHandler}
        style={{ display: "none" }}
      />
      </div>
  );
}

export default ImageUpload;

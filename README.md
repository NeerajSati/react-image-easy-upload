# react-image-easy-upload

> Upload images with react hassle free, user can just click on the image placeholder to upload the image and then change the uploaded image by just clicking on it again.

[![NPM](https://img.shields.io/npm/v/react-image-easy-upload.svg)](https://www.npmjs.com/package/react-image-easy-upload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-easy-upload
```

## Usage

```jsx
import ImageUpload from "react-image-easy-upload"

function form() {
  const [uploadedImage,setUploadedImage] = useState(null)
  render() {
    return <ImageUpload setImage={setUploadedImage}/> // the file will be updated to uploadedImage state
  }
}
```


Attributes  | type | values |  description
-- | -- | -- | --
setImage | setState | e.g, setImage={setUploadedImage} | Provide the setState parameter to update the state of file uploaded currently, which can be validated upon form submission
shape | string | circle \| square `(default = square)`  | Shape of the image being uploaded
width | string (px or %) | cssWidth `(default = 100%)`  | Width of the image div
height | string (px or %) | cssWidth `(default = 100%)`  | Height of the image div
border | boolean | true \| false `(default = false)`  | Give 2px border to the image
borderColor | string | cssColor `(default = none)`  | Give color to the border of image
fallbackImage | string | link to image `(default = placeholder Image)`  | Placeholder image to load in case the image uploaded by the user is invalid

## License

MIT © [NeerajSati](https://github.com/NeerajSati)

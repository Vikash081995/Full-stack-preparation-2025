/* eslint-disable react/prop-types */

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} alt={image.description} src={image.urls.regular} />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;

import backgroundImage from '../images/london.jpg';

const ImageRightSection = () => {
  return (
    <div className="hidden xl:block xl:col-span-3 relative">
      <img
        src={backgroundImage}
        alt="Tower of London"
        className="object-cover top-0 bottom-0 left-0 right-0 absolute"
      />
    </div>
  );
};

export default ImageRightSection;

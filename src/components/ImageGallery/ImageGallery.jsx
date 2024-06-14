import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


const ImageGallery = ({ images, onOpen }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li className={css.image} key={image.user.id}>
            <ImageCard image={image} onOpen={onOpen} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
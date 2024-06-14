import css from './ImageCard.module.css'


const ImageCard = ({
  image: {
    alt_description: alt,
    urls: { small, regular },
    user: { name, location },
    likes,
  },
  onOpen,
}) => {
  return (
    <div className={css.imageWrapper}>
      <img
        className={css.image}
        src={small}
        alt={alt}
        width={360}
        onClick={() => {
          onOpen(regular, alt);
        }}
      />
      <div className={css.descr}>
        <p>
           <strong className={css.style}>Description:</strong>
          {alt}
        </p>
        <p>
          <strong className={css.style}>Likes:</strong> 
          {likes}
        </p>
        {name !== null && (
          <p className={css.text}>
             <strong className={css.style}>Author:</strong>
            {name}
          </p>
        )}
        {location !== null && (
          <p className={css.text}>
            <strong className={css.style}>Location:</strong> 
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
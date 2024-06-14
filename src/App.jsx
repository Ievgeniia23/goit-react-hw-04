import css from "./App.module.css";
import { useState, useEffect } from "react";


import { fetchImages } from "./gallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (imgUrl, imgAlt) => {
    setShowModal(true);
    setModalUrl(imgUrl);
    setModalAlt(imgAlt);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setShowBtn(data.total_pages && data.total_pages !== page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <div className={css.appContainer}>
      <SearchBar submit={handleSearch} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onOpen={handleOpenModal} />
        )}
        {images.length > 0 && !isLoading && showBtn && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {images.length > 0 && (
          <ImageModal
            modal={showModal}
            onClose={handleCloseModal}
            url={modalUrl}
            alt={modalAlt}
          />
        )}
      </div>
    </div>
  );
};

export default App;










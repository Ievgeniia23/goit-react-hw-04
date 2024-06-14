import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modal, onClose, url, alt }) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        contentLabel="Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.img} src={url} alt={alt} width={1080} />
      </Modal>
    </div>
  );
};
export default ImageModal;
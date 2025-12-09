import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import { closeModal } from "../../redux/slices/modalSlice";
import styles from "./ImagePreviewModal.module.css";

const ImagePreviewModal = () => {
  const dispatch = useDispatch();
  const { src, category } = useSelector((state) => state.modal.modalData) || {};

  if (!src) return null;

  return (
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button
        className={styles.closeBtn}
        onClick={() => dispatch(closeModal())}
      >
        <X size={32} />
      </button>

      <div className={styles.imageWrapper}>
        <img src={src} alt={category} className={styles.fullImage} />
      </div>

      <div className={styles.caption}>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default ImagePreviewModal;

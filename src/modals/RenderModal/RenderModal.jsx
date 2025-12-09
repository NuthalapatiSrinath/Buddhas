import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./RenderModal.module.css";

// Components
import MainModal from "../MainModal/MainModal";
// 1. Import the new modal
import ImagePreviewModal from "../ImagePreviewModal/ImagePreviewModal";

function RenderModal() {
  const activeModal = useSelector((state) => state.modal.type);

  // 2. Register it in the object
  const allModals = {
    IMAGE_PREVIEW: <ImagePreviewModal />,
  };

  return (
    <MainModal>
      <AnimatePresence mode="wait">
        {activeModal && allModals[activeModal] && (
          <motion.div
            key={activeModal}
            className={styles.RenderModal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {allModals[activeModal]}
          </motion.div>
        )}
      </AnimatePresence>
    </MainModal>
  );
}

export default RenderModal;

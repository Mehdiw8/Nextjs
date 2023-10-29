"use client";
import Frame from "@/app/components/Frame";
import Modal from "@/app/components/Modal";
import swagPhotos from "@/app/data";
import React from "react";

const ModalP = ({ params }) => {
  const photos = swagPhotos;
  const photo = photos.find((p) => p.id === params.id);
  return (
    <>
      <Modal>
        <Frame photo={photo} />
      </Modal>
    </>
  );
};

export default ModalP;

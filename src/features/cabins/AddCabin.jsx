import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal((show) => !show);
  }
  return (
    <div>
      <Button onClick={toggleModal}>Add new cabin</Button>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <CreateCabinForm onCloseForm={toggleModal} />
        </Modal>
      )}
    </div>
  );
}

import { useCallback, useState } from "react";
import CustomModal from "./modal";
import Iconify from "./iconify";

export default function TableRow({ id, children, handleDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const onDelete = useCallback(() => {
    console.log("id", id);
    handleDelete(id);
  }, [id, handleDelete]);
  return (
    <>
      <tr>
        {children}
        <td className="d-flex">
          <div style={{ cursor: "pointer", marginRight: "10px" }}>
            <Iconify icon="ph:pencil" />
          </div>
          <div
            onClick={handleShow}
            data-target="#exampleModalCenter"
            data-toggle="modal"
            style={{ cursor: "pointer" }}
          >
            <Iconify icon="ph:trash" />
          </div>
        </td>
      </tr>
      <CustomModal
        handleClose={handleClose}
        showModal={showModal}
        onDelete={onDelete}
      />
    </>
  );
}

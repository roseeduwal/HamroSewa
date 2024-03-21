const CustomModal = ({ onDelete, showModal, handleClose }) => {
  return (
    <>
      {showModal && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: 1,
            left: "0%",
            top: "0%",
            backgroundColor: "rgba(64, 61, 61,.5)",
          }}
          onClick={handleClose}
        >
          <div className="modal-overlay rounded bg-white p-4 shadow">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span
                style={{ cursor: "pointer" }}
                className="close-button"
                onClick={handleClose}
              >
                ×
              </span>
              <h6>Delete</h6>
              <p>Are you sure you want to delete</p>
              <div className="modal-actions d-flex justify-content-between">
                <button
                  className="close-modal-button btn btn-primary"
                  onClick={() => {
                    onDelete();
                    handleClose();
                  }}
                >
                  Yes
                </button>
                <button
                  className="save-changes-button btn btn-danger"
                  onClick={handleClose}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;

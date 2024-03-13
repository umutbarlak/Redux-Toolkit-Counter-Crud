import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const crudState = useSelector((store) => store.crudReducer);
  const dispatch = useDispatch();

  console.log(editItem);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      dispatch(addTask(taskData));
    }

    handleClose();
  };

  return (
    <Modal
      className="text-black"
      show={isOpen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              type="text"
              placeholder="Görev giriniz"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>İsiminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              type="text"
              placeholder="örn: Ahmet"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Atanan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              type="text"
              placeholder="örn:Mehmet"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;

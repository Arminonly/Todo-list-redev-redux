import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'antd/es/modal/Modal';

const ModalBox = ({navigateToRegistry,showModal,setShowModal}) => {
  return (
    <Modal
    open={showModal}
    cancelText="Отмена"
    cancelButtonProps={{ danger: true }}
    onCancel={() => {
      setShowModal(false);
    }}
    closable
    closeIcon={<AiOutlineCloseCircle style={{ color: 'red' }} />}
    okText="Зарегистрироваться"
    onOk={() => {
      navigateToRegistry();
    }}
  >
    {' '}
    <h3>Сначала зарегистрируйтесь</h3>
  </Modal>
  )
}

export default ModalBox

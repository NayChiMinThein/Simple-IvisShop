import './Modal.css'

export default function Modal({children, closeModal}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal-card'>
            <button className="btn" onClick={closeModal}><i className="fa-solid fa-xmark fs-4 close-btn"></i></button>
            {children}
        </div>
    </div>
)
}

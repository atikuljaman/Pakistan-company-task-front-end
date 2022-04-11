import React from 'react'
import './Modal.css';

const Modal = ({ show, handleClose }) => {

    return (
        <>
            {
                show &&
                <div
                    className='modal-container'
                    onClick={handleClose}
                >
                    <div className='modal-body'>
                        <div className='modal-content'>
                            <h3 className='modal-title'>Thanks for booking</h3>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default Modal
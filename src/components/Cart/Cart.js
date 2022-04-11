import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import './Cart.css';

const Cart = ({
    enterDays, dayPrice, totalDaysPrice, serviceFee, totalPrice
}) => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
        console.log("in sha allah");
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <div className='cart-container'>
                <div>
                    <div className='cart-header'>
                        <h3 className='cart-title'>{enterDays} Days selected, 2 Mar 2022 - 26 Mar 2022</h3>
                        <button className='edit-btn'>Edit</button>
                    </div>
                    <hr />
                    <div className='cart-body'>
                        <div className='days-price'>
                            <h3 className='days-price-title'>€ {dayPrice} x {enterDays} Days</h3>
                            <h3 className='days-price-title'>€ {totalDaysPrice}</h3>
                        </div>
                        <div className='fee-price'>
                            <h3 className='fee-price-title'>Service Fee 5 %</h3>
                            <h3 className='fee-price-title'>€ {serviceFee}</h3>
                        </div>
                    </div>
                    <hr className='footer-hr' />
                    <div className='cart-footer'>
                        <div className='total-price'>
                            <h2 className='total-price-title'>Total Price</h2>
                            <h2 className='total-price-title'>€ {totalPrice}</h2>
                        </div>
                        <button className='book-btn' onClick={handleShow}>Book now</button>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                handleClose={handleClose}
            />
        </>
    )
}

export default Cart
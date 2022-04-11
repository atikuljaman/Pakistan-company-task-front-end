import React from 'react'
import { useState } from 'react'
import Cart from '../../Cart/Cart'
import './DaysEnter.css'

const DaysEnter = ({ dayPrice, weeklyPrice, monthlyPrice }) => {

    const [totalPrice, setTotalPrice] = useState(0)
    const [enterDays, setEnterDays] = useState(0);
    const [totalDaysPrice, setTotalDaysPrice] = useState(0)
    const [serviceFee, setServiceFee] = useState(0)

    const totalDays = e => {
        setEnterDays(e.target.value)
    }

    const dailyTotalPrice = e => {
        e.preventDefault()
        const totalDays = (dayPrice * enterDays)
        const fee = totalDays / 100 * 5;
        setTotalDaysPrice(totalDays)
        setServiceFee(fee)
        setTotalPrice(totalDays + fee);
    }

    return (
        <>{
            !totalPrice ?
                <form onSubmit={dailyTotalPrice} className='days-enter-container'>
                    <h3 className='days-enter-title'>Please enter <br /> number of Days</h3>
                    <input
                        type='number'
                        className='days-enter-input'
                        onBlur={totalDays}
                        required
                    />
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
                :
                <Cart
                    enterDays={enterDays}
                    dayPrice={dayPrice}
                    totalDaysPrice={totalDaysPrice}
                    serviceFee={serviceFee}
                    totalPrice={totalPrice}
                />

        }
        </>
    )
}

export default DaysEnter
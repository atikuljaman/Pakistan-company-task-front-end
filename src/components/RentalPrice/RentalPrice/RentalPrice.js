import React from 'react'
import { useState } from 'react'
import DaysEnter from '../DaysEnter/DaysEnter';
import './RentalPrice.css'

const RentalPrice = () => {
    const [submit, setSubmit] = useState(false);

    const dayPrice = 1000
    const weeklyPrice = 800
    const monthlyPrice = 600

    const handleEnterDays = () => {
        setSubmit(true)
    }

    return (
        <>
            {!submit ?
                <div className='rental-price-container'>
                    <div>
                        <h3 className='rental-title'>
                            Rental price per * <span>(?)</span>
                        </h3>
                        <div className='form-container'>
                            {
                                /* DAY PRICE CONTAINER */
                            }

                            <div className='price-container'>
                                <div>
                                    <h3 className='price-title'>Daily Price €</h3>
                                    <small className='sub-title'>Day Price for = 7Days</small>
                                </div>
                                <input
                                    type='number'
                                    className='price-input'
                                    defaultValue={dayPrice} />
                            </div>

                            {
                                /* WEEKLY PRICE CONTAINER */
                            }

                            <div className='price-container'>
                                <div>
                                    <h3 className='price-title'>weekly Price / Day €</h3>
                                    <small className='sub-title'>Per day Price for = 7Days & = 30days</small>
                                </div>
                                <input
                                    type='number'
                                    className='price-input'
                                    defaultValue={weeklyPrice} />
                            </div>

                            {
                                /* MONTHLY PRICE CONTAINER */
                            }

                            <div className='price-container'>
                                <div>
                                    <h3 className='price-title'>Monthly Price / Day €</h3>
                                    <small className='sub-title'>Per day Price for = 30 Days</small>
                                </div>
                                <input
                                    type='number'
                                    className='price-input'
                                    defaultValue={monthlyPrice} />
                            </div>
                        </div>
                        <button onClick={handleEnterDays} className='button'>Please enter number of Days</button>
                    </div>
                </div> :
                <DaysEnter
                    dayPrice={dayPrice}
                    weeklyPrice={weeklyPrice}
                    monthlyPrice={monthlyPrice}
                />
            }
        </>
    )
}

export default RentalPrice
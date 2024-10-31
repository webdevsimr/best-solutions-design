import React from 'react'
import stayInLoopImg from "@/assets/images/homepage/stayin-loop-right.png"
import Image from 'next/image'

const StayLoop = () => {
    return <section className="stayLoop">
        <div className="outerSpace">
            <div className="container">
                <div className='stayLoop_box'>
                        <Image src={stayInLoopImg} alt='stayInLoopImg' />
                    <div className='stayLoop_textContent'>
                        <h3>Stay in the loop</h3>
                        <p>Get started now to skyrocket your business</p>
                    </div>

                    <div >
                        <button className='stayLoop_btn'>
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default StayLoop
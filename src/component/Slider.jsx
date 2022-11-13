import React from 'react';
import { useState } from 'react';
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'

const Slider = () => {
    let size = 400
    let [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + size

            return Math.min(newOffset, 0)
        })
      }
      const handleRightArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - size

            const maxOffset = -(size * 2)

            return Math.max(newOffset, maxOffset)
        })
      }

    return (
        <div className='slider'>
            <div className='prev' onClick={handleLeftArrowClick}>
                <FcPrevious/>
            </div>
            <div style={{width:`${size}px`, height:`${size}px`, transform:`translateX(${offset}px)`}} className='window'>
                <div style={{minWidth:`${size}px`, minHeight:`${size}px`}} className="sildes"></div>
                <div style={{minWidth:`${size}px`, minHeight:`${size}px`}} className="sildes"></div>
                <div style={{minWidth:`${size}px`, minHeight:`${size}px`}} className="sildes"></div>
            </div>
            <div className='next' onClick={handleRightArrowClick}>
                <FcNext/>
            </div>
        </div>
    );
};

export default Slider;
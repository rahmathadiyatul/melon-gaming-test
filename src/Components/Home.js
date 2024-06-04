import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='editor'>
            <div className='canvas-properties'>
                <h2>Canvas Properties</h2>
                <span className='user-input'>
                    <label>Width</label>
                    <input></input>
                </span>
                <span className='user-input'>
                    <label>Height</label>
                    <input></input>
                </span>
                <button>Change Size</button>
            </div>
            <canvas className='image-field'>
            </canvas>
            <div className='image-properties'>
                <h2>Image Properties</h2>
                <span className='user-input'>
                    <label>X</label>
                    <input></input>
                </span>
                <span className='user-input'>
                    <label>Y</label>
                    <input></input>
                </span>
                <span className='user-input'>
                    <label>Width</label>
                    <input></input>
                </span>
                <span className='user-input'>
                    <label>Height</label>
                    <input></input>
                </span>
                <button>Change Size</button>
            </div>
        </div >
    )
}

export default Home

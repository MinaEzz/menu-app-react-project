import React from 'react'
import './style.css'

const SectionHeader = (props) => {
return (
    <div className='section-header'>
        <h1>menu items</h1>
        <div>
            <ul className='pagination align-items-center justify-content-center mt-4 flex-wrap'>
                {
                    props.categories.length >= 1 ? (
                        props.categories.map((cat, index)=>{
                            return(
                                <li key={index} className='mx-2 my-2' >
                                    <button className='btn btn-dark'
                                    onClick={()=>{props.categoryFilterFunction(cat)}}
                                    > {cat} </button>
                                </li>
                            )
                        })
                    ) : null
                }
            </ul>
        </div>
    </div>
)
}

export default SectionHeader

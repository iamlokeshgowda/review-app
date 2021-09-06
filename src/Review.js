import React, {useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reviews from './Data'
import './index.css'

function Review() {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = reviews[index]
    const checknumber =(number)=>{
        if (number > reviews.length-1){
            return 0
        }
        if (number < 0){
            return reviews.length-1
        }
        return number
    }

    const nextPreson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1
            return checknumber(newIndex)
        })
        
    }
    const prevPreson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1
            return checknumber(newIndex)
        })
    }
    const randomPerson = () =>{
        let randomNumber = Math.floor(Math.random()*reviews.length)
        if (randomNumber === index){
            randomNumber = index +1
        }
        setIndex(checknumber(randomNumber))
    }
    
    return (
        <div className="review">
           <div className="img-container">
               <img src={image} alt={name} className="person-img" />
               <span className="quote-icon"><FaQuoteRight /></span>
           </div>
           <p className="author">{name} </p>
           <p className="job">{job} </p>
           <p className="info">{text} </p>
           <div>
               <button className="prev-btn" onClick={prevPreson}><FaChevronLeft /></button>
               <button className="next-btn" onClick={nextPreson}><FaChevronRight /></button>
           </div>
           <button className="random-btn" onClick={randomPerson}>surprise me</button>
        </div>
    )
}

export default Review

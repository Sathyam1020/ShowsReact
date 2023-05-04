import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const BookTickets = ({shows, loading}) => {

    const { id } = useParams();
    const show = shows.find((show) => show.show.id === parseInt(id));
    
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: ""})

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData((prevFormData) => {
            return ({
                ...prevFormData, 
                [name]: value
            })
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("formData", JSON.stringify(formData))
    }
    
    // Later, you can retrieve the data from local storage like this:
    // const storedFormData = JSON.parse(localStorage.getItem("formData"))
    
  return (
    <div className='pt-[75px] max-w-[1080px] mx-auto flex flex-col items-center justify-center gap-3'>
        <p className='text-xl font-semibold text-white underline'>Book Your Tickets Now!!!</p>
        <div className='text-xl font-semibold text-white'>
            Movie Name: {show.show.name}
        </div>
        <div>
            <form action="" onSubmit={submitHandler} className='flex flex-col gap-3 '>
                <label htmlFor='firstName' className='font-semibold cursor-pointer text-blue-950'>First Name</label>
                <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                onChange={changeHandler}
                value={formData.firstName}
                className='p-2 mt-1 mb-3 rounded-md outline'
                />

                <label htmlFor='firstName' className='font-semibold cursor-pointer text-blue-950'>Last Name</label>
                <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                onChange={changeHandler}
                value={formData.lastName}
                className='p-2 mt-1 mb-3 rounded-md outline'
                />

                <label htmlFor='email' className='font-semibold cursor-pointer text-blue-950'>Email</label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={changeHandler}
                value={formData.email}
                className='p-2 mt-1 mb-3 rounded-md outline'
                />

                <button className='font-semibold text-[16px] bg-white rounded-md py-2 px-4 shadow-md text-center mt-4'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default BookTickets;
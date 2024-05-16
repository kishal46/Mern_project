import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DoctorDetails from './DoctorDetails'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Appoinment = () => {
    const [location, setLocation] = useState('')
    const [doctorList, setDoctorlist] = useState([])
    const [filteredDoctors, setFilteredDoctors] = useState([])
    const [showDoctors, setShowDoctors] = useState(false)
    const [doctorData, setDoctorData] = useState({})
    const [showDoctorDetails, setShowDoctorDetails] = useState(false)

    const navigate=useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3001/appoinment/get/${location}`)
            .then(res => setFilteredDoctors(res.data))
            .catch(err => console.log(err))
    }, [location])

    const handleSelect = (e) => {
        setLocation(e.target.value)
        const filtered = doctorList.filter(x => x.location === e.target.value)
        setFilteredDoctors(filtered)
    }

    const handleClick = (doctor) => {
        setShowDoctors(true)
        setDoctorData({
            doctorName: doctor.doctorName,
            qualification: doctor.qualification,
            specialist: doctor.specialist,
            timing: doctor.timing
        })
    }
    const handleShowDetails = () => {
        setShowDoctorDetails(true);
    }
    const success=()=>{
        alert("Appoinment successfull")
        navigate('/profile')
    }

    return (
        <div>
            <form>
                <label>Location</label>
                <select value={location} onChange={handleSelect}>
                    <option value="">Select Location</option>
                    <option value="Saravanam patti">Saravanam patti</option>
                    <option value="Gandhipuram">Gandhipuram</option>
                    <option value="Kalapatti">Kalapatti</option>
                    <option value="Thudiyalur">Thudiyalur</option>
                    <option value="Ganapathi">Ganapathi</option>
                </select>
            </form>

            <div className='Hospital'>
                <h3>Locations</h3>
                {filteredDoctors.map(x => (<button onClick={() => handleClick(x)}>{x.Hospitals}</button>))}
            </div>

            {showDoctors && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Doctor name</th>
                                <th>Qualification</th>
                                <th>Specialist</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{doctorData.doctorName}</td>
                                <td>{doctorData.qualification}</td>
                                <td>{doctorData.specialist}</td>
                                <td>{doctorData.timing}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleShowDetails} id='appointment'>Show Doctor Details</button>
                </div>
            )}

            {showDoctorDetails && <DoctorDetails doctorData={doctorData} />}

            <button onClick={success}className='Appoinment'>Appoinment</button>
        </div>
    )
}

export default Appoinment
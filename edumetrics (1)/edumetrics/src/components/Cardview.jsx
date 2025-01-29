import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cardview.css";

const Cardview = ({
    collegeimage,
    collegetitle,
    statename, 
    cityname
}) => {
    const navigate = useNavigate();
    
    const handleViewClick = () => {
        navigate("/collegedetail", {
            state: {
                name: collegetitle,
                image: collegeimage,
                state: statename,
                city: cityname
            }
        });
    };

    return (
        <div className='card-view'>
            <img className='image-view' src={collegeimage} alt="college-image"/>
            <h1 className='college-title'>{collegetitle}</h1>
            <p className='city-name'>{cityname}</p>
            <p className='state-name'>{statename}</p>
            <button className='view-button' onClick={handleViewClick}>View</button>
        </div>
    );
};

export default Cardview;

import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import Cardview from './Cardview';
import CollegeDetail from './CollegeDetail';

const Dashboard = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

const [dashboardData, setDashboardData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/proxy');
            // console.log('API Response:', response);
            // console.log('Response Data Structure:', response.data);
            setDashboardData(response.data?.data || []);
            setError(null);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setError('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    fetchDashboardData();
}, []);


useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    };
}, []);

const handleResize = () => {
    setIsSidebarOpen(window.innerWidth > 768);
};




if (loading) return <div className='loading-vedio'>

            <video autoPlay loop muted playsInline>
                <source src="/assets/videos/animatedvedio-loading.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
</div>;
if (error) return <div>{error}</div>;

return (
    <div className="dashboard">
    <main className="main-content">
                <div className="cards-container">
                    {Array.isArray(dashboardData) ? dashboardData.map((college, index) => (
                        <Cardview
                            key={index}
                            collegetitle={college.name || college.collegeName || "College Name"}
                            collegeimage={college.image || college.collegeImage || "https://picsum.photos/200"}
                            cityname={college.city || "City"}
                            statename={college.state || "State"}
                        />
                    )) : <div>No college data available</div>}
                </div>

    </main>
    </div>
);
};

export default Dashboard;


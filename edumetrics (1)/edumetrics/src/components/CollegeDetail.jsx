import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './CollegeDetail.css';

const CollegeDetail = () => {
    const location = useLocation()
    const { collegeName } = useParams();
    const college = location.state || {};

    if (!college) {
        return <div>No college data found</div>;
    }

    return (
        <div className="college-detail-container">
            <div className="college-header">
            <img 
                src={college.image || "https://via.placeholder.com/400x200"} 
                alt={college.name || college.collegetitle} 
                className="college-banner"
            />
            <h1 className="college-name">{college.name || college.collegetitle}</h1>
        </div>

        <div className="college-content">
            <div className="college-section">
                <h2>Overview</h2>
                <div className="college-info">
                    <div className="info-item">
                        <span className="label">Location:</span>
                        <span>{college.city || college.cityname}, {college.state || college.statename}</span>
                    </div>
                        <div className="info-item">
                            <span className="label">Type:</span>
                            <span><strong>Engineering College</strong> – Focus on technical and engineering education (e.g., IITs, NITs).</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Established:</span>
                            <span>1986</span>
                        </div>
                </div>
            </div>
                    <div className="college-section">
                        <h2>Academic Information</h2>
                        <div className="college-info">
                            <div className="info-item">
                                <span className="label">Courses Offered:</span>
                                <ul className="courses-list">
                                <li>Bachelor of Technology (B.Tech) – Computer Science and Engineering</li>
        <li>Bachelor of Technology (B.Tech) – Electrical and Electronics Engineering</li>
        <li>Bachelor of Technology (B.Tech) – Mechanical Engineering</li>
        <li>Bachelor of Business Administration (BBA)</li>
        <li>Bachelor of Commerce (B.Com) – Accounting and Finance</li>
        <li>Bachelor of Science (B.Sc) – Biotechnology</li>
        <li>Bachelor of Science (B.Sc) – Mathematics</li>
        <li>Master of Business Administration (MBA)</li>
        <li>Master of Science (M.Sc) – Physics</li>
        <li>Doctor of Philosophy (Ph.D.) – Computer Science</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                {(college.name) && (
                    <div className="college-section">
                        <h2>Contact Details</h2>
                        <div className="college-info">
                                <div className="info-item">
                                    <span className="label">Address:</span>
                                    <span>Bengaluru</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Phone:</span>
                                    <span>+91- 8979695768</span>
                                </div>
                            {collegeName && (
                                <div className="info-item">
                                    <span className="label">Email:</span>
                                    <span>{collegeName}@gmail.com</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                    <div className="college-section">
                        <h2>Additional Information</h2>
                        <div className="college-info">
                                <div className="info-item">
                                    <p className="college-description">{college.name} is a premier institution dedicated to academic excellence, research, and holistic development. Established in [1986], the college offers a diverse range of undergraduate, postgraduate, and diploma programs across various disciplines, including science, engineering, arts, commerce, and management.

With a highly qualified faculty and state-of-the-art infrastructure, {college.name} provides students with a dynamic learning environment that fosters critical thinking, innovation, and leadership. The campus features well-equipped classrooms, modern laboratories, a comprehensive library, and advanced research centers.

The college emphasizes extracurricular activities, encouraging students to participate in clubs, cultural events, and sports to ensure their overall development. Additionally, it has strong industry collaborations and placement programs, offering students internship opportunities and career support to enhance their professional prospects.

Accredited by NAAC, {college.name} is committed to nurturing future leaders by providing quality education and a vibrant campus life.</p>
                                </div>
                                <div className="info-item">
                                    <span className="label">Facilities:</span>
                                    <ul className="facilities-list">
                                    <li>Dr. Rajesh Sharma – Professor, Computer Science</li>
        <li>Dr. Priya Iyer – Associate Professor, Mathematics</li>
        <li>Dr. Anil Mehta – Head of Department, Physics</li>
        <li>Dr. Sunita Nair – Lecturer, Chemistry</li>
        <li>Dr. Vikram Reddy – Assistant Professor, Electrical Engineering</li>
        <li>Dr. Kavita Bansal – Senior Lecturer, English</li>
        <li>Dr. Arun Kumar – Professor, Mechanical Engineering</li>
        <li>Dr. Pooja Desai – Associate Professor, Economics</li>
        <li>Dr. Manish Verma – Lecturer, Biotechnology</li>
        <li>Dr. Sneha Patil – Assistant Professor, Business Administration</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CollegeDetail;

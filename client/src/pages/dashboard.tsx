import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const dashboard: React.FC = () => {
    return ( 
        <>
            <h1 className="dashboard">Dashboard</h1>
            <div>
            <h2>Welcome to LMS </h2>
            <br />

            <div className="classes">
                <Link to="/syllabus/javascript" className="card"> {/* Wrap with Link */}
                    <header>JavaScript</header>
                    <img src ="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto" alt="JavaScript" />
                    <p>Description of class</p>
                </Link>

                <Link to="/syllabus/typescript" className="card"> {/* Wrap with Link */}
                    <header>TypeScript</header>
                    <img src ="https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-13/typescript-introduction.jpg" alt="TypeScript" />
                    <p>Description of class</p>
                </Link>   

                <Link to="/syllabus/python" className="card"> {/* Wrap with Link */}
                    <header>Python</header>
                    <img src ="https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg" alt="Python" />
                    <p>Description of class</p>
                </Link>
                <Outlet /> {/* This is where nested routes will render */}
            </div>
           
    </div>
        </>
    );
};

export default dashboard;
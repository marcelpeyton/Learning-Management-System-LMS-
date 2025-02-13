import { Outlet, Link, useLocation } from "react-router-dom";

const Lesson = () => {

  const location = useLocation();

  const hideLinks = location.pathname !== "/lessons"

  return ( 
          <>
              <h1 className="dashboard">Lessons</h1>
              <div>
              <div className="classes">
                {!hideLinks && (
                  <><Link to="javascript" className="card"> {/* Wrap with Link */}
              <header>JavaScript</header>
              <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto" alt="JavaScript" />
              <p>Description of class</p>
            </Link><Link to="typescript" className="card"> {/* Wrap with Link */}
                <header>TypeScript</header>
                <img src="https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-13/typescript-introduction.jpg" alt="TypeScript" />
                <p>Description of class</p>
              </Link><Link to="python" className="card"> {/* Wrap with Link */}
                <header>Python</header>
                <img src="https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg" alt="Python" />
                <p>Description of class</p>
              </Link></>)}
              </div>
              <Outlet /> {/* This is where nested routes will render */}
    </div>
          </>
      );
};

export default Lesson;


import logo from './assets/art/dark-logo.svg';

import './App.css';


function App() {
  return (
    <div className="App">

      {/* navigation */}
      <nav>
        <div className="logo">
          <img src={logo} id="logo"/>
        </div>
        <div className="right">
          <span>
            <a>All courses</a> |
            <a>Sign in</a>
          </span>

        </div>
      </nav>

            {/* end of navigation */}


      <section className="head-content">
      <h1 className="heading">Become a frontend dveloper with hands -on courses</h1>
      <a className="start-journey-btn">START YOUR JOURNEY</a>
      </section>

      <section className="row">
        <div className="column">
        </div>
        <div className="column">
          <div className="sub-col">
            <h1 className="sub-heading">Learn by doing</h1>
            <h3 className="course-content">Bye bye static video! Our interactive screencasts lets you edit the teacher's code. </h3>
          </div>
          <div className="sub-col">
            <h1 className="sub-heading">Learn with others</h1>
            <h3 className="course-content">Scrimba is more than just courses, you'll join a community of learners across the globe.</h3>
          </div>
        </div>
      </section>

            {/* Popular courses */}

      <section className="popular-courses">
        <h2 className="sec-heading">#Popular courses</h2>
        <h3 className="description">Get started with these popular intro courses.</h3>

        <div className="tiles">

          <div className="course-tile">
            <span className="course-name">
              24 days of #Javascriptmas
            </span>
            <span>
              <div className="inline1">
                <span className="duration">31 lessons | 59 min</span> with 
                <span className="author">Dylan C. Israel</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner</span>
           </div>

           <div className="course-tile">
            <span className="course-name">
              HTML & CSS Crash Course
            </span>
            <span>
              <div className="inline1">
                <span className="duration">30 lessons | 4 hours</span> with 
                <span className="author">Kevin Powell</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Intermediate <span className="free">free</span></span>
           </div>

           <div className="course-tile">
            <span className="course-name">
              Learn React for free
            </span>
            <span>
              <div className="inline1">
                <span className="duration">58 lessons | 1 hour</span> with 
                <span className="author">Bob Ziroll</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner</span>
           </div>
      
           <div className="course-tile">
            <span className="course-name">
              Learn UI Design Fundamentals
            </span>
            <span>
              <div className="inline1">
                <span className="duration">15 lessons | 1 hour</span> with 
                <span className="author">Kevin Powell</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Intermediate</span>
           </div>

        </div>

        <a className="show-more">Show more</a>
      </section>

      {/* Bootcamps */}

      <section className="bootcamps">
        <h2>#Bootcamps</h2>
        <h3>Comprehensive courses on various topics</h3>

        <div className="tiles">

        <div className="course-tile">
            <span className="course-name">
              The Frontend Developer Career Path
            </span>
            <span>
              <div className="inline1">
                <span className="duration">921 lessons | 15 min</span> with 
                <span className="author">Per Harald Borgen</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner</span>
           </div>

           <div className="course-tile">
            <span className="course-name">
              The React Bootcamp
            </span>
            <span>
              <div className="inline1">
                <span className="duration">128 lessons | 12 hours</span> with 
                <span className="author">Bob Ziroll</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Advanced</span>
           </div>


        <div className="course-tile">
            <span className="course-name">
              The Responsive Web Design Bootcamp
            </span>
            <span>
              <div className="inline1">
                <span className="duration">174 lessons | 15 hours</span> with 
                <span className="author">Kevin Powell</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Intermediate</span>
           </div>

           <div className="course-tile">
            <span className="course-name">
              The UI Design Bootcamp
            </span>
            <span>
              <div className="inline1">
                <span className="duration">99 lessons | 8 hours</span> with 
                <span className="author">Dylan C. Israel</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Intermediate</span>
           </div>
        </div>

        <a className="show-more">Show more</a>
      </section>

      {/* freebies */}

      <section className="bootcamps">
        <h2>#Freebies</h2>
        <h3>High-quality Scrimba courses that doesn't cost a dime</h3>

        <div className="tiles">

        <div className="course-tile">
            <span className="course-name">
              HTML & CSS Crash Course
            </span>
            <span>
              <div className="inline1">
                <span className="duration">30 lessons | 4 hours</span> with 
                <span className="author">Kevin Powell</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner <span className="free">free</span></span>
           </div>

           
           <div className="course-tile">
            <span className="course-name">
              Learn React for free
            </span>
            <span>
              <div className="inline1">
                <span className="duration">58 lessons | 1 hour</span> with 
                <span className="author">Bob Ziroll</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner</span>
           </div>
      
           <div className="course-tile">
            <span className="course-name">
              Learn UI Design Fundamentals
            </span>
            <span>
              <div className="inline1">
                <span className="duration">15 lessons | 1 hour</span> with 
                <span className="author">Kevin Powell</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Intermediate</span>
           </div>

           <div className="course-tile">
            <span className="course-name">
              Learn Python for free
            </span>
            <span>
              <div className="inline1">
                <span className="duration">31 lessons | 59 min</span> with 
                <span className="author">Dylan C. Israel</span>
              </div>
              <div className="inline2">
                <img src="./assets/64.jfif" />
              </div>
            </span>
            <span className="level">Beginner</span>
           </div>

      </div>
        <a className="show-more">Show more</a>
      </section>

      <footer>
        <img src={logo} id="logo" />
        <div className="footer-row">
          <div className="row-1">
            <a>Discort</a>
            <a>Twitter</a>
            <a>Youtube</a>
            <a>Github</a>
            

          </div>
          <h5>Resources</h5>
          <div className="row-2">
            <a>Blog</a>
            <a>FAQ</a>
            <a>Terms</a>
            <a>Privacy</a>
          </div>

          <h5>Courses</h5>
          <div className="row-3">
            <a>All courses</a>
            <a>Intro courses</a>
            <a>Learn #Javascript</a>
            <a>Learn React</a>
          </div>

          <h5>Company</h5>
          <div className="row-4">
            <a>About us</a>
            <a>Contact us</a>
            <a>Support chat</a>
            <a>Start teaching</a>
          </div>

          <h5>Built with lmba</h5>

        </div>


      </footer>



    </div>
 );
}

export default App;

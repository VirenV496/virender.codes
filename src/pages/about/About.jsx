  
import React from "react"
import styled from "styled-components"
import { FaLinkedin } from "react-icons/fa"

const AboutPage = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  &:last-child {
    margin-bottom: 10px;
  }
`
const AboutText = styled.article`
  margin: 0 auto;
  font-size: 0.89rem;
  padding: 4rem 2rem 3rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: justify;
  @media (min-width: 768px) {
    width: 55vw;
  }
`
const Icons = styled.p`
  color: black;
  color: rgba(0, 0, 0, 0.02);
  @media (max-width: 768px) {
    margin-top: -30rem;
    margin-right: -10rem;
    font-size: 30rem;
    text-align: right;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: red;
`
const LinkedIn = styled(FaLinkedin)`
  font-size: 3rem;
  margin-bottom: -0.2rem;
  margin-right: 1rem;
  color: #0e76a8;
`
const About = () => {
  return (
    <AboutPage>
      {/* <Layout> */}
        <AboutText>
          <header>
            <Link
              href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <LinkedIn />
            </Link>

            <div
              class="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="bertam"
            >
              <a
                class="LI-simple-link"
                href=""
              >
                Virender Vishwakarma
              </a>
            </div>

            

            <b>Hello, I'm Virender! Creative  developer.</b>
          </header>
          <hr />
          <p>

            I am a masters student coding enthusiastic 
            I enjoy mostly working with javascript
            and i am  always ready to take new tech challenges 
          </p>
          <div>
            <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
            <ul>
              <li>
                Energetic, flexible, highly motivated, positive team player;
              </li>
              <li>Eager to learn and open to new challenges;</li>
              <li>Having the potential to motivate and support others;</li>
            </ul>
          </div>
          <p>
            I finished Bachelors degree 2019 
            one of the biggest achievement Won hackathon National level kaveri hackathon in 2019 team of 5
            in bachelors degree i started with C language C++ data structures and java 
            and i am a Final year masters student 2022{" "}
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              University of pune
            </Link>{" "}
            in 2020 January - was one of the most driven students. I was a
            self-taught front-end enthusiast, so I mentored my classmates and
            other students at my college with our daily tasks and homework
            during  classes in the front-end module. We also got familiar 
            with OOPs modern js fundamentals.  My{" "}
            <Link
              href="https://github.com/VirenV496/fullstack-crud"
              target="_blank"
              rel="noopener noreferrer"
            >
               project 
            </Link>
            was a web CRUD app,built  React with Node Express js  and Mongo-db. 
       
          </p>
          <p>
            I got my first front-end developer job in 2021 march . Spent there 6
            months working with React Stack and Typescript.
            <br />
            {/* In 2021 March I joined another company to get more experience in
            React Js and TypeScript. */}
            <br />
            <a
              href="https://www.linkedin.com/in/virender-vishwakarma-952381176/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More...
            </a>
          </p>
          {/* <img
            src="https://www.codewars.com/users/emberta/badges/large"
            alt="@berta.codes codewars"
          /> */}

        </AboutText>
      {/* </Layout> */}
    </AboutPage>
  )
}

export default About
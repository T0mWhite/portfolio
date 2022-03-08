import React from 'react';
import Headshot from '../../assets/images/Headshot.jpg';
import Express from '../../assets/images/express.png';
import Windows from '../../assets/images/windows10.png';
import Xubuntu from '../../assets/images/xubuntulogo.png';

export default function About() {
  return (
    <>
      <main className='about__container'>
        <img
          className='about__card'
          src={Headshot}
          height='1080px'
          width='1920px'
          alt='headshot'
        />
        <div className='about__text'>
          <p>
            I am passionate about functionality and end-user experience. My
            dedicated troubleshooting skills have been developed in the web and
            audio-visual space over a 5 year time-span. Through these times I
            have consistently emerged as a leader, mentoring my peers and
            leading complex and technical projects. As a strong independent and
            group collaborator, I have the insight to dig deep, solve complex
            issues and create solutions with a focus on functionality and
            reliability.
          </p>
          <p>
            My experience serving clients of many fields, including private
            businesses, corporations, and government facilities, proves my
            ability to adapt and pivot to understand challenges from customer's
            eyes. Through tireless troubleshooting and concise communication, I
            help clients develop a clear idea of their needs, and work with them
            to create solutions that meet their expectations and
            responsibilities.
          </p>
          <details>
            <summary>Front-End</summary>
            <img
              title='HTML 5'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg'
              alt='HTML 5'
              height='60px'
              width='60px'
            />
            <img
              title='CSS 3'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg'
              alt='CSS 3'
              height='60px'
              width='60px'
            />
            <img
              title='JavaScript'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
              alt='JavaScript'
              height='60px'
              width='60px'
            />
            <img
              title='Bootstrap'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'
              alt='Bootstrap'
              height='60px'
              width='60px'
            />
            <img
              title='React.js'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
              alt='React.js'
              height='60px'
              width='60px'
            />
          </details>
          <details>
            <summary>Back-End</summary>
            <img
              title='Node.js'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg'
              alt='Node.js'
              height='60px'
              width='60px'
            />
            <img
              title='Express.js'
              src={Express}
              alt='Express.js'
              height='60px'
              width='60px'
            />
            <img
              title='MySQL'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
              alt='MySQL'
              height='60px'
              width='60px'
            />
            <img
              title='MongoDB'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg'
              alt='MongoDB'
              height='60px'
              width='60px'
            />
            <img
              title='GraphQL'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg'
              alt='GraphQL'
              height='60px'
              width='60px'
            />
          </details>
          <details>
            <summary>OS</summary>
            <img
              title='Windows 10'
              src={Windows}
              alt='Windows 10'
              height='60px'
              width='60px'
            />
            <img
              title='Xubuntu'
              src={Xubuntu}
              alt='Xubuntu'
              height='60px'
              width='60px'
            />
          </details>
        </div>
        <div>
          <a
            className='about__text'
            href={
              'https://docs.google.com/document/d/14jv51lQsV4KxF0zR1CGyhtR9aA9X87FTYD_PapEazn8/edit?usp=sharing'
            }>
            Resume
          </a>
        </div>
      </main>
    </>
  );
}

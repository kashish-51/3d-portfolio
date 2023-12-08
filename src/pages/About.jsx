import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const About = () => {
  return (<>
 
  
    <section className='max-container gradient-bg '>


    <div className="gradients-container">

<div className="g1"></div>
<div className="g2"></div>
<div className="g3"></div>
<div class="interactive"></div>


</div>
      <h1 className='head-text'>
        Namaste  🙏🏼
        <div> I'm<span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Kashish
        </span>{" "}</div>
       
       
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-800'>
        <p>
        Welcome to my digital space! I'm thrilled to have you here. I am kashish, a passionate software developer. Throughout my journey, I've had the opportunity to explore and contribute to various projects that reflect my enthusiasm for web development. This portfolio serves as a window into my world, showcasing not just the projects I've worked on, but the creative spirit and problem-solving mindset that drive me. Join me on this virtual journey, and let's explore this exciting realm together!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Here's the rundown of my experiences:-
          </p>
        </div>

        <div className='mt-12 flex '>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement className=" "
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full '>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 mt-4' />
      


      

      <CTA/>
    
    <Footer/>
    </section>
    </>
  );
};

export default About;
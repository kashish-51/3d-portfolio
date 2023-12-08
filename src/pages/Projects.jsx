import { Link } from "react-router-dom";


import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <section className='max-container gradient-bg'>

      
    <div className="gradients-container">

<div className="g1"></div>
<div className="g2"></div>
<div className="g3"></div>
<div className="g4"></div>

<div class="interactive"></div>


</div>
      <h1 className='head-text '>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-800 mt-2 leading-relaxed'>
Ever since I have started learning web development I have created multiple projects, pouring my heart into each one and many of them are open source. I invite you to join in and lend your magic touch. Your contributions are not just welcome; they're genuinely valued and appreciated!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

    <CTA/>
    <Footer/>
    </section>
  );
};

export default Projects;

import React from "react";
import { skills } from "../constants";
import { certificates } from "../constants";
import { CTA } from "../components/CTA";

const About=()=>{
    return(
        <section className="max-container">
            <h1 className="head-text">
                HI there ,this is<span className="blue-gradient_text font-semibold drop-shadow">John</span>
            </h1>

            <div className="mt-s flex flex-col gap-3 text-slate-500 ">
                <p>
                a software engineer with advanced front-end
                 and moderate
                 back-end skills. I am also good at UI/UX
                 design and have a natural inclination for 
                 digital art. Constantly seeking out new 
                 challenges and opportunities to expand my 
                 knowledge and skills, I am passionate about 
                 software development and eager to make a 
                 significant contribution to the field. 
                  With a combination of 
                  technical expertise and a creative flair,
                   I am poised to achieve great 
                things in the field of software engineering.
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subheaded-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20" key={skill.name}>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-16">
                <h3 className="subhead-text">Certificates</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {certificates.map((cert) => (
                        <div className="block-container w-40 h-20" key={cert.name}>
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={cert.icon} alt={cert.name} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="border-slate-200" />
            <CTA/>
        </section>
    )
}

export  default About;
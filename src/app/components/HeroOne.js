'use client'
import React from "react";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import Image from "next/image";

export default function HeroOne(){
    return(
        <>
           <section className="relative pt-28 personal-wrapper overflow-hidden h-screen bg-amber-500/5" id="home">
            <div className="absolute inset-0" id="overlay"></div>
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Hey! I am <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Vijay Kumar Murakada',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Full Stack Developer',
                                1000,
                                'Senior Software Engineer',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typewrite text-amber-500"
                            repeat={Infinity}
                        />
                        <span className="typewrite text-amber-500" data-period="2000" data-type='[ "Vijay Kumar", "Website Designer", "Web Developer", "UI/UX Designer" ]'> <span className="wrap"></span> </span></h4>
                        <p className="text-slate-400 max-w-xl">Senior Software Engineer with 6 years of expertise in React.js, Next.js, TypeScript, Tailwind CSS, and microfrontend architecture. Proficient in building scalable, responsive web applications. Strong leader, mentor, and quick learner, committed to delivering innovative solutions using cutting-edge technologies to drive impactful results.</p>
                    
                        <div className="mt-6">
                            {/* <Link href="" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Hire Me</Link> */}
                            <a href="/resume/Vijay Kumar Murakada Resume.pdf" download className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1">Download CV</a>
                        </div>
                    </div>

                    <div className="relative">
                        <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}}  src="/images/hero/7.jpg" alt=""/>

                        {/* <div className="relative !md:absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <span className="text-3xl font-medium mb-0"><span className="counter-value font-bold" data-target="125"> <CountUp
                                            start={6}
                                            className="counter-value"
                                            end={10}
                                            duration={2.75} /></span>+</span>
                            <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
                        </div> */}

                        <div className="absolute lg:top-80 md:top-56 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                            <h6 className="font-semibold">Web Developer</h6>
                            <h6 className="text-sm text-slate-400 mt-1">6+ Years Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                {/* <Link href="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link> */}
            </div>
        </div>
        </>
    )
} 
import React from "react";
import StackIcon from "tech-stack-icons";
import {expertiseData} from "../Data/data"


export default function Skills(){
    return (
        <section>
            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Skills</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Throughout my tech journey, I’ve gained expertise in React, Next.js, and Node.js for building dynamic, scalable web applications.
                         I’ve explored Webpack Module Federation for implementing Micro Frontends, 
                         enabling independent development and deployment of frontend components. Additionally, I’ve worked with GraphQL, Express.js, and MongoDB to build efficient APIs and handle data storage. My experience also includes deploying applications on AWS, Vercel, and Netlify, utilizing Docker for containerization. With a focus on clean, maintainable code, I continuously strive to stay updated on industry trends and enhance performance through modern tools and practices.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {expertiseData.map((item,index)=>{
                        return(
                            <div className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900" key={index}>
                            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                                <div className="rotate-45">
                                   <StackIcon name={item.icon} size={32} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}
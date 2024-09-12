import React from 'react'

const Projects = () => {
    const projects = [
        
           {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            },
            {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            },
            {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            },
            {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            },
            {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            },
            {id:1,
            technology_used:'f',
            name:'xyz',
            description:'xyz'   
            }
    ]
  return (
    <>
        <div name='Projects' className='max-w-screen-2xl conatiner mx-auto px-4 md-px:20 my-10 space-y-10'>
        <h1 className='text-3xl  mb-5 '>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 space-y-4'>
            {
                projects.map((project)=>{
                 return(
                    <div key={project.id} className='md:w-[300px] md:h-[300px] border[2px] rounded-lg shadow-lg p-1  '>
                        <div>
                            <h1 className='px-2 font-bold text-xl mb-2'>{project.name}</h1>
                            <span className='px-2 text-lg'>{project.technology_used}</span>
                            <p className='text-gray-700'>{project.description}</p>
                        </div>

                        <div className='justify-around px-4 py-2 space-x-2'>
                            <button className='bg-blue-500 hover:bg-blue-800 font-semibold md:h-[60px] text-center text-white px-4 py-4 rounded'>View Project</button>
                            <button className='bg-green-500 hover:bg-green-800 font-semibold text-center  md:h-[60px] text-white px-4 py-4 rounded'>Source Code</button>
                        </div>
                    </div>
                 )   
                })
            }
            </div>
        </div>
    </>
  )
}

export default Projects

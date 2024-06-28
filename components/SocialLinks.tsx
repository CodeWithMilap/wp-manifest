import Link from 'next/link'
import React from 'react'

const SocialLinks = ({className}:any) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex gap-4 uppercase py-4 font-semibold text-sm tracking-[0.1em] text-black`}>
        <Link className="relative group hover:text-white" href="mailto:milapdave15@gmail.com?Subject=Hello Milap | Front End Developer"><span className='px-[2px]'>Email</span><span className="absolute left-0 -bottom-[0px] w-full h-[2px] transition-all bg-black -z-10 group-hover:h-full group-hover:bg-black/50"></span></Link>
        <Link className="relative group hover:text-white" rel="noreferrer noopener" href="https://github.com/milapdave" target="_blank"><span className='px-[2px]'>github</span><span className="absolute left-0 -bottom-[0px] w-full h-[2px] transition-all bg-black -z-10 group-hover:h-full group-hover:bg-black/50"></span></Link>
        <Link className="relative group hover:text-white" rel="noreferrer noopener" href="https://www.linkedin.com/in/milapdave/" target="_blank"><span className='px-[2px]'>linkedin</span><span className="absolute left-0 -bottom-[0px] w-full h-[2px] transition-all bg-black -z-10 group-hover:h-full group-hover:bg-black/50"></span></Link>
        <Link className="relative group hover:text-white" rel="noreferrer noopener" href="https://www.facebook.com/milapdave" target="_blank"><span className='px-[2px]'>facebook</span><span className="absolute left-0 -bottom-[0px] w-full h-[2px] transition-all bg-black -z-10 group-hover:h-full group-hover:bg-black/50"></span></Link>
        <Link className="relative group hover:text-white" rel="noreferrer noopener" href="https://www.youtube.com/@milapdave" target="_blank"><span className='px-[2px]'>youtube</span><span className="absolute left-0 -bottom-[0px] w-full h-[2px] transition-all bg-black -z-10 group-hover:h-full group-hover:bg-black/50"></span></Link>
      </div>
    </div>
  )
}

export default SocialLinks
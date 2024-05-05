import React from 'react'

const SocialLinks = () => {
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 uppercase py-4 font-semibold tracking-[0.1em] text-black`}>
        <a className="underline underline-offset-4 hover:no-underline" href="mailto:milapdave15@gmail.com?Subject=Hello Milap | Front End Developer">Email</a>
        <a className="underline underline-offset-4 hover:no-underline" rel="noreferrer noopener" href="https://github.com/milapdave" target="_blank">github</a>
        <a className="underline underline-offset-4 hover:no-underline" rel="noreferrer noopener" href="https://www.linkedin.com/in/milapdave/" target="_blank">linkedin</a>
        <a className="underline underline-offset-4 hover:no-underline" rel="noreferrer noopener" href="https://www.facebook.com/milapdave" target="_blank">facebook</a>
        <a className="underline underline-offset-4 hover:no-underline" rel="noreferrer noopener" href="https://www.youtube.com/@milapdave" target="_blank">youtube</a>
      </div>
    </div>
  )
}

export default SocialLinks
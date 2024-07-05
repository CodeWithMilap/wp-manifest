import React from 'react'
import RichTextRenderer from './RichTextRenderer'

const ContentBlock = ({blok}: any) => {
    return (
        <div className='prose mb-8 text-justify leading-relaxed lg:prose-xl'>
            {<RichTextRenderer content={blok.content} />}
        </div>
    )
}

export default ContentBlock
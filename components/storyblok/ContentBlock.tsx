import React from 'react'
import RichTextRenderer from './RichTextRenderer'

const ContentBlock = ({blok}: any) => {
    return (
        <div className=''>
            <RichTextRenderer content={blok?.content} />
        </div>
    )
}

export default ContentBlock
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AppButton from '../Button';
import { CheckCheckIcon, CopyIcon } from '@/utils/Icons';

SyntaxHighlighter.registerLanguage('jsx', jsx);
const CodeHighlighter = ({ blok }: any) => {

  const customStyle = {
    borderRadius: '8px',
    backgroundColor: '#1e293b',
    padding: '20px',
    zoom: '1.3',
  };
  const [copied, setCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard
      .writeText(blok?.code)
      .then(() => {
        // Code successfully copied to clipboard
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => console.error('Failed to copy: ', error));
  };
  return (
    <div className='relative my-5'>
      <AppButton
        variant='link'
        label=''
        icon={
          copied ? (
            <>
              <CheckCheckIcon className='mr-2 h-4 w-4' />
            </>
          ) : (
            <>
              <CopyIcon className='mr-2 h-4 w-4' />
            </>
          )
        }
        className='absolute right-4 top-4 text-white'
        onClick={copyCodeToClipboard}
      />
      <SyntaxHighlighter
        customStyle={customStyle}
        language='javascript'
        style={vscDarkPlus}
      >
        {blok.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;

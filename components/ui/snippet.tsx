'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ClipboardIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button, type ButtonProps } from './button'

const snippetVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
}

interface SnippetProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string
}

const Snippet: React.FC<SnippetProps> = ({ className, text, ...props }) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000) // Reset the copied state after 2 seconds
            } catch (error) {
                toast.error('Failed to copy to clipboard')
            }
        } else {
            toast.error('Failed to copy to clipboard')
        }
    }

    return (
        <div
            {...props}
            className={cn(
                'relative flex items-center justify-between rounded-lg border bg-foreground py-2.5 pl-3 pr-2.5 font-mono text-sm [&>svg:hover]:text-foreground [&>svg]:text-muted-foreground [&>svg]:transition [&_svg]:shrink-0',
                className
            )}
        >
            <span className='mr-6'>{text}</span>
            <Button
                className='size-7 border border-zinc-700 bg-zinc-800 text-white backdrop-blur-lg hover:bg-zinc-700'
                aria-label='Copy imports statement'
                size='icon'
                variant='outline'
                onPress={handleCopy}
            >
                <AnimatePresence mode='wait' initial={false}>
                    {copied ? (
                        <motion.span
                            key='checkmark'
                            variants={snippetVariants}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        >
                            <Check />
                        </motion.span>
                    ) : (
                        <motion.span
                            key='copy'
                            variants={snippetVariants}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        >
                            <ClipboardIcon />
                        </motion.span>
                    )}
                </AnimatePresence>
            </Button>
        </div>
    )
}

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
    ariaLabel?: string
    initialIcon?: React.ReactNode
    copiedIcon?: React.ReactNode
}

const CopyButton = ({
    initialIcon,
    copiedIcon,
    ariaLabel = 'Copy',
    isCopied,
    ...props
}: CopyButtonProps) => {
    return (
        <Button
            className='size-7 border border-zinc-700 bg-zinc-800 text-white backdrop-blur-lg hover:bg-zinc-700'
            aria-label={ariaLabel}
            size='icon'
            variant='outline'
            {...props}
        >
            <AnimatePresence mode='wait' initial={false}>
                {isCopied ? (
                    <motion.span
                        key='checkmark-import'
                        variants={snippetVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        {copiedIcon ?? <Check />}
                    </motion.span>
                ) : (
                    <motion.span
                        key='copy-import'
                        variants={snippetVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        {initialIcon ?? <ClipboardIcon />}
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    )
}

export { CopyButton, Snippet, snippetVariants, type SnippetProps }

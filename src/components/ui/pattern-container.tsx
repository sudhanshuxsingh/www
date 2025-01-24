import { cn } from '@/lib/utils'
import React from 'react'

const PatternContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed  max-lg:h-66 max-lg:border-t lg:border-l', className)}>{children}</div>
    )
}

export default PatternContainer
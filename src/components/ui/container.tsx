import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn('mx-auto max-w-[40rem] px-4', className)}>{children}</div>
    );
};

export default Container;
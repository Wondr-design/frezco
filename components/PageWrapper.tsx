
import React from 'react';

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
    return (
        <div className={`container mx-auto px-6 py-12 md:py-20 ${className}`}>
            {children}
        </div>
    );
};

export default PageWrapper;


import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Link to="/contact">
                <Button>
                    Send Request
                </Button>
            </Link>
        </div>
    );
}

export default StickyCTA;

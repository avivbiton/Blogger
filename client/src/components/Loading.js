import React from 'react'

export default function Loading({ className, width = 1, height = 1, center = false }) {
    return (
        <div className={center ? "text-center" : ""}>
            <div className={"spinner-grow " + className} role="status" style={{ width: `${width}rem`, height: `${height}rem` }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

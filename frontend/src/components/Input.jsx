import React from 'react'

export default function Input({ className, placeholder, value, setValue }) {
    return (
        <input
            className={className}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

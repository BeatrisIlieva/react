import { useEffect, useRef, useState } from 'react';

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
            <button onClick={() => setOpen((prev) => !prev)}>Toggle Dropdown</button>
            {open && (
                <ul style={menuStyle}>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
    );
}

const menuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '0.5rem',
    listStyle: 'none',
};

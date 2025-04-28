import React, { useState, useEffect } from 'react';
import BlueButton from './BlueButton';

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    let Links = [
        { name: "Avaleht", link: "/" },
        { name: "Meist", link: "/meist" },
        { name: "Teenused", link: "/teenused" },
        { name: "Referentsid", link: "/referentsid" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out
            ${scrolling ? 'bg-[#fbfbfb] py-[10px] shadow-md' : 'bg-transparent py-[25px] text-[#fbfbfb]'}`}>
            <a href='/' className={`text-4xl px-[250px] transition-all duration-300 ease-in-out ${scrolling ? 'text-3xl' : 'text-4xl'}`}>
                Logo
            </a>
            <hr className='my-[15px] opacity-50' />

            <div className={`flex items-center justify-between px-[250px] text-[19px] transition-all duration-300 ease-in-out`}>
                <div className='flex items-center gap-[50px]'>
                {Links.map((link) => (
                    <div key={link.name}>
                        <a href={link.link} className='hover:text-[#00529c] duration-150'>
                            {link.name}
                        </a>
                    </div>
                ))}
                </div>

                <BlueButton href="/">
                    Kontakt
                </BlueButton>
            </div>
        </div>
    );
};

export default NavBar;

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Referents from '../components/Referents';

const ReferentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] text-[#414141]">
      <NavBar />
      <main className="flex-grow">
        <Referents />
      </main>
      <Footer />
    </div>
  );
};

export default ReferentsPage; 
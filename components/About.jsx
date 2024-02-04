import React from 'react';

const ApproachSection = () => {
  return (
    <section className="bg-sky-600 py-12 w-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-decoration-line: underline decoration-yellow-400 ">Our Approach</h2>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-xl md:text-2xl lg:text-3xl px-2 md:mb-10">
              At Phoenix Soccer Club, our approach is centered around fostering a positive and supportive environment for the youth. We believe in nurturing both the athletic and personal development of each player.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4 px-2">
              Through dedicated coaching, teamwork, and a commitment to excellence, we aim to instill valuable life skills, a love for the game, and a sense of community in every participant.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/baby2.jpg"
              alt="Our Approach"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

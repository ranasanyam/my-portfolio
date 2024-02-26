import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, description, img} = testiMonialDetail;

    return (
        <div className="item mt-4 px-5 md:px-12 py-12" >
            <div className='absolute h-20 left-0 z-10 top-6 w-full mx-auto'>
            <div className="testimonial-name w-[200px] py-4">
                <div className='flex items-center justify-center h-full'>{name}</div>
            </div>
            </div>
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
            
        </div>
    );
};

export default TestiMonialsDetails;
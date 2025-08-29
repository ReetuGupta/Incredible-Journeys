import { useState } from "react";

export default function Card({image, id, info, price, name, handleRemoveTour}) {
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,150)}... `;
    const handleReadMore = () =>{
        setReadMore(!readMore);
    }

    return(
        <div className="shadow-lg rounded-xl hover:scale-105 transform ease-in delay-75 relative h-max w-[400px]">
            <img src={image} alt={name} 
            className="rounded-t-sm p-1  object-cover aspect-square"/>
            <div className="p-6 flex flex-col gap-1 mb-10">
                <h3 className="text-2xl font-bold text-green-600">$ {price}</h3>
                <h2 className="text-[#0C175E] text-2xl font-bold tracking-wide">{name}</h2>
                <p className="text-justify tracking-wide">
                    {description}
                    <span onClick={handleReadMore} className="text-cyan-400 font-medium cursor-pointer">
                        {readMore ? 'Show Less' : 'Read More'}
                    </span>
                </p>
            </div>
            <button onClick={() => handleRemoveTour(id)}
                className="absolute left-1/3 bottom-1.5 border py-2 px-4 rounded-md italic font-semibold text-xl cursor-pointer bg-cyan-100">
                Not Interested
            </button>
        </div>
    );
}
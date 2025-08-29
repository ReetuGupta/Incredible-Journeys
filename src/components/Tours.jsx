import Card from "./Card";

export default function Tours ({tours, handleRemoveTour}){
    return(
        <div className="grid md:grid-cols-2 xl:grid-cols-3 max-w-[1300px] justify-center gap-7 mt-4 mx-auto">
            {tours.map( (tour) => {
                return (
                    <Card 
                    key={tour.id}
                    {...tour}
                    handleRemoveTour={handleRemoveTour} />
                );
            })}
        </div>
    );
}
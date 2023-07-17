
export default function OfferCard({icon, heading, body}){
    return(
        <>
            <div className="flex flex-col justify-center items-center border gap-6 px-9 rounded-2xl md:w-[400px] h-[300px]">
                {icon}
                <h1 className="text-2xl font-medium">{heading}</h1>
                <p className="text-center text-[#505661]">{body}</p>
            </div>
        </>
    )
}
import Image from "next/image";

interface DestinationProps {
    image: string;
    title: string;
    description: string;
    link: string;
  }
  
  const DestinationCard: React.FC<DestinationProps> = ({ image, title, description, link }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image src={image} alt={title} width={800}
          height={500} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl text-primary font-semibold">{title}</h3>
          <p className="text-pink-500 text-sm font-semibold my-2">● Destinations</p>
          <p className="text-gray-600">{description}</p>
          <a href={link} className="text-green-600 font-semibold mt-4 inline-block">
            Read More →
          </a>
        </div>
      </div>
    );
  };
  
  export default DestinationCard;
  
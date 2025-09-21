import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = ["estate",  "normal", "City"];

const Pill = ({ label }: { label: string }) => (
  <span className="px-4 py-2 bg-gray-100 border rounded-full text-sm cursor-pointer hover:bg-blue-100">
    Ndovu{label}
  </span>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[400px] flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://example.com/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="">Ndovu</h1>
        <p className="">the best class ever</p>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8 flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="px-6 grid md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 text-blue-600 font-semibold">${property.price}/night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}


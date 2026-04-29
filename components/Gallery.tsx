import Image from "next/image";
import config from "../business.config.json";

export default function Gallery() {
  const images = (config.galleryImages || []) as string[];
  if (images.length === 0) return null;

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: config.primaryColor }}
          >
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Recent Projects
          </h2>
        </div>

        {/* Photo grid: big feature + 3 smaller */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images[0] && (
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden aspect-square">
              <Image
                src={images[0]}
                alt={`${config.name} project`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          )}
          {images.slice(1, 4).map((img, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={img}
                alt={`${config.name} project ${i + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

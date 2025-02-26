const testimonials = [
  {
    text: "Mi-One is a brand unlike any other and will always have my support for life. They've impacted my life in several ways being my effective delivery system for CBD. It has introduced me to so many people, as a conversation starter with it's stylish looks and diverse uses.",
    author: "-Samantha J (SJ)",
    rating: 5,
  },
  {
    text: "I had no idea vaping on the go could be so easy! No more mods or batteries being lugged around. It feels like it’s setting the trend for pod devices especially in the looks department! But mostly the brand looks after it’s people, it’s a feeling that you matter. They’re there to help.",
    author: "-Amardea E.",
    rating: 4,
  },
  {
    text: "The Mi-One brand is an honest company that stands by its products 100% so I have confidence buying in Mi-One brand products. It has allowed me some freedoms that other vape mods just can't do. I love the chain I can wear this under my shirt with me even if I don't have my purse with me.",
    author: "-Jamie M.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 border-t">
      {/* Title */}
      <h2 className="text-center text-gray-700 text-xl sm:text-2xl font-semibold mb-8">
        WHAT PEOPLE SAY
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#efefef] p-6 rounded-lg shadow-md text-center"
          >
            {/* Star Rating */}
            <div className="flex justify-center mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-purple-500 text-lg">
                  &#9733;
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-900 text-sm sm:text-base font-medium mb-4">
              {testimonial.text}
            </p>

            {/* Author */}
            <p className="text-gray-900 font-bold text-sm sm:text-base">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

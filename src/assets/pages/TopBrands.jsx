// JSON Data for Brand Logos
const brandLogos = {
  imageLinks: [
    "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/MIpod_Logo_Black_1.png?v=1653606819",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Katchmi_Brand-Cloud-Logos_300x100-01.png?v=1724278676",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Nix-Liquids_Brand-Cloud-Logos_300x100-01.png?v=1724278676",
    "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/vaporlax-mesh-black.png?v=1653604827",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/EBCREATE_Logo.png?v=1693001209",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Mask_group_5.png?v=1682462880",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Rabbeats_Brand_Cloud_Logo_500x250_2a3b898e-cba3-4a9f-be00-917c74baf070.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Funky-Lands-Logo.png?v=1705005381",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Flonq_logo_0cf71f01-6bfb-47de-830d-457ce75e4b3c.png?v=1689867868",
    "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Smok-Logo.png?v=1701360913",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Snoopysmoke-Logo.png?v=1705005381",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Fifty-Bar_Brand-Cloud-Logos_300x100-01.png?v=1724278676",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Geek-Bar-Logo.png?v=1705005380",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/utbar_logo.png?v=1693001209",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Fume_Mini_Logo.png?v=1661366730",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Orion_Bar_Logo_a8a53c4c-c09d-4c74-b184-abc294f59cf3.png?v=1693001209",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Space-Mary_Brand_Cloud_Logo_500x250_11ca34d6-5ab2-46a6-a6e5-b83c26244d26.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Raz-Logo.png?v=1705005380",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Sourin-Logo.png?v=1705005380",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/flum_pebble_logo.png?v=1674253382",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/puffco-logo.png?v=1681834473",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Mask_group_7.png?v=1682462880",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Vaporesso_Brand_Cloud_Logos_500x250_5028d4d3-aa22-40e5-87ee-4bf61f5d6fd8.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Elux_Brand_Cloud_Logo_500x250_23eae951-1a3d-409c-b694-8753488e51c3.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Zimo_Brand_Cloud_Logo_500x250_e358c1c2-0df7-4861-bd25-2151123e5135.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Off-Stamp_Brand_Cloud_Logo_500x250_eda1517b-a869-48fd-829f-d8f45b174ee9.png?v=1715877709",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Naked_Brand_Cloud_Logo_500x250_1b905791-85d6-4cde-9a7f-75eab0896129.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Suicide-Bunny_Brand_Cloud_Logo_500x250_3dc21110-baa9-4957-b044-074b65d6f7d1.png?v=171587770808",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Caliburn_Brand_Cloud_Logo_500x250_b0e7878f-7fc8-4b0a-b52b-c554965767ef.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Coastal-Clouds_Brand_Cloud_Logo_500x250_5d1b2c2c-fc6f-4891-b3a5-644e41e23368.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Fasta_Brand_Cloud_Logo_500x250_0d994ef0-7686-464e-ae5f-2c14c67f7d45.png?v=1715877708",
    "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/vaporlax-salts-logo_1_4a167dd5-b83b-46cd-9405-26af0b028a07.png?v=1653606346",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/Pod-Juice-Logo.png?v=1705005380",
    "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Cloud-nerdz-footer-logo_1_105d4d98-6237-47fb-83c1-16758bd2f8e2.png?v=1653606346",
    "https://cdn.shopify.com/s/files/1/0060/6869/9205/files/I-Heart-Salts-Logo.png?v=1705005381",
  ],
};

const TopBrands = () => {
  return (
    <div className="border-t mx-auto pb-16 px-4">
      {/* Title */}
      <h1 className="text-gray-700 font-semibold text-lg md:text-2xl p-8 text-center">
        FIND TOP VAPE BRANDS
      </h1>

      {/* Logo Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 items-center gap-6 lg:px-20 justify-center">
        {brandLogos.imageLinks.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand Logo ${index + 1}`}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[135px] cursor-pointer filter grayscale hover:grayscale-0 hover:-translate-y-2 transition-all duration-300 mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default TopBrands;

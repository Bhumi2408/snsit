export const WHATSAPP_NUMBER = "919988991217";
export const WHATSAPP_WEB = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=`;

export const CONTACT = {
  email: "info@snsitsolutions.in",
  phone: "+91 9311885572",
  address: "319, Main Road, near consumer court, Shalimar Village, Shalimar Bagh, Delhi, 110088",
};

export const productLinks = [
  { label: "XPON ONU", href: "/xpon-onu/" },
  { label: "DUALBAND XPON", href: "/dualband-xpon/" },
  { label: "FIBER OPTIC PATCH CORD", href: "/fiber-optic-patch-cord/" },
  { label: "COPPER CABLES", href: "/copper-cables/" },
  {
    label: "19″ COMMUNICATION RACKS For Networking/Server Equipments",
    href: "/19-communication-racks-for-networking-server-equipments/",
  },
  { label: "FLOOR STANDING NETWORK/SERVER RACKS", href: "/floor-standing-network-server-racks/" },
  { label: "FLOOR STANDING SERVER RACKS", href: "/floor-standing-server-racks/" },
  { label: "STANDARD ACCESSORIES FOR RACKS", href: "/standard-accessories-for-racks/" },
  { label: "LIU/FM S", href: "/liu-fm-s/" },
  { label: "SLEEVS", href: "/sleevs/" },
  { label: "FIBER JC BOX", href: "/fiber-jc-box/" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/#product", children: productLinks },
  { label: "Why Choose Us", href: "/#choose" },
  { label: "Contact Us", href: "/#contact" },
];

// Desktop/tablet hero slider: image + the colour shown behind it
export const heroSlides = [
  { src: "/Slide-1.jpeg", color: "rgba(0,114,210,1)" },
  { src: "/Slide-2.png", color: "rgba(255,255,255,0.5)" },
  { src: "/WhatsApp-Image-2024-12-12-at-16.18.08.jpeg", color: "rgba(255,255,255,0.5)" },
  { src: "/WhatsApp-Image-2024-12-12-at-16.18.07.jpeg", color: "rgba(255,255,255,0.5)" },
  { src: "/WhatsApp-Image-2024-12-12-at-18.35.12-scaled-e1734009291124.jpeg", color: "rgba(0,114,210,1)" },
  { src: "/WhatsApp-Image-2024-12-12-at-18.17.07.jpeg", color: "rgba(0,114,210,1)" },
];

// Mobile-only carousel
export const mobileSlides = [
  "/WhatsApp-Image-2024-12-12-at-17.53.02.jpeg",
  "/WhatsApp-Image-2024-12-12-at-18.23.49.jpeg",
  "/Untitled-design-3.png",
  "/WhatsApp-Image-2024-12-12-at-18.05.38.jpeg",
  "/WhatsApp-Image-2024-12-12-at-17.29.45.jpeg",
  "/WhatsApp-Image-2024-12-12-at-18.35.12-scaled-e1734009291124.jpeg",
];

// layout: "single" = one image widget, "grid" = boxed row of white image tiles
export const products = [
  {
    title: "Dualband xpon ont with voice",
    tag: "h2",
    text: "A dual-band XPON ONT with voice support is a high-performance optical network terminal designed for fiber-to-the-home (FTTH) networks. It supports both GPON and EPON technologies, offers dual-band Wi-Fi (2.4GHz and 5GHz) for seamless connectivity, and includes VoIP functionality for high-quality voice communication.",
    href: "/dualband-xpon/",
    media: "left",
    layout: "single",
    narrow: true,
    images: ["/477543aa-6a74-4d61-8419-27f60965d3f9-e1734341443901.jpg"],
  },
  {
    title: "XPON ONU 4GE + 1POTS+ DUAL BAND WIFI",
    tag: "h2",
    text: "The XPON ONU (Optical Network Unit) with 4 GE (Gigabit Ethernet) ports, 1 POTS (Plain Old Telephone Service) port, and dual-band Wi-Fi is a high-performance networking device designed for fiber-optic connections. It supports ultra-fast internet speeds, wired connections for multiple devices, voice calling through the POTS port, and reliable wireless connectivity on both 2.4GHz and 5GHz bands, making it ideal for home or small office use.",
    href: "/xpon-onu/",
    media: "right",
    layout: "single",
    narrow: true,
    images: ["/wifi-e1734067641445.png"],
  },
  {
    title: "FIBER OPTIC PATCH CORD",
    subtitle: "SINGLE MODE, MULTIMMODE",
    tag: "h3",
    text: "A Fiber Optic Patch Cord is a high-performance cable designed to connect optical devices, providing reliable data transmission with minimal signal loss. It features fiber optic connectors at both ends, ensuring seamless connectivity in telecommunication, networking, and data center applications. These cables are available in various lengths, connector types (e.g., LC, SC, ST), and fiber modes (single-mode or multimode) to suit specific requirements.",
    href: "/fiber-optic-patch-cord/",
    media: "left",
    layout: "grid",
    images: [
      "/Screenshot-2024-12-30-162048-e1735558547585.png",
      "/Screenshot-2024-12-30-170225.png",
      "/Screenshot-2024-12-30-170620.png",
    ],
  },
  {
    title: "COPPER CABLES CAT 5e",
    tag: "h3",
    text: "Cat 5e copper cables are a cost-effective solution for high-speed networking, supporting 1 Gbps data transfer over 100 meters with 100 MHz frequency. Their UTP design minimizes interference, ensuring stable connections. Durable and easy to install, they are ideal for home, office, and industrial networks, offering compatibility with older systems.",
    href: "/copper-cables/",
    media: "right",
    layout: "single",
    images: ["/Screenshot-2025-01-13-181029.png"],
  },
  {
    title: "19″ COMMUNICATION RACKS For Networking/Server Equipments",
    tag: "h3",
    text: "Our 19″ Communication Racks are designed to optimize your networking and server equipment setup. These racks provide robust support and organization for a variety of networking and server components, ensuring efficient operation and easy maintenance. Built with durability and functionality in mind, our racks are ideal for organizing and securing your equipment in data centers, offices, and server rooms. Explore our range to find the perfect solution for your networking needs.”",
    href: "/19-communication-racks-for-networking-server-equipments/",
    media: "left",
    layout: "grid",
    images: ["/Screenshot-2025-02-06-171350.png", "/Screenshot-2025-02-06-171405.png"],
  },
  {
    title: "FLOOR STANDING NETWORK/SERVER RACKS",
    tag: "h3",
    text: "Our Floor Standing Network/Server Racks are designed for secure, efficient, and organized housing of networking and server equipment. These racks provide excellent ventilation, cable management, and durability to support high-performance IT infrastructure. Ideal for data centers, offices, and server rooms, they ensure easy access, maintenance, and protection of critical hardware. Available in various sizes and configurations to meet diverse requirements.",
    href: "/floor-standing-network-server-racks/",
    media: "right",
    layout: "single",
    images: ["/Screenshot_2025-02-06_171951-removebg-preview.png"],
  },
  {
    title: "FLOOR STANDING SERVER RACKS",
    tag: "h3",
    text: "Our Floor Standing Server Racks are engineered for optimal organization, security, and airflow management of critical IT and networking equipment. Designed to accommodate servers, switches, and other essential hardware, these racks offer robust construction, efficient cable management, and enhanced ventilation. Ideal for data centers, offices, and enterprise setups, they provide easy access and scalability to meet evolving infrastructure needs. Available in multiple sizes and configurations for versatile applications.",
    href: "/floor-standing-server-racks/",
    media: "left",
    layout: "grid",
    images: [
      "/Screenshot_2025-02-06_174030-removebg-preview.png",
      "/Screenshot_2025-02-06_174035-removebg-preview.png",
    ],
  },
  {
    title: "STANDARD ACCESSORIES FOR RACKS",
    tag: "h3",
    text: (
      <>
        Enhance the functionality and efficiency of your network and server racks with our{" "}
        <strong>standard accessories</strong>. Designed for better cable management, ventilation, and
        security, these accessories ensure seamless operation and easy maintenance of your IT
        infrastructure.
      </>
    ),
    href: "/standard-accessories-for-racks/",
    media: "right",
    layout: "single",
    images: ["/Screenshot-2025-02-06-174636.png"],
  },
  {
    title: "LIU/FM S",
    tag: "h3",
    text: (
      <>
        Our <strong>LIU (LCS Integration Unit) / FMS (Fiber Management System)</strong> is designed for
        efficient fiber optic cable management, ensuring secure termination, organization, and
        protection of fiber connections. These units provide a structured solution for high-density
        fiber networks, enabling easy maintenance and minimal signal loss.
      </>
    ),
    href: "/liu-fm-s/",
    media: "left",
    layout: "grid",
    images: ["/Screenshot-2025-02-06-180156.png"],
  },
  {
    title: "SLEEVS",
    tag: "h3",
    text: (
      <>
        Fiber Optic Sleeves are essential for protecting and reinforcing fusion-spliced fiber
        connections. These heat-shrinkable sleeves provide{" "}
        <strong>mechanical strength, environmental protection, and minimal signal loss</strong>, ensuring
        long-lasting and high-performance fiber optic connections.
      </>
    ),
    href: "/sleevs/",
    media: "right",
    layout: "single",
    images: ["/Screenshot_2025-02-06_180805-removebg-preview.png"],
  },
  {
    title: "FIBER JC BOX",
    tag: "h3",
    text: "A Fiber Junction Box (Fiber JC Box) is a crucial component in fiber optic networks, designed to manage and protect fiber connections. It houses various fiber optic cable junctions, ensuring secure and organized connectivity. To enhance durability and performance, robust fiber optic sleeves are used within the box. These sleeves reinforce fusion-spliced connections, providing mechanical strength and environmental protection. Additionally, they minimize signal loss, ensuring long-lasting and high-performance fiber optic connections.",
    href: "/fiber-jc-box/",
    media: "left",
    layout: "grid",
    images: ["/Screenshot-2025-02-10-133820.png"],
  },
];

export const features = [
  {
    title: "Quality Control",
    image: "/Quality-Control.webp",
    text: "We ensure top-notch telecom equipment through rigorous testing and quality assurance processes.",
  },
  {
    title: "Innovation",
    image: "/Innovation.webp",
    text: "Our products and solutions leverage the latest advancements, keeping our clients ahead of the curve.",
  },
  {
    title: "Expertise",
    image: "/Expertise.webp",
    text: "Our team provides expert guidance and solutions to tackle your unique technological challenges.",
  },
  {
    title: "Customer Satisfaction",
    image: "/Customer-Satisfaction.webp",
    text: "Our first goal is your satisfaction. our dedicated team is always ready to help with technical assistance.",
  },
];

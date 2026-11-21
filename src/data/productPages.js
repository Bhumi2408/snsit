// Product detail pages. Each page is a blue title banner followed by sections:
//  - { type: "catalog", images }   one boxed, padded section per catalog image
//  - { type: "columns", cols }     a row of columns; a column holds an image,
//                                  a video (with its aspect ratio) or nothing
const catalog = (n) => `/PRODUCT_CATLOG_SNS-IT-2024_241230_214827-1_page-00${n}.jpg`;

export const productPages = [
  {
    slug: "xpon-onu",
    title: "XPON ONU - SNS IT SOLUTIONS",
    heading: "XPON ONU 4GE + 1POTS+ DUAL BAND WIFI",
    sections: [
      {
        type: "columns",
        cols: [
          { width: "33.333%" },
          { width: "33.333%", video: "/WhatsApp-Video-2024-12-12-at-18.53.32.mp4", ratio: "0.5625" },
          { width: "33.333%" },
        ],
      },
    ],
  },
  {
    slug: "dualband-xpon",
    title: "DUALBAND XPON - SNS IT SOLUTIONS",
    heading: "DUALBAND XPON ONT WITH VOICE",
    sections: [
      {
        type: "columns",
        cols: [
          { width: "50%", video: "/WhatsApp-Video-2024-12-17-at-11.40.54-AM.mp4", ratio: "1.77777" },
          { width: "50%" },
        ],
      },
      { type: "catalog", images: ["/sns-router_page-0001.jpg", "/sns-router_page-0002.jpg"] },
    ],
  },
  {
    slug: "fiber-optic-patch-cord",
    title: "FIBER OPTIC PATCH CORD - SNS IT SOLUTIONS",
    heading: "FIBER OPTIC PATCH CORD",
    sections: [
      {
        type: "columns",
        cols: [
          { width: "50%", video: "/WhatsApp-Video-2024-12-28-at-18.49.24.mp4", ratio: "1.77777", center: true },
          { width: "25%", video: "/WhatsApp-Video-2024-12-28-at-18.49.26.mp4", ratio: "0.5625" },
          { width: "24.666%" },
        ],
      },
      {
        type: "columns",
        cols: [
          { width: "33.333%", image: "/Screenshot-2024-12-30-162941.png" },
          { width: "33.333%", image: "/Screenshot-2024-12-30-172247.png" },
          { width: "33.333%", image: "/Screenshot-2024-12-30-172348.png" },
        ],
      },
    ],
  },
  {
    slug: "copper-cables",
    title: "COPPER CABLES - SNS IT SOLUTIONS",
    heading: "COPPER CABLES CAT 5e",
    sections: [
      {
        type: "columns",
        cols: [
          { width: "25%" },
          { width: "50%", image: "/Screenshot-2025-01-13-181943-e1736772628205.png" },
          { width: "25%" },
        ],
      },
    ],
  },
  {
    slug: "19-communication-racks-for-networking-server-equipments",
    title: "19\" COMMUNICATION RACKS FOR NETWORKING/SERVER EQUIPMENTS - SNS IT SOLUTIONS",
    heading: "19″ COMMUNICATION RACKS FOR NETWORKING/SERVER EQUIPMENTS",
    sections: [{ type: "catalog", images: [catalog("09"), catalog("10")] }],
  },
  {
    slug: "floor-standing-network-server-racks",
    title: "FLOOR STANDING NETWORK/SERVER RACKS - SNS IT SOLUTIONS",
    heading: "FLOOR STANDING NETWORK/SERVER RACKS",
    sections: [{ type: "catalog", images: [catalog("11")] }],
  },
  {
    slug: "floor-standing-server-racks",
    title: "FLOOR STANDING SERVER RACKS - SNS IT SOLUTIONS",
    heading: "FLOOR STANDING SERVER RACKS",
    sections: [{ type: "catalog", images: [catalog("12")] }],
  },
  {
    slug: "standard-accessories-for-racks",
    title: "STANDARD ACCESSORIES FOR RACKS - SNS IT SOLUTIONS",
    heading: "STANDARD ACCESSORIES FOR RACKS",
    sections: [{ type: "catalog", images: [catalog("13")] }],
  },
  {
    slug: "liu-fm-s",
    title: "LIU/FM S - SNS IT SOLUTIONS",
    heading: "LIU/FM S",
    sections: [{ type: "catalog", images: [catalog("14"), catalog("15")] }],
  },
  {
    slug: "sleevs",
    title: "SLEEVS - SNS IT SOLUTIONS",
    heading: "SLEEVS",
    sections: [{ type: "catalog", images: [catalog("16")] }],
  },
  {
    slug: "fiber-jc-box",
    title: "FIBER JC BOX - SNS IT SOLUTIONS",
    heading: "FIBER JC BOX",
    sections: [{ type: "catalog", images: [catalog("17"), catalog("18")] }],
  },
];

export const getProductPage = (slug) => productPages.find((p) => p.slug === slug);

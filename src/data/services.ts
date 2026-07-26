export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "led-sign-boards",
    name: "LED Sign Boards",
    shortDescription:
      "Bright, energy-efficient LED sign boards that keep your business visible day and night.",
    description: [
      "LED sign boards are the most popular choice for shops, offices, and commercial buildings that want a bold, always-on presence. We design and fabricate custom LED boards using high-brightness LED modules, weatherproof acrylic/metal housings, and durable power supplies built for outdoor Pakistani weather.",
      "Every board is custom-sized and lettered to match your brand — from simple illuminated name boards to large-format storefront displays visible from a distance, day or night.",
    ],
    benefits: [
      "Up to 80% lower power consumption than traditional signage",
      "Weatherproof, built for outdoor use year-round",
      "Custom sizes, shapes, colors, and lettering",
      "Long-lasting LEDs rated for 50,000+ hours",
    ],
    faqs: [
      {
        q: "How long do LED sign boards last?",
        a: "With quality LED modules and proper installation, our boards typically last 5–8 years with minimal maintenance.",
      },
      {
        q: "Can I get a double-sided LED board?",
        a: "Yes, we build single and double-sided boards for corner shops, poles, and hanging signage.",
      },
    ],
    icon: "bulb",
  },
  {
    slug: "acrylic-sign-boards",
    name: "Acrylic Sign Boards",
    shortDescription:
      "Sleek, premium acrylic boards for a clean, modern brand look indoors or outdoors.",
    description: [
      "Acrylic sign boards offer a premium, glass-like finish that instantly elevates how a business looks. We CNC-cut and engrave acrylic sheets in 3mm to 20mm thickness, with optional LED backlighting, standoff mounting, or 3D raised lettering.",
      "Popular for reception signage, office name plates, clinic boards, and boutique storefronts where a polished, high-end appearance matters.",
    ],
    benefits: [
      "Crystal-clear, scratch-resistant premium finish",
      "Available in clear, frosted, and colored acrylic",
      "Great for indoor reception & office signage",
      "Can be combined with LED backlighting",
    ],
    faqs: [
      {
        q: "Is acrylic signage suitable for outdoor use?",
        a: "Yes, UV-stabilized acrylic holds up well outdoors, though we recommend backlit or ACP-backed options for direct sun exposure.",
      },
      {
        q: "Can you engrave logos into acrylic?",
        a: "Yes, we offer CNC engraving, printing, and cut-out lettering on acrylic sheets.",
      },
    ],
    icon: "layers",
  },
  {
    slug: "3d-letter-signs",
    name: "3D Letter Sign Boards",
    shortDescription:
      "Raised 3D letters in acrylic, steel, or LED-lit finishes for a premium storefront identity.",
    description: [
      "3D letter signs give your brand name physical depth and presence — the kind of signage used by leading retail brands, malls, and corporate offices. We fabricate letters in acrylic, stainless steel, or PVC, with optional face-lit or back-lit (halo) LED illumination.",
      "Each letter is custom-cut to your logo font and mounted flush or on standoffs for a floating 3D effect.",
    ],
    benefits: [
      "Premium, high-visibility brand identity",
      "Face-lit or halo-lit LED options",
      "Stainless steel, acrylic, or PVC letter bodies",
      "Custom fonts, sizes, and mounting styles",
    ],
    faqs: [
      {
        q: "What material is best for 3D letters?",
        a: "Acrylic is cost-effective and great indoors; stainless steel suits premium outdoor storefronts that need durability.",
      },
      {
        q: "Do you provide illuminated 3D letters?",
        a: "Yes, we offer face-lit, back-lit (halo effect), and non-illuminated 3D letters.",
      },
    ],
    icon: "cube",
  },
  {
    slug: "backlit-sign-boards",
    name: "Backlit Sign Boards",
    shortDescription:
      "Even, glowing illumination from behind the board for a clean and modern glow effect.",
    description: [
      "Backlit sign boards use LED modules mounted behind a translucent acrylic or fabric face to create a soft, even glow across the entire board — ideal for pharmacy signs, restaurant menus, and shop fronts that need to stand out at night.",
      "We engineer even light distribution to avoid hot spots, using calculated LED spacing and diffuser panels.",
    ],
    benefits: [
      "Even, glare-free illumination across the board",
      "Great visibility in low light and at night",
      "Durable weatherproof housing",
      "Custom sizes for shopfronts and pylons",
    ],
    faqs: [
      {
        q: "What's the difference between backlit and LED sign boards?",
        a: "Backlit boards glow evenly from behind a translucent face, while standard LED boards often use front-facing illuminated letters.",
      },
      {
        q: "Can backlit boards be repaired if an LED fails?",
        a: "Yes, our modular LED design allows individual sections to be serviced without replacing the whole board.",
      },
    ],
    icon: "sun",
  },
  {
    slug: "neon-sign-boards",
    name: "Neon Sign Boards",
    shortDescription:
      "Custom LED-neon signage for cafes, studios, weddings, and statement branding.",
    description: [
      "Our flexible LED-neon signs recreate the classic glass neon look — in any script, shape, or color — without the fragility or high power draw of real neon tube. Perfect for cafes, salons, studios, and event branding that wants a striking, photogenic glow.",
      "Each sign is hand-shaped to your custom text or logo and mounted on a clear or backed acrylic panel.",
    ],
    benefits: [
      "Classic neon glow, shatterproof and low-power",
      "Custom script, logo, and shape cutting",
      "Perfect for cafes, salons, and event branding",
      "Indoor and outdoor-rated options",
    ],
    faqs: [
      {
        q: "Is LED neon safer than glass neon?",
        a: "Yes, LED neon is flexible, shatterproof, and runs at a fraction of the power and heat of glass tube neon.",
      },
      {
        q: "Can I get a specific color combination?",
        a: "Yes, we offer a full range of LED-neon colors and can mix multiple colors in one sign.",
      },
    ],
    icon: "sparkle",
  },
  {
    slug: "panaflex-boards",
    name: "Panaflex Boards",
    shortDescription:
      "Large-format flex printing for shop fronts, banners, and backlit display panels.",
    description: [
      "Panaflex is the go-to solution for large, cost-effective shop signage across Pakistan. We print high-resolution graphics on flex material and mount it on a lit or unlit frame — ideal for storefronts, banners, and large hoardings.",
      "Our panaflex boards use fade-resistant inks and reinforced frames built to handle sun, rain, and wind.",
    ],
    benefits: [
      "Cost-effective large-format signage",
      "Vivid, fade-resistant printing",
      "Lit and unlit frame options",
      "Fast turnaround for shopfront replacements",
    ],
    faqs: [
      {
        q: "How long does panaflex printing last outdoors?",
        a: "Quality panaflex typically holds strong color for 2–4 years outdoors depending on sun exposure.",
      },
      {
        q: "Can you replace an existing panaflex board?",
        a: "Yes, we measure, remove the old print, and install a fresh panaflex face on your existing or a new frame.",
      },
    ],
    icon: "panel",
  },
  {
    slug: "digital-printing",
    name: "Digital Printing",
    shortDescription:
      "High-resolution digital printing for posters, banners, stickers, and signage graphics.",
    description: [
      "Our digital printing service covers everything from small posters and stickers to large banners and shop graphics, printed on a wide range of materials including flex, vinyl, paper, and sunboard.",
      "We use high-DPI printers for sharp text and vivid color reproduction, ideal for marketing material and signage artwork alike.",
    ],
    benefits: [
      "Sharp, high-resolution color output",
      "Wide material range: flex, vinyl, sunboard, paper",
      "Fast turnaround for bulk print runs",
      "In-house design support available",
    ],
    faqs: [
      {
        q: "What file formats do you accept for printing?",
        a: "We accept AI, PDF, PSD, and high-resolution JPG/PNG files. We can also design from scratch.",
      },
      {
        q: "Do you offer same-day printing?",
        a: "Same-day turnaround is available for most standard-size print jobs.",
      },
    ],
    icon: "printer",
  },
  {
    slug: "vinyl-printing",
    name: "Vinyl Printing",
    shortDescription:
      "Durable vinyl prints and cut graphics for windows, vehicles, walls, and signage.",
    description: [
      "Vinyl printing and cutting is used for window graphics, vehicle decals, wall branding, and shopfront lettering. We offer both printed vinyl (full color graphics) and cut vinyl (solid color lettering and shapes).",
      "All vinyl is applied by trained installers for a bubble-free, long-lasting finish on glass, metal, or painted surfaces.",
    ],
    benefits: [
      "Printed and cut vinyl options",
      "Great for windows, vehicles, and walls",
      "Weatherproof outdoor-grade vinyl available",
      "Professional bubble-free application",
    ],
    faqs: [
      {
        q: "Can vinyl be removed without damage?",
        a: "Yes, quality vinyl can be removed cleanly from most surfaces without residue when applied and removed correctly.",
      },
      {
        q: "Do you install vinyl on vehicles?",
        a: "Yes, our team handles full and partial vehicle vinyl wraps and lettering.",
      },
    ],
    icon: "vinyl",
  },
  {
    slug: "one-way-vision",
    name: "One Way Vision",
    shortDescription:
      "See-through window graphics that display branding outside while preserving visibility inside.",
    description: [
      "One Way Vision (perforated window film) lets you print full branding or graphics on glass storefronts and vehicle windows — visible from outside, while people inside can still see out clearly.",
      "Popular for shop windows, office glass partitions, and vehicle rear windows that need branding without blocking the view.",
    ],
    benefits: [
      "Branding visible outside, clear view from inside",
      "Great for storefront and vehicle windows",
      "UV-protective, reduces glare and heat",
      "Removable without damaging glass",
    ],
    faqs: [
      {
        q: "Does one-way vision block sunlight?",
        a: "It reduces glare and heat slightly while maintaining visibility, similar to a light tint.",
      },
      {
        q: "Can it be applied to curved vehicle windows?",
        a: "Yes, our installers apply one-way vision film to both flat and curved glass surfaces.",
      },
    ],
    icon: "window",
  },
  {
    slug: "acp-cladding",
    name: "ACP Cladding",
    shortDescription:
      "Aluminium Composite Panel cladding for modern storefront and building facades.",
    description: [
      "ACP (Aluminium Composite Panel) cladding gives storefronts and building facades a clean, modern, low-maintenance exterior. We supply and install ACP sheets in a wide range of colors and finishes, framed and fitted to your shop or office front.",
      "ACP is also the standard base material for mounting illuminated signage, making it a popular combined solution with LED and 3D letter signs.",
    ],
    benefits: [
      "Modern, weatherproof facade finish",
      "Wide range of colors and textures",
      "Low maintenance, long-lasting exterior",
      "Ideal base for combined signage installs",
    ],
    faqs: [
      {
        q: "Is ACP cladding fire-rated?",
        a: "We can supply FR (fire-retardant) core ACP sheets on request for commercial compliance.",
      },
      {
        q: "How long does ACP cladding installation take?",
        a: "A typical shopfront installation takes 2–5 days depending on size and complexity.",
      },
    ],
    icon: "panel",
  },
  {
    slug: "shop-branding",
    name: "Shop Branding",
    shortDescription:
      "Complete shopfront branding — signage, graphics, and interior branding in one package.",
    description: [
      "We handle end-to-end shop branding: fascia signage, window graphics, interior wall branding, price boards, and wayfinding — all designed to a consistent brand identity that makes your store instantly recognizable.",
      "Whether you're opening a new outlet or refreshing an existing store, our team manages design, fabrication, and installation as a single project.",
    ],
    benefits: [
      "End-to-end branding, one point of contact",
      "Consistent identity across all touchpoints",
      "Fast turnaround for new store openings",
      "Combines signage, print, and interior branding",
    ],
    faqs: [
      {
        q: "Can you handle multi-branch rollouts?",
        a: "Yes, we support multi-location branding rollouts with consistent specs across all branches.",
      },
      {
        q: "Do you offer branding design services?",
        a: "Yes, our design team can create or adapt your brand identity for signage and interior use.",
      },
    ],
    icon: "storefront",
  },
  {
    slug: "office-branding",
    name: "Office Branding",
    shortDescription:
      "Reception signage, wall graphics, and wayfinding for a professional office identity.",
    description: [
      "First impressions matter — we design and install reception signage, acrylic name boards, wall logos, meeting room graphics, and wayfinding signage that reflect a professional, on-brand office environment.",
      "Our office branding packages are tailored to corporate offices, clinics, co-working spaces, and educational institutions.",
    ],
    benefits: [
      "Professional reception & lobby signage",
      "Wall logos, wayfinding, and room signage",
      "Tailored to corporate, clinic, and education spaces",
      "Clean installation with minimal disruption",
    ],
    faqs: [
      {
        q: "Do you handle wayfinding signage for large offices?",
        a: "Yes, we design directional and room-numbering signage systems for offices of any size.",
      },
      {
        q: "Can office signage match our existing brand guidelines?",
        a: "Yes, we work from your brand guidelines for colors, fonts, and logo usage.",
      },
    ],
    icon: "briefcase",
  },
  {
    slug: "vehicle-branding",
    name: "Vehicle Branding",
    shortDescription:
      "Full and partial vehicle wraps, decals, and fleet branding that turns cars into moving ads.",
    description: [
      "Vehicle branding turns your delivery vans, fleet cars, or personal vehicle into a mobile advertisement. We offer full wraps, partial decals, door branding, and one-way vision rear window graphics — all professionally measured and installed.",
      "Great for logistics fleets, service businesses, and delivery brands that want consistent visibility on the road.",
    ],
    benefits: [
      "Full wraps and partial decal options",
      "Consistent branding across fleet vehicles",
      "Durable, weatherproof automotive vinyl",
      "Professional, bubble-free installation",
    ],
    faqs: [
      {
        q: "How long does a full vehicle wrap take?",
        a: "A full wrap typically takes 1–3 days depending on vehicle size and design complexity.",
      },
      {
        q: "Does vehicle wrapping damage the paint?",
        a: "No, quality vinyl wraps protect the original paint and can be removed without damage.",
      },
    ],
    icon: "truck",
  },
  {
    slug: "wall-graphics",
    name: "Wall Graphics",
    shortDescription:
      "Custom wall decals and murals for offices, retail interiors, and feature walls.",
    description: [
      "Wall graphics add personality and branding to interior spaces — from large logo murals in reception areas to motivational quotes in offices and menu graphics in restaurants.",
      "We print and install high-quality wall vinyl and textured wallpaper graphics tailored to your space and brand.",
    ],
    benefits: [
      "Custom murals, logos, and feature walls",
      "High-quality, fade-resistant wall vinyl",
      "Great for offices, retail, and restaurants",
      "Removable options available",
    ],
    faqs: [
      {
        q: "Can wall graphics be applied to textured walls?",
        a: "Textured walls may need surface prep or a smooth backing panel for best results — we assess this during a site visit.",
      },
      {
        q: "Do you offer custom mural design?",
        a: "Yes, our design team can create a custom mural concept for your space.",
      },
    ],
    icon: "wall",
  },
  {
    slug: "uv-printing",
    name: "UV Printing",
    shortDescription:
      "Direct UV printing on rigid materials like acrylic, wood, metal, and PVC.",
    description: [
      "UV printing lets us print full-color, high-resolution graphics directly onto rigid surfaces such as acrylic, MDF, PVC sheet, and metal — no lamination needed. The UV-cured ink is scratch and fade resistant.",
      "Popular for premium name plates, menu boards, product displays, and decorative signage with a smooth, printed finish.",
    ],
    benefits: [
      "Direct printing on rigid materials",
      "Scratch and fade-resistant UV-cured ink",
      "No lamination required",
      "Great for premium name plates & displays",
    ],
    faqs: [
      {
        q: "What materials can be UV printed?",
        a: "Acrylic, MDF, PVC foam board, metal sheet, glass, and more — most flat rigid materials work.",
      },
      {
        q: "Is UV printing suitable for outdoor use?",
        a: "Yes, UV-cured inks are weather and fade resistant, suitable for most outdoor applications.",
      },
    ],
    icon: "uv",
  },
  {
    slug: "cnc-laser-cutting",
    name: "CNC & Laser Cutting",
    shortDescription:
      "Precision CNC routing and laser cutting for signage letters, panels, and custom shapes.",
    description: [
      "Our in-house CNC router and laser cutting machines produce precise letter cut-outs, engravings, and custom shapes in acrylic, wood, MDF, and thin metal sheet — the foundation of most premium signage we build.",
      "We also offer CNC/laser cutting as a standalone service for designers, fabricators, and businesses needing precision-cut parts.",
    ],
    benefits: [
      "High-precision CNC routing & laser cutting",
      "Acrylic, wood, MDF, and thin metal supported",
      "Custom shapes, letters, and engravings",
      "Fast turnaround for bulk cutting orders",
    ],
    faqs: [
      {
        q: "Can I send my own design file for cutting?",
        a: "Yes, we accept AI, DXF, and PDF vector files for CNC and laser cutting jobs.",
      },
      {
        q: "What's the maximum sheet size you can cut?",
        a: "Our machines handle standard 4x8 ft sheets; contact us for larger format requirements.",
      },
    ],
    icon: "cnc",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// src/lib/mockData.ts
export const mockListings = [
  {
    slug: "luxury-spa-bangkok",
    name: "Luxury Spa Bangkok",
    description: "Experience the ultimate in relaxation with our professional massage therapists in the heart of Bangkok.",
    thumbnail: "https://erotikmaps.com/images/placeholder.jpg",
    address: "123 Sukhumvit Road, Bangkok",
    phone: "+66 2 123 4567",
    website: "https://luxuryspa.example.com",
    rating: 4.8,
    reviews: 156,
    services: ["Swedish Massage", "Deep Tissue", "Aromatherapy"],
    price_range: "$$$",
    category: "erotic-massage"
  },
  {
    slug: "paradise-massage",
    name: "Paradise Massage",
    description: "Indulge in our sensual massage treatments designed to rejuvenate your body and mind.",
    thumbnail: "https://erotikmaps.com/images/placeholder.jpg",
    address: "456 Rama IV Road, Bangkok",
    phone: "+66 2 987 6543",
    website: "https://paradise.example.com",
    rating: 4.6,
    reviews: 89,
    services: ["Sensual Massage", "Body to Body", "Tantric Massage"],
    price_range: "$$",
    category: "erotic-massage"
  },
  {
    slug: "zen-retreat",
    name: "Zen Retreat",
    description: "Find your inner peace with our traditional Thai massage and modern wellness therapies.",
    thumbnail: "https://erotikmaps.com/images/placeholder.jpg",
    address: "789 Silom Road, Bangkok",
    phone: "+66 2 555 1234",
    website: "https://zenretreat.example.com",
    rating: 4.9,
    reviews: 203,
    services: ["Thai Massage", "Hot Stone", "Reflexology"],
    price_range: "$$$",
    category: "erotic-massage"
  },
  {
    slug: "blissful-touch",
    name: "Blissful Touch",
    description: "Professional massage services with a focus on customer satisfaction and relaxation.",
    thumbnail: "https://erotikmaps.com/images/placeholder.jpg",
    address: "321 Asoke Road, Bangkok",
    phone: "+66 2 777 8888",
    website: "https://blissfultouch.example.com",
    rating: 4.7,
    reviews: 124,
    services: ["Full Body Massage", "Nuru Massage", "Couples Massage"],
    price_range: "$$",
    category: "erotic-massage"
  },
  {
    slug: "oasis-wellness",
    name: "Oasis Wellness",
    description: "Your oasis of calm in the bustling city of Bangkok. Premium massage experiences await.",
    thumbnail: "https://erotikmaps.com/images/placeholder.jpg",
    address: "654 Wireless Road, Bangkok",
    phone: "+66 2 333 4444",
    website: "https://oasiswellness.example.com",
    rating: 4.5,
    reviews: 67,
    services: ["Sports Massage", "Prenatal Massage", "Lymphatic Drainage"],
    price_range: "$$$",
    category: "erotic-massage"
  }
];

export function getMockListingsForCategory(category: string, limit: number = 50): any[] {
  // Filter by category if needed, otherwise return all
  const filtered = category === 'erotic-massage' ? mockListings : mockListings.filter(l => l.category === category);
  return filtered.slice(0, limit);
}
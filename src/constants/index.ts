import { ListingsData } from "@/types";

export const NAV_LINKS = [
  {
    title: "Home",
    href: "#home"
  },
  {
    title: "About Us",
    href: "#about"
  },
  {
    title: "How It Works",
    href: "#works"
  },
  {
    title: "Explore Spaces",
    href: "#explore"
  },
]

export const spaces_links = [
  {
    title: "Dashboard",
    href: "/dashboard"
  },
  {
    title: "Space Seeker",
    href: "/seeker"
  },
  {
    title: "Space Provider",
    href: "/provider"
  },
  {
    title: "Community",
    href: "/community"
  },
]

export const PaymentFrequency = [
  "Daily",
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "Quarterly",
  "Semi-Annually",
  "Annually"
] as const

export const SpaceType = [
  "Coworking Space",
  "Private Office",
  "Meeting Room",
  "Event Space",
  "Virtual Office",
  "Hot Desk",
  "Dedicated Desk",
  "Workshop Space",
  "Creative Studio",
  "Executive Suite",
  "Shared Office",
  "Open Workspace",
  "Laboratory Space",
  "Apartment",
  "House",
  "Condominium",
  "Townhouse",
  "Loft",
  "Studio",
  "Villa",
  "Dormitory",
  "Guest House",
  "Cabin"
] as const

export const spaces: ListingsData[] = [
  {
    id: 1,
    title: "Urban Oasis Coworking",
    description: "Located in the heart of downtown, this coworking space offers high-speed internet, ergonomic seating, and a vibrant community. Perfect for startups and freelancers.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "New York, NY",
    price: "R600",
    features: ['wifi', 'ergonomic', 'flexibleBooking', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 2,
    title: "Tech Haven Workspace",
    description: "A modern, tech-friendly environment with state-of-the-art facilities. Enjoy flexible booking options and a space designed for innovation and creativity.",
    image: "/beazy-eKTTk3Q2zy0-unsplash.jpg",
    location: "San Francisco, CA",
    price: "R800",
    features: ['wifi', 'ergonomic', 'flexibleBooking', 'amenities'],
    type: "Flex Desk"
  },
  {
    id: 3,
    title: "Creative Loft",
    description: "Bright and spacious, this loft is perfect for creatives and designers. It features high ceilings, plenty of natural light, and high-speed internet to keep you connected.",
    image: "/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    location: "Los Angeles, CA",
    price: "R700",
    features: ['wifi', 'ergonomic', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 4,
    title: "The Productivity Hub",
    description: "A professional workspace designed to enhance productivity. With ergonomic furniture, quiet zones, and high-speed internet, it's ideal for focused work.",
    image: "/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    location: "Chicago, IL",
    price: "R500",
    features: ['wifi', 'ergonomic', 'flexibleBooking'],
    type: "Private Office"
  },
  {
    id: 5,
    title: "FlexiDesk Central",
    description: "Located in a prime business district, FlexiDesk Central offers flexible booking options and all the amenities you need for a productive day.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "Los Angeles, CA",
    price: "R550",
    features: ['wifi', 'flexibleBooking', 'amenities'],
    type: "Flex Desk"
  },
  {
    id: 6,
    title: "Startup Station",
    description: "Designed for entrepreneurs, Startup Station provides a collaborative environment with high-speed internet, meeting rooms, and ergonomic seating.",
    image: "/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    location: "Austin, TX",
    price: "R750",
    features: ['wifi', 'ergonomic', 'flexibleBooking', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 7,
    title: "Innovation Workspace",
    description: "This space fosters innovation with its modern design and comprehensive amenities. Enjoy flexible booking and a community of like-minded professionals.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "Seattle, WA",
    price: "R900",
    features: ['wifi', 'flexibleBooking', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 8,
    title: "Downtown Desk Hub",
    description: "Located downtown, this workspace offers ergonomic desks, fast internet, and all the essentials you need to work comfortably and efficiently.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "Miami, FL",
    price: "R650",
    features: ['wifi', 'ergonomic', 'amenities'],
    type: "Flex Desk"
  },
  {
    id: 9,
    title: "Executive Office Space",
    description: "A premium office space with private offices, high-speed internet, and luxurious amenities. Ideal for executives and small teams looking for a professional environment.",
    image: "/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    location: "Washington, D.C.",
    price: "R1200",
    features: ['wifi', 'ergonomic', 'flexibleBooking', 'amenities'],
    type: "Private Office"
  },
  {
    id: 10,
    title: "Remote Work Retreat",
    description: "Escape to this serene workspace designed for remote workers. It offers high-speed internet, comfortable seating, and beautiful surroundings.",
    image: "/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg",
    location: "Denver, CO",
    price: "R400",
    features: ['wifi', 'ergonomic', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 11,
    title: "Collaborative Coworking",
    description: "A collaborative coworking space with open desks, private meeting rooms, and a friendly community. Perfect for networking and productivity.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "Portland, OR",
    price: "R500",
    features: ['wifi', 'ergonomic', 'flexibleBooking', 'amenities'],
    type: "Coworking Space"
  },
  {
    id: 12,
    title: "Professional Work Suite",
    description: "This professional work suite offers high-speed internet, ergonomic furniture, and private offices. Ideal for individuals and teams seeking a focused work environment.",
    image: "/elena-rabkina-eVVzwsNhNf4-unsplash.jpg",
    location: "Atlanta, GA",
    price: "R950",
    features: ['wifi', 'ergonomic', 'amenities'],
    type: "Private Office"
  }
];

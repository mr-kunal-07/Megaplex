// Default Content Structure for Firestore
// Use this to initialize your Firestore database

export const DEFAULT_CONTENT = {
    hero: {
        badge: "25+ PARKASH LANDMARK AMENITIES",
        tagline: "THINKING OF A FANTASTIC VICINITY?",
        title: "MEGAPLEX PRIME INFINITY",
        subtitle: "Smart 1 BHK starting ₹ 69.99 Lacs* onwards | Premium 2 BHK starting ₹ 96.99 Lacs* onwards",
        address: "BLDG NO. 1212A, CIRCLE- KANNAMWAR NAGAR 1, VIKHROLI (EAST)",
        ctaText: "Enquiry Now",
    },
    overview: {
        heading: "About Project",
        body: "At Megaplex Prime, every detail reflects the grandeur picture of sky-line real estate and elevated homes. Created for those who dare to dream bigger, this project is the ultimate embodiment of modern architecture and refined living. Defining the prestige. Megaplex Prime follows the thoughtfully distinctive homes with refined amenities and exclusive choices. The open spaces, pristine aesthetics. The open green vistas, the lush green spaces that surround long-kept aspirations.",
        ctaText: "Download Brochure",
    },
    connectivity: {
        heading: "Nearby Connectivity",
        subheading: "Everything you need within reach",
        items: [
            { icon: "🏫", label: "Schools", value: "3 mins" },
            { icon: "🏥", label: "Hospitals", value: "5 mins" },
            { icon: "🛒", label: "Malls", value: "7 mins" },
            { icon: "🚇", label: "Metro Station", value: "2 mins" },
            { icon: "✈️", label: "Airport", value: "25 mins" },
            { icon: "🏢", label: "IT Parks", value: "10 mins" },
        ],
    },
    amenities: {
        heading: "Amenities",
        subheading: "This project is providing you the perfect location, place and has a world-class landscape experience.",
        items: [
            { icon: "🏋️", title: "Gymnasium", desc: "State-of-the-art fitness center" },
            { icon: "👶", title: "Kids Play Area", desc: "Safe & fun zone for children" },
            { icon: "🎮", title: "Kids Play Area", desc: "Indoor gaming & recreation" },
            { icon: "🏃", title: "Jogging Track", desc: "Scenic outdoor running track" },
            { icon: "🧘", title: "Yoga Deck", desc: "Open-air wellness space" },
            { icon: "🌿", title: "Yoga Deck", desc: "Meditation & relaxation zone" },
        ],
        ctaText: "See More",
    },
    aboutUs: {
        heading: "About Developer",
        body: "With decades of experience in crafting iconic skylines, our developer is committed to building spaces that inspire. Each project is a testament to innovation, sustainability, and architectural brilliance. Trusted by thousands of homebuyers, we deliver on every promise.",
        stats: [
            { label: "Projects", value: "3 TLAC" },
            { label: "Happy Families", value: "440+" },
            { label: "Awards", value: "5 TLAC" },
            { label: "Years", value: "2 TLAC" },
        ],
    },
    construction: {
        heading: "Construction Updates",
        items: [
            { label: "Foundation Work", date: "Jan 2024" },
            { label: "Structure Complete", date: "Jun 2024" },
            { label: "Completion", date: "Dec 2025" },
        ],
    },
    faq: {
        heading: "Frequently Asked Questions",
        items: [
            {
                q: "What configurations are available in Megaplex Prime?",
                a: "We offer Smart 1 BHK and Premium 2 BHK configurations to suit every lifestyle.",
            },
            {
                q: "What is the possession date for the project?",
                a: "The expected possession date is December 2025, subject to approvals.",
            },
            {
                q: "Are there any pre-launch offers available for early buyers?",
                a: "Yes! Early investors get exclusive pre-launch pricing and payment flexibility.",
            },
            {
                q: "What are the nearby landmarks and connectivity options available?",
                a: "Megaplex Prime is strategically located near metro stations, schools, hospitals, malls, and IT parks, ensuring excellent connectivity.",
            },
        ],
    },
};

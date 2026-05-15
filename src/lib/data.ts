// src/lib/data.ts
// All content sourced verbatim from Rucha Engineers Corporate Profile 2025
import { Settings, Wrench, Factory, Hammer, Tractor, Cpu } from 'lucide-react';

export const company = {
    name: 'Rucha Engineers',
    tagline: 'Leading manufacturer of all types of patterns & dies.',
    subTagline: 'Suppliers of all types of SG Iron & Cast Iron casting.',
    established: 2016,
    gstin: '27CLLPK0988H1ZM',
    website: 'www.ruchaengineers.com',
    iso: 'ISO 9001:2015 Certified [Applied]',
    businessType: 'Sole Proprietorship',
    employees: 'Up to 12 nos.',
    workingDays: 'Tuesday – Sunday',
    shifts: '02 Shifts',
    weeklyOff: 'Monday',
    shipment: ['By Road', 'By Cargo'],
    designFacility: ['In-house – 2 Skilled Design Engineers', 'NX CAD License-Based 2406 - Siemens'],
    afterSaleSupport: true,
    customizePackaging: true,
    qualityTesting: true,
};

export const addresses = {
    registered: {
        label: 'Registered Address',
        lines: [
            'RUCHA ENGINEERS [Pattern Shop]',
            'Datta Krupa Plot no. 45, Dafale Colony, Ujagaon,',
            'Taluka: Karveer, District: Kolhapur – 416005,',
            'Maharashtra, India.',
        ],
    },
    work: {
        label: 'Work Address',
        lines: [
            'RUCHA ENGINEERS [Pattern Shop]',
            'W 71, MIDC Shiroli – 416122, Kolhapur,',
            'Maharashtra, India.',
        ],
    },
};

export const contacts = {
    technical: {
        title: 'Technical Director',
        name: 'Mr. Umesh Kadam',
        phone: '+91 77208 40001',
        email: 'umesh@ruchaengineers.com',
    },
    accounts: {
        title: 'Admin & Accounts Director',
        name: 'Mrs. Rupali Kadam',
        phone: '+91 99705 20414',
        email: 'accounts@ruchaengineers.com',
    },
};

export const coreBusinessItems = [
    'Thermocol Pattern',
    'Wooden Master Pattern',
    'CI & SG Grade Casting',
    'Cast Iron (CI) Pattern & Dies',
    'Aluminium Patterns & Dies',
];

export const competitiveAdvantages = [
    'Large Product Line & Production Capacity',
    'Customized Solution',
];

export const achievements = {
    award: 'Kolhapur Udyog Sanman Award',
    awardDesc: 'Fastest growing business of the year 2023-24.',
    pioneersTitle: 'Pioneers in Thermocol and Wooden Master Patterns',
    points: [
        'First-ever service provider for Thermocol and wooden master patterns.',
        'Committed to a "Right-First-Time" approach.',
        'Tooling design aligned with FMEA standards for casting industries.',
        'Extended service support even after tooling development to ensure zero rejection.',
        'A work culture driven by continuous value addition.',
    ],
};

export const leadership = [
    {
        name: 'Mr. Umesh Kadam',
        role: 'Technical Director',
        experience: '25+ Years in all types of patterns & dies.',
        expertise: ['Design & Methodology'],
        keyAchievements: ['Kolhapur Udyog Sanman Award – Fastest growing business of the year 2023-24.'],
    },
    {
        name: 'Mrs. Rupali Kadam',
        role: 'Admin & Accounts Director',
        experience: '5+ Years in Administration & Accounting',
        expertise: [
            'Streamlining Administration processes.',
            'Overseeing comprehensive financial accounting.',
        ],
        keyAchievements: [],
    },
];

export const customers = [
    { id: 1, name: 'Aditya Industries [Foundry]', location: 'Shiroli MIDC' },
    { id: 2, name: 'Caspro Metal Industries Pvt. Ltd.', location: 'Shiroli MIDC' },
    { id: 3, name: 'Chougule Industries [Foundry]', location: 'Shiroli MIDC' },
    { id: 4, name: 'Castco [Mayura Group]', location: 'Top Sambhapur' },
    { id: 5, name: 'Droege', location: 'India & USA' },
    { id: 6, name: 'Goa Invecast', location: 'Goa' },
    { id: 7, name: 'JD Foundry', location: 'Belgavi' },
    { id: 8, name: 'LADA Laxmi Pumps', location: 'Gokul Shirgaon MIDC' },
    { id: 9, name: 'LADA Laxmi Pumps', location: 'Solapur' },
    { id: 10, name: 'Laxmi Travelers', location: 'Coimbatore' },
    { id: 11, name: 'Mayura Steels Pvt. Ltd.', location: 'MIDC Shiroli' },
    { id: 12, name: 'Micronix', location: 'Kagal Five Star' },
    { id: 13, name: 'Neeta Instruments', location: 'MIDC Shiroli' },
    { id: 14, name: 'Parikh Metals', location: 'Kagal Five Star' },
    { id: 15, name: 'Pinnacle [Dudhane Metalics]', location: 'MIDC Shiroli' },
    { id: 16, name: 'Ravi Enterprises', location: 'MIDC Shiroli' },
    { id: 17, name: 'Rohit Industries', location: 'MIDC Shiroli' },
    { id: 18, name: 'Shagun Casting', location: 'MIDC Shiroli' },
    { id: 19, name: 'Shimpukade Metaliks Pvt. Ltd.', location: 'Kagal Five Star' },
    { id: 20, name: 'Shree Spherotech Pvt. Ltd.', location: 'MIDC Shiroli' },
    { id: 21, name: 'Sound Casting Pvt. Ltd.', location: 'MIDC Shiroli' },
    { id: 22, name: 'Sound Casting Pvt. Ltd.', location: 'Tardal' },
    { id: 23, name: 'Sun Foam', location: 'Pune' },
    { id: 24, name: 'Supertech Metalliks', location: 'MIDC Shiroli' },
    { id: 25, name: 'SSPP Industries', location: 'Kagal Five Star' },
    { id: 26, name: 'Swiss Technology', location: 'Satara' },
    { id: 27, name: 'Tirupati Casting', location: 'Ambap' },
    { id: 28, name: 'Tulip Casting Pvt. Ltd.', location: 'MIDC Shiroli' },
    { id: 29, name: 'Walchand Nagar Foundry', location: 'Satara' },
    { id: 30, name: 'Yash Metallics Pvt. Ltd.', location: 'MIDC Shiroli' },
];

export const products = [
    { slug: 'wooden-pattern-bowl', name: 'Wooden Pattern Bowl', dimension: '1200 mm × 1500 mm', category: 'Wooden Pattern' },
    { slug: 'packaging-foam-die', name: 'Packaging Foam Die', dimension: '1500 mm × 1500 mm', category: 'Foam Die' },
    { slug: 'impeller-1500', name: 'Impeller', dimension: '1500 mm × 1500 mm', category: 'Casting' },
    { slug: 'loss-foam-die', name: 'Loss Foam Die', dimension: '1200 mm × 700 mm', category: 'Foam Die' },
    { slug: 'tooth-points', name: 'Tooth Points', dimension: '400 mm × 150 mm', category: 'Casting' },
    { slug: 'casing', name: 'Casing', dimension: '1200 mm × 1200 mm', category: 'Casting' },
    { slug: 'impeller-1000', name: 'Impeller', dimension: '1000 mm', category: 'Casting' },
    { slug: 'loss-foam-mixer-cover-die', name: 'Loss Foam Mixer Cover Die', dimension: '1000 mm × 1000 mm', category: 'Foam Die' },
    { slug: 'pump-casing', name: 'Pump Casing', dimension: '600 mm × 1200 mm', category: 'Casting' },
];

export const successStories = [
    {
        slug: 'chhatrapati-shivaji-maharaj-statue',
        name: 'Chhatrapati Shivaji Maharaj Statue',
        description: 'Total height: 21 feet. Thermocol Chhatrapati Shivaji Raje Bhosale (Maharaj) Statue for our customer.',
    },
    {
        slug: 'gautam-buddha-statue',
        name: 'Gautam Buddha Statue',
        description: 'Total height 35 feet Thermocol Gautam Buddha Statue for our customer.',
    },
    {
        slug: 'mona-lisa-statue',
        name: 'Mona Lisa Statue',
        description: 'Total height 16 feet Thermocol Mona Lisa Statue for our customer.',
    },
];

export const caseStudies = [
    {
        slug: 'aluminium-pattern-core-box-7-day-delivery',
        number: 'One',
        title: 'Aluminium Pattern & Core Box – 7-Day Delivery',
        body: 'This aluminium pattern and core box (5 sets) were successfully manufactured within just 7 days, demonstrating our commitment to meeting the urgent requirements of our valued customer.',
    },
    {
        slug: 'integral-pattern-sg-grade-high-pressure-line',
        number: 'Two',
        title: 'Integral Pattern – SG Grade, High-Pressure Line',
        body: 'We successfully delivered an integral pattern in SG grade material for a high-pressure line, validated by a 3D scan report to ensure precision, durability, and high-performance standards.',
    },
    {
        slug: 'large-aluminium-pattern-pump-casing',
        number: 'Three',
        title: 'Large Aluminium Pattern – Pump Casing',
        body: 'We successfully manufactured a large-sized aluminium pattern for a pump casing, demonstrating our expertise in delivering high-quality, precision-engineered solutions for our clients.',
    },
    {
        slug: 'large-bowl-support-pattern-wooden-material',
        number: 'Four',
        title: 'Large Bowl Support Pattern – Wooden Material',
        body: 'We successfully delivered a large-sized bowl support pattern in wooden material, showcasing our capability to handle complex, high-precision projects and meet stringent customer requirements with quality craftsmanship.',
    },
    {
        slug: 'gun-metal-pattern-with-integral-lettering',
        number: 'Five',
        title: 'Gun Metal Pattern with Integral Lettering',
        body: 'We successfully manufactured a gun metal pattern with integral lettering, ensuring high precision, durability, and superior quality for our valued customer.',
    },
    {
        slug: 'bigger-sized-patterns-teak-jungle-wood',
        number: 'Six',
        title: 'Bigger-Sized Patterns – Teak & Jungle Wood',
        body: 'We successfully delivered bigger-sized patterns made from teak wood and jungle wood, meeting the customer\'s precise requirements with high-quality craftsmanship.',
    },
];

export const machines = [
    {
        name: 'CNC Router & Wood Cutting Engraving Machine',
        make: 'HALMAX FTM1325H',
        icon: Settings,
        specs: [
            'No. Of Machines: 01 no.',
            'Moving Speed: 1000 mm/minute',
            'Spindle Speed: 18000 rpm',
            'Max Stroke: L 2400 mm (X) × W 1300 mm (Y)',
        ],
    },
    {
        name: 'Vertical Machining Center (VMC) – Expansion',
        make: 'COSMOS CVM 1370',
        icon: Wrench,
        specs: [
            'No. Of Machines: 01 no.',
            'Spindle Taper: BT40 | 50',
            'Max Stroke: 1370 mm (X) × 700 mm (Y) × 700 mm (Z)',
        ],
    },
    {
        name: 'Vertical Machining Center (VMC)',
        make: 'FEELER FV800',
        icon: Cpu,
        specs: [
            'No. Of Machines: 01 no.',
            'Spindle Taper: BT40',
            'Max Stroke: 800 mm (X) × 500 mm (Y) × 500 mm (Z)',
            'Controller: Mitsubishi M64 – 8000 rpm',
        ],
    },
    {
        name: 'Lathe Machine – Advanced Features',
        make: 'TOS SU50A [Universal Centre Lathe]',
        icon: Factory,
        specs: [
            'No. Of Machines: 01 no.',
            'Spindle Speed Range: 11.2 to 1004 rpm',
            'Spindle Torque [Max permissible]: 31,000 kpcm',
            'Max Shifting Power – Longitudinal Direction: 1600 kp',
        ],
    },
    {
        name: 'Radial Drilling Machine',
        make: 'HMT RM62',
        icon: Hammer,
        specs: [
            'No. Of Machines: 02 nos.',
            'Standard Spindle Speed: 40 to 1800 rpm',
            'Drill Capacity – Steel 50 kgf/mm²: up to 50 mm',
            'Drill Capacity – CI BHN180: up to 60 mm',
        ],
    },
    {
        name: 'Forklift – Pallet Stacker',
        make: 'EFS1030',
        icon: Tractor,
        specs: [
            'Type: Pallet Stacker',
            'Capacity: 1500 Kg Pallet',
            'Quantity: 01 no.',
        ],
    },
];

export const stats = [
    { num: '2016', label: 'Established' },
    { num: '30+', label: 'Clients Served' },
    { num: '25+', label: 'Years Expertise' },
    { num: '6+', label: 'Case Studies' },
];
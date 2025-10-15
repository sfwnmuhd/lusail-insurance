import {Car, HeartPlus, LifeBuoy, Plane, Ship, Home, Users, Shield, Wrench, Building, FileText, Anchor, Clock} from "lucide-react"

export type InsuranceProduct = {
    name: string;
    slug: string;
    icon: any;
    description: string;
    benefits: string[];
    coverage: string[];
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    name: 'Car Insurance',
    slug: 'car-insurance',
    icon: Car,
    description: 'Comprehensive protection for your vehicle against accidents, theft, and damages.',
    benefits: [
      'Coverage for accidental damages',
      'Third-party liability protection',
      'Personal accident cover for driver',
      '24/7 roadside assistance',
      'Cashless claim settlement',
      'Zero depreciation coverage available'
    ],
    coverage: [
      'Own damage coverage',
      'Third-party legal liability',
      'Personal accident cover',
      'Natural calamities protection'
    ]
  },
  {
    name: 'Health Insurance',
    slug: 'health-insurance',
    icon: HeartPlus,
    description: 'Complete medical coverage for you and your family with cashless hospitalization.',
    benefits: [
      'Cashless hospitalization at network hospitals',
      'Pre and post hospitalization coverage',
      'Day care procedures covered',
      'Annual health check-ups',
      'No claim bonus benefits',
      'Maternity benefits available'
    ],
    coverage: [
      'In-patient hospitalization',
      'Pre & post hospitalization expenses',
      'Ambulance charges',
      'Day care treatments'
    ]
  },
  {
    name: 'Life Insurance',
    slug: 'life-insurance',
    icon: LifeBuoy,
    description: 'Secure your family\'s financial future with comprehensive life coverage.',
    benefits: [
      'Death benefit for nominees',
      'Maturity benefits',
      'Tax benefits under applicable laws',
      'Loan facility against policy',
      'Flexible premium payment options',
      'Riders for additional coverage'
    ],
    coverage: [
      'Death coverage',
      'Terminal illness benefit',
      'Accidental death benefit',
      'Disability coverage'
    ]
  },
  {
    name: 'Travel Insurance',
    slug: 'travel-insurance',
    icon: Plane,
    description: 'Travel worry-free with coverage for medical emergencies, trip cancellations, and lost baggage.',
    benefits: [
      'Medical emergency coverage abroad',
      'Trip cancellation and delay coverage',
      'Lost baggage protection',
      'Passport loss assistance',
      '24/7 travel assistance',
      'Adventure sports coverage available'
    ],
    coverage: [
      'Medical expenses abroad',
      'Trip cancellation/interruption',
      'Baggage loss/delay',
      'Flight delays and missed connections'
    ]
  },
  {
    name: 'Yacht/ Boat / Jetski Insurance',
    slug: 'yacht-boat-jetski-insurance',
    icon: Ship,
    description: 'Protect your watercraft with comprehensive marine insurance coverage.',
    benefits: [
      'Hull and machinery coverage',
      'Third-party liability',
      'Personal accident cover',
      'Towing and assistance',
      'Equipment coverage',
      'Racing coverage available'
    ],
    coverage: [
      'Physical damage to vessel',
      'Third-party property damage',
      'Pollution liability',
      'Salvage costs'
    ]
  },
  {
    name: 'Personal Accident Insurance',
    slug: 'personal-accident-insurance',
    icon: Shield,
    description: 'Financial protection against accidental death, disability, and medical expenses.',
    benefits: [
      'Accidental death benefit',
      'Permanent disability coverage',
      'Temporary disability benefits',
      'Medical expense reimbursement',
      'Child education benefits',
      'Worldwide coverage'
    ],
    coverage: [
      'Accidental death',
      'Permanent total/partial disability',
      'Temporary total disability',
      'Accidental medical expenses'
    ]
  },
  {
    name: 'Maid & Driver Insurance',
    slug: 'maid-driver-insurance',
    icon: Users,
    description: 'Mandatory insurance coverage for domestic workers and drivers as per Qatar law.',
    benefits: [
      'Medical treatment coverage',
      'Repatriation expenses',
      'Emergency evacuation',
      'Death benefit',
      'Legal compliance',
      'Quick claim settlement'
    ],
    coverage: [
      'Medical expenses',
      'Emergency medical evacuation',
      'Repatriation of remains',
      'Personal liability'
    ]
  },
  {
    name: 'Property Insurance',
    slug: 'property-insurance',
    icon: Home,
    description: 'Comprehensive protection for your home and belongings against various risks.',
    benefits: [
      'Building structure coverage',
      'Contents insurance',
      'Alternative accommodation',
      'Public liability coverage',
      'Natural disaster protection',
      'Theft and burglary coverage'
    ],
    coverage: [
      'Fire and lightning',
      'Water damage',
      'Theft and burglary',
      'Natural catastrophes'
    ]
  },
  {
    name: 'Motor Fleet Insurance',
    slug: 'motor-fleet-insurance',
    icon: Car,
    description: 'Comprehensive coverage for businesses with multiple vehicles.',
    benefits: [
      'Single policy for multiple vehicles',
      'Cost-effective premiums',
      'Centralized claim management',
      'Flexible coverage options',
      'Driver training support',
      'Fleet management assistance'
    ],
    coverage: [
      'Own damage for all vehicles',
      'Third-party liability',
      'Driver personal accident',
      'Roadside assistance'
    ]
  },
  {
    name: 'Group Medical & Life Insurance',
    slug: 'group-medical-life-insurance',
    icon: Users,
    description: 'Employee benefit plans providing medical and life coverage for your workforce.',
    benefits: [
      'Employee wellness programs',
      'Family coverage options',
      'Cashless hospitalization',
      'Group life cover',
      'Cost-effective premiums',
      'Easy enrollment process'
    ],
    coverage: [
      'In-patient hospitalization',
      'Out-patient treatments',
      'Group life insurance',
      'Maternity benefits'
    ]
  },
  {
    name: 'Casualty & Liability Insurance',
    slug: 'casualty-liability-insurance',
    icon: Shield,
    description: 'Protection against legal liability and casualty risks for businesses.',
    benefits: [
      'Public liability coverage',
      'Product liability protection',
      'Employer\'s liability',
      'Professional indemnity',
      'Legal defense costs',
      'Comprehensive risk assessment'
    ],
    coverage: [
      'Third-party bodily injury',
      'Third-party property damage',
      'Legal expenses',
      'Product liability claims'
    ]
  },
  {
    name: 'Engineering Insurance',
    slug: 'engineering-insurance',
    icon: Wrench,
    description: 'Specialized coverage for construction projects, machinery, and equipment.',
    benefits: [
      'Contractor\'s all risk coverage',
      'Machinery breakdown protection',
      'Erection all risk',
      'Electronic equipment coverage',
      'Third-party liability',
      'Project-specific solutions'
    ],
    coverage: [
      'Material damage',
      'Third-party liability',
      'Machinery breakdown',
      'Construction risks'
    ]
  },
  {
    name: 'Marine & Aviation Insurance',
    slug: 'marine-aviation-insurance',
    icon: Anchor,
    description: 'Comprehensive coverage for marine cargo, hull, and aviation risks.',
    benefits: [
      'Marine cargo coverage',
      'Hull insurance',
      'Aviation hull coverage',
      'War and strikes coverage',
      'Transit insurance',
      'International coverage'
    ],
    coverage: [
      'Loss or damage to cargo',
      'Vessel damage',
      'Aircraft hull damage',
      'Third-party liability'
    ]
  },
  {
    name: 'Term Insurance',
    slug: 'term-insurance',
    icon: Clock,
    description: 'Pure life coverage at affordable premiums to protect your family\'s future.',
    benefits: [
      'High coverage at low premiums',
      'Death benefit payout',
      'Flexible policy terms',
      'Tax benefits',
      'Riders for critical illness',
      'Simple claim process'
    ],
    coverage: [
      'Death benefit',
      'Terminal illness benefit',
      'Accidental death benefit',
      'Optional riders'
    ]
  }
];

export function getProductBySlug(slug: string) : InsuranceProduct | undefined{
    return insuranceProducts.find(p => p.slug === slug)
}

export function getProductIcon(name: string) {
    const product = insuranceProducts.find(p => p.name === name);
    return product?.icon || Car;
}
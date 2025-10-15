import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type Branch = {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapLink: string;
};

const branches: Branch[] = [
  {
    name: "Lusail Insurance - Head Office",
    address: "Lusail City, Marina District, Building 23, Floor 5, Doha, Qatar",
    phone: "+974 4444 5555",
    email: "info@lusailinsurance.qa",
    hours: "Sunday - Thursday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 1:00 PM",
    mapLink: "https://maps.google.com"
  },
  {
    name: "West Bay Branch",
    address: "West Bay, Al Dafna, Tornado Tower, Ground Floor, Doha, Qatar",
    phone: "+974 4444 5556",
    email: "westbay@lusailinsurance.qa",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 12:00 PM",
    mapLink: "https://maps.google.com"
  },
  {
    name: "The Pearl Branch",
    address: "The Pearl-Qatar, Porto Arabia, Building 14, Doha, Qatar",
    phone: "+974 4444 5557",
    email: "pearl@lusailinsurance.qa",
    hours: "Sunday - Thursday: 9:00 AM - 6:00 PM | Saturday: 10:00 AM - 2:00 PM",
    mapLink: "https://maps.google.com"
  },
  {
    name: "Al Wakrah Branch",
    address: "Al Wakrah City, Souq Al Wakrah Street, Building 7, Qatar",
    phone: "+974 4444 5558",
    email: "wakrah@lusailinsurance.qa",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    mapLink: "https://maps.google.com"
  },
  {
    name: "Al Khor Branch",
    address: "Al Khor City, Corniche Road, Al Bayt Tower, Floor 2, Qatar",
    phone: "+974 4444 5559",
    email: "khor@lusailinsurance.qa",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    mapLink: "https://maps.google.com"
  },
  {
    name: "Industrial Area Branch",
    address: "Industrial Area, Street 38, Building 156, Doha, Qatar",
    phone: "+974 4444 5560",
    email: "industrial@lusailinsurance.qa",
    hours: "Sunday - Thursday: 7:00 AM - 4:00 PM",
    mapLink: "https://maps.google.com"
  }
];

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-16">
        <div className="container mx-auto px-6 sm:px-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Branches</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Visit us at any of our convenient locations across Qatar. Our expert team is ready to assist you with all your insurance needs.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 sm:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              data-testid={`branch-${index}`}
            >
              <h3 className="text-2xl font-bold text-[#8B1538] mb-4">{branch.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#8B1538] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Address</p>
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-[#8B1538] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Phone</p>
                    <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-[#8B1538]">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-[#8B1538] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Email</p>
                    <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-[#8B1538]">
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#8B1538] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Working Hours</p>
                    <p className="text-gray-600">{branch.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[#8B1538] font-semibold hover:underline"
              >
                <MapPin size={18} />
                View on Map
              </a>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Visit Our Branch?</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            No problem! Get in touch with us via phone or email, and our team will be happy to assist you remotely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+97444445555"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8B1538] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="mailto:info@lusailinsurance.qa"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

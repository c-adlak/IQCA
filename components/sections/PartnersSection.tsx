export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
          Empowered by Our Trusted Collaborators
        </h2>
        <div className="slider" data-aos="fade-up" data-aos-delay="100">
          <div className="slide-track">
            {/* First set of slides */}
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-building-line ri-2x"></i>
                </div>
                <p className="font-medium">Accenture</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-microsoft-line ri-2x"></i>
                </div>
                <p className="font-medium">Microsoft</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-amazon-line ri-2x"></i>
                </div>
                <p className="font-medium">Amazon</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-google-line ri-2x"></i>
                </div>
                <p className="font-medium">Google</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-ibm-line ri-2x"></i>
                </div>
                <p className="font-medium">IBM</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-bank-line ri-2x"></i>
                </div>
                <p className="font-medium">HSBC</p>
              </div>
            </div>
            
            {/* Duplicate for infinite scroll */}
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-building-line ri-2x"></i>
                </div>
                <p className="font-medium">Accenture</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-microsoft-line ri-2x"></i>
                </div>
                <p className="font-medium">Microsoft</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-amazon-line ri-2x"></i>
                </div>
                <p className="font-medium">Amazon</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-google-line ri-2x"></i>
                </div>
                <p className="font-medium">Google</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-ibm-line ri-2x"></i>
                </div>
                <p className="font-medium">IBM</p>
              </div>
            </div>
            <div className="slide">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                  <i className="ri-bank-line ri-2x"></i>
                </div>
                <p className="font-medium">HSBC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
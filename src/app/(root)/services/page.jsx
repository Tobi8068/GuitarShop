import ServiceComponent from "@/components/Design/ServiceComponent";

const Services = () => {
  const services = [
    {
      title: "Expert Consultation",
      description: "Receive personalized advice from guitar specialists to choose the ideal instrument based on skill level, and budget.",
      icon: "GrUserExpert"
    },
    {
      title: "Customization Options",
      description: "Customize guitars to reflect individuality by modifying finish, hardware, and electronics.",
      icon: "GiGuitarBassHead"
    },
    {
      title: "Professional Setup",
      description: "Ensure optimal playability, tone, and intonation with precision instrument setup performed by skilled technicians.",
      icon: "MdOutlineDashboardCustomize"
    },
    {
      title: "Convenient Financing",
      description: "Spread the cost of purchases with flexible financing options, making high-quality guitars accessible to all budgets.",
      icon: "FaMoneyCheck"
    },
    {
      title: "Comprehensive Warranty",
      description: "Protect investments with comprehensive warranty coverage against defects in materials and workmanship.",
      icon: "MdOutlineSecurity"
    },
    {
      title: "Educational Resources",
      description: "Access tutorials, tips, and guides to enhance playing skills, instrument maintenance, and overall musical journey.",
      icon: "FaGoogleScholar"
    }
  ];

  return (
    <div className=" md:w-3/4 gap-2 md:mx-auto">
      <h1 className='text-2xl px-5 md:px-0 mt-2 font-bold md:text-3xl mb-4 md:mb-6'>Services</h1>
      <div className="w-full grid px-8 gap-4 grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-3 ">
        {services.map((service, index) => (
          <ServiceComponent key={index} service={service} />
        ))}

      </div>
    </div>
  )
}

export default Services
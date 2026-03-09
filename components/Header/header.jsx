import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  LinkIcon, 
  ChevronDownIcon, 
  ComputerDesktopIcon, 
  GlobeAltIcon, 
  BanknotesIcon, 
  BookOpenIcon, 
  ScaleIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';

// --- Sub-Component: Find It Fast Dropdown (Screenshot 040851.png) ---
const FindItFastMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center bg-[#0071BC] text-white text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-[#005a9e] transition-colors">
        <LinkIcon className="h-4 w-4 mr-1.5" />
        Find It Fast
        <ChevronDownIcon className="h-3 w-3 ml-2" />
      </button>

      {/* Dropdown Panel - Right Aligned */}
      <div className={`absolute right-5 top-full bg-white border border-gray-300 shadow-2xl z-50 w-[700px] p-8 text-left
        ${isOpen ? 'block' : 'hidden'}`}>
        
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column: Patents */}
          <div>
            <h3 className="text-gray-700 font-bold mb-5 text-base">Patents</h3>
            <div className="space-y-5">
              <FindRow icon={<MagnifyingGlassIcon />} title="Search for patents" links={["PPUBS", "Open Data Portal"]} />
              <FindRow icon={<ComputerDesktopIcon />} title="Apply for a patent" links={["Patent Center", "Forms", "Status"]} />
              <FindRow icon={<GlobeAltIcon />} title="Access international patent data" links={["Global Dossier"]} />
              <FindRow icon={<BanknotesIcon />} title="View and pay fees" links={["Patent Fees", "Maintenance Fees"]} />
              <FindRow icon={<BookOpenIcon />} title="Review guides and manuals" links={["MPEP", "Classification"]} />
              <FindRow icon={<ScaleIcon />} title="Track PTAB cases and decisions" links={["P-TACTS", "PTAB DH"]} />
            </div>
          </div>

          {/* Right Column: Trademarks */}
          <div>
            <h3 className="text-gray-700 font-bold mb-5 text-base">Trademarks</h3>
            <div className="space-y-5">
              <FindRow icon={<MagnifyingGlassIcon />} title="Search trademark database" links={["Trademark search"]} />
              <FindRow icon={<ComputerDesktopIcon />} title="Apply for a trademark" links={["Trademark Center", "TEAS forms"]} />
              <FindRow icon={<CalendarIcon />} title="Check status, documents, and certificates" links={["Trademark Status & Document Retrieval (TSDR)"]} />
              <FindRow icon={<CalendarIcon />} title="See current and target wait times" links={["Trademark processing wait times"]} />
              <FindRow icon={<BookOpenIcon />} title="Review guides and manuals" links={["TMEP", "ID Manual", "TMOG", "TBMP"]} />
              <FindRow icon={<ScaleIcon />} title="File with Trademark Trial and Appeal Board" links={["TTAB Center", "ESTTA", "TTABVUE"]} />
            </div>
          </div>
        </div>

        {/* Dropdown Footer Links */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-800 font-bold text-[14px] mb-1">Search recorded assignment and record ownership changes</p>
          <a href="#" className="text-[#006699] text-sm hover:underline font-medium">Assignment Center</a>
          
          <div className="mt-4">
            <p className="text-gray-800 font-bold text-[14px]">Fee schedule and payment information</p>
            <a href="#" className="text-[#006699] text-sm hover:underline font-medium">Fees and Payment</a>
          </div>

          <div className="mt-4">
             <a href="#" className="text-gray-800 font-bold text-[14px] hover:underline">Current and planned system outages</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Row Helper for the Find It Fast Menu
const FindRow = ({ icon, title, links }) => (
  <div className="flex items-start">
    <div className="text-[#0071BC] w-5 h-5 mr-3 mt-1 flex-shrink-0">
      {React.cloneElement(icon, { className: "w-full h-full stroke-2" })}
    </div>
    <div>
      <p className="text-[14px] font-bold text-gray-800 leading-tight mb-0.5">{title}</p>
      <div className="flex flex-wrap items-center gap-x-2 text-[13px] text-[#006699]">
        {links.map((link, i) => (
          <React.Fragment key={i}>
            <a href="#" className="hover:underline">{link}</a>
            {i < links.length - 1 && <span className="text-gray-400">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

// --- Sub-Component: Centered Mega Menu (Your Original) ---
const MegaMenu = ({ title, sections, sidebarTitle, sidebarLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex items-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={`flex items-center h-full px-6 text-lg text-[#006699] font-medium border-r border-gray-300 transition-colors 
        ${isOpen ? 'text-[#008139] bg-white border-t-2 border-t-[#006699]' : 'hover:text-[#008139] hover:bg-gray-100'}`}>
        {title}
      </button>

   <div
  className={`absolute left-0 right-0 top-full bg-[#f6f6f6] shadow-2xl z-50 
    ${isOpen ? 'block opacity-100 visible' : 'hidden opacity-0 invisible'} 
    transition-all duration-200
    border border-transparent hover:border-black`}
>
  <div className="max-w-[1440px] mx-auto bg-[#f6f6f6] p-8 grid grid-cols-1 md:grid-cols-4 gap-10">
    {sections.map((section, idx) => (
      <div key={idx} className="min-w-[200px]">
        <h3 className="text-black font-bold mb-4 text-base border-b border-gray-200 pb-2">{section.title}</h3>
        <ul className="space-y-3">
          {section.links.map((link, linkIdx) => (
            <li key={linkIdx} className="flex items-start text-[14px] group/link">
              <span className="text-[#008139] mr-2 font-bold">›</span>
              <a href="#" className="text-[#006699] hover:text-[#008139] hover:underline leading-snug">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}

          <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm col-span-1">
            <h3 className="text-gray-800 font-bold mb-4 text-sm uppercase tracking-wide">{sidebarTitle}</h3>
            <div className="space-y-6">
              {sidebarLinks.map((linkGroup, groupIdx) => (
                <div key={groupIdx} className="flex flex-col space-y-3">
                  {linkGroup.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <a href="#" className={`hover:underline block leading-tight text-sm ${item.isGreen ? 'text-[#008139]' : 'text-[#006699]'} ${item.bold ? 'font-bold' : ''}`}>
                        {item.text}
                      </a>
                      {item.description && <p className="text-[11px] text-gray-500 mt-1 leading-normal">{item.description}</p>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const menuData = {
    patents: {
      title: "Patents",
      sections: [
        { title: "Get started", links: ["Patent basics", "Search our patent database", "How to apply", "Patent videos"] },
        { title: "Apply for patent", links: ["Apply online", "Checking application status", "Patent forms", "Respond to office actions", "Respond to notices", "Protect against scams"] },
        { title: "Maintain your patent", links: ["How to renew", "Maintenance fees", "Patent litigation", "Correct your patent", "Transfer ownership"] },
      ],
      sidebarTitle: "Patent practitioners",
      sidebarLinks: [
        [{ text: "Patent Center", bold: true, description: "File and manage patent applications online" }, { text: "Patent fees", bold: true }],
        [{ text: "MPEP manual", bold: true }, { text: "International patent filings", bold: true }, { text: "Patent forms", bold: true }, { text: "Order certified copies", bold: true }, { text: "Open Data Portal", bold: true }, { text: "Request reexamination", bold: true }],
        [{ text: "Patent Trial and Appeal Board", bold: true, isGreen: true }]
      ]
    },
    trademarks: {
      title: "Trademarks",
      sections: [
        { title: "Get started", links: ["Learn about searching", "Trademark basics", "Search our trademark database", "How to apply", "Trademark videos"] },
        { title: "Apply to register", links: ["Apply online", "Checking application status & viewing documents", "All trademark forms", "Respond to office actions", "Protect against scams"] },
        { title: "Maintain your trademark", links: ["How to renew", "Maintenance forms", "Trademark litigation", "Transferring ownership", "Post-registration audits"] },
      ],
      sidebarTitle: "Trademark practitioners",
      sidebarLinks: [
        [{ text: "Trademark Center", bold: true }, { text: "TEAS forms", bold: true }, { text: "Check status in TSDR", bold: true }, { text: "Madrid protocol international protection", bold: true }],
        [{ text: "ID manual", bold: true }, { text: "Request expungement or reexamination proceeding", bold: true }, { text: "Trademark Trial and Appeal Board", bold: true }],
        [{ text: "Order certified copies", bold: true, isGreen: true }]
      ]
    },
    ipPolicy: {
      title: "IP Policy",
      sections: [
        { title: "IP policy", links: ["Patent policy", "Industrial design policy", "Trademark policy", "Copyright policy", "Enforcement policy", "Trade secret policy"] },
        { title: "International affairs", links: ["IP Attaché Program", "China IP", "IPR toolkits", "International intergovernmental organizations"] },
        { title: "IP research and training", links: ["Economic research", "Global Intellectual Property Academy"] },
      ],
      sidebarTitle: "Tools & links",
      sidebarLinks: [
        [{ text: "Legislative resources", bold: true, isGreen: true, description: "Learn about our current legislative initiatives." }, { text: "IP policy events", bold: true, isGreen: true, description: "Find upcoming programs related to IP policy." }],
        [{ text: "IPR toolkits", bold: true, isGreen: true, description: "Find out how to protect intellectual property in other countries." }, { text: "More tools & links", bold: true, isGreen: true }]
      ]
    },
    learning: {
      title: "Learning and Resources",
      sections: [
        { title: "Resources by audience", links: ["Attorneys, agents & paralegals", "Inventors & entrepreneurs", "Kids & educators", "Media", "Researchers & librarians", "Patent & trademark practitioners", "IP awards and recognition"] },
        { title: "Getting started", links: ["Create an account", "General FAQs", "IP Identifier", "Glossary of terms", "Video Learning Center", "Access free services", "Inspiring stories of innovation"] },
        { title: "Publications & data", links: ["Open data portal", "Federal Register Notices", "Official Gazette", "XML resources", "Classification", "Guidance documents", "Statistics and dashboards"] },
      ],
      sidebarTitle: "Tools & links",
      sidebarLinks: [
        [{ text: "Fees and payment", bold: true, description: "Learn about fees and pay online" }, { text: "System availability", bold: true, description: "Current status and planned maintenance for USPTO systems" }],
        [{ text: "Training and events", bold: true }, { text: "Operational status", bold: true, description: "Major events impacting customers" }],
        [{ text: "More tools & links", bold: true, isGreen: true }]
      ]
    }
  };

  return (
    <header className="w-full">
      <div className="bg-[#eee] border-b hidden lg:block border-gray-300 relative">
        <div className="max-w-[1440px] mx-auto px-5 flex items-center h-16">
          <nav className="flex items-center h-full">
            <MegaMenu {...menuData.patents} />
            <MegaMenu {...menuData.trademarks} />
            <MegaMenu {...menuData.ipPolicy} />
            <MegaMenu {...menuData.learning} />
          </nav>
          
          <div className="ml-auto flex items-center h-full">
            <FindItFastMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
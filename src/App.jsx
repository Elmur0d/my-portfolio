import './App.css'

function App() {

  const Icon = ({ name, className }) => {
  // Simple SVG representations for a few key icons (simulating lucide-react)
  const icons = {
    CodeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    TypeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>
    ),
    ServerIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" x2="6" y1="6" y2="6"></line><line x1="6" x2="6" y1="18" y2="18"></line></svg>
    ),
    PaletteIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44C9.72 2 8 3.73 8 6v.44C4.37 6.44 2 9.22 2 12c0 3.32 2.68 6 6 6h.44c2.27 0 4-1.73 4-4v-.44c0-2.78 1.72-5.06 4-5.56V6c0-2.27-1.73-4-4-4z"></path></svg>
    ),
    DatabaseIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    GitBranchIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"></line><path d="M18 6l-6 6 6 6"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="6" r="3"></circle></svg>
    ),
    UserIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    BriefcaseIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
    ),
    MailIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    ),
    GithubIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.75-1-4 .25-2.5-1.1-5-1-5 .67-2.2.84-2.75 0-3.5 0 0-1 0-3 2.5a7.35 7.35 0 0 0-6 0c-2-2.5-3-2.5-3-2.5-.83.75-.5 2.2.06 3.5-1.07 1.44-1.92 3.91-1.92 6.5C2 17.5 5 19.5 8 19.5c.38.35.75.7 1.12 1.05V22"></path></svg>
    ),
    LinkedinIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    LinkIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.73 1.74"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    ),
  };

  return <span className={className}>{icons[name] || icons.CodeIcon}</span>;
};

// --- Mock Data for Easy Customization ---
const developerInfo = {
    name: "Jamie Chen",
    title: "Senior React Developer | Front-End & UX Focus",
    summary: "Dedicated software developer with 5+ years of experience specializing in building modern, scalable, and responsive web applications using the React ecosystem. I thrive on solving complex UI/UX challenges and contributing to open-source projects. My passion lies in crafting highly performant and accessible user interfaces.",
    contact: {
        email: "jamie.chen@example.com",
        github: "https://github.com/jamiechendev",
        linkedin: "https://linkedin.com/in/jamiechen",
    }
};

const skillSet = [
    { name: "React", iconName: "CodeIcon", level: "Expert" },
    { name: "TypeScript", iconName: "TypeIcon", level: "Advanced" },
    { name: "Tailwind CSS", iconName: "PaletteIcon", level: "Expert" },
    { name: "Node.js (Express)", iconName: "ServerIcon", level: "Intermediate" },
    { name: "State Management (Zustand/Redux)", iconName: "DatabaseIcon", level: "Advanced" },
    { name: "Git & GitHub", iconName: "GitBranchIcon", level: "Advanced" },
];

const petProjects = [
    {
        title: "Recipe Finder CLI",
        description: "A command-line tool built with Node.js that scrapes recipe data from popular cooking sites and converts the ingredients into a shopping list format.",
        tech: "Node.js, TypeScript, CLI Tools, Web Scraping",
        liveLink: "https://mock-recipe-cli.vercel.app/", // Mock live link
        codeLink: "https://github.com/jamiechendev/recipe-finder-cli"
    },
    {
        title: "Interactive Data Visualization Dashboard",
        description: "A responsive dashboard for visualizing mock sales data. Developed to practice complex state management and responsive chart libraries.",
        tech: "React, Zustand, D3.js, Styled Components",
        liveLink: "https://mock-dataviz-app.vercel.app/", // Mock live link
        codeLink: "https://github.com/jamiechendev/dataviz-dashboard"
    },
    {
        title: "Minimalist Pomodoro Timer",
        description: "A desktop-first web application designed to help users manage their time using the Pomodoro technique. Features local storage for settings persistence.",
        tech: "React, Tailwind CSS, Local Storage API",
        liveLink: "https://mock-pomodoro.vercel.app/", // Mock live link
        codeLink: "https://github.com/jamiechendev/minimal-pomodoro-timer"
    },
];

// --- Components ---

const Header = () => (
    <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-400 tracking-wider">
                {developerInfo.name.split(' ')[0]}
                <span className="text-gray-300">.dev</span>
            </h1>
            <nav className="hidden md:flex space-x-6 text-gray-300 font-medium">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-400 transition duration-300">
                        {item}
                    </a>
                ))}
            </nav>
            <a
                href={developerInfo.contact.email}
                className="hidden sm:inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
                Get In Touch
            </a>
        </div>
    </header>
);

const HeroSection = () => (
    <section id="hero" className="py-20 md:py-32 text-center bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Profile Image Placeholder - Replace with your own link */}
                <img
                    src="https://placehold.co/128x128/1F2937/D1D5DB/png?text=JC"
                    alt="Jamie Chen Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-2xl"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/1F2937/D1D5DB/png?text=JC"; }}
                />
                
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
                    Hi, I'm <span className="text-teal-400">{developerInfo.name}</span>.
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light mb-8">
                    {developerInfo.title}
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
                    >
                        <Icon name="BriefcaseIcon" className="w-5 h-5 mr-2" />
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="bg-gray-700 hover:bg-gray-600 text-teal-400 font-semibold py-3 px-8 rounded-xl border border-teal-400 transition duration-300 transform hover:scale-105 flex items-center"
                    >
                        <Icon name="MailIcon" className="w-5 h-5 mr-2" />
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const AboutSection = () => (
    <section id="about" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h3 className="text-4xl font-bold text-white mb-10 text-center border-b-2 border-teal-500 inline-block pb-2">
                About Me
            </h3>
            <div className="bg-gray-700 p-8 rounded-xl shadow-2xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                    {developerInfo.summary}
                </p>
            </div>
        </div>
    </section>
);

const SkillsSection = () => (
    <section id="skills" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h3 className="text-4xl font-bold text-white mb-12 text-center border-b-2 border-teal-500 inline-block pb-2">
                Core Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skillSet.map((skill) => (
                    <div key={skill.name} className="bg-gray-800 p-6 rounded-xl shadow-xl transition duration-300 hover:bg-gray-700 hover:scale-105 flex flex-col items-center text-center">
                        <Icon name={skill.iconName} className="w-8 h-8 text-teal-400 mb-3" />
                        <h4 className="text-xl font-semibold text-white mb-1">{skill.name}</h4>
                        <p className="text-sm text-gray-400 italic">({skill.level})</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProjectsSection = () => (
    <section id="projects" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h3 className="text-4xl font-bold text-white mb-12 text-center border-b-2 border-teal-500 inline-block pb-2">
                Pet Projects & Contributions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {petProjects.map((project, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transition duration-300 hover:shadow-teal-500/50">
                        <div className="p-6 flex-grow">
                            <h4 className="text-2xl font-bold text-teal-400 mb-3">{project.title}</h4>
                            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                            <p className="text-xs font-mono text-gray-400 bg-gray-800 p-2 rounded-lg inline-block">
                                Tech: {project.tech}
                            </p>
                        </div>
                        <div className="flex border-t border-gray-600">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2 p-3 text-center text-white bg-gray-600 hover:bg-teal-600 transition duration-300 flex items-center justify-center text-sm font-medium rounded-bl-xl"
                            >
                                <Icon name="LinkIcon" className="w-4 h-4 mr-1" />
                                Live Demo
                            </a>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2 p-3 text-center text-teal-400 bg-gray-600 hover:bg-teal-600 hover:text-white transition duration-300 flex items-center justify-center text-sm font-medium rounded-br-xl"
                            >
                                <Icon name="GithubIcon" className="w-4 h-4 mr-1" />
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
                Let's Build Something Great.
            </h3>
            <p className="text-xl text-gray-400 mb-10">
                I'm currently open to new opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-4">
                <a
                    href={`mailto:${developerInfo.contact.email}`}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
                >
                    <Icon name="MailIcon" className="w-6 h-6 mr-3" />
                    {developerInfo.contact.email}
                </a>
                <div className="flex justify-center space-x-6 pt-4">
                    <a href={developerInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                        <Icon name="GithubIcon" className="w-8 h-8" />
                    </a>
                    <a href={developerInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                        <Icon name="LinkedinIcon" className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-6 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>Designed and Built by {developerInfo.name} using React & Tailwind CSS.</p>
        </div>
    </footer>
);




  return (
    <>
      
    </>
  )
}

export default App

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './index.css'

const Icon = ({ name, className }) => {
    const icons = {
        GithubIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Github-fill SVG Icon</title><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd"/></svg>
        ),
        LinkedinIcon: ( 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Linkedin-box-fill SVG Icon</title><path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd"/></svg>
        ),
        TelegramIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Telegram-fill SVG Icon</title><path fill="currentColor" fillRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635" clipRule="evenodd"/></svg>
        ),
        EmailIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>Email SVG Icon</title><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
        ),
        LinkIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Link-chain SVG Icon</title><path fill="currentColor" d="M10 13a1 1 0 0 1-1 1H7a3 3 0 0 1 0-6h2a1 1 0 0 1 0 2H7a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1m4-4a1 1 0 0 1 1 1h2a3 3 0 0 1 0 6h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-2a1 1 0 0 1-1-1M8 12h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2"/></svg>
        ),
        NodejsIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><title>Nodejs SVG Icon</title><path fill="currentColor" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/></svg>
        ),
        ReactIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>React-fill SVG Icon</title><path fill="currentColor" d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689m-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387m-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952M16.97 13c.264.656.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13m-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566m-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144m3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c-.44-.573.895-1.096 1.345-1.566M8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386m-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499m2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132m11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423m1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475"/><path fill="currentColor" d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472"/></svg>
        ),
    };
    const SelectedIcon = icons[`${name}Icon`] || <></>; 
    return <span className={className}>{SelectedIcon}</span>;
}

const MOCK_DATA = {
    name: "Elmurod Doniyorov",
    title: "Software Developer",
    shortBio: "Sofware Developer/Frontend Developer",
    about: [
        "I am detail-oriented Frontend Developer with a strong foundation in JavaScript and TypeScript. Proficient in building scalable web aplications using React, Next.js, and Nest.js. Experienced in state management (Redux, MobX, Zustand) and modern styling tools like Tailwind CSS. Currently expanding expertise in Microservices architecture and Java/SQL through academic studies.",
    ],
    socials: [
        { name: "Email", url: "mailto:doniyorovelmurod60@gmail.com", icon: "Email" },
        { name: "Github", url: "https://github.com/Elmur0d", icon: "Github" },
        { name: "LinkedIn", url: "#", icon: "Linkedin" }, 
        { name: "Telegram", url: "https://t.me/elik0I", icon: "Telegram" }
    ],
    projects: [
        {
            title: "Forms-app",
            description: "A full-stack application for creating public and private surveys with a focus on user engagement. Implemented high-speed search functionality using ElasticSearch. Built a dual-theme UI (Light/Dark mode) and multi language support (EN/RU). integrated social features including a comment system, like functionality, and a feedback loop. Developed a comprehensive Admin Panel for content management.",
            techStack: ["Node.js", "React", "Redux"], 
            liveLink: "https://forms-app-rho.vercel.app",
            githubLink: "https://github.com/Elmur0d/forms-app"
        },
    ]
};

const SectionRef = React.forwardRef(({ children, id, className = "" }, ref) => (
    <section 
        id={id} 
        ref={ref} 
        className={`mb-20 md:mb-32 pt-16 -mt-16 ${className}`}
    >
        {children}
    </section>
));
SectionRef.displayName = 'SectionRef';


const AboutSection = React.forwardRef((props, ref) => (
    <SectionRef id="about" ref={ref}>
        <h2 className="lg:hidden text-3xl font-bold text-white mb-8 ">
            Обо мне
        </h2>
        {MOCK_DATA.about.map((paragraph, index) => (
            <p key={index} className="mb-4 text-slate-400 leading-relaxed text-base md:text-lg">
                {paragraph.split('**').map((part, i) => (
                    i % 2 === 1 ? <strong key={i} className="text-teal-400 font-semibold">{part}</strong> : part
                ))}
            </p>
        ))}
    </SectionRef>
));
AboutSection.displayName = 'AboutSection';

const ProjectCard = ({ project }) => (
    <div
        className="group block rounded-lg transition duration-300 p-4 md:p-6 shadow-none hover:shadow-xl hover:bg-slate-800/50 cursor-pointer border border-transparent hover:border-slate-800"
    >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <a
                href={project.liveLink || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors mb-2 md:mb-0"
            >
                {project.title}
            </a>
            <div className="flex space-x-3 text-slate-400 group-hover:text-teal-400 shrink-0">
                {project.githubLink && (
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub Link"
                    >
                        <Icon name="Github" className="w-6 h-6" />
                    </a>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Live Demo Link"
                    >
                        <Icon name="Link" className="w-6 h-6" />
                    </a>
                )}
            </div>
        </div>

        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
            {Array.isArray(project.techStack) && project.techStack.map((tech, index) => (
                <span
                    key={index}
                    className="text-xs font-mono text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full whitespace-nowrap"
                >
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

const ProjectsSection = React.forwardRef((props, ref) => (
    <SectionRef id="projects" ref={ref}>
        <h2 className="text-3xl font-bold text-white mb-8">
            Проекты
        </h2>
        <div className="space-y-6">
            {MOCK_DATA.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </SectionRef>
));
ProjectsSection.displayName = 'ProjectsSection';


const StickySidebar = ({ activeSection }) => {
    const navItems = [
        { id: 'about', label: 'ОБО МНЕ' },
        { id: 'projects', label: 'ПЕТ-ПРОЕКТЫ' },
    ];

    const getSocialsData = () => {
        return MOCK_DATA.socials.filter(social => social.url && social.url !== '#'); 
    };

    const LinkItem = ({ id, label }) => {
        const isActive = activeSection === id;
        return (
            <li>
                <a
                    href={`#${id}`}
                    className={`group flex items-center py-3 transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-slate-500 hover:text-white hover:translate-x-1'
                    }`}
                >
                    <span
                        className={`mr-4 h-px transition-all duration-300 ${
                            isActive ? 'w-16 bg-white' : 'w-8 bg-slate-500 group-hover:w-16 group-hover:bg-white'
                        }`}
                    ></span>
                    <span className="text-xs font-bold tracking-widest uppercase">
                        {label}
                    </span>
                </a>
            </li>
        );
    };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    <a href="#about">{MOCK_DATA.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {MOCK_DATA.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    {MOCK_DATA.shortBio}
                </p>

                <nav className="hidden lg:block mt-24">
                    <ul>
                        {navItems.map(item => (
                            <LinkItem key={item.id} id={item.id} label={item.label} />
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className="mt-8 flex items-center space-x-6">
                {getSocialsData().map(social => (
                    <li key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-slate-400 hover:text-teal-400 transition-colors duration-300"
                            aria-label={`${social.name} Link`}
                        >
                            <Icon name={social.icon} className="w-6 h-6" />
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};



function App() {
    const [activeSection, setActiveSection] = useState('about');
    const sectionRefs = useRef({});
    const observer = useRef(null);
    
    const observerOptions = {
        rootMargin: '-30% 0px -70% 0px', 
        threshold: 0, 
    };

    const observerCallback = useCallback((entries) => {
        let currentActive = null;
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentActive = entry.target.id;
            }
        });

        if (currentActive) {
            setActiveSection(currentActive);
        }
    }, []);

    useEffect(() => {
        observer.current = new IntersectionObserver(observerCallback, observerOptions);

        const currentRefs = Object.values(sectionRefs.current).filter(el => el);
        currentRefs.forEach(ref => observer.current.observe(ref));

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [observerCallback]); 

    const setSectionRef = useCallback((id) => (el) => {
        if (sectionRefs.current[id] && observer.current) {
             try {
                 observer.current.unobserve(sectionRefs.current[id]);
             } catch (e) {
             }
        }
        
        sectionRefs.current[id] = el;
        
        if (el && observer.current) {
            observer.current.observe(el);
        }
    }, []); 


    return (
        <div className="bg-slate-900 font-sans text-slate-200 min-h-screen selection:bg-teal-700 selection:text-white">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <div className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/3">
                        <StickySidebar activeSection={activeSection} />
                    </div>

                    <main className="pt-24 lg:w-2/3 lg:py-24">
                        <AboutSection ref={setSectionRef('about')} />
                        <ProjectsSection ref={setSectionRef('projects')} />
                        
                        <footer className="mt-12 py-10 text-center text-xs text-slate-500">
                            <p>Спроектировано и разработано с использованием React &amp; Tailwind CSS.</p>
                            <p>Источник вдохновения: <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Brittany Chiang</a>.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App;

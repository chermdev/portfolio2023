const Project = ({ children }) => (
    <article className='max-w-[300px] p-4 space-y-4 border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/80'>{children}</article>
)

const Preview = ({ children }) => (
    <div className='w-full h-[150px] bg-zinc-200 dark:bg-zinc-800 rounded-xl'></div>
)

const Title = ({ children }) => (
    <h3 className='text-2xl font-bold leading-none'>{children}</h3>
)

const Description = ({ children }) => (
    <p className='text-base leading-none'>{children}</p>
)

const Badge = ({ children }) => (
    <span className="text-white text-xs rounded-full bg-black px-3 py-1 font-bold">
        {children}
    </span>
)


export default function Projects() {
    return (
        <section id="projects" className='py-16 md:py-20 bg-bgcolor'>
            <div className="m-auto w-[var(--max-page-width)] max-w-[var(--max-section-width)]">
                <header className="flex flex-col justify-center items-center mb-6 gap-2">
                    <h2 className='text-4xl font-bold'>Projects</h2>
                    <div className='text-xl'>Coming Soon</div>
                </header>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Project>
                        <Preview></Preview>
                        <Title>Project 1</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptate ab nemo, optio.</Description>
                        <div className="flex flex-wrap gap-1">
                            <Badge>ReactJS</Badge>
                            <Badge>TailwindCSS</Badge>
                            <Badge>SQL</Badge>
                        </div>
                    </Project>
                    <Project>
                        <Preview></Preview>
                        <Title>Project 2</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptate ab nemo, optio.</Description>
                        <div className="flex flex-wrap gap-1">
                            <Badge>Python</Badge>
                            <Badge>Selenium</Badge>
                            <Badge>Playwright</Badge>
                        </div>
                    </Project>
                    <Project>
                        <Preview></Preview>
                        <Title>Project 3</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptate ab nemo, optio.</Description>
                        <div className="flex flex-wrap gap-1">
                            <Badge>Javascript</Badge>
                            <Badge>Typescript</Badge>
                            <Badge>Astro</Badge>
                        </div>
                    </Project>
                </div>
            </div>
        </section>
    )
}
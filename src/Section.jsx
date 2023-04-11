function Section({ children, id }) {
    return (
        <section id={id} className="min-h-[calc(100vh)] pt-20">
            {children}
        </section>
    )
}

export default Section
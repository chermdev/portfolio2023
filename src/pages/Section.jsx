function Section({ children, id }) {
    return (
        <section id={id} className="pt-16 sm:pt-20">
            {children}
        </section>
    )
}

export default Section
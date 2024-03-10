import TechnologyTag from './TechnologyTag'

export default function TechnologyTags({ tech }) {
  return (
    tech &&
    <ul className='flex gap-2 md:gap-4 flex-wrap' >
      {tech.map((technology, index) =>
        <TechnologyTag
          key={index}
          name={technology}>
        </TechnologyTag>
      )}
    </ul>
  )
}
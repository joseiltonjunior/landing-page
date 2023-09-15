import img from '@/assets/tech.png'

export function Aside() {
  return (
    <aside className=" ms-auto">
      <img
        src={img}
        alt="tech icon"
        className="transform hover:scale-110 transition duration-300"
        width={500}
        height={500}
      />
    </aside>
  )
}

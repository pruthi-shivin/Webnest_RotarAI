export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-10">

      <h1 className="text-2xl font-bold">
        rotor ai
      </h1>

      <ul className="hidden md:flex gap-10 text-sm">
        <li className="cursor-pointer hover:text-green-500">Product</li>
        <li className="cursor-pointer hover:text-green-500">Solutions</li>
        <li className="cursor-pointer hover:text-green-500">Resources</li>
        <li className="cursor-pointer hover:text-green-500">Pricing</li>
      </ul>

      <button className="bg-[#00FF66] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
        Book a demo ↗
      </button>

    </nav>
  )
}
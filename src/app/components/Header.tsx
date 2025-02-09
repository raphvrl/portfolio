export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex gap-6 justify-center">
          <li>
            <a href="#hero" className="hover:text-blue-600">
              Accueil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

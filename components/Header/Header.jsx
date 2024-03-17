export function Header() {
  return (
    <header
      className={`px-4 py-5 flex flex-row justify-between items-center gap-6 bg-blue-400 shadow-xl text-xl text-white`}
    >
      <div>
        <ul className={`flex flex-row justify-around gap-6`}>
          <li className={`hover:text-amber-300 transition-colors`}>
            <button>Крипто рынок</button>
          </li>
          <li className={`hover:text-amber-300 transition-colors`}>
            <button>Фондовый рынок</button>
          </li>
          <li className={`hover:text-amber-300 transition-colors`}>
            <button>Вклады</button>
          </li>
        </ul>
      </div>
      <div className={``}>AUTH</div>
    </header>
  );
}

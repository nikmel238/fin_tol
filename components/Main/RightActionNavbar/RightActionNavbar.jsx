export function RightActionNavbar() {
  return (
    <div className={`basis-1/6 h-40 sticky top-[250px] text-white`}>
      <ul className={`flex flex-col gap-3 items-start text-center`}>
        <li
          className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
        >
          <button>Внести средства</button>
        </li>
        <li
          className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
        >
          <button>Добавить актив</button>
        </li>
        <li
          className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
        >
          <button>Транзакция</button>
        </li>
      </ul>
    </div>
  );
}

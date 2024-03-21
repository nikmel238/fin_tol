export function Main() {
  return (
    <main className={`flex flex-row mt-4`}>
      <div className={`basis-1/6 h-40 sticky top-[250px] text-white `}>
        <div className={`flex flex-col gap-3 items-end`}>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Общая информация
          </button>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Активы
          </button>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Внести средства
          </button>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Транзакция
          </button>
        </div>
      </div>

      <div className={`flex-auto h-[600px] text-center`}>
        <div className={``}>Content</div>
      </div>

      <div className={`basis-1/6 h-40 sticky top-[250px] text-white`}>
        <div className={`flex flex-col gap-3 items-start`}>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Внести средсива
          </button>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Добавить актив
          </button>
          <button
            className={`w-52 py-2 bg-blue-400 rounded-lg hover:text-amber-300 transition-colors shadow-md`}
          >
            Транзакция
          </button>
        </div>
      </div>
    </main>
  );
}

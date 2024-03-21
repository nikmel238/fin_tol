export function Main() {
  return (
    <main className={`flex flex-row mt-4`}>
      <div className={`basis-1/6 h-40 sticky top-[400px]  text-end`}>
        LeftActionBar
        <div className={`flex flex-col`}>
          <button>Кнопка</button>
          <button>Кнопка</button>
        </div>
      </div>

      <div className={`flex-auto text-center`}>
        <div className={``}>Content</div>
      </div>

      <div className={`basis-1/6 h-40 sticky top-[400px] text-start`}>
        RightActionBar
      </div>
    </main>
  );
}

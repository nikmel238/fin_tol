import { LeftActionNavbar } from "./LeftActionNavbar";
import { RightActionNavbar } from "./RightActionNavbar";

export function Main() {
  return (
    <main className={`flex flex-row mt-4`}>
      <LeftActionNavbar />

      <div className={`flex-auto px-12 h-[600px] text-center `}>
        <div>Общая информация</div>
        <div className={`grid grid-rows-2 gap-y-2 my-5`}>
          <div
            className={`grid grid-cols-2 gap-x-4 justify-center items-center border border-stone-100 border-b-stone-600`}
          >
            <div className={``}>
              <div>Баланс {`1000.9`} ₽</div>
              <div>
                Прибыль:{" "}
                <span className={``}>
                  {`+ 250.7`} ₽ {`+ 22.0`} %
                </span>
              </div>
            </div>
            <div className={``}>
              <div>Баланс {`1000,9`} $</div>
              <div>
                Прибыль:{" "}
                <span className={``}>
                  {`+ 250.7`} $ {`+ 22.0`} %
                </span>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-x-4 justify-center items-center border border-stone-100 border-b-stone-600`}
          >
            <div>
              <div>Вложено {`1000,9`} ₽</div>
              <div>
                <span className={``}>
                  {`+ 250.7`} ₽ {`+ 22.0`} %
                </span>
              </div>
            </div>
            <div>
              <div>Вложено {`1000,9`} $</div>
              <div>
                <span className={``}>
                  {`+ 250.7`} $ {`+ 22.0`} %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightActionNavbar />
    </main>
  );
}

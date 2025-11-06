function createQueryTask() {
  setTimeout(() => {
    console.log("Создание первой макрозадачи: setTimeout 1");

    Promise.resolve().then(() => {
      console.log("Микрозадача 1: обработка промиса внутри setTimeout 1");
    });

    function changeColor() {
      document.querySelector(".main-title").style = ` color: red;`;
      console.log(
        "Рендер задача внутри первой макрозадачи: Изменение цвета заголовка"
      );
    }
    requestAnimationFrame(() => {
      changeColor();
    });
  }, 1000);
}

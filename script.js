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

  setTimeout(() => {
    console.log("Создание второй макрозадачи: setTimeout 2");
    Promise.resolve().then(() => {
      console.log("Микрозадача 1: обработка промиса внутри setTimeout 2");
    });

    Promise.resolve().then(() => {
      console.log("Микрозадача 2: обработка промиса внутри setTimeout 2");
    });
  }, 1000);

  setTimeout(() => {
    console.log("Создание третьей макрозадачи: setTimeout 3");

    Promise.resolve().then(() => {
      console.log("Микрозадача 1: обработка промиса внутри setTimeout 3");
    });

    function changeContent() {
      document.querySelector(
        ".main-title"
      ).textContent = `Задача на асинхронный код завершена`;
      console.log(
        "Рендер задача внутри третьей макрозадачи: Изменение Элемента DOM"
      );
    }
    requestAnimationFrame(() => {
      changeContent();
    });
  }, 1000);
}

createQueryTask();

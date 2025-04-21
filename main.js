function startGame() {
    // Переход к файлу игры
    window.location.href = "game.html";
  }
  
  function openSettings() {
    // Переход к настройкам
    window.location.href = "settings.html";
  }
  
  function exitGame() {
    // Выход из приложения (работает только в Electron)
    if (typeof require !== 'undefined') {
      const { app } = require('electron').remote;
      app.quit();
    } else {
      console.log("Функция выхода работает только в .exe версии.");
    }
  }
  function startGame() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'game.html';
    }, 500); // Длительность совпадает с CSS transition
  }

  function openSettings() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'settings.html';
    }, 500); // Длительность совпадает с CSS transition
  }

  function exitGame() {
    window.close(); // Не работает в большинстве браузеров, но можно заменить на alert
    alert('Спасибо за игру!');
  }
  window.onload = () => {
    document.body.classList.add('fade-in');
  };

  // Анимация исчезновения и переход назад
  function goBack() {
    document.body.classList.remove('fade-in');
    document.body.style.opacity = '0';
    setTimeout(() => {
      location.href = 'index.html';
    }, 500);
  }
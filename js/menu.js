(function () {
  const listElements = document.querySelectorAll(".elemento-menu--mostrar");
  const list = document.querySelector(".enlaces-menu");
  const menu = document.querySelector("#menu-hamburguesa");
  const xMenu = document.querySelector("#menu-hamburguesa button");

  function menuMovil() {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("elemento-menu--mostrar");
        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  }
  function borrarStyleHeight() {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = "";
        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}`;
      });
    });
  }
  if (window.innerWidth > 800) {
    borrarStyleHeight();
  } else {
    menuMovil();
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      borrarStyleHeight();
    } else {
      menuMovil();
    }
  });

  menu.addEventListener("click", () =>
    list.classList.toggle("enlaces-menu--mostrar")
  );
  menu.addEventListener("click", () => xMenu.classList.toggle("open"));
})();

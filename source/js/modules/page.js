export default () => {
  let addLoadClass = function () {
    document.querySelector(`body`).classList.add(`is-load`);
  };

  addLoadClass();

  window.addEventListener(`load`, addLoadClass);
};

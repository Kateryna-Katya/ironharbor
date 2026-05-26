document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.5938 11.9601H6.40625C5.69864 11.9601 5.125 12.5337 5.125 13.2413C5.125 13.9489 5.69864 14.5226 6.40625 14.5226H34.5938C35.3014 14.5226 35.875 13.9489 35.875 13.2413C35.875 12.5337 35.3014 11.9601 34.5938 11.9601Z" fill="white" />
  <path d="M29.4688 19.2205H6.40625C5.69864 19.2205 5.125 19.7941 5.125 20.5017C5.125 21.2093 5.69864 21.783 6.40625 21.783H29.4688C30.1764 21.783 30.75 21.2093 30.75 20.5017C30.75 19.7941 30.1764 19.2205 29.4688 19.2205Z" fill="white" />
  <path d="M34.5938 26.4774H6.40625C5.69864 26.4774 5.125 27.0511 5.125 27.7587C5.125 28.4663 5.69864 29.0399 6.40625 29.0399H34.5938C35.3014 29.0399 35.875 28.4663 35.875 27.7587C35.875 27.0511 35.3014 26.4774 34.5938 26.4774Z" fill="white" />
</svg>
    `;
  
    const crossIcon = `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33.4149 5.69079C33.678 5.51538 33.9937 5.43657 34.3083 5.46781C34.6229 5.49905 34.9169 5.63839 35.1403 5.86211C35.3637 6.08582 35.5026 6.38007 35.5334 6.69472C35.5642 7.00937 35.4849 7.32496 35.3091 7.58773L35.1342 7.80093L22.4324 20.5L35.1342 33.2018L35.3091 33.415C35.4833 33.6778 35.5613 33.9928 35.5298 34.3065C35.4983 34.6203 35.3593 34.9134 35.1363 35.1364C34.9134 35.3594 34.6202 35.4984 34.3065 35.5299C33.9927 35.5613 33.6778 35.4834 33.4149 35.3092L33.2017 35.1343L20.4999 22.4325L7.80087 35.1343C7.6748 35.2648 7.52399 35.3689 7.35725 35.4405C7.19051 35.5122 7.01118 35.5499 6.82971 35.5514C6.64825 35.553 6.46829 35.5184 6.30033 35.4497C6.13237 35.381 5.97978 35.2795 5.85146 35.1512C5.72314 35.0229 5.62166 34.8703 5.55294 34.7023C5.48423 34.5344 5.44965 34.3544 5.45122 34.1729C5.4528 33.9915 5.4905 33.8121 5.56213 33.6454C5.63375 33.4787 5.73787 33.3279 5.8684 33.2018L18.5675 20.5L5.8684 7.80093L5.69073 7.58773C5.51369 7.32476 5.43356 7.00843 5.46408 6.69289C5.4946 6.37736 5.63386 6.08224 5.85802 5.85808C6.08218 5.63392 6.3773 5.49466 6.69283 5.46414C7.00837 5.43363 7.3247 5.51375 7.58767 5.69079L7.80087 5.86846L20.4999 18.5675L33.2017 5.86846L33.4149 5.69079Z" fill="white" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });
function scrollCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const scrollAmount = carousel.clientWidth; // Rola a largura exata de três itens

  // Executa a rolagem de forma suave
  carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
  });
}

function scrollCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const scrollAmount = carousel.clientWidth; // Define o quanto vai rolar para cada clique
  carousel.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
  });
}

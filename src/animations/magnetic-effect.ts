import { mapRange } from '@/utils/map-range';

  const MOVEMENT_SCALE = 10
  const magneticElements = document.querySelectorAll(
    '[data-animation="magnetic-element"]',
  );

  const handleMouseMove = (event: MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    const { left, top, width, height } = element.getBoundingClientRect();
    const relativeX = event.clientX - left;
    const relativeY = event.clientY - top;
    const mapX = mapRange(0, width, -1, 1);
    const mapY = mapRange(0, height, -1, 1);
    element.style.transform = `translate(${mapX(relativeX) * MOVEMENT_SCALE}px, ${mapY(relativeY) * MOVEMENT_SCALE}px)`;
  };

  const handleMouseLeave = (event: MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = '';
  };

  magneticElements.forEach((element) => {
    if (element instanceof HTMLElement) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
  });
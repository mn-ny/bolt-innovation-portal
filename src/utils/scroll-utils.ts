
/**
 * Disables or enables scrolling on the body element
 * @param disable Whether to disable scrolling
 */
export const disableScroll = (disable: boolean) => {
  if (disable) {
    // Get current scroll position
    const scrollY = window.scrollY;
    
    // Apply styles to fix the position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.dataset.scrollY = scrollY.toString();
  } else {
    // Restore scroll position
    const scrollY = document.body.dataset.scrollY || '0';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY));
    delete document.body.dataset.scrollY;
  }
};

/**
 * Smooth scrolls to the target element
 * @param elementId ID of the element to scroll to
 * @param offset Optional offset from the top of the element
 */
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
};

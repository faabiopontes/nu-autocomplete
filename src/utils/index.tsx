export const openInNewTab = (url: string) => {
  window.open(url, "_blank");
};

export const scrollToElement = (
  element: Element,
  alignToTop: boolean = false
) => {
  element.scrollIntoView(alignToTop);
};

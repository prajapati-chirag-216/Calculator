export const applyLongShadow = (calculatorElement: HTMLElement) => {
  // Generate the box-shadow CSS property string for 1000 pixels
  let boxShadow = "";
  for (let i = 1; i <= 300; i++) {
    boxShadow += `#b4353c ${4 * i}px ${i}px, `;
  }

  // Remove the trailing comma and space
  // here ', '
  boxShadow = boxShadow.slice(0, -2);

  // apply the box-shadow to the element
  calculatorElement.style.boxShadow = boxShadow;
};

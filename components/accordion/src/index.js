import styles from './css/index.css';

/**
 * Accordion web component that collapses and expands content inside itself on click.
 *
 * @element cagov-accordion
 *
 * @prop {class string} prog-enhanced -
 * The element is open before any javascript executes so content
 * can be read if an error occurs that prevents js execution.
 * The prog-enhanced class is added to the element once javascript
 * begins to execute. This triggers default collabsed state.
 *
 * @fires click - Default value, will be defined by this.dataset.eventType.
 *
 * @attr {string} [data-event-type=click] - dataset defined value for event type fired on click.
 * @attr {string} aria=expanded=true -
 * set on the internal element .accordion-card-header.
 * If this is true the accordion will be open before any user interaction.
 *
 * @cssprop --primary-color - Default value of #1f2574, used for all colors of borders and fills
 * @cssprop --hover-color - Default value of #F9F9FA, used for background on hover
 *
 */
export class CaGovAccordion extends window.HTMLElement {
  connectedCallback() {
    this.classList.add('prog-enhanced');
    this.expandTarget = this.querySelector('.accordion-card-container');
    this.expandButton = this.querySelector('.accordion-card-header');
    if (this.expandButton) {
      this.expandButton.addEventListener('click', this.listen.bind(this));
    }
    this.activateButton = this.querySelector('.accordion-card-header');
    this.eventType = this.dataset.eventType ? this.dataset.eventType : 'click';

    // Detect if accordion should open by default
    const expanded = this.activateButton.getAttribute('aria-expanded');
    if (expanded === 'true') {
      this.triggerAccordionClick(); // Open the accordion.
      const allLinks = this.querySelectorAll('.accordion-card-container a');
      const allbuttons = this.querySelectorAll(
        '.accordion-card-container button',
      );
      for (let i = 0; i < allLinks.length; i += 1) {
        allLinks[i].removeAttribute('tabindex'); // remove tabindex from all the links
      }
      for (let i = 0; i < allbuttons.length; i += 1) {
        allbuttons[i].removeAttribute('tabindex'); // remove tabindex from all the buttons
      }
    } else {
      // making sure that all links inside of the accordion container are having tabindex -1
      const allLinks = this.querySelectorAll('.accordion-card-container a');
      const allbuttons = this.querySelectorAll(
        '.accordion-card-container button',
      );
      for (let i = 0; i < allLinks.length; i += 1) {
        allLinks[i].setAttribute('tabindex', '-1');
      }

      for (let i = 0; i < allbuttons.length; i += 1) {
        allbuttons[i].setAttribute('tabindex', '-1');
      }
    }
  }

  listen() {
    if (!this.cardBodyHeight) {
      this.cardBodyHeight = this.querySelector('.card-body').clientHeight + 24;
    }
    if (this.expandTarget.clientHeight > 0) {
      this.closeAccordion();
    } else {
      this.expandAccordion();
    }
  }

  triggerAccordionClick() {
    const event = new MouseEvent(this.eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    this.expandButton.dispatchEvent(event);
  }

  closeAccordion() {
    this.expandTarget.style.height = '0px';
    this.expandTarget.setAttribute('aria-hidden', 'true');
    this.querySelector('.accordion-card-header').classList.remove(
      'accordion-alpha-open',
    );
    this.activateButton.setAttribute('aria-expanded', 'false');
    const allLinks = this.querySelectorAll('.accordion-card-container a');
    const allbuttons = this.querySelectorAll(
      '.accordion-card-container button',
    );
    for (let i = 0; i < allLinks.length; i += 1) {
      allLinks[i].setAttribute('tabindex', '-1'); // tabindex to all links
    }
    for (let i = 0; i < allbuttons.length; i += 1) {
      allbuttons[i].setAttribute('tabindex', '-1'); // tabindex to all buttons
    }
  }

  expandAccordion() {
    this.expandTarget.style.height = `${this.cardBodyHeight}px`;
    this.expandTarget.setAttribute('aria-hidden', 'false');
    this.querySelector('.accordion-card-header').classList.add(
      'accordion-alpha-open',
    );
    this.querySelector('.accordion-card-container').classList.remove(
      'collapsed',
    );
    this.activateButton.setAttribute('aria-expanded', 'true');
    const allLinks = this.querySelectorAll('.accordion-card-container a');
    const allbuttons = this.querySelectorAll(
      '.accordion-card-container button',
    );
    for (let i = 0; i < allLinks.length; i += 1) {
      allLinks[i].removeAttribute('tabindex'); // remove tabindex from all the links
    }
    for (let i = 0; i < allbuttons.length; i += 1) {
      allbuttons[i].removeAttribute('tabindex'); // remove tabindex from all the buttons
    }
  }
}
window.customElements.define('cagov-accordion', CaGovAccordion);
const style = document.createElement('style');
style.textContent = styles;
document.querySelector('head').appendChild(style);

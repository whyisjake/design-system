# Accordion

Accordions are expandable sections of content. Each section contains a heading (H2 or H3), a plus button (+), and more body text when opened.

Accordions keep pages looking clean by hiding information that most people do not need to see.

## When and how to use it

Use accordions to hide content most readers do not need.

Headings can be a:

- Word or phrase
- Sentence
- Question

Write headings that are brief and descriptive.

Only use accordions when:

- A small group of people needs the information
- People only need certain information (like selecting one of several license types)
- Providing notes or disclaimers

### How not to use it

Do not use accordions:

- If more than a third of your readers need the information in the accordion
- To make a page look shorter
- Inside other accordions

Accordions hide information unless someone opens them. This requires an extra action, which means readers have to do extra work to get this information. If most people need to see the content, put it in body content so people can scan for it.

## Demo and sample markup

<html-preview>

```html preview
<cagov-accordion>
  <div class="cagov-accordion-card">
    <button
      class="accordion-card-header accordion-alpha"
      type="button"
      aria-expanded="false"
    >
      <div class="accordion-title">Lorem ipsum</div>
      <div class="plus-minus">
        <cagov-plus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Plus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
              <line
                y1="6"
                x1="12.5"
                y2="19"
                x2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-plus>
        <cagov-minus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Minus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-minus>
      </div>
    </button>
    <div
      class="accordion-card-container"
      aria-hidden=" true"
      style="height: 0px;"
    >
      <div class="card-body">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
  </div>
</cagov-accordion>

<cagov-accordion>
  <div class="cagov-accordion-card">
    <button
      class="accordion-card-header accordion-alpha"
      type="button"
      aria-expanded="false"
    >
      <div class="accordion-title">Lorem ipsum</div>
      <div class="plus-minus">
        <cagov-plus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Plus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
              <line
                y1="6"
                x1="12.5"
                y2="19"
                x2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-plus>
        <cagov-minus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Minus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-minus>
      </div>
    </button>
    <div
      class="accordion-card-container"
      aria-hidden=" true"
      style="height: 0px;"
    >
      <div class="card-body">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
  </div>
</cagov-accordion>

<cagov-accordion>
  <div class="cagov-accordion-card">
    <button
      class="accordion-card-header accordion-alpha"
      type="button"
      aria-expanded="false"
    >
      <div class="accordion-title">Lorem ipsum</div>
      <div class="plus-minus">
        <cagov-plus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Plus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
              <line
                y1="6"
                x1="12.5"
                y2="19"
                x2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-plus>
        <cagov-minus>
          <div class="accordion-icon" aria-hidden="true">
            <svg viewbox="0 0 25 25">
              <title>Minus</title>
              <line
                x1="6"
                y1="12.5"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </cagov-minus>
      </div>
    </button>
    <div
      class="accordion-card-container"
      aria-hidden=" true"
      style="height: 0px;"
    >
      <div class="card-body">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
  </div>
</cagov-accordion>
```

</html-preview>

## Specs

| Property     | Value            |
| ------------ | ---------------- |
| Machine name | ds-accordion     |
| JavaScript   | yes              |
| Sass         | ./src/index.scss |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-accordion`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Add the **sample markup** to your HTML.
4. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.

## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--primary-color`
- `--hover-color`

All CSS variables define their own fallback value, so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-color”:

```css
:root {
  --primary-color: #064e66;
}
```

## Accessibility

### Component-specific accessibility review

The clickable element in the accordion is a standard button.

- People cannot focus on the content inside the accordion unless they open the accordion.
- Once open, any elements in the content can be focused on normally and reached via tabbing.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This component defaults to open. If no script on the page executes, the visitor will not be blocked from viewing content. Once the JavaScript executes, the accordion collapses to the desired state by default. If you want the accordion to be open instead of closed when the page loads, add the attribute `aria-expanded="true"`.

This component uses a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support custom elements. If the JavaScript for this component is not delivered or supported the component falls back to plain HTML. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

This component uses the following data attributes. We provide this information to help with integrating the component into backend publishing systems or identifying content that may require translation.

| Name  | Attribute name | Data type | Field type | Selector         |
| ----- | -------------- | --------- | ---------- | ---------------- |
| Title | title          | string    | Rich text  | .accordion-title |
| Body  | body           | string    | Rich text  | .card-body       |

## Contributor/Developer documentation

Run: `npm run start` to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze accordion --format json --outFile accordion/custom-elements.json
```

The <a href="https://github.com/web-padawan/api-viewer-element">api viewer element</a> references the generated custom-elements.json and builds a live preview playground with docs.

# Table

This CSS-only module contains styles for basic tables. `index.css` is for headless/agnostic implementations. `index.wordpress.css` is for Wordpress.

## Sample HTML

<html-preview>

```html preview
<link rel="stylesheet" href="../../base-css/dist/themes/cagov.css" />
<link rel="stylesheet" href="../dist/index.css" />

<figure class="cagov-table">
  <table>
    <thead>
      <tr>
        <th>No aligment</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table aligncenter">
  <table>
    <thead>
      <tr>
        <th>Align Center</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table alignleft">
  <table>
    <thead>
      <tr>
        <th>Align Left</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table alignright">
  <table>
    <thead>
      <tr>
        <th>Align Right</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

```

</html-preview>

## Expected variables

none.

## Available commands for developers.

`npm run build` - Generate css from scss files.

`npm run build:wp` - Generate Wordpress-friendly css from scss files.

`npm run test` - Run headless tests with [Open Web Componenents](https://open-wc.org/).

`npm run test:visual` Run headed tests with [Open Web Componenents](https://open-wc.org/).

# Gatsby Plugin AOS

[![npm version](https://badge.fury.io/js/gatsby-plugin-aos.svg)](https://badge.fury.io/js/gatsby-plugin-aos)

Welcome to the Gatsby plugin designed to animate DOM elements on scroll! This plugin integrates smoothly with [AOS (Animate On Scroll Library)](https://github.com/michalsnik/aos) to bring life to your website's elements.

For detailed usage instructions and advanced options, refer to [AOS's documentation](https://github.com/michalsnik/aos).

## Installation

To get started, simply install the plugin using Yarn or npm:

```bash
yarn add gatsby-plugin-aos
```
or
```bash
npm install --save gatsby-plugin-aos
```

## Getting Started

1. Include the plugin in your `gatsby-config.js` file.
2. Customize your animation settings using the optional `options` object.

```javascript
// Inside gatsby-config.js
plugins: [
  `gatsby-plugin-aos`
];
```

**Note**: If you're using [Gatsby Plugin Transition Link](https://www.gatsbyjs.org/packages/gatsby-plugin-transition-link/), ensure that this plugin is added before other transition-related plugins in the configuration.

## Configuration Options

Here's a comprehensive list of options along with their default values that you can utilize to configure this plugin:

```javascript
// Inside gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-aos`,
    options: {
        once: true, // Launch animation once flag
        disable: false, // Disable animations flag
        
        // Advanced Options
        selector: '[data-aos]', // Selector for elements to be animated
        animateClassName: 'aos-animate', // Class triggering animation
        disabledClassName: 'aos-disabled', // Class defining disabled state
        rootMargin: '0% 50%', // Root's bounding box margin
        enterEventName: 'aos:in', // Enter event name
        exitEventName: 'aos:out', // Exit event name
    }
  }
];
```

## Usage

The plugin automatically animates HTML elements with a `data-aos` attribute when they come into the viewport. Here's how you can use it:

- `data-aos` - animation name (required)
- `data-aos-duration` - animation duration (optional)
- `data-aos-delay` - animation delay (optional)
- `data-aos-easing` - animation easing (optional)

Example:

```html
<div
  data-aos="slide-up"
  data-aos-delay="300"
  data-aos-easing="ease"
></div>
```

Check out the available animations supported by this library [here](https://github.com/michalsnik/aos#animations).

## Contributing

I welcome contributions to enhance this plugin or fix any bugs. If you'd like to collaborate, feel free to submit a pull request. I appreciate your support in improving this plugin!

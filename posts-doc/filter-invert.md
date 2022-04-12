---
isBlog: false
title: 'Invert'
date: 'Apr 12. 2022'
excerpt: 'Create stunning filters. Utility classes to control the invert filters.'
cover*image: '/images/blog/cover/default-Image-blog.webp'
category: 'Filter'
author: 'Severin Glaser'
keywords: 'Invert, filter, filters'
classNames: ''
plainText: ' omencss css class example minimum value maximum value step invert number per invert-1per filter:invert 1% 0 100 +1% how to work the invert filter use the `invert number per` utilities to set the amount of invert for the element `invert-1per` equals to the css class `filter:invert 1% ` `invert-2per` equals to the css class `filter: invert 2% ` the maximum would be `invert-100per` it equals to the css class `filter: invert 100% ` in general: the omencss class steps are +1% ranging from 0-100  active focus and hover states omencss css class example active:invert number per active :invert-5per:active filter: invert 50% ; focus:invert number per focus :invert-5per:focus filter: invert 50% ; hover:invert number per hover :invert-5per:hover filter: invert 50% ; omencss let you conditionally apply utility classes for different page states thereby different variant modifiers are being used for example use `hover:invert-5per` to only apply the invert-5per utility class on hover  responsive breakpoints use variant modifiers to target media queries like responsive breakpoints media query range omencss example sm: 0 480 sm:invert-5per md: 480 768 md:invert-5per lg: 768 1080 lg:invert-5per omencss media queries can also be combined with active focus and hover states for example use `sm:invert-5per` to apply the invert-5per utility at only small screen sizes at or below 480 or `active:md:invert-5per` to apply the invert-5per utility at only between small screen sizes 480 and medium screen sizes 768 1 the structure for auto classes is as follows: ` conditional state : media query :invert number per` p e `active:md:invert-5per` executive summary when you vocalize the class names it helps you to learn and remember the classes as well as the structure you can say: omencss class names spoken example active:invert-5per focus:invert-5per hover:invert-5per active invert focus invert hover invert active:sm:invert-5per focus:sm:invert-5per hover:sm:invert-5per active small screens invert focus small screens invert hover small screens invert active:md:invert-5per focus:md:invert-5per hover:md:invert-5per active medium screens invert focus medium screens invert hover medium screens invert active:lg:invert-5per focus:lg:invert-5per hover:lg:invert-5per active large screens invert focus large screens invert hover large screens invert sources invert https: developer mozilla org en-us docs web css filter-function invert '
---

| _omenCSS_          | CSS class example                 | minimum Value | maximum Value | Step |
| ------------------ | --------------------------------- | ------------- | ------------- | ---- |
| invert-{number}per | .invert-1per { filter:invert(1%)} | 0             | 100           | +1%  |

## How to work the invert filter

Use the `invert-{number}per` utilities to set the amount of invert for the element. `invert-1per` equals to the css class `filter:invert(1%)`, `invert-2per` equals to the css class `filter: invert(2%)` the maximum would be `invert-100per`, it equals to the css class `filter: invert(100%)`. In general: the omenCSS class steps are +1% ranging from 0-100.

```html
<!-- no invert -->
<div class="invert-0per">{children}</div>
<!-- very low invert filter -->
<div class="invert-1per">{children}</div>
<!-- top peak invert filter -->
<div class="invert-100per">{children}</div>
```

## Active, focus, and hover states

| _omenCSS_                 | CSS class example                                    |
| ------------------------- | ---------------------------------------------------- |
| active:invert-{number}per | .active\:invert-5per:active { filter: invert(50%); } |
| focus:invert-{number}per  | .focus\:invert-5per:focus { filter: invert(50%); }   |
| hover:invert-{number}per  | .hover\:invert-5per:hover { filter: invert(50%); }   |

omenCSS let you conditionally apply utility classes for different page states. Thereby different variant modifiers are being used - for example, use `hover:invert-5per` to only apply the invert-5per utility class on hover.

```html
<div class="hover:invert-5per ...">{children}</div>
```

## Responsive Breakpoints

Use variant modifiers to target media queries like responsive breakpoints.

| media query | Range      | omenCSS example |
| ----------- | ---------- | --------------- |
| sm:         | 0 - 480    | .sm:invert-5per |
| md:         | 480 - 768  | .md:invert-5per |
| lg:         | 768 - 1080 | .lg:invert-5per |

omenCSS media queries can also be combined with active, focus and hover states. For example, use `sm:invert-5per` to apply the invert-5per utility at only small screen sizes at or below 480. Or `active:md:invert-5per` to apply the invert-5per utility at only between small screen sizes (480) and medium screen sizes (768).

1. The structure for auto classes is as follows: `{conditional state}:{media query}:invert-{number}per` p.e. `active:md:invert-5per`

## Executive Summary

When you vocalize the class names, it helps you to learn and remember the classes, as well as the structure. You can say:

| omenCSS class names                                                 | spoken example                                                                          |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| active:invert-5per , focus:invert-5per , hover:invert-5per          | active invert, focus invert, hover invert                                               |
| active:sm:invert-5per , focus:sm:invert-5per , hover:sm:invert-5per | active small screens invert, focus small screens invert, hover small screens invert,    |
| active:md:invert-5per , focus:md:invert-5per , hover:md:invert-5per | active medium screens invert, focus medium screens invert, hover medium screens invert, |
| active:lg:invert-5per , focus:lg:invert-5per , hover:lg:invert-5per | active large screens invert, focus large screens invert, hover large screens invert,    |

## Sources

- [invert](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert)
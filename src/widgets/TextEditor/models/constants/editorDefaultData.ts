export const editorDefaultData = {
  time: 1698267009593,
  blocks: [
    {
      id: 'I2YZFZIJk2',
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2
      }
    },
    {
      id: 'B-2BPrxCLo',
      type: 'paragraph',
      data: {
        text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.'
      }
    },
    {
      id: 'JwgL_XI-zx',
      type: 'header',
      data: {
        text: 'Key features',
        level: 3
      }
    },
    {
      id: 'CqjOgDs7FV',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'It is a block-styled editor',
          'It returns clean data output in JSON',
          'Designed to be extendable and pluggable with a simple API'
        ]
      }
    },
    {
      id: 'vYYV0f4wop',
      type: 'header',
      data: {
        text: 'What does it mean «block-styled editor»',
        level: 3
      }
    },
    {
      id: 'NMJMKCY4Qg',
      type: 'paragraph',
      data: {
        text: "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
      }
    },
    {
      id: 'GB0rEcivkJ',
      type: 'paragraph',
      data: {
        text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
      }
    },
    {
      id: '-C7-7cwN2C',
      type: 'header',
      data: {
        text: 'What does it mean clean data output',
        level: 3
      }
    },
    {
      id: 'i5gerQRKW8',
      type: 'paragraph',
      data: {
        text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below'
      }
    },
    {
      id: 'wjxYHH2xG0',
      type: 'paragraph',
      data: {
        text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
      }
    },
    {
      id: 'QNt8Gx627p',
      type: 'paragraph',
      data: {
        text: 'Clean data is useful to sanitize, validate and process on the backend.'
      }
    },
    {
      id: 'fKpTwUqDTI',
      type: 'delimiter',
      data: {}
    },
    {
      id: '_WEDkaCH-x',
      type: 'paragraph',
      data: {
        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
      }
    },
    {
      id: '6oaph7DgMn',
      type: 'table',
      data: {
        withHeadings: true,
        content: [
          [
            'Name',
            'Age',
            'Role'
          ],
          [
            'Test 1',
            'Test 2',
            'Test 3'
          ],
          [
            'Test 4',
            'Test 5',
            'Test 6'
          ]
        ]
      }
    },
    {
      id: '-DOUXZWG7b',
      type: 'delimiter',
      data: {}
    },
    {
      id: 'edtK60H2la',
      type: 'paragraph',
      data: {
        text: 'Certainly, here are some example summer fashion trends that could be included in the article:'
      }
    },
    {
      id: 'DFjzV5cvmw',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          '<b>Fruit-Inspired Prints:</b> Embrace the season with clothing featuring fruity patterns like watermelons, pineapples, or lemons.',
          '<b>Bright and Bold Colors:</b> Vibrant shades of coral, turquoise, and sunshine yellow are all the rage this summer.',
          '<b>Maxi Dresses:</b> Flowy and comfortable, maxi dresses are a staple for hot summer days.',
          '<b>Sunglasses Styles:</b> Explore the latest sunglass trends, from oversized frames to retro cat-eye shapes.',
          '<b>Straw Hats and Bags:</b> Accessorize with woven straw hats and bags for a touch of beachy charm.'
        ]
      }
    },
    {
      id: '1UKfwvDQH5',
      type: 'paragraph',
      data: {
        text: 'These are just a few examples of the summer fashion trends you might find in the article.'
      }
    },
    {
      id: 'VJNg8LE9Py',
      type: 'delimiter',
      data: {}
    },
    {
      id: 'HW6GcAbEz7',
      type: 'paragraph',
      data: {
        text: "Certainly, here's an example of a checklist for summer fashion trends:"
      }
    },
    {
      id: 'ZYsSG-zO-O',
      type: 'header',
      data: {
        text: 'Summer Fashion Trends Checklist',
        level: 3
      }
    },
    {
      id: 'GV0ZzGlRWX',
      type: 'checkList',
      data: {
        items: [
          {
            text: '<i>Fruit-Inspired Prints:</i><b> </b>Check out clothing with fun and fruity patterns.',
            checked: true
          },
          {
            text: '<i>Bright and Bold Colours:</i> Update your wardrobe with vibrant shades like coral, turquoise, and sunshine yellow.',
            checked: true
          },
          {
            text: '<i>Maxi Dresses:</i> Make sure you have a few comfortable and stylish maxi dresses for those scorching days.',
            checked: true
          },
          {
            text: '<i>Sunglasses Styles:</i> Choose the perfect pair of sunglasses to complete your summer look.',
            checked: false
          },
          {
            text: "<i>Straw Hats and Bags:</i> Don't forget to add woven straw hats and bags to your collection.",
            checked: false
          }
        ]
      }
    },
    {
      id: 'GEvCdFgKSQ',
      type: 'paragraph',
      data: {
        text: 'This checklist can help you keep track of the must-have items and trends for your summer fashion wardrobe.'
      }
    },
    {
      id: 'ps4NN_2fWR',
      type: 'delimiter',
      data: {}
    },
    {
      id: 'EvBYqiFAYD',
      type: 'code',
      data: {
        code: "import { memo, useEffect, useRef, useState } from 'react'\nimport type EditorJS from '@editorjs/editorjs'\nimport editorDefaultData from \"widgets/TestEditor/models/constants/editorDefaultData\";\n\ninterface TextEditorProps {\n  className?: string\n}"
      }
    },
    {
      id: 'l-F3qVXtNI',
      type: 'delimiter',
      data: {}
    },
    {
      id: 'NUh7Q9WsYw',
      type: 'quote',
      data: {
        text: '"Fashion is the armor to survive the reality of everyday life." - Bill Cunningham',
        caption: 'Embrace the power of fashion and let it be your armor in the daily battles of life. 💪👗 #FashionIsMyStrength',
        alignment: 'left'
      }
    },
    {
      id: 'qeShdk5n3F',
      type: 'delimiter',
      data: {}
    },
    {
      id: 'ARWQKUqTSM',
      type: 'raw',
      data: {
        html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>\n'
      }
    },
    {
      id: 'vGHcoVv3-W',
      type: 'delimiter',
      data: {}
    },
    {
      id: '2cmOVhxjIn',
      type: 'warning',
      data: {
        title: 'Security Alert',
        message: 'We have detected unusual activity on your account. For your safety and the security of your personal information, please take immediate action to secure your account. Change your password, enable two-factor authentication, and review your recent account activity. If you have any concerns, contact our support team. Your security is our top priority.'
      }
    }
  ],
  version: '2.28.2'
}
export const editorDefaultData2 = {
  time: 1698267880126,
  blocks: [
    {
      id: '9CM2okpOfw',
      type: 'paragraph',
      data: {
        text: '<b>Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</b>'
      }
    },
    {
      id: 'eBWlNDzC6A',
      type: 'paragraph',
      data: {
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.'
      }
    },
    {
      id: 'Pl2SmKOcZ7',
      type: 'paragraph',
      data: {
        text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.'
      }
    },
    {
      id: 'e_ABJoC9_8',
      type: 'quote',
      data: {
        text: 'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational',
        caption: '&nbsp;Carl Sagan',
        alignment: 'left'
      }
    },
    {
      id: 'DlJSu0Y6kw',
      type: 'header',
      data: {
        text: 'Keep your everyday on trend',
        level: 2
      }
    },
    {
      id: 'KAkpZGZvLm',
      type: 'paragraph',
      data: {
        text: 'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.'
      }
    },
    {
      id: 'A2u7sKArM7',
      type: 'paragraph',
      data: {
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself'
      }
    },
    {
      id: 'H3iIoU5fLr',
      type: 'image',
      data: {
        url: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg',
        caption: 'Nayza’s Figma builder — Design your next ecommerce project instantly',
        withBorder: false,
        withBackground: false,
        stretched: false
      }
    },
    {
      id: 'STEF3wlSIJ',
      type: 'paragraph',
      data: {
        text: 'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.'
      }
    },
    {
      id: 'HYKJ35Kd8r',
      type: 'paragraph',
      data: {
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself'
      }
    }
  ],
  version: '2.28.2'
}

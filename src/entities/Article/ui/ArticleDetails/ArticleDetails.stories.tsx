import type { Meta, StoryObj } from '@storybook/react'

import ArticleDetails from './ArticleDetails'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

const primaryState: DeepPartial<StateSchema> = {
  articleDetails: {
    isLoading: false,
    error: undefined,
    data: {
      id: '1',
      title: 'This summer fashion trends are tasty',
      description: "This summer, explore delectable fashion trends that are both stylish and satisfying. Uncover the latest tastes in clothing and accessories, as we guide you through the season's most appetizing looks. From refreshing colors to mouth-watering patterns, this article is your ultimate fashion menu for a trendy and flavorful summer wardrobe.",
      categories: ['Fashion'],
      author: {
        displayName: 'Danny Roman',
        id: '1'
      },
      date: '2023-10-16 11:43:00 PM',
      commentsNumber: 6,
      banner: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg',
      preview: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_640.jpg',
      content: {
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
              caption: 'Carl Sagan',
              alignment: 'left'
            }
          },
          {
            id: 'fKpTwUqDTI',
            type: 'delimiter',
            data: {}
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
              stretched: true
            }
          },
          {
            id: 'fKpTwUqDTI',
            type: 'delimiter',
            data: {}
          },
          {
            id: 'STEF3wlSIJ',
            type: 'paragraph',
            data: {
              text: 'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.'
            }
          },
          {
            id: 'CqjOgDs7FV',
            type: 'list',
            data: {
              style: 'ordered',
              items: [
                'It is a block-styled editor',
                'It returns clean data output in JSON',
                'Designed to be extendable and pluggable with a simple API',
                'Integrates seamlessly with HTTP requests',
                'Supports TypeScript',
                'Ready for production use',
                'Themeable'
              ]
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
    }
  }
}

export const Light: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

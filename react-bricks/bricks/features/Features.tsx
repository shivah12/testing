import classNames from 'classnames'
import { Repeater, types } from 'react-bricks/rsc'

import styles from '../../../css/Features.module.css'
import { icons } from './defaultImages'

export type ColsNumber = '2' | '3' | '4'

interface FeaturesProps {
  colsNumber: ColsNumber
  features: types.RepeaterItems
}

const Features: types.Brick<FeaturesProps> = ({ colsNumber, features }) => {
  return (
    <div className={styles.section}>
      <div
        className={classNames(
          styles.container,
          colsNumber === '2' ? styles.sizeSmall : styles.sizeNormal
        )}
      >
        <Repeater
          propName="features"
          items={features}
          itemProps={{ colsNumber: colsNumber }}
        />
      </div>
    </div>
  )
}
Features.schema = {
  name: 'features',
  label: 'Features',
  category: 'main content',
  tags: ['features'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',

  getDefaultProps: () => ({
    colsNumber: "2",
    features: [
      {
        title: "The best experience for customers",
        text: "Your marketing team hates gray forms. Give them the easiest UX.",
        withIcon: true,
        withLink: false,
        image: {
          src: "https://images.reactbricks.com/original/aca3dbf3-ccb6-47cf-973e-059e85e55571.svg",
          placeholderSrc: "https://images.reactbricks.com/original/aca3dbf3-ccb6-47cf-973e-059e85e55571.svg",
          srcSet: "",
          width: 1,
          height: 1,
          alt: "Best UX for editors",
          seoName: "best-ux-editors"
        },
        colsNumber: "2",
        linkText: "",
        linkPath: ""
      },
      {
        title: "React components for devs",
        text: "Leverage React to create amazing visually editable content blocks.",
        withIcon: true,
        withLink: false,
        image: {
          src: "https://images.reactbricks.com/original/dd14c0fe-3f21-4fc1-8362-22e005e82897.svg",
          placeholderSrc: "https://images.reactbricks.com/original/dd14c0fe-3f21-4fc1-8362-22e005e82897.svg",
          srcSet: "",
          width: 1,
          height: 1,
          alt: "React components",
          seoName: "react-components"
        },
        colsNumber: "2",
        linkText: "",
        linkPath: ""
      },
      {
        title: "Your design system",
        text: "Deploy your pixel-perfect design system and be sure nobody can break it..",
        withIcon: true,
        withLink: false,
        image: {
          src: "https://images.reactbricks.com/original/6f0a3910-b542-4791-a2ab-57474b9b2bb1.svg",
          placeholderSrc: "https://images.reactbricks.com/original/6f0a3910-b542-4791-a2ab-57474b9b2bb1.svg",
          srcSet: "",
          width: 1,
          height: 1,
          alt: "Design system",
          seoName: "design-system"
        },
        colsNumber: "2",
        linkText: "",
        linkPath: ""
      },
      {
        title: "Enterprise ready",
        text: "Collaboration, localization, granular permissions, SSO, top support: we got you covered.",
        withIcon: true,
        withLink: false,
        image: {
          hashId: "DiK6e36pGQBRuAJ",
          src: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/original/z0srtTeq2npQqLQ.webp",
          srcSet: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-535.webp 535w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-400.webp 400w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-200.webp 200w",
          type: "image/webp",
          placeholderSrc: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/placeholder/z0srtTeq2npQqLQ.jpg",
          fallbackSrc: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/original/z0srtTeq2npQqLQ.jpg",
          fallbackSrcSet: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-535.jpg 535w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-400.jpg 400w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/z0srtTeq2npQqLQ-200.jpg 200w",
          fallbackType: "image/jpeg",
          height: 535,
          width: 535,
          alt: "a red and white rocket ship flying through the sky",
          seoName: "8affc51a-1f0f-41ba-8c07-4fe95650f86b",
          crop: {
            x: 0,
            y: 0,
            width: 535,
            height: 535
          },
          transform: {
            rotate: 0,
            flip: {
              horizontal: false,
              vertical: false
            }
          }
        },
        colsNumber: "2",
        linkText: "",
        linkPath: ""
      }
    ]
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: 'feature-item',
      itemLabel: 'Feature',
      min: 0,
      max: 9,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Columns',
      defaultOpen: true,
      props: [
        {
          name: 'colsNumber',
          label: 'Columns number',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: '2 columns' },
              { value: '3', label: '3 columns' },
              { value: '4', label: '4 columns' },
            ],
          },
        },
      ],
    },
  ],
}
export default Features

import { Image, Link, Repeater, types } from 'react-bricks/rsc'

import styles from '../../../css/Header.module.css'
import HeaderClient from './HeaderClient'
import HeaderProvider from './HeaderProvider'

interface HeaderProps {
  logo: types.IImageSource
  menuItems: types.RepeaterItems
  buttons: types.RepeaterItems
}

const Header: types.Brick<HeaderProps> = ({ logo, menuItems, buttons }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const { isDarkColorMode, toggleColorMode } = useReactBricksContext()

  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // const ref = useRef<HTMLDivElement>(null)
  // useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <HeaderProvider>
      <section className={styles.section}>
        <nav className={styles.navClass}>
          <Link href="/" aria-label="Main" className={styles.linkLogo}>
            <Image
              propName="logo"
              source={logo}
              alt="Logo"
              maxWidth={300}
              imageClassName={styles.imageClass}
            />
          </Link>
          <div className={styles.containerMenuItems}>
            <Repeater
              propName="menuItems"
              items={menuItems}
              // itemProps={{ mobileRef: ref, setMobileMenuOpen }}
            />
          </div>
          <div className={styles.containerButtons}>
            <Repeater
              propName="buttons"
              items={buttons}
              itemProps={{ simpleAnchorLink: true }}
              renderWrapper={(items) => (
                <div key={items.key} className={styles.buttonsWrapper}>
                  {items}
                </div>
              )}
            />
          </div>

          <HeaderClient
            menuItems={<Repeater propName="menuItems" items={menuItems} />}
          ></HeaderClient>

          {/* DARK MODE BUTTON */}
          {/* {mounted && (
          <button
            type="button"
            className={styles.darkModeButton}
            onClick={toggleColorMode}
          >
            {!isDarkColorMode ? (
              <BsMoonFill />
            ) : (
              <BsSunFill
                style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
              />
            )}
          </button>
        )} */}

          {/* <div ref={ref} className={styles.containerHamburgerMenu}>
          <button
            className={styles.buttonHamburgerMenu}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX size={18} className={styles.hamburgerMenuFiX} />
            ) : (
              <FiMenu size={20} className={styles.hamburgerMenuFiMenu} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className={styles.containerHamburgerMenuItems}>
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div> */}
        </nav>
      </section>
    </HeaderProvider>
  )
}

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [],
  getDefaultProps: () => ({
    menuItems: [
      {
        submenuItems: [],
        linkPath: "/",
        isActive: false,
        linkText: "Home"
      },
      {
        submenuItems: [],
        linkPath: "/about-us",
        isActive: false,
        linkText: "About us"
      },
      {
        submenuItems: [
          {
            linkText: "hello",
            linkDescription: "The best visual experience for your content editors",
            linkPath: "/"
          }
        ],
        linkPath: "",
        isActive: false,
        linkText: "Features"
      }
    ],
    logo: {
      hashId: "x-Ak06FDdfhb-AE",
      src: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/original/9uKlXvIw3SiAmbG.webp",
      srcSet: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-169.webp 169w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-150.webp 150w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-75.webp 75w",
      type: "image/webp",
      placeholderSrc: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/placeholder/9uKlXvIw3SiAmbG.jpg",
      fallbackSrc: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/original/9uKlXvIw3SiAmbG.jpeg",
      fallbackSrcSet: "https://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-169.jpeg 169w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-150.jpeg 150w,\nhttps://assets.reactbricks.com/iQ7vOgttpf1ratL/images/src_set/9uKlXvIw3SiAmbG-75.jpeg 75w",
      fallbackType: "image/jpeg",
      height: 65,
      width: 169,
      alt: "",
      seoName: "screenshot_26-6-2024_12838_appweave-tech",
      crop: {
        x: 0,
        y: 0,
        width: 169,
        height: 65
      },
      transform: {
        rotate: 0,
        flip: {
          horizontal: false,
          vertical: false
        }
      }
    },
    buttons: [
      {
        type: "link",
        text: "Edit content",
        href: "/admin",
        isTargetBlank: false,
        buttonType: "submit",
        simpleAnchorLink: false,
        variant: "solid",
        padding: "small"
      }
    ]
  }),
}

export default Header

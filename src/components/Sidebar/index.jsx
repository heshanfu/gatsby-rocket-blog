import React from 'react'
import 'styles/global/iconfont.css'
import styles from 'styles/sidebar.module.css'
import Buttons from './Buttons'
import Profile from './Profile'
import SocialButtons from './SocialButtons'

const Sidebar = ({ title, navButtons, socialLinks }) => (
  <nav className={styles.sidebar}>
    <Profile title={title} />
    <Buttons data={navButtons} />
    <SocialButtons data={socialLinks} />
  </nav>
)

export default Sidebar

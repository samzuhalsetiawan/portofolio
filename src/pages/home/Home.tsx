import { useEffect, useState } from 'react';
import { FloatingActionButton } from '../../components/floatingactionbutton/FloatingActionButton';
import styles from './Home.module.css';


function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <main>
      <div>
        <SectionIntroduction />
        <SectionProjects />
        <SectionContacts />
      </div>
      <div className={styles.settingsButtonContainer}>
        <FloatingActionButton onClick={() => setIsDarkMode(!isDarkMode)} />
      </div>
    </main>
  )
}

function SectionIntroduction() {
  return (
    <div className={styles.sectionContainer}>
      <h1>Ini Intro</h1>
    </div>
  )
}

function SectionProjects() {
  return (
    <div className={styles.sectionContainer}>
      <h1>Ini Projects</h1>
    </div>
  )
}

function SectionContacts() {
  return (
    <div className={styles.sectionContainer}>
      <h1>Ini Contacts</h1>
    </div>
  )
}

export default Home
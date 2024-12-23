import styles from './FloatingActionButton.module.css';

export function FloatingActionButton(
  props: {
    onClick: () => void
  }
) {
  return (
    <button onClick={props.onClick} className={styles.mainButton}>
      <span>+</span>
    </button>
  )
}

export function ExpandableFloatingActionButton() {
  return (
    <FloatingActionButton onClick={() => {}} />
  )
}
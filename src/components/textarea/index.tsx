import { HTMLProps } from 'react'
import styles from './styles.module.css'
const Textarea = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
  return (
    <div>
      <textarea className={styles.textarea} {...rest}></textarea>
    </div>
  )
}

export default Textarea
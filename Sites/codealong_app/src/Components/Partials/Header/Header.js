import { Nav } from '../Nav/Nav'
import styles from './Header.module.scss'

const navItems = [
	{ name: 'Forside', path: '/' },
	{ name: 'Om os', path: '/about' },
	{ name: 'Greetings', path: '/greetings' },
	{ name: 'Counter', path: '/counter' },
	{ name: 'Formular', path: '/formular' }

]

export const Header = (props) => {

	return (
		<div className={styles.wrapper}>
			<header>
				<h1>{(props.pagetitle) ? props.pagetitle : 'REACT App. Routes, hooks.'}</h1>
				<Nav navItems={navItems} />
			</header>
		</div>
	)
  }
import React from 'react'
import { Button, Select } from 'antd'
import './Header.less'
import { CustomButton } from '../CustomButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { routes } from '../../routes'

// actions
import { delete_user } from '../../store/actions'

const { Option } = Select

export const Header = () => {
	const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)
	const dispatch = useDispatch()

	return (
		<header className='container header'>
			<Link to={routes.home} style={{ color: '#1D212A' }}>
				<div className='logo'>iTerms</div>
			</Link>
			<nav>
				<a href='#'>Generate</a>
				<a href='#'>Contact us</a>
				<a href='#'>Pricing</a>
				<a href='#'>Blog</a>
			</nav>
			<Select defaultValue='EN' style={{ width: 69 }}>
				<Option value='EN'>EN</Option>
				<Option value='RU'>RU</Option>
			</Select>

			{currentUser.firstName ? (
				<div style={{ display: 'flex' }}>
					<div style={{ alignSelf: 'center' }} className='profile__title'>
						{currentUser.firstName}{' '}
						{currentUser.lastName ? currentUser.lastName[0] : ''}
					</div>
					<Link to={routes.user_profile}>
						<img
							className='profile__img'
							style={{ width: '30px', margin: '0 20px' }}
							src='https://thumbs.dreamstime.com/b/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D1%88%D0%B0%D1%80%D0%B6-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B0-110654225.jpg'
							alt=''
						/>
					</Link>
					<div>
						<Button
							danger
							onClick={() => {
								history.push('/')
								dispatch(delete_user())
							}}
						>
							Exit
						</Button>
					</div>
				</div>
			) : (
				<div>
					<Link to={routes.login}>
						<Button type='text'>Log in</Button>
					</Link>
					<Link to={routes.sign_up}>
						<CustomButton primary>Sign up</CustomButton>
					</Link>
				</div>
			)}
		</header>
	)
}

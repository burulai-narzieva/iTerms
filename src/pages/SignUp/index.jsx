import React, { useState, useEffect } from 'react'
import { CustomInput, Label} from '../../components/TextField'
import './SignUp.less'
import { CustomButton } from '../../components/CustomButton'
import imgGoogle from './images/google.png'
import imgFacebook from './images/facebook.png'
import { useDispatch, useSelector } from 'react-redux'
import { add_user } from '../../store/actions'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export const SignUp = () => {
	
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userName, setUserName] = useState('')
	const state = useSelector((state) => state)
	const currentUser = useSelector((state) => state.currentUser)
	const history = useHistory()

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(state))
	}, [currentUser])
          
	useEffect(() => {
		if (userEmail.trim() && userName.trim() && userPassword.trim()) {
			localStorage.setItem('users', JSON.stringify(state))
			history.push('/profile')
			
		}
	}, [state]) 

	const dispatch = useDispatch()

	const checkAccount = () => {
		let gmail = /([a-zA-Z0-9\.]{5,15})\@gmail[\.]com/g

		if (gmail.test(userEmail) && userPassword.length >= 8 ) {
			return dispatch(
				add_user({
					firstName: userName.split(' ')[0],
					lastName: userName.split(' ')[1],
					userEmail,
					userPassword,
					photo: 'https://w7.pngwing.com/pngs/1014/49/png-transparent-african-american-girl-woman-girl-cartoon-child-face-black-hair-thumbnail.png',
					id: Date.now().toString(),
				})
			)
		} else {
			console.log('..............')
		}
	}
	
	return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>Sign up</h1>

					<div className='textfield'>
						<Label htmlFor='Your Name'>Your Name</Label>
						<CustomInput
							type='text'
							placeholder='Your Name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label>
						<CustomInput
							type='email'
							placeholder='Enter the Email'
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>
							At least 8 characters long
						</Label>
						<CustomInput
							type='password'
							placeholder='Password'
							value={userPassword}
							onChange={(e) => setUserPassword(e.target.value)}
						/>
					</div>
					<p className='sign__link__text'>
						By proceeding, I agree with the{' '}
						<a href='#'>Terms of Service</a> and{' '}
						<a href='#'>Privacy & Policy</a>
					</p>
					<CustomButton
						className='sign__btn'
						primary
						onClick={() => {
							checkAccount()
						}}
					>
						Create account
					</CustomButton>
					<p>Sign up with</p>
					<div className='sign__img__btns'>
						<img src={imgGoogle} alt='' />
						<img src={imgFacebook} alt='' />
					</div>
					<p className='sign__end__text'>
						Already have an account?{' '}
						<Link to={routes.login}>
							<a href='https:google.com'>Log in</a>
						</Link>
					</p>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}

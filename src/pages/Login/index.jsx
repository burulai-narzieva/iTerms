import React, { useState } from 'react'
import './Login.less'
import { Label, CustomInput } from '../../components/TextField'
import { CustomButton } from '../../components/CustomButton'

import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../routes'
import { Link,useHistory } from 'react-router-dom'
import { login_user } from '../../store/actions'

import google from '../../images/google-login.png'
import facebook from '../../images/facebook-login.png'

export const Login = () => {

    const [inEmail, setInEmail] = useState('')
    const [inPassword, setInPassword] = useState('')

    const dispatch = useDispatch()
    const succes  = useSelector((state) => state.succes)

    const history = useHistory()

    if (succes) {
        history.push('/profile')
    }

    return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>Sign in</h1>
					<p className='p'>Sign up with</p>
					<div className='sign__img__btns'>
						<img src={google} alt='' />
						<img src={facebook} alt='' />
					</div>
					<p style={{ paddingLeft: '114px' }}>Or</p>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label>
						<CustomInput
							type='email'
							placeholder='Enter the Email'
							value={inEmail}
							onChange={(e) => setInEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>Password </Label>
						<CustomInput
							type='password'
							placeholder='Password'
							value={inPassword}
							onChange={(e) => setInPassword(e.target.value)}
						/>
					</div>
					<CustomButton
						className='sign__btn'
						primary
						onClick={() => {
							dispatch(login_user({ inEmail, inPassword }))
						}}
					>
						Sign in
					</CustomButton>

					<b className='sign__end__text'>
						Don't have an account?
						<Link to={routes.sign_up}>
							<a href='#'>Sign up</a>
						</Link>
					</b>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
    )
}
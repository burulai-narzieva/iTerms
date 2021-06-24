import React from 'react'

import doc from './img/file_copy_24px.png'
import sub from './img/Subscriptions.png'
import './UserProfile.less'
import set from './img/setting.png'
import { SettingBody } from './SettingBody'
import { useSelector } from 'react-redux'
import { DeleteAccount } from './DeleteAccount'
import { Route, Switch, useHistory } from 'react-router-dom'
import { ChangePassword } from './ChangePassword'

export const UserProfile = () => {
	const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)

	return (
		<div className='profile__background'>
			<div className='container'>
				<div className='navbar'>
					{/* navbar */}
					<div className='user'>
						<img
							style={{ width: '100px', height: '100px' }}
							src='https://thumbs.dreamstime.com/b/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D1%88%D0%B0%D1%80%D0%B6-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA%D0%B0-110654225.jpg'
							alt=''
						/>
						<p>
							{currentUser.firstName}{' '}
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
						</p>
					</div>
					<div className='side-bar'>
						<img src={doc} alt='' />
						<p>Documents</p>
					</div>
					<div className='side-bar'>
						<img src={sub} alt='' />
						<p>Subscriptions</p>
					</div>
					<div className='side-bar'>
						<img src={set} alt='' />
						<p>Settings</p>
					</div>
					<div className='shadow'></div>

					{/* settings */}
					{/* <SettingBody /> */}
					
						<Switch>
							<Route
								path='/profile/edit_password'
								component={DeleteAccount}
							/>
							<Route path='/profile/changePassword' component={ChangePassword}/>
							<Route path='/profile/' component={SettingBody} />
						</Switch>
				</div>
			</div>
		</div>
	)
}

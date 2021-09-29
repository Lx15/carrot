import React from 'react'
import carrot from '@/assets/logo.svg'
import './login.scss'

function Login(props) {
	return (
		<div className="loginCnt">
			<img src={carrot} alt="logo" className="logo" />
      <div>Popup页面，可接入登录</div>
		</div>
	);
}

export default Login

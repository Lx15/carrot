import React from 'react'
import { Button } from 'antd'
import './home.scss'

function Home(props) {

  const logout = () => {
		props.history.push('/login')
	}

  return (
    <div className="homeCnt">
        <h1>Home</h1>
        <p>
            <Button 
              type="primary"
              size="large"
              onClick={logout}
            >退出登录</Button>
        </p>
    </div>
  )
}

export default Home

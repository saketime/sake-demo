import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Image from 'next/image';

import { Layout, BackTop } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';


import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import AvatarDropDown from '../AvatarDropDown';
import Notifications from '../Notifications';

import classes from './MainLayout.module.less';

const { Content, Sider } = Layout;

const MainLayout = (props) => {
	const { children } = props;

	const [collapsed, setCollapsed] = useState(true);
	const [mobiShow, setMobiShow] = useState(false);
	const [broken, setBroken] = useState(false);

    useEffect(() => {
		// const handleRouteChange = url => {
		// 	setMobiShow(false);
		// };

		// Router.events.on('routeChangeStart', handleRouteChange);
		// return () => {
		// 	Router.events.off('routeChangeStart', handleRouteChange);
		// };
	}, []);

	const handleToggle = () => {

        const isClient = typeof document !== 'undefined'
		if (broken && isClient) {
			setMobiShow(!mobiShow);
		} else {
			setCollapsed(!collapsed);
		}
	};

    return (
		<>
			<Layout
				style={{
					minHeight: '100vh',
				}}
				className={classes.root}
			>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed && !broken}
					className={classes.sidebar}
					breakpoint="lg"
					onBreakpoint={(val) => {
						setBroken(val);
						if (val) {
							setCollapsed(false);
							setMobiShow(false);
						}
					}}
					style={{
						left: broken && !mobiShow ? -200 : 0,
					}}
				>
					<Link href="/">
						<a>
							<div className={classes.logo}>
								<Image
									src="/images/logo.png"
									alt="Logo"
									width={35}
									height={35}
								/>
								{!collapsed && <span>Boilerplate</span>}
							</div>
						</a>
					</Link>
					<Sidebar />
				</Sider>
				<Layout
					className={classes.siteLayout}
					style={{
						paddingLeft: broken ? 0 : collapsed ? 50 : 200,
					}}
				>
                <Header
                    style={{
                        left: broken ? 0 : collapsed ? 50 : 200,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: classes.trigger,
                        onClick: handleToggle,
                    })}
                    {
                        broken &&
                        <Link href="/">
                            <a>
                                <div className={classes.logoCenter}>
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        width={35}
                                        height={35}
                                    />
                                    <span>Boilerplate</span>
                                </div>
                            </a>
                        </Link>
                    }
                    {/* <div className={classes.headerRight}>
                        <Notifications />
                        <AvatarDropDown />
                    </div> */}
                </Header>


                </Layout>
            </Layout>
        </>
	);
};


export default MainLayout;
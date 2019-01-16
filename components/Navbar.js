import React, { Component } from 'react';
import Link from 'next/link';
// import Router from 'next/router';

class Navbar extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }

	isActiveNav(id,activepage) {
		if (activepage===id) {
			return true;
		} else {
			return false;
		}
	};

	render () {

        const navLinks = this.props.links
        // .filter(link => {
		// 	return link.url !== ''
        // })
        .map((link, i) => {
            if (link.url === '') {
                return (
                    <li key={i} role='presentation'>
                        <div className='nav-item nav-link'>{link.title}</div>
                    </li>
                )    
            } else {
                return (
                    <li key={i} role='presentation'>
                        <Link prefetch href={'/'+link.url}>
                            <a className='nav-item nav-link'>{link.title}</a>
                        </Link>
                    </li>
                )
            }
		});

		return (
			<nav className='navbar navbar-expand-md navbar-light bg-light'>
				<Link href='/'><a className='navbar-brand'>Next.js Test App</a></Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='true' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
				</button>
				<div className='navbar-collapse collapse' id='navbarResponsive'>
					<ul className='navbar-nav' role='group'>
						{navLinks}
					</ul>
				</div>
				<style jsx>{`
				`}</style>
			</nav>
		);

	}

}

export default Navbar;

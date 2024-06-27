'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '../../constants/constants';
import { usePathname, useRouter } from 'next/navigation';

function BottomNavBar() {

	const router = useRouter();
	const currentPathName = usePathname();
	return (
		<section className='bottom_navbar'>
			<div className='bottom_navbar_container'>{
				navbarLinks.map((link) => {
					const isActive =
						(currentPathName.includes(link.route) && link.route.length > 1) ||
						currentPathName === link.route;
					return (
						<Link
							key={link.label}
							href={link.route}
							className={`bottom_navbar_link ${isActive && 'bg-primary-500'}`}>
							<Image
								src={link.imgURL}
								alt={link.label}
								width={24}
								height={24}></Image>
							<p className='text-light-1 text-subtle-medium max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
						</Link>
					);
				})}</div>
		</section>
	);
}

export default BottomNavBar;

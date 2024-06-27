'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navbarLinks } from '../../constants/constants';
import { usePathname, useRouter } from 'next/navigation';
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs';
import { Router } from 'next/router';

function NavBar() {
	const router = useRouter();
	const currentPathName = usePathname();

	return (
		<section className='custom-scrollbar navbar'>
			<div className='flex w-full flex-1 flex-col gap-6 px-6'>
				{navbarLinks.map((link) => {
					const isActive =
						(currentPathName.includes(link.route) && link.route.length > 1) ||
						currentPathName === link.route;
					return (
						<Link
							key={link.label}
							href={link.route}
							className={`navbar_link ${isActive && 'bg-primary-500'}`}>
							<Image
								src={link.imgURL}
								alt={link.label}
								width={24}
								height={24}></Image>
							<p className='text-light-1 max-lg:hidden'>{link.label}</p>
						</Link>
					);
				})}
			</div>
			<div className='mt-10 px-6'>
				<SignedIn>
					<SignOutButton redirectUrl='/sign-in'>
						<div className='flex cursor-pointer gap-4 pe-4'>
							<Image
								src='/assets/logout.svg'
								alt='logout'
								width={24}
								height={24}></Image>
							<p className='text-light-1 max-lg:hidden'>Log out</p>
						</div>
					</SignOutButton>
				</SignedIn>
			</div>
		</section>
	);
}
export default NavBar;

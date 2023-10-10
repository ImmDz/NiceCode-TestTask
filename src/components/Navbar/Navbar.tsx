import classNames from "classnames";

import style from "./Navbar.module.css";

interface INavbar {
	content: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export const Navbar = ({ content, activeTab, setActiveTab }: INavbar) => {
	const handleClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<ul className={style.navbar}>
			{content.map((tab, index) => (
				<li
					key={index}
					onClick={() => handleClick(tab)}
					className={classNames(style.tab, { [style.active]: activeTab === tab })}
				>
					{tab}
				</li>
			))}
		</ul>
	);
};

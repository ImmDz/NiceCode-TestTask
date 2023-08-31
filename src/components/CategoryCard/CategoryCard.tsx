import { Calendar } from "../../assets/Calendar";

import type { ICategoryCard } from "../../types/general";

import style from "./CategoryCard.module.scss";

export const CategoryCard = ({ id, title, date, status, categoryId, icon, img, activeCardId, setActive, author, type, time }: Partial<ICategoryCard>) => {
    const renderImg = () => {
        if (categoryId === 1) {
            return <div>{icon}</div>;
        } else return (<img src={img} />)
    }

    const renderEventInfo = () => {
        return (
            <>
                <p>{type}</p>
                <p>{date}</p>
                <p>{time}</p>
            </>
        )
    }

    const renderDescription = () => {
        if (categoryId === 1) {
            return <p>{date}</p>
        } else if (categoryId === 2) {
            return <p>{author}</p>;
        } else if (categoryId === 3) {
            return renderEventInfo();
        }
    }

    const renderAdditionalInfo = () => {
        if (categoryId === 1 && !status) {
            return <p className={style.status}>Не подтверждена</p>
        } else if (categoryId === 2) {
            return <p className={style.date}>{date}</p>;
        }
    }

    return (
        <>
            <div id={style.card} className={activeCardId === id ? style.card__active : style.card} onClick={() => setActive!(id!)}>
                {renderImg()}
                <div className={style.info}>
                    <p className={style.infoTitle}>{title}</p>
                    <div className={categoryId !== 3 ? style.description : style.eventDescription}>{renderDescription()}</div>
                </div>
                <span className={style.additional}>{renderAdditionalInfo()}</span>
            </div>
        </>
    )
}
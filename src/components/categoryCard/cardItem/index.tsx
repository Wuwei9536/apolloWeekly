import React from 'react';
import { Card, Avatar } from 'antd';
import styles from './index.module.less';

const { Meta } = Card;


export interface IcardInfo {
	id:string;
	cardIcon: string;
	cardTitle: string;
	cardDescription: string;
	cardHref: string;
}

interface Iprops {
	cardInfo: IcardInfo;
}
export default class CardItem extends React.Component<Iprops> {
	handleClick = (href: string) => {
		window.open(href);
	};
	render() {
		const { cardInfo: { cardIcon, cardTitle, cardDescription, cardHref } } = this.props;
		return (
			<Card className={styles.cardItem} hoverable onClick={(e) => this.handleClick(cardHref)}>
				<Meta
					avatar={<Avatar src={`/img/${cardIcon}`} />}
					title={cardTitle}
					description={cardDescription}
					className={styles.meta}
				/>
			</Card>
		);
	}
}

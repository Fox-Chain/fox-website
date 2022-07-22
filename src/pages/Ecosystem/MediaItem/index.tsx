import styles from "./index.less";
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { useRef, useEffect, useState } from "react";



const Page = (props) => {

	return (
		<a target="_blank" href={props.href}>
<div className={styles.page} >
			<span>Stay in the pulse</span>
			<Twitter style={{padding:'15px 0',width:'40px'}} />

			<p >Twitter</p>
		</div>
		</a>
		

	);
};

export default Page;

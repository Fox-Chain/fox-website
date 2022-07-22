import styles from "./ClipPathHover.less";
import { useRef, useEffect, useState } from "react";
import { checkStringIsJson } from '@/utils/utils'
const openInNewTab = url => {
	if(url!=""){
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	}
};

const ClipPathHover = (props) => {
	const { data } = props;
	var items = [];
	const svg_logo = useRef(null);

	useEffect(() => {
		if (!svg_logo?.current) {
			return;
		}
		// Update the document title using the browser API
		console.log(svg_logo?.current);
		var point = svg_logo?.current.createSVGPoint();

		function getCoordinates(e, svg) {
			point.x = e.clientX;
			point.y = e.clientY;
			return point.matrixTransform(svg.getScreenCTM().inverse());
		}
		function changeColor(e) {
			document.body.className = e.currentTarget.className;
		}

		function Item(config) {
			Object.keys(config).forEach(function (item) {
				this[item] = config[item];
			}, this);
			this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
			this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
		}

		Item.prototype = {
			update: function update(c) {
				this.clip.setAttribute("cx", c.x);
				this.clip.setAttribute("cy", c.y);
			},
			mouseMoveHandler: function mouseMoveHandler(e) {
				this.update(getCoordinates(e, this.svg));
			},
			touchMoveHandler: function touchMoveHandler(e) {
				e.preventDefault();
				var touch = e.targetTouches[0];
				if (touch) return this.update(getCoordinates(touch, this.svg));
			},
		};

		[].slice
			.call(document.querySelectorAll(".item"), 0)
			.forEach(function (item, index) {

				items.push(
					new Item({
						el: item,
						svg: item.querySelector("svg"),
						clip: document.querySelector("#clip-" + index + " circle"),
					})
				);
			});

		[].slice
			.call(document.querySelectorAll("button"), 0)
			.forEach(function (button) {
				button.addEventListener("click", changeColor);
			});

		//See more button
		// function triggerSeeMore() {
		// 	let more = document.querySelector(".more");

		// 	more.addEventListener("click", function () {
		// 		more.parentNode.classList.toggle("active");
		// 	});
		// }
		// triggerSeeMore();
	}, [data]);
	// const triggerActive = e => {
	// 	const parentDiv = e.target.parentNode;
	// 	parentDiv.classList.toggle("active");
	// };
	const [isActive, setIsActive] = useState("false");
	// const triggerActive = () => {
	// 	setIsActive(!isActive);
	// };
	// useEffect(() => {}, [isActive]);

	return (
		<div className={styles.page}>
			<div className="clip-path-hover mb-40">
				<div className="roadmap-title" style={{ marginTop: '30px' }}>Investors</div>
				{/* <div style={{ position: 'relative' }}>
                        <div id="profiles">
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">ANDY</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">OLIVIA</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">NOAH</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">EMMA</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">ELIJAH</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaW5lc2UlMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">AVA</h3>
                            </div>
                          </div>
                          <div className="profile">
                            <div className="profile-content">
                              <div className="profile-pic">
                                <img className="profile-pic-image" src="https://images.unsplash.com/photo-1512663150964-d8f43c899f76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
                              </div>
                              <h3 className="profile-name">HENRY</h3>
                            </div>
                          </div>
                        </div>
                      </div> */}
				<main
					className={
						!isActive ? "clippath-container" : "clippath-container active"
					}
				>
					<div className="content">

						<div className="items">
							{
								data && checkStringIsJson(data) && JSON.parse(data).map((item, index) => {

									return <div
										className="item"
										onClick={() => {
											openInNewTab(item[1]);
										}}
									>
										{item[1]!=""&&<img className="profile-pic-image" src={'/image/' + item[2] + '.png'} />}
										<h3 className="profile-name">{item[0]}</h3>

									</div>
								})
							}

						</div>
					</div>
				</main>
			</div>
		</div>

	);
};

export default ClipPathHover;

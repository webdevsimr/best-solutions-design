import React from "react";
import greenTick from "@/assets/images/homepage/green-tick.svg";
import Image from "next/image";
import rightProductImg from "@/assets/images/homepage/product_right.png"

const ProductSolutionBoxRight = () => {
    return (
        <div className="ProductSolutionBoxLeft">
            <div className="ProductSolutionsBox_left_text ">
                <div className="ProductSolutionsBox_Right_Img boxRightImage">
                    <Image src={rightProductImg} alt="rightProductImg" />
                </div>
                <div className="ProductSolutions_box_left_text boxLeftText">
                    <p className="ProductSolutionsBox_left_purple_text">More speed. Less spend</p>
                    <h3>Keep projects on schedule</h3>
                    <p className="ProductSolutions_box_left_text_summary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                        <li className="ProductSolutions_box_left_list">
                            <span>
                                <Image src={greenTick} alt="greenTick" />
                            </span>
                            Duis aute irure dolor in reprehenderit
                        </li>
                        <li className="ProductSolutions_box_left_list">
                            <span>
                                <Image src={greenTick} alt="greenTick" />
                            </span>
                            Excepteur sint occaecat
                        </li>
                        <li className="ProductSolutions_box_left_list">
                            <span>
                                <Image src={greenTick} alt="greenTick" />
                            </span>
                            Amet consectetur adipiscing elit
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    );
};

export default ProductSolutionBoxRight;

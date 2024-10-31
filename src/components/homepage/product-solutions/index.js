import React from "react";
import ProductSolutionBoxLeft from "./product-solutions-box-left";
import ProductSolutionBoxRight from "./product-solutions-box-right";

const ProductSolutions = () => {
    return (
        <section className="ProductSolutions">
            <div className="outerSpace">
                <div className="container">
                    <div className="ProductSolutions_textContent">
                        <p className="ProductSolutions_green_text">
                            Reach goals that matter
                        </p>
                        <h2 className="ProductSolutions_text_heading">One product, unlimited solutions</h2>
                        <p >
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit laborum — semper quis lectus nulla.
                        </p>
                    </div>

                    <div className="ProductSolutions_boxes">
                        <ProductSolutionBoxLeft />
                        <ProductSolutionBoxRight />
                        <ProductSolutionBoxLeft />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductSolutions;

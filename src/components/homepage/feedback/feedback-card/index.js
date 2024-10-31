import Image from "next/image";
import React from "react";

const FeedbackCard = ({ imgName, text, personName, appName }) => {
    return (
        <div className="FeedbackCard">
            <Image src={imgName} alt={imgName} />
            <div className="FeedbackCard_text">
                <p className="FeedbackCard_text_review">{text}</p>

                <div className="FeedbackCard_appName">
                    <p>
                        {personName} <span className="FeedbackCard_appName_slash">/</span> <span className="FeedbackCard_appName_span">{appName}</span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;

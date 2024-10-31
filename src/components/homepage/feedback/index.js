import React from "react";
import FeedbackCard from "./feedback-card";
import manImg from "@/assets/images/homepage/feedback-card/man.svg";
import man2Img from "@/assets/images/homepage/feedback-card/man2.svg";
import womanImg from "@/assets/images/homepage/feedback-card/woman.svg";

const cardData = [
    {
        id: "fcard1",
        imgName: womanImg,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Anastasia Dan ",
        appName: "UX Board",
    },
    {
        id: "fcard2",
        imgName: manImg,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Roman Level",
        appName: "UX Board",
    },
    {
        id: "fcard3",
        imgName: man2Img,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Akex Sackett ",
        appName: "UX Board",
    },
    {
        id: "fcard4",
        imgName: womanImg,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Anastasia Dan ",
        appName: "UX Board",
    },
    {
        id: "fcard5",
        imgName: manImg,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Roman Level",
        appName: "UX Board",
    },
    {
        id: "fcard6",
        imgName: man2Img,
        text: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
        personName: "Anastasia Dan",
        appName: "UX Board",
    },
];

const Feedback = () => {
    return (
        <section>
            <div className="outerSpace">
                <div className="container">
                    <div className="Feedback_textContent">
                        <h2>Don&apos;t take our word for it</h2>
                        <p>
                            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                            semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                            ornare.
                        </p>
                    </div>

<div className="Feedback_textBoxes">

                    {cardData?.map(({ appName, id, imgName, personName, text }) => (
                        <FeedbackCard
                        key={id}
                        appName={appName}
                        imgName={imgName}
                        personName={personName}
                        text={text}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;

import React from "react";
import starImg from "@/assets/images/homepage/customers-workflows/star.svg";
import textNoteImg from "@/assets/images/homepage/customers-workflows/text-note.svg";
import internetImg from "@/assets/images/homepage/customers-workflows/internet.svg";
import ManImg from "@/assets/images/homepage/customers-workflows/man.svg";
import likeImg from "@/assets/images/homepage/customers-workflows/like.svg";
import commentImg from "@/assets/images/homepage/customers-workflows/comment.svg";
import Image from "next/image";

const cardData = [
    {
        id: 1,
        image: starImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        id: 2,
        image: textNoteImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        id: 3,
        image: internetImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        id: 4,
        image: ManImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        id: 5,
        image: likeImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
        id: 6,
        image: commentImg,
        title: "Instant Features",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },

];

const CustomerWorkflowsCard = () => {
    return (
        <div className="CustomersWorkflows_cards">
            {cardData?.map(({ id, image, text, title }) => (
                <div key={id} className="CustomersWorkflows_single_card">
                    <div className="CustomersWorkflows_Image_bg">
                        <Image src={image} alt="card's image not found" />
                    </div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerWorkflowsCard;

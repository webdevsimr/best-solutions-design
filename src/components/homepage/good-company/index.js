import Image from 'next/image'
import React from 'react'
import audienHearingImg from "@/assets/images/homepage/good-company/audien-hearing.svg"
import beanBoxImg from "@/assets/images/homepage/good-company/bean-box.svg"
import homieDetailsImg from "@/assets/images/homepage/good-company/homie-detail.svg"
import iLoveHueImg from "@/assets/images/homepage/good-company/ilove-hue.svg"
import impactImg from "@/assets/images/homepage/good-company/impact.svg"
import inalaImg from "@/assets/images/homepage/good-company/inala.svg"
import intelligentChangeImg from "@/assets/images/homepage/good-company/intelligent-change.svg"
import snowImg from "@/assets/images/homepage/good-company/snow.svg"
import snuggleMeImg from "@/assets/images/homepage/good-company/snuggle-me.svg"
import stayGoldenImg from "@/assets/images/homepage/good-company/stay-golden.svg"
import swolyImg from "@/assets/images/homepage/good-company/swoly.svg"
import thickImg from "@/assets/images/homepage/good-company/thicc.svg"
import tnNetworkImg from "@/assets/images/homepage/good-company/tn-network.svg"
import wufersImg from "@/assets/images/homepage/good-company/wufers.svg"


const GoodCompany = () => {
    return <section className='GoodCompany'>
        <div className="outerSpace">
            <div className="container">
                <div className='GoodCompany_content_box'>

                    <h2>You are in a good company</h2>
                    <div className="GoodCompany_images gallery1">
                        <div className='GoodCompany_images_first '>

                            <Image src={impactImg} alt='impactImg' />
                            <Image src={iLoveHueImg} alt='impactImg' />
                            <Image src={intelligentChangeImg} alt='impactImg' />
                            <Image src={audienHearingImg} alt='impactImg' />
                            <Image src={swolyImg} alt='impactImg' />
                        </div>
                        <div className='GoodCompany_images_second'>

                            <Image src={snowImg} alt='impactImg' />
                            <Image src={wufersImg} alt='impactImg' />
                            <Image src={stayGoldenImg} alt='impactImg' />
                            <Image src={inalaImg} alt='impactImg' />
                            <Image src={homieDetailsImg} alt='impactImg' />
                        </div>
                        <div className='GoodCompany_images_third'>
                            <Image src={beanBoxImg} alt='impactImg' />
                            <Image src={thickImg} alt='impactImg' />
                            <Image src={snuggleMeImg} alt='impactImg' />
                            <Image src={tnNetworkImg} alt='impactImg' />
                        </div>
                    </div>
                    <div className="GoodCompany_images gallery2">
                        <div className='GoodCompany_images_first'>

                            <Image src={impactImg} alt='impactImg' />
                            <Image src={iLoveHueImg} alt='impactImg' />
                            <Image src={intelligentChangeImg} alt='impactImg' />
                            <Image src={audienHearingImg} alt='impactImg' />
                            <Image src={swolyImg} alt='impactImg' />



                            <Image src={snowImg} alt='impactImg' />
                            <Image src={wufersImg} alt='impactImg' />
                            <Image src={stayGoldenImg} alt='impactImg' />
                            <Image src={inalaImg} alt='impactImg' />
                            <Image src={homieDetailsImg} alt='impactImg' />



                            <Image src={beanBoxImg} alt='impactImg' />
                            <Image src={thickImg} alt='impactImg' />
                            <Image src={snuggleMeImg} alt='impactImg' />
                            <Image src={tnNetworkImg} alt='impactImg' />
                        </div>
                        {/* <div className="marquee-images">
                        <marquee behavior="" direction="">
                            <Image src={impactImg} alt='impactImg' />
                            <Image src={iLoveHueImg} alt='impactImg' />
                            <Image src={intelligentChangeImg} alt='impactImg' />
                            <Image src={audienHearingImg} alt='impactImg' />
                            <Image src={swolyImg} alt='impactImg' />



                            <Image src={snowImg} alt='impactImg' />
                            <Image src={wufersImg} alt='impactImg' />
                            <Image src={stayGoldenImg} alt='impactImg' />
                            <Image src={inalaImg} alt='impactImg' />
                            <Image src={homieDetailsImg} alt='impactImg' />



                            <Image src={beanBoxImg} alt='impactImg' />
                            <Image src={thickImg} alt='impactImg' />
                            <Image src={snuggleMeImg} alt='impactImg' />
                            <Image src={tnNetworkImg} alt='impactImg' />
                        </marquee>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default GoodCompany
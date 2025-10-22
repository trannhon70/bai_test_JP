import { FC } from "react";
import banner_4 from "../../assets/banner/banner_4.png";
import banner_5 from "../../assets/banner/banner_5.png";
import teacher from "../../assets/banner/teacher.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CompoenntWhatIsNFT: FC = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return <div className="bg-dot-pattern w-full">
        <div className="pt-[4%] px-[3%] pb-[500px]" >
            <div className="bg-white rounded-2xl  pb-[300px] " >
                <div className="flex items-center gap-[10px] box-border">
                    <div className="w-[45%]  pl-[5%] " >
                        <img className="w-[100%] translate-y-[65px]" src={banner_4} alt="..." />
                        <img className="w-[100%] " src={banner_5} alt="..." />
                    </div>
                    <div className="w-[55%] relative " >
                        <div className="w-[70%] text-lg font-bold" >
                            NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に"ひとつだけ"であることを証明するために使われています。
                        </div>
                        <div className="w-[70%] text-lg font-medium mt-2.5">
                            ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
                        </div>
                        <img className="
                        w-[40%] absolute bottom-0 right-[10px]
                        2xl:w-[35%] 2xl:translate-y-[350px]
                        xl:w-[35%] xl:translate-y-[200px]
                        lg:w-[30%] lg:translate-y-[100px]
                    " src={teacher} alt="..." />
                    </div>
                </div>
                <div>
                    <Carousel responsive={responsive} showDots={false}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
}

export default CompoenntWhatIsNFT
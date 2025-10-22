import { FC } from "react";
import banner_4 from "../../assets/banner/banner_4.png";
import banner_5 from "../../assets/banner/banner_5.png";
import teacher from "../../assets/banner/teacher.png";
import item_1 from "../../assets/items/item_1.png";
import item_2 from "../../assets/items/item_2.png";
import item_3 from "../../assets/items/item_3.png";
import item_4 from "../../assets/items/item_4.png";
import item_5 from "../../assets/items/item_5.png";
import item_6 from "../../assets/items/item_6.png";
import item_7 from "../../assets/items/item_7.png";
import item_8 from "../../assets/items/item_8.png";
import item_9 from "../../assets/items/item_9.png";
import item_label from "../../assets/items/item_label.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataCarousel = [
    { id: 1, title: 'デジタルコレクティブ', description: 'デジタルアイテムを収集、売買することができます。', img: item_2 },
    { id: 2, title: 'ゲームアイテム', description: 'ゲーム内アイテムやキャラクターをNFTとして発行し、プレイヤーが所有することで、マーケットプレイスで売買することができます。   ', img: item_3 },
    { id: 3, title: 'スポーツ', description: 'アスリートが限定版のデジタルアイテムやハイライト映像をNFTとして販売し、ファンとのエンゲージメントを高めています。', img: item_4 },
    { id: 4, title: '音楽', description: 'ミュージシャンが楽曲やアルバムをNFTとして販売することができます。また、ファンはアーティストの作品の所有権を持つことができます。 ', img: item_5 },
    { id: 5, title: 'ファッション', description: 'NFTデジタルファッションとして、衣服やアクセサリーを販売することができます。バーチャルアバターやソーシャルメディアで使用されます。', img: item_6 },
    { id: 6, title: '不動産', description: '現実世界の不動産NFTをトークン化し、所有権をデジタル証明することができます。これにより不動産の取引がより簡単かつ透明になります。 ', img: item_7 },
    { id: 7, title: '学術・資格証明', description: '学位証明書や資格証明書をNFTとして発行し、これらの証明書の正当性を簡単に検証できるようにします。', img: item_8 },
    { id: 8, title: '慈善活動', description: 'チャリティーオークションでNFTを販売し、収益を慈善団体に寄付することで、支援活動を行います。', img: item_9 },
]

const CompoenntWhatIsNFT: FC = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3600, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
            <div className="relative bg-white rounded-3xl  pb-[200px] " >
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
                <div className="absolute w-[100%] bottom-[-25%]" >
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        pauseOnHover={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                    >
                        <div className="relative">

                            <div className="px-[5%] translate-y-[20px]"><img src={item_label} alt="..." /></div>
                            <img className="w-[100%] " src={item_1} alt="..." />
                            <div className="absolute inset-0 flex items-end p-6 ">
                                <div className="bg-white opacity-75 rounded-2xl p-[10px] box-border">
                                    <div className="text-base font-bold text-black" >
                                        デジタルアート
                                    </div>
                                    <div className="text-xs" >
                                        アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            dataCarousel.map((item: any) => {
                                return <div key={item.id} className="relative">
                                    <img className="w-[100%] " src={item.img} alt="..." />
                                    <div className="absolute inset-0 flex items-end p-6 ">
                                        <div className="bg-white opacity-75 rounded-2xl p-[10px] box-border">
                                            <div className="text-base font-bold text-black" >
                                                {item.title}
                                            </div>
                                            <div className="text-xs" >
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }



                    </Carousel>
                </div>
            </div>
        </div>
    </div>
}

export default CompoenntWhatIsNFT
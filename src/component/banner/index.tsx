import React, { FC, useEffect } from "react";
import { gsap, Power2, Power4 } from "gsap";
import $ from "jquery";
import banner from "../../assets/banner/banner.png";
import logo from "../../assets/icons/icon_logo.png";
import "./banner.css";

const ComponentBanner: FC = () => {
      useEffect(() => {
    // OPEN TRIGGER
    const openTrigger = $(".menu-trigger");
    const openTriggerTop = openTrigger.find(".menu-trigger-bar.top");
    const openTriggerMiddle = openTrigger.find(".menu-trigger-bar.middle");
    const openTriggerBottom = openTrigger.find(".menu-trigger-bar.bottom");

    // CLOSE TRIGGER
    const closeTrigger = $(".close-trigger");
    const closeTriggerLeft = closeTrigger.find(".close-trigger-bar.left");
    const closeTriggerRight = closeTrigger.find(".close-trigger-bar.right");

    // LOGO
    const logoEl = $(".logo");

    // MENU
    const menu = $(".menu");
    const menuTop = $(".menu-bg.top");
    const menuMiddle = $(".menu-bg.middle");
    const menuBottom = $(".menu-bg.bottom");

    // TIMELINES
    const tlOpen = gsap.timeline({ paused: true });
    const tlClose = gsap.timeline({ paused: true });

    // OPEN ANIMATION
    tlOpen
      .add("preOpen")
      .to(
        logoEl,
        {
          duration: 0.4,
          scale: 0.8,
          opacity: 0,
          ease: Power2.easeOut,
        },
        "preOpen"
      )
      .to(
        openTriggerTop,
        {
          duration: 0.4,
          x: "+=80px",
          y: "-=80px",
          delay: 0.1,
          ease: Power4.easeIn,
          onComplete: () => closeTrigger.css("z-index", "25"),
        },
        "preOpen"
      )
      .to(
        openTriggerMiddle,
        {
          duration: 0.4,
          x: "+=80px",
          y: "-=80px",
          ease: Power4.easeIn,
          onComplete: () => openTrigger.css("visibility", "hidden"),
        },
        "preOpen"
      )
      .to(
        openTriggerBottom,
        {
          duration: 0.4,
          x: "+=80px",
          y: "-=80px",
          delay: 0.2,
          ease: Power4.easeIn,
        },
        "preOpen"
      )
      .add("open", "-=0.4")
      .to(
        menuTop,
        {
          duration: 0.8,
          y: "13%",
          ease: Power4.easeInOut,
        },
        "open"
      )
      .to(
        menuMiddle,
        {
          duration: 0.8,
          scaleY: 1,
          ease: Power4.easeInOut,
        },
        "open"
      )
      .to(
        menuBottom,
        {
          duration: 0.8,
          y: "-114%",
          ease: Power4.easeInOut,
        },
        "open"
      )
      .fromTo(
        menu,
        {
          y: 30,
          opacity: 0,
          visibility: "hidden",
        },
        {
          duration: 0.6,
          y: 0,
          opacity: 1,
          visibility: "visible",
          ease: Power4.easeOut,
        },
        "-=0.2"
      )
      .add("preClose", "-=0.8")
      .to(
        closeTriggerLeft,
        {
          duration: 0.8,
          x: "-=102px",
          y: "+=102px",
          ease: Power4.easeOut,
        },
        "preClose"
      )
      .to(
        closeTriggerRight,
        {
          duration: 0.8,
          x: "+=100px",
          y: "+=100px",
          delay: 0.2,
          ease: Power4.easeOut,
        },
        "preClose"
      );

    // CLOSE ANIMATION
    tlClose
      .add("close")
      .to(
        [menuTop, menuMiddle, menuBottom],
        {
          duration: 0.2,
          backgroundColor: "#6295ca",
          ease: Power4.easeInOut,
          onStart: () => {
            logoEl.css("z-index", "26");
            closeTrigger.css("z-index", "5");
            openTrigger.css("visibility", "visible");
          },
        },
        "close"
      )
      .to(
        menu,
        {
          duration: 0.6,
          y: 20,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: () => menu.css("visibility", "hidden"),
        },
        "close"
      )
      .to(
        logoEl,
        {
          duration: 0.8,
          scale: 1,
          opacity: 1,
          ease: Power4.easeInOut,
        },
        "close+=0.2"
      )
      .to(
        menuTop,
        {
          duration: 0.8,
          y: "-113%",
          ease: Power4.easeInOut,
        },
        "close+=0.2"
      )
      .to(
        menuMiddle,
        {
          duration: 0.8,
          scaleY: 0,
          ease: Power4.easeInOut,
        },
        "close+=0.2"
      )
      .to(
        menuBottom,
        {
          duration: 0.8,
          y: "23%",
          ease: Power4.easeInOut,
          onComplete: () => {
            menuTop.css("background-color", "#ffffff");
            menuMiddle.css("background-color", "#ffffff");
            menuBottom.css("background-color", "#ffffff");
          },
        },
        "close+=0.2"
      )
      .to(
        [closeTriggerLeft, closeTriggerRight],
        {
          duration: 0.2,
          x: (i) => (i === 0 ? "+=100px" : "-=100px"),
          y: "-=100px",
          ease: Power4.easeIn,
        },
        "close"
      )
      .to(
        [openTriggerTop, openTriggerMiddle, openTriggerBottom],
        {
          duration: 1,
          x: "-=80px",
          y: "+=80px",
          ease: Power4.easeOut,
          stagger: 0.1,
        },
        "close"
      );

    // EVENTS
    openTrigger.on("click", () => {
      if (tlOpen.progress() < 1) tlOpen.play();
      else tlOpen.restart();
    });

    closeTrigger.on("click", () => {
      if (tlClose.progress() < 1) tlClose.play();
      else tlClose.restart();
    });

    // Cleanup event listeners khi unmount
    return () => {
      openTrigger.off("click");
      closeTrigger.off("click");
    };
  }, []);

    return (
        <div className="relative">
            <img src={banner} alt="banner" />
            <div className="absolute top-0 left-0  w-full">
                <div className="flex  justify-between p-4 w-full">
                    <div>
                        <img width={200} src={logo} alt="logo" />
                    </div>
                    <div className=" w-[23%] ">
                        <div className="container">

                            <div className="flex justify-end">
                                <span style={{marginRight:"75px"}} className="text-lg font-semibold block">Menu</span>
                                <div>
                                <span className="menu-trigger">
                                
                                <i className="menu-trigger-bar top" />
                                <i className="menu-trigger-bar middle" />
                                <i className="menu-trigger-bar bottom" />
                            </span>
                            <span className="close-trigger">
                                <i className="close-trigger-bar left" />
                                <i className="close-trigger-bar right" />
                            </span>
                            </div>
                            </div>

                            <div className="inner-container">
                                <i className="menu-bg top" />
                                <i className="menu-bg middle" />
                                <i className="menu-bg bottom" />
                                <div className="menu-container">
                                    <ul className="menu">
                                        <li><a href="#">Login</a></li>
                                        <li><a href="#">Create account</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ComponentBanner;

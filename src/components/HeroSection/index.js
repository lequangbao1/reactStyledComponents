import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((hover) => !hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <HeroH1>Virtual Banking Made Ease</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              primary={true}
              dark={true}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="signup"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

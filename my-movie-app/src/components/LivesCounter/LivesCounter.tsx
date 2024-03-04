import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

function LivesCounter({lives}: {lives: number}) {

    const [isBig, setIsBig] = useState(false);

    const fadeIn = useSpring({ fontSize: isBig ? '50px': '14px'})

    useEffect(() => {
        if (lives < 3) {
            setIsBig(true);
        }
        setTimeout(() => {
            setIsBig(false);
          }, 1000);
      }, [lives]);

    return (
        <section>
        <animated.div style={fadeIn}>
            <span>Lives: {lives}</span>
        </animated.div>
    </section>
    )
}

export default LivesCounter;
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";


function PointsCounter({points} : {points: number}) {
    const [isBig, setIsBig] = useState(false);

    const fadeIn = useSpring({ fontSize: isBig ? '50px': '14px'})

    useEffect(() => {
        if (points > 0) {
            setIsBig(true);
        }
        setTimeout(() => {
            setIsBig(false);
          }, 1000);
      }, [points]);

    return (
        <section>
            <animated.div style={fadeIn}>
                <span>Points: {points}</span>
            </animated.div>
        </section>
    )
}

export default PointsCounter;
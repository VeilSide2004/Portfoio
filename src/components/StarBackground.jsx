import { useEffect, useState } from "react";



const StarBackground = () => {

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars()
        generateMeteors()
    }, [])

    const generateStars = () => {
        const numberOfStarts = Math.floor(window.innerWidth * window.innerHeight / 10000)

        const newStars = []

        for (let i = 0; i < numberOfStarts; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,

            })
        }

        setStars(newStars)
    }

     const generateMeteors = () => {
        const numberOfMeteors = 5;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 20,
                y: Math.random() * 100,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };
    
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    height: star.size + "px",
                    width: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))}

            
            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        position: "absolute",
                        height: meteor.size + "px",
                        width: meteor.size * 20 + "px", // Long streak
                        backgroundColor: "white",
                        borderRadius: "9999px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        opacity: 0.8,
                        animationDelay: `-${meteor.delay}s`,  // 👈 negative delay
                        animationDuration: meteor.animationDuration + "s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear",
                    }}
                />
            ))}

        </div>
    );
};

export default StarBackground;

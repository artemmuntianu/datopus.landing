"use client";

const shapes = [
    // Левая сторона
    // Большой круг с градиентом и обрезкой
    {
        className: "absolute left-[5%] top-[10%] w-24 h-24 rounded-full [background:linear-gradient(135deg,#1E88E5_50%,#42A5F5_50%)] [clip-path:polygon(0_0,100%_0,100%_75%,75%_100%,0_100%)] opacity-20 animate-[float_6s_ease-in-out_infinite]"
    },

    // Правая сторона
    // Квадрат с двумя цветами
    {
        className: "absolute right-[8%] top-[80%] w-16 h-16 rounded-lg rotate-45 [background:linear-gradient(45deg,#42A5F5_50%,#90CAF9_50%)] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"
    },
];

export function AnimatedMotifs() {
    return (
        <>
            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        transform: rotate(45deg) scale(1);
                        opacity: 0.2;
                    }
                    50% {
                        transform: rotate(225deg) scale(1.1);
                        opacity: 0.3;
                    }
                }
            `}</style>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {shapes.map((shape, index) => (
                    <div
                        key={index}
                        className={shape.className}
                    />
                ))}
            </div>
        </>
    );
} 
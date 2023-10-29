export const slideUp = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 50,
            staggerChildren: 0.2,
            delayChildren : 0.1,
        },

    },
};
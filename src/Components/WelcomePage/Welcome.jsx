import "./Welcome.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Welcome({ onComplete }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (step < 2) {
            const timer = setTimeout(() => {
                setStep(prevStep => prevStep + 1);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => {
                onComplete(); // Notify parent (App) that animation is done
            }, 1500);
        }
    }, [step, onComplete]);

    return (
        <div className="container">
            {step === 0 && (
                <motion.h1
                    className="text"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Welcome
                </motion.h1>
            )}
            {step === 1 && (
                <motion.h1
                    className="text"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    to
                </motion.h1>
            )}
            {step === 2 && (
                <motion.h1
                    className="text"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    VasuX.ai
                </motion.h1>
            )}
        </div>
    );
}

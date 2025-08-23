import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const funFacts = [
    "People born in your month are known for being super creative! 🎨",
    "Your birth month is shared with some of the greatest minds! 🧠",
    "Did you know? People born in your month are usually great friends! 🤝",
    "You're likely to have a unique perspective on life—thanks to your birth month! 🌟",
    "Many athletes are born this month. Are you secretly a champ? 🏅"
];

const AgeCalculator = () => {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);
    const [funFact, setFunFact] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    const calculateAge = () => {
        if (!dob) return;
        const birthDate = new Date(dob);
        const today = new Date();

        if (birthDate > today) {
            setAge(null);
            setFunFact("Future date? You're not born yet! 😅");
            return;
        }

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({ years, months, days });

        const daysAlive = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
        const randomFact = funFacts[birthDate.getMonth() % funFacts.length];

        setFunFact(`You've been alive for ${daysAlive.toLocaleString()} days! ✨ ${randomFact}`);
    };

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 transition-all duration-500 ease-in-out bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute z-10 top-4 right-4">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 text-xl bg-gray-200 rounded-full dark:bg-gray-700 ${darkMode ? "text-white" : "text-black"}`}>
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>

            <div className="w-full max-w-xl p-4 text-gray-800 shadow-2xl backdrop-blur-md bg-white/30 dark:bg-gray-900/80 border-white/10 dark:text-gray-100 rounded-2xl">
                <h1 className="mb-6 text-2xl font-extrabold tracking-tight text-center text-purple-600 transition-all duration-500 ease-in-out sm:text-4xl dark:text-purple-400 drop-shadow-md">
                    Age Calculator
                </h1>

                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full p-3 mb-4 text-lg bg-gray-100 border-none rounded-lg outline-none dark:bg-gray-700 focus:ring-2 focus:ring-purple-400" />

                <button onClick={calculateAge} className="w-full py-3 text-lg text-white transition-all duration-300 bg-purple-600 rounded-lg hover:bg-purple-700">
                    Calculate Age
                </button>

                {age &&
                    <div className="grid grid-cols-1 gap-4 mt-6 text-center transition-all duration-700 ease-in-out translate-y-4 opacity-0 sm:grid-cols-3 animate-fadeInDown">
                        <div className="p-4 bg-purple-100 shadow-md dark:bg-purple-800 rounded-xl">
                            <p className="text-2xl font-semibold">
                                {age.years}
                            </p>

                            <p className="text-sm">
                                Years
                            </p>
                        </div>

                        <div className="p-4 bg-purple-100 shadow-md dark:bg-purple-800 rounded-xl">
                            <p className="text-2xl font-semibold">
                                {age.months}
                            </p>

                            <p className="text-sm">
                                Months
                            </p>
                        </div>
                        <div className="p-4 bg-purple-100 shadow-md dark:bg-purple-800 rounded-xl">
                            <p className="text-2xl font-semibold">
                                {age.days}
                            </p>

                            <p className="text-sm">
                                Days
                            </p>
                        </div>
                    </div>
                }

                {funFact &&
                    <div className="mt-6 text-lg text-center animate-fadeInDown">
                        💡 {funFact}
                    </div>
                }

                {age &&
                    <button onClick={() => navigator.clipboard.writeText(`${age.years} Years, ${age.months} Months, ${age.days} Days`)} className="mt-4 text-sm text-purple-600 dark:text-purple-300 hover:underline">
                        📋 Copy My Age
                    </button>
                }
            </div>
        </div>
    )
};

export default AgeCalculator;

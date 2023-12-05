import React, { useState } from "react";

const useGetTimePassed = (date: Date) => {
    const startTime = new Date(date);
    const [timePassed, setTimePassed] = useState("Just now");
    const updateTimePassed = () => {
        const currentTime = new Date();
        // @ts-ignore
        const timeDiff = currentTime - startTime;

        if (timeDiff < 60000) {
            setTimePassed("Just now");
        } else if (timeDiff < 3600000) {
            setTimePassed(Math.floor(timeDiff / 60000) + "m ago");
        } else if (timeDiff < 86400000) {
            setTimePassed(Math.floor(timeDiff / 3600000) + "h ago");
        } else {
            const days = Math.floor(timeDiff / 86400000);
            if (days === 1) {
                setTimePassed("1 day ago");
            } else if (days <= 30) {
                setTimePassed(days + " days ago");
            } else if (days <= 30 * 11) {
                const PassedMonth = currentTime.getMonth() - startTime.getMonth();
                setTimePassed(
                    PassedMonth + (PassedMonth > 1 ? " months ago" : " month ago"),
                );
            } else {
                setTimePassed(startTime.toLocaleDateString());
            }
        }
    };

    React.useEffect(() => {
        updateTimePassed();
        const interval = setInterval(updateTimePassed, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [startTime.getTime()]);

    return timePassed;
};

export default useGetTimePassed;

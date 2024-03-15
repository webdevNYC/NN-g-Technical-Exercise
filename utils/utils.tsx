export function formatClassSchedule(dates) {
  if (dates.length === 1) {
    // Single-day class
    const [start, end] = dates[0];
    const startDate = new Date(start * 1000);
    const endDate = new Date(end * 1000);
    const weekday = startDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const monthDay = startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    const startTime = startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const endTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return (
      <>
        <div className='font-bold'>
          {weekday}, {monthDay}
        </div>
        <div className='font-normal leading-tight'>
          {startTime} to {endTime}
        </div>
      </>
    );
  } else {
    // Multi-day class
    const start = new Date(dates[0][0] * 1000);
    const end = new Date(dates[dates.length - 1][1] * 1000);
    const weekdayStart = start.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const weekdayEnd = end.toLocaleDateString("en-US", { weekday: "long" });
    const monthStart = start.toLocaleDateString("en-US", { month: "long" });
    const monthEnd = end.toLocaleDateString("en-US", { month: "long" });
    const dayStart = start.getDate();
    const dayEnd = end.getDate();
    const startTime = start.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const endTime = end.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const weekdayRange =
      dates.length === 2
        ? `${weekdayStart} & ${weekdayEnd}`
        : `${weekdayStart} - ${weekdayEnd}`;
    const monthDayRange =
      monthStart === monthEnd
        ? `${monthStart} ${dayStart} & ${dayEnd}`
        : `${monthStart} ${dayStart} - ${monthEnd} ${dayEnd}`;
    return (
      <>
        <div className='font-bold'>
          <div>{weekdayRange}</div>
          <div>{monthDayRange}</div>
        </div>
        <div className='font-normal'>
          {startTime} to {endTime}
        </div>
      </>
    );
  }
}

export function formatPricingDate(timestamp) {
  const date = new Date(timestamp * 1000); // Assuming the timestamp is in seconds. Multiply by 1000 for milliseconds.
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}
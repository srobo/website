function localise_times(site_timezone) {
  let time_options = {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    dayPeriod: 'short',
    timeZoneName: 'short',
  };

  let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...time_options
  };
  const date_formatter_with_minutes = Intl.DateTimeFormat(undefined, options);
  delete options.minute;
  const date_formatter_without_minutes = Intl.DateTimeFormat(undefined, options);

  const time_formatter_with_minutes = Intl.DateTimeFormat(undefined, time_options);
  delete time_options.minute;
  const time_formatter_without_minutes = Intl.DateTimeFormat(undefined, time_options);

  if (date_formatter_with_minutes.resolvedOptions().timeZone == site_timezone) {
    return;
  }

  document.querySelectorAll("time.time-span").forEach((elem) => {
    const datetime = elem.attributes.datetime.value;
    if (!datetime) {
      return;
    }

    const time_only = elem.hasAttribute('data-time-only');

    const date = new Date(datetime);
    const formatter =
      date.getMinutes() > 0
        ? time_only ? time_formatter_with_minutes : date_formatter_with_minutes
        : time_only ? time_formatter_without_minutes : date_formatter_without_minutes;

    let parts = formatter.formatToParts(date).map(({ type, value }) => {
      if (type == 'timeZoneName') {
        value = '<small class="muted">' + value + "</small>";
      }
      return { type, value };
    });

    if (navigator.language.startsWith('en-')) {
      // For english speaking visitors where the local format is broadly the
      // same as what our event pages show, attempt to make it exactly the same.
      parts = parts.map(({ type, value }, index) => {
        if (type == 'literal') {
          if (parts[index + 1].type == 'hour' && value == ", ") {
            value = " at ";
          }
          if (parts[index + 1].type == 'dayPeriod' && value == " ") {
            value = "";
          }
        }
        return { type, value };
      });
    }

    elem.innerHTML = parts.map(({ value }) => value).join("");
  });
}

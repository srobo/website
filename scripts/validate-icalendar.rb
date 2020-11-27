#!/usr/bin/env ruby

require 'icalendar'

cal_file = File.open("_site/events.ics")

cals = Icalendar::Calendar.parse(cal_file)
for cal in cals
  for event in cal.events
    puts "summary: #{event.summary}"
    puts "start date-time: #{event.dtstart}"
    puts ""
  end
end

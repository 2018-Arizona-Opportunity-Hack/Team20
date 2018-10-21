# Volunteer Shepherd

Volunteer Shepherd is a tool to help manage and schedule volunteers for events. Getting the right amount of people for your event can be hard; on the one hand, you really don't want to underbook, or else you and your volunteers will be scrambling to get things done. On the other, overbooking an event can cause issues as well; telling volunteers that they aren't needed sends the wrong message and deters them from volunteering in the future, but might be necessary. There may be no perfect solution; people are unpredictable and often don't show up when they say they will, or show up without notice.

## Intelligent booking

Volunteer Shepherd attempts to address this problem by using historical user data to factor in the likelihood that volunteers will show up. We use SMS confirmations to make sure that users are still available the week before the event. This allows us to build a history of an individual volunteer and get a better idea of how often they will do what they say they are going to do. We then book to fill the desired number of attendees factoring how consistent that volunteer has been in the past. As the date of the event approaches, if enough people still haven't signed up, we will pull from the history of previous users and send additional messages to try and fill the event. 

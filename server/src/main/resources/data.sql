INSERT INTO organization (address, name, phone) VALUES
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312');



INSERT INTO users (name, phone, organization_id) VALUES
  ('James McGill', '14802430207', 1),
  ('Chuck McGill', '602-123-1521', 1);

INSERT INTO event (date, desired_attendees, title, organization_id) VALUES
  ('2018-10-29T09:22:12', 20, 'Serving Dinner', 1),
  ('2018-10-25T09:22:12', 20, 'Other Event in 3 Days', 1),
  ('2018-10-23T09:22:12', 3, 'Serving Dinner', 1),
  ('2018-10-11T09:22:12', 20, 'Serving Dinner', 1);


INSERT INTO event_user (event_id, user_id, attend) VALUES
  (3, 1, true),
  (2, 1, false),
  (1, 1, null),
  (3, 2, false);

INSERT INTO communication (date, method, response, event_user_id) VALUES
  ('2018-10-11T09:22:12', 'SMS', true, 1),
  ('2018-10-11T09:22:12', 'SMS', true, 2),
  ('2018-10-11T09:22:12', 'SMS', true, 3),
  ('2018-10-11T09:22:12', 'EMAIL', false, 2);



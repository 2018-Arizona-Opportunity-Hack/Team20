INSERT INTO organization (address, name, phone) VALUES
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312'),
  ('124 n. random st', 'Paz de Cristo', '123-123-1312');

INSERT INTO users (name, phone, organization_id) VALUES
  ('James McGill', '14802430207', 1),
  ('Chuck McGill', '16021231521', 1),
  ('John Smith', '18007654352', 1),
  ('Scrooge McDuck', '14258975643', 1);

INSERT INTO event (id, date, desired_attendees, title, organization_id) VALUES
  (1, '2018-11-29T09:22:12', 20, 'Serving Dinner', 1),
  (2, '2018-11-25T09:22:12', 20, 'Other Event', 1),
  (3, '2018-11-23T09:22:12', 20, 'Serving Dinner', 1),

-- past events
  (4, '2018-10-11T09:22:12', 20, 'Serving Dinner', 1),
  (5, '2018-09-11T09:22:12', 20, 'Serving Dinner', 1),
  (6, '2018-08-11T09:22:12', 20, 'Serving Dinner', 1),
  (7, '2018-07-11T09:22:12', 20, 'Serving Dinner', 1);

INSERT INTO event_user (event_id, user_id, attend) VALUES
  (4, 1, true),
  (5, 1, true),
  (6, 1, true),
  (7, 1, true),

  (4, 2, true),
  (5, 2, false),
  (6, 2, true),
  (7, 2, true),

  (4, 3, true),
  (5, 3, false),
  (6, 3, false),
  (7, 3, true),

  (4, 4, false),
  (5, 4, false),
  (6, 4, false),
  (7, 4, true),


  (3, 1, null),
  (3, 2, null),
  (3, 3, null),
  (3, 4, null);

-- INSERT INTO communication (date, method, response, event_user_id) VALUES
--   ('2018-10-11T09:22:12', 'SMS', true, 1),
--   ('2018-10-11T09:22:12', 'SMS', true, 2),
--   ('2018-10-11T09:22:12', 'SMS', true, 3),
--   ('2018-10-11T09:22:12', 'EMAIL', false, 2);



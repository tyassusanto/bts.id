CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE checklist_group (
  checklist_group_id VARCHAR(255) PRIMARY KEY NOT NULL,
  checklist_group_name VARCHAR(255) NOT NULL,
  description_group VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE checklist_item (
  checklist_item_id VARCHAR(255) PRIMARY KEY NOT NULL,
  group_id VARCHAR(255) NOT NULL,
  checklist_item_name VARCHAR(255) NOT NULL,
  description_item VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP,
  FOREIGN KEY (group_id) REFERENCES checklist_group(checklist_group_id)
);

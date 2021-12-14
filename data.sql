DROP DATABASE IF EXISTS productsdb;

CREATE DATABASE productsdb;

\c productsdb;

DROP TABLE IF EXISTS products;

CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
    -- price number NOT NULL
);

INSERT INTO products
    (name, type)
VALUES
    ('Charcoal', 'Soap');

INSERT INTO products
    (name, type)
VALUES
    ('Seamoss', 'Soap');

INSERT INTO products
    (name, type)
VALUES
    ('Manly Man', 'Lotion');

INSERT INTO products
    (name, type)
VALUES
    ('Mint Nite', 'Lotion');

INSERT INTO products
    (name, type)
VALUES
    ('Sleepless Nights', 'Lotion');

INSERT INTO products
    (name, type)
VALUES
    ('Spicy', 'Lotion');

INSERT INTO products
    (name, type)
VALUES
    ('Tonight''s The Night', 'Lotion');

INSERT INTO products
    (name, type)
VALUES
    ('Warrior''s Creed', 'Lotion');
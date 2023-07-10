CREATE TABLE IF NOT EXISTS PRODUCTS (
  product_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  image_url VARCHAR(255),
  description VARCHAR(2000),
  category VARCHAR(50),
  quantity INT NOT NULL,
  price FLOAT NOT NULL,
  date_created datetime NOT NULL,
  date_modified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (product_id)
);

INSERT INTO
  PRODUCTS (
    name,
    image_url,
    description,
    category,
    quantity,
    price,
    date_created
  )
SELECT
  'Example Product',
  'example.jpg',
  'Example description',
  'Example category',
  10,
  19.99,
  NOW()
FROM
  dual
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      PRODUCTS
    WHERE
      name = 'Example Product'
  );
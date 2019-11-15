CREATE TABLE profiles (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(100),
	profilePicture TEXT
);
CREATE TABLE profiles_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES profiles(user_id)
);
CREATE TABLE submits (
	post_id SERIAL PRIMARY KEY,
	title VARCHAR(40),
	img_url TEXT,
	content TEXT,
	likes INT,
	user_id INT REFERENCES profiles(user_id)
);
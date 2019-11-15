insert into profiles (username, profilePicture)
values (${username}, ${profilePicture})
returning user_id;
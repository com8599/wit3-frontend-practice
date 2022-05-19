const names = ["Jinho1011", "PzaThief", "yunjeongiya", "skh6075"];

const header = new Headers();
header.append("Accept", "application/vnd.github.v3+json");
header.append(
  "Authorization",
  "token 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"
);

const requestOptions = {
  method: "GET",
  headers: header,
  redirect: "follow",
};

const fetchUser = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}`,
    requestOptions
  );

  if (response.status === 404) {
    return null;
  } else {
    return await response.json();
  }
};

const getUsers = (names) => {
  // names : 사용자 이름 배열
  const usersDataPromise = names.map((name) => {
    console.log(name);
    const data = fetchUser(name);
    return data;
  });

  console.log(usersDataPromise);

  Promise.all(usersDataPromise).then((values) => {
    console.log(values);
  });
};

window.onload = () => getUsers(names);

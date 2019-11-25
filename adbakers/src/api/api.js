const baseUrl = "https://reqres.in/api/";

export const url = {
  usersOnPage: currentPage => `${baseUrl}users?page=${currentPage}`,
  userData: id => `${baseUrl}users/${id}`,
  login: () => `${baseUrl}login`
};

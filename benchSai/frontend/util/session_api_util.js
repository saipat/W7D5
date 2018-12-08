export const signup = user => (
    $.ajax({
      method: 'POST',
      url: 'api/user',
      data: {user}
    })
);

export const login = user => (
  $.ajax({
    method: 'post',
    url: 'api/session',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    method: 'delete',
    url: 'api/session'
  })
);